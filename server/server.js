const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

// api example for proxy:
const namesList = [
  {name: 'Name1', id: 'a0'},
  {name: 'Name2', id: 'b0'},
  {name: 'Name3', id: 'c0'},
  {name: 'Name4', id: 'd0'},
];

// require routers:

// parse req body:
app.use(express.json());

// proxy example:
app.get('/api/testNames', (req, res) => {
  res.status(200).send(namesList);
});

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`tab-server Listening on port: ${PORT}`);
})

module.exports = app;