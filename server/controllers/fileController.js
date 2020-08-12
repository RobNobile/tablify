const db = require('../models/fav-songs');
const fileController = {};

// .getFavs from db to send back to client to display songs
fileController.getFavs = (req, res, next) => {
  const queryString = `SELECT * FROM favs`;
  db.query(queryString)
    // no data.json() since it's not json
    .then(data => {
      console.log(data.rows);
      res.locals.favs = data.rows;
      next();
    })
    .catch(err => {
      next({
        log: `fileController.getFavs: ERROR: ${err}`,
        message: { err: 'fileController.getFavs: ERROR: Check server logs for details' },
      });
    });
}

// .addFavs to db
fileController.addFavs = (req, res, next) => {
  const { id, song_name, artist_name } = req.body;
  db.query(`SELECT * FROM favs WHERE id = ${id}`)
    .then(data => {
      if (data.rows.length > 0) {
        res.locals.addFavs = data.rows;
        return next(); // if entry is already in db, do not add again
      } 
      // or else, add:
      const queryString = 
      `INSERT INTO favs (id, song_name, artist_name)
      VALUES ($1, $2, $3)
      RETURNING *`;
      const songDetails = [ id, song_name, artist_name ];
      db.query(queryString, songDetails)
        .then(data => {
          // console.log(data);
          res.locals.addFavs = data.rows;
          next();
        })
        .catch(err => {
          next({
            log: `fileController.addFavs: ERROR: ${err}`,
            message: { err: 'fileController.addFavs: ERROR: Check server logs for details' },
          });
        });
    })
    .catch(err => {
      next({
        log: `fileController.addFavs: ERROR: ${err}`,
        message: { err: 'fileController.addFavs: ERROR: Check server logs for details' },
      });
    });
}

// .deleteFavs to remove from db
fileController.deleteFavs = (req, res, next) => {
  const { id } = req.body;
  db.query(`DELETE FROM favs WHERE id = ${id}`)
  next();
}

module.exports = fileController;