'use strict';

const express = require('express');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const svg2png = require('svg2png');

require('./cat.js');

function getCatSvg() {
    // Put everything in a viewbox
    draw.viewbox(0, 0, 100, 120);

    // Create a background
    //draw.rect(1000, 1000).move(-500, -500).fill('yellow');

    // Draw the cat
    draw.cat();

    // Generate the full SVG
    let catSvg = draw.svg();

    // Clear the canvas for next time
    draw.clear();

    return catSvg;
}

async function getCatPng(size) {
    let catSvg = getCatSvg();

    let catPng;

    try {
        catPng = await svg2png(catSvg, {width: size, height: size});
    } catch (ex) {
        console.log(ex);
    }

    return catPng;
}

let app = express();

app.get('/', function(req, res) {
    res.redirect('/svg');
});

app.get('/svg', function(req, res) {
    res.writeHead(200, {'Content-type': 'image/svg+xml'});
    res.end(getCatSvg());
});

app.get('/png', async function(req, res) {
    let size = 500;
    if (req.query.size) {
        size = req.query.size;
    }

    const catPng = await getCatPng(size);
    if (catPng) {
        res.writeHead(200, {'Content-type': 'image/png'});
        res.end(catPng);
    } else {
        res.sendStatus(500);
    }
});

app.listen(port);
