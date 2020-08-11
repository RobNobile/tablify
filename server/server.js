const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

// require routers:

// parse req body:
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`tab-server Listening on port: ${PORT}`);
})

module.exports = app;