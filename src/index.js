const express = require('express');
const fileUpload = require('express-fileupload');
const pdf = require('pdf-parse');
const fs = require('fs');

const app = express();

app.use("/", express.static("dist"));
app.use(fileUpload());

app.post('/upload', function(req, res){
    let file;
    let path;
});