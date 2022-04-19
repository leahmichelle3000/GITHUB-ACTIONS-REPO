const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

var socialPostRoute = require('./routes/socialPostRoute');
var calculatorRoute = require('./routes/calculatorRoute');
var socialRoute = require('./routes/socialMediaRoute');

const bodyParser = require('body-parser');

const express = require('express')

const app = express()
const port = 3001

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/socialMedia', socialPostRoute)

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

app.use('/socialmedia', socialRoute);

app.use('/calculator', calculatorRoute)

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
    console.log(`Documentation located at https://localhost:${port}/api-docs`)
})