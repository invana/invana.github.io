---
layout: classroom
title:  "APIs with NodeJS!"
date:   2017-12-31 01:10:52 +0530
categories: learn
tag: Web Development
software: NodeJS
curated_by: [rrmerugu]
logo: http://flask.pocoo.org/static/logo/flask.png
toc: true
---

## Code
```javascript

'use strict';


const express = require('express');
const express = require('express');
var bodyParser = require('body-parser');

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

var router = express.Router();


expressApp.get('/', (req, res) => {
  res.send('Hello world\n');
});

router.get('/botA', function(req, res) {
    console.log("received a get request");
    res.json({ message: 'hooray! welcome to our api!' });
});
router.post('/botA', function(req, res) {
    console.log("received a post request");  
    res.json({ message: 'hooray! welcome to our api!' });
});

expressApp.use('/bots', router);
expressApp.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
```
