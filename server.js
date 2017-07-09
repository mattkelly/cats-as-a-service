const http = require('http');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVG_PATH = require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const colors = require('./colors.js');

require('./nose.js');
require('./head.js');
require('./whisker.js');

function getCatSvg() {
    const head = draw.defs().ellipseHead(100, 80).fill(colors.lightGray);
  
    const earLeft = draw.defs().polygon([[0,0], [0,40], [40,40]]).fill(colors.darkGray);
    const earRight = draw.defs().polygon([[40,0], [40,40], [0,40]]).fill(colors.darkGray);
    const eye = draw.defs().circle(8, 8).fill(colors.black);

    const body = draw.defs().rect(80, 80).radius(20, 20).fill(colors.darkGray);

    // Put everything in a viewbox
    draw.viewbox(0, 0, 100, 100);

    // Draw the cat
    draw.use(body).move(10, 60);

    draw.use(earLeft).move(0, 0);
    draw.use(earRight).move(60, 0);

    draw.use(head);

    draw.use(eye).move(22, 30);
    draw.use(eye).move(70, 30);

    const whiskers = draw.defs().whiskers(50, 10);
    draw.use(whiskers).move(60,50);
    draw.use(whiskers).flip('x',50).move(60,50);

    draw.triangleNose(50, 50).move(70, 90).fill(colors.pink);

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
