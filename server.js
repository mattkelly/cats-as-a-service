const http = require('http');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const doc = window.document;

const draw = SVG(doc.documentElement);

function getCatSvg() {
    const head = draw.defs().ellipse(100, 80).fill('burlywood');
    const earLeft = draw.defs().polygon([[0,0], [0,30], [30,30]]).fill('brown');
    const earRight = draw.defs().polygon([[30,0], [30,30], [0,30]]).fill('brown');
    const eye = draw.defs().circle(5, 5).fill('black');
    const nose = draw.defs().polygon([[0,0], [20,0], [10,10]]).fill('pink');

    const whiskerStraight = draw.defs().line(35, 0).stroke('black');
    const whiskerAngleUp = draw.defs().line(35, 5).stroke('black');
    const whiskerAngleDown = draw.defs().line(35, -5).stroke('black');

    draw.use(earLeft).move(2, 0);
    draw.use(earRight).move(68, 0);

    draw.use(head);

    draw.use(eye).move(30, 30);
    draw.use(eye).move(70, 30);

    draw.use(nose).move(40, 40+5);

    draw.use(whiskerStraight).move(5, 45+5);
    draw.use(whiskerAngleUp).move(5, 39+5);
    draw.use(whiskerAngleDown).move(5, 51+5);

    draw.use(whiskerStraight).move(60, 45+5);
    draw.use(whiskerAngleUp).move(60, 46+5);
    draw.use(whiskerAngleDown).move(60, 44+5);

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
