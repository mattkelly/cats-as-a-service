const colors = require('./colors.js');

SVG.WhiskersLeft = SVG.invent({
  // Define the type of element that should be created
  create: function(width, height) {
    SVG.G.call(this);

    const whiskerStraight = this.line(0, height/2, -width, height/2);
    const whiskerAngleUp = this.line(0, height/2 + 1, -width, height);
    const whiskerAngleDown = this.line(0, height/2 - 1, -width, 0);

    this.add(whiskerStraight);
    this.add(whiskerAngleUp);
    this.add(whiskerAngleDown);
    this.stroke({color: colors.black, width: 0.5});
  },

  // Specify from which existing class this shape inherits
  inherit: SVG.G,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    whiskersLeft: function(width, height) {
      return this.put(new SVG.WhiskersLeft(width, height));
    }
  }
});

SVG.WhiskersRight = SVG.invent({
  // Define the type of element that should be created
  create: function(width, height) {
    SVG.G.call(this);

    const whiskerStraight = this.line(0, height/2, width, height/2);
    const whiskerAngleUp = this.line(0, height/2 + 1, width, height);
    const whiskerAngleDown = this.line(0, height/2 - 1, width, 0);

    this.add(whiskerStraight);
    this.add(whiskerAngleUp);
    this.add(whiskerAngleDown);
    this.stroke({color: colors.black, width: 0.5});
  },

  // Specify from which existing class this shape inherits
  inherit: SVG.G,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    whiskersRight: function(width, height) {
      return this.put(new SVG.WhiskersRight(width, height));
    }
  }
});
