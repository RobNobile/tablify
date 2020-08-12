const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Get req to /favs');
  // or send res.locals through .json()
})

router.post('/', (req, res) => {
  // possibly req.body or req.query.song
  res.status(200).send('Post req to /favs');
})

router.delete('/', (req, res) => {
  res.status(200).send('Delete req to /favs');
})

module.exports = router;