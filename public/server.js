const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
//point to the database configuration

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/dist/public')));

require('./server/config/database.js');
app.use(require('./server/routes'));

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./dist/public/index.html'));
});

app.listen(port, () => console.log(`express server listening on port ${port}`));
