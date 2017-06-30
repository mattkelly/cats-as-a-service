const http = require('http');
const port = 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const doc = window.document;

const draw = SVG(doc.documentElement);

function getCatSvg() {
    draw.circle(100,100).fill('red')
    return draw.svg();
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
