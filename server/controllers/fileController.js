// const = db.require('');
const fileController = {};

// .getFavs from db to send back to client to display songs
fileController.getFavs = (req, res, next) => {
  const queryString = ``;
  db.query(queryString)
    .then(data => {
      console.log(data);
      // res.locals.favs = data.
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
  
}

// .deleteFavs to remove from db
fileController.deleteFavs = (req, res, next) => {
  
}

module.exports = fileController;