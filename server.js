const http = require('http');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVG_PATH = require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const colors = require('./colors.js');

require('./cat.js');

function getCatSvg() {
  // Put everything in a viewbox
  draw.viewbox(0, 0, 100, 100);

  // Draw the cat
  draw.cat();

  // Generate the full SVG
  catSvg = draw.svg();

  // Clear the canvas for next time
  draw.clear();

  return catSvg;
}

const requestHandler = (request, response) => {
  console.log(request.url);

  response.writeHead(200, {'Content-type': 'image/svg+xml'});
  response.end(getCatSvg());
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened!', err);
  }

  console.log('Server is listening on port ' + port);
});
