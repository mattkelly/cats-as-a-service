const colors = require('./colors.js');

require('./nose.js');
require('./whiskers.js');

SVG.Face = SVG.invent({
  create: function(width, height) {
    SVG.G.call(this);

    this._width = width;
    this._height = height;

    const eyeRadius = width/12;
    this.circle(eyeRadius).fill(colors.black).move(0, 0);
    this.circle(eyeRadius).fill(colors.black).move(width/2, 0);

    const noseX = 40; // @TODO don't hardcode
    this.triangleNose().move(noseX, 30).fill(colors.pink);

    this.whiskersRight(width/2, height/3).move(noseX, 15);
    this.whiskersLeft(width/2, height/3).move(noseX/2, 15);
  },

  inherit: SVG.G,

  construct: {
    face: function(width, height) {
      return this.put(new SVG.Face(width, height));
    }
  }
});

SVG.extend(SVG.Face, {
  width: function() {
    return this._width;
  },
  height: function() {
    return this._height;
  },
});
