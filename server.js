const http = require('http');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVG_PATH = require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const colors = require('./colors.js');

require('./head.js');
require('./face.js');

function getCatSvg() {
    const earLeft = draw.defs().polygon([[0,0], [0,50], [50,50]]).fill(colors.darkGray);
    const earRight = draw.defs().polygon([[50,0], [50,50], [0,50]]).fill(colors.darkGray);

    const body = draw.defs().rect(80, 80).radius(20, 20).fill(colors.darkGray);

    // Put everything in a viewbox
    draw.viewbox(0, 0, 100, 100);

    // Draw the cat
    draw.use(body).move(10, 70);

    draw.use(earLeft).move(0, 0);
    draw.use(earRight).move(50, 0);

    draw.ellipseHead(100, 80).move(0, 10).fill(colors.lightGray);

    const face = draw.face().move(20, 40);
    console.log(face.width(), face.height());

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
