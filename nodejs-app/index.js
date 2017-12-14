"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var router = express.Router();
router.get('/', function (req, res) {
    return res.send('coucou');
});
router.post('/:id', function (req, res) {
    res.set('content-type', 'application/javascript');
    res.send("\n     params: " + request.params.id + ",\n     query: " + request.query.fields + ",\n     body: " + request.body + "\n   ");
});
app.use(router);
app.listen(5000, function () { return console.log('Server start'); });
