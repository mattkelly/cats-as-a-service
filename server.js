const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVG_PATH = require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const svg2png = require('svg2png');

const colors = require('./colors.js');
require('./cat.js');

function getCatSvg() {
  // Put everything in a viewbox
  draw.viewbox(0, 0, 100, 120);

  // Draw the cat
  draw.cat();

  // Generate the full SVG
  catSvg = draw.svg();

  // Clear the canvas for next time
  draw.clear();

  return catSvg;
}

function getCatPng() {
  catSvg = getCatSvg();

  // TODO don't use sync
  return svg2png.sync(catSvg, {width: 500, height: 500});
}

var app = express();

app.get('/', function(req, res) {
  res.redirect('/svg');
});

app.get('/svg', function(req, res) {
  console.log('/svg');
  res.writeHead(200, {'Content-type': 'image/svg+xml'});
  res.end(getCatSvg());
});

app.get('/png', function(req, res) {
  console.log('/png');
  res.writeHead(200, {'Content-type': 'image/png'});
  res.end(getCatPng());
});

app.listen(port);
