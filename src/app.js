require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Path definitions for express confirguration
const publicDirPath = path.join(__dirname, '../dist');

//express static route to main dir
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.sendFile(path.resolve(publicDirPath, 'index.html'))
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});