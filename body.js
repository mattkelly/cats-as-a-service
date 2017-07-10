const util = require('./util.js');

SVG.RoundedRectBody = SVG.invent({
  create: function(width, height) {
    const bodyRx = util.randInRange(20, bodyRx);
    const bodyRy = util.randInRange(20, bodyRy);
    console.log('bodyRx = ', bodyRx);
    console.log('bodyRy = ', bodyRy);

    this.rect(80, 80).radius(bodyRx, bodyRy);
  },

  inherit: SVG.G,

  construct: {
    roundedRectBody: function(width, height) {
      return this.put(new SVG.RoundedRectBody(width, height));
    }
  }
});

SVG.RectBody = SVG.invent({
  create: 'rect',

  inherit: SVG.Rect,

  construct: {
    rectBody: function(width, height) {
      return this.put(new SVG.RectBody).size(width, height);
    }
  }
});
