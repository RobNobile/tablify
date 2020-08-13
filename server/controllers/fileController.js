const db = require('../models/fav-songs');
const fileController = {};

// .getFavs from db to send back to client to display songs
fileController.getFavs = (req, res, next) => {
  const queryString = `SELECT * FROM fav_songs`;
  db.query(queryString)
    // no data.json() since it's not json
    .then(data => {
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
  const { song_id, song, artist, tabtypes, url } = req.body;
  db.query(`SELECT * FROM fav_songs WHERE song_id = ${song_id}`)
    .then(data => {
      if (data.rows.length > 0) {
        res.locals.addFavs = data.rows;
        return next(); // if entry is already in db, do not add again
      } 
      // or else, add:
      const queryString = 
      `INSERT INTO fav_songs (song_id, song, artist, tabtypes, url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
      const songDetails = [ song_id, song, artist, tabtypes, url ];
      db.query(queryString, songDetails)
        .then(data => {
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
  const { song_id } = req.body;
  db.query(`DELETE FROM fav_songs WHERE song_id = ${song_id}`)
  next();
}

module.exports = fileController;