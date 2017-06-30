const http = require('http');
const port = 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const doc = window.document;

const draw = SVG(doc.documentElement);

function getCatSvg() {
    const head = draw.defs().ellipse(100, 80, 100).fill('burlywood');
    const eye = draw.defs().circle(5, 5).fill('black');
    const nose = draw.defs().polygon([[0,0], [20,0], [10,10]]).fill('pink');

    draw.use(head);
    draw.use(eye).move(30, 30);
    draw.use(eye).move(70, 30);
    draw.use(nose).move(40, 40);
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
