const colors = require('./colors.js');

require('./head.js');
require('./face.js');

SVG.Cat = SVG.invent({
  create: function() {
    SVG.G.call(this);

    const earLeft = this.symbol().polygon([[0,0], [0,50], [50,50]]).fill(colors.darkGray);
    const earRight = this.symbol().polygon([[50,0], [50,50], [0,50]]).fill(colors.darkGray);
    const head = this.symbol().ellipseHead(100, 80).fill(colors.lightGray);
    const body = this.symbol().rect(80, 80).radius(20, 20).fill(colors.darkGray);

    this.use(body).move(10, 70);
    this.use(earLeft).move(0, 0);
    this.use(earRight).move(50, 0);
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
