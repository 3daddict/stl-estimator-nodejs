require('dotenv').config();
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Path definitions for express confirguration
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set express to use handlebars templating engine
app.set('view engine', 'hbs');
//set the template folder dir for hbs views
app.set('views', viewsPath);
//set the partials folder for hbs to use
hbs.registerPartials(partialsPath);

//express static route to main dir
app.use(express.static(publicDirPath));

//get request to route handlebars page
app.get('', (req, res) => {
    //res.render page filename and then object data
    res.render('index', {
        title: 'STL Estimator'
    });
});

app.get('/contributors', (req, res) => {
    res.render('contributors', {
        title: 'STL Estimator Contributors'
    });
});

app.get('/style-guide', (req, res) => {
    res.render('style-guide', {
        title: 'STL Estimator Style'
    });
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});