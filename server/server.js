const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

// require routers:
const favsRouter = require('./routes/favs');

// parse req body:
app.use(express.json());


// // api example for proxy:
// const namesList = [
//   {name: 'Name1', id: 'a0'},
//   {name: 'Name2', id: 'b0'},
//   {name: 'Name3', id: 'c0'},
//   {name: 'Name4', id: 'd0'},
// ];
// // proxy example:
// app.get('/api/testNames', (req, res) => {
//   res.status(200).send(namesList);
// });


if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.use('/favs', favsRouter);

// catch-all route handler for req to unknown routes
app.use((req, res) => {
  return res.status(400).send('Page not found. TRY AGAIN!')
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`tab-server Listening on port: ${PORT}`);
});

module.exports = app;