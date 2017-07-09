const colors = require('./colors.js');

require('./head.js');
require('./face.js');

SVG.Cat = SVG.invent({
  create: function() {
    SVG.G.call(this);

    const earLeft = this.symbol().polygon([[0,0], [0,50], [50,50]]).fill(colors.pink)
      .stroke({color: colors.darkGray, width: 2, linecap: 'round'});
    const earRight = this.symbol().polygon([[50,0], [50,50], [0,50]]).fill(colors.pink)
      .stroke({color: colors.darkGray, width: 2, linecap: 'round'});

    const head = this.symbol().ellipseHead(100, 80).fill(colors.lightGray);
    const body = this.symbol().rect(80, 80).radius(20, 20).fill(colors.darkGray);

    this.use(body).move(10, 70);
    this.use(earLeft).move(2, 2);
    this.use(earRight).move(48, 2);
    this.use(head).move(0, 10);

    const face = this.face(100, 50).move(20, 40);
    console.log(face.width(), face.height());
  },

  inherit: SVG.G,

  construct: {
    cat: function() {
      return this.put(new SVG.Cat);
    }
  }
});
