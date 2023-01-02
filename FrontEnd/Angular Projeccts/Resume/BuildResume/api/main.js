const express = require('express');
const body = require('body-parser');
const _ = require('lodash');
const fs = require('fs');
const jsonParser = body.json()
const cors = require('cors');
const app = express();
app.use(body.json());
app.use(cors());

const PORT = 3700;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

function parseJSON() {
    const data = fs.readFileSync('resume.json');
    console.log(typeof data);
    return JSON.parse(data);
  }

app.post('/create-user', jsonParser, (req, res) => {
    fs.writeFileSync('resume.json', JSON.stringify(req.body));
    res.json({ msg: 'The details added successfully!' });
    return false;
  })

app.get('/get-data', (req, res) => { //get one
    const details = parseJSON();
    res.json(details)
    return false;
})
app.listen(PORT)
