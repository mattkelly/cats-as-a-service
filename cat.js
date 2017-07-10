const colors = require('./colors.js');

require('./body.js');
require('./face.js');
require('./head.js');

SVG.Cat = SVG.invent({
  create: function() {
    SVG.G.call(this);

    const earLeft = this.symbol().polygon([[0,0], [0,50], [50,50]]).fill(colors.pink)
      .stroke({color: colors.darkGray, width: 2, linecap: 'round'});
    const earRight = this.symbol().polygon([[50,0], [50,50], [0,50]]).fill(colors.pink)
      .stroke({color: colors.darkGray, width: 2, linecap: 'round'});

    const head = this.symbol().ellipseHead(100, 80).fill(colors.lightGray);

    const body = this.symbol().roundedRectBody(80, 80).fill(colors.darkGray);

    this.use(body).move(10, 70);
    this.use(earLeft).move(2, 2);
    this.use(earRight).move(48, 2);
    this.use(head).move(0, 10);

    this.face(100, 50).move(20, 40);
  },

  inherit: SVG.G,

  construct: {
    cat: function() {
      return this.put(new SVG.Cat);
    }
  }
});
