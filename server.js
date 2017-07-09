const http = require('http');
const port = process.env.PORT || 3000;

const window = require('svgdom');
const SVG = require('svg.js')(window);
const SVG_PATH = require('svg.path.js');
const doc = window.document;
const draw = SVG(doc.documentElement);

const noses = require('./nose.js');
const colors = require('./colors.js');

function getCatSvg() {
    const head = draw.defs().ellipse(100, 80).fill(colors.lightGray);
    const earLeft = draw.defs().polygon([[0,0], [0,30], [30,30]]).fill(colors.darkGray);
    const earRight = draw.defs().polygon([[30,0], [30,30], [0,30]]).fill(colors.darkGray);
    const eye = draw.defs().circle(8, 8).fill(colors.black);

    const whiskerStraight = draw.defs().line(50, 0)
      .stroke({color: colors.black, width: 0.5});
    const whiskerAngleUp = draw.defs().line(50, 5)
      .stroke({color: colors.black, width: 0.5});
    const whiskerAngleDown = draw.defs().line(50, -5)
      .stroke({color: colors.black, width: 0.5});

    var whiskersGroup = draw.defs().group();
    whiskersGroup.add(whiskerStraight);
    whiskersGroup.add(whiskerAngleUp);
    whiskersGroup.add(whiskerAngleDown);

    const nose = draw.defs().svg(noses.triangleNosePathString);

    const box = draw.viewbox(0, 0, 100, 100);

    draw.use(earLeft).move(2, 0);
    draw.use(earRight).move(68, 0);

    draw.use(head);

    draw.use(eye).move(22, 30);
    draw.use(eye).move(70, 30);

    const triangleNose = draw.use('triangleNose').scale(0.5, 0.5).move(70, 90).fill(colors.pink);

    draw.use(whiskersGroup).move(60,50);
    draw.use(whiskersGroup).flip('x',50).move(60,50);

    catSvg = draw.svg();

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
