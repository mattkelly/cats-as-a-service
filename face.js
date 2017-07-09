const colors = require('./colors.js');

require('./nose.js');
require('./whiskers.js');

SVG.Face = SVG.invent({
  // Define the type of element that should be created
  create: function() {
    SVG.G.call(this);

    this.circle(8, 8).fill(colors.black).move(0, 0);
    this.circle(8, 8).fill(colors.black).move(50, 0);

    this.triangleNose().move(40, 30).fill(colors.pink);

    this.whiskersRight(50, 15).move(40, 15);
    this.whiskersLeft(50, 15).move(20, 15);
  },

  // Specify from which existing class this shape inherits
  inherit: SVG.G,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    face: function() {

      return this.put(new SVG.Face);
    }
  }
});

SVG.extend(SVG.Face, {
  width: function() {
    return 120;
  },
  height: function() {
    return 50;
  },
});
