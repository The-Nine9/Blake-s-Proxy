require('newrelic');
const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const compression = require('compression')

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();
app.use(compression(1));
// app.use(morgan('dev'));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/listings/:id/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/', router.api);

app.use('/listings/:id', express.static(PUBLIC_DIR));
module.exports = app;
