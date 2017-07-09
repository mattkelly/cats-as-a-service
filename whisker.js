const colors = require('./colors.js');

SVG.Whiskers = SVG.invent({
  // Define the type of element that should be created
  create: 'whiskers',

  // Specify from which existing class this shape inherits
  inherit: SVG.Shape,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    whiskers: function(width, height) {

      var whiskersGroup = this.group();

      // Whiskers are always black for now.
      const whiskerStraight = this.defs().line(width, 0)
        .stroke({color: colors.black, width: 0.5});
      const whiskerAngleUp = this.defs().line(width, height/2)
        .stroke({color: colors.black, width: 0.5});
      const whiskerAngleDown = this.defs().line(width, -height/2)
        .stroke({color: colors.black, width: 0.5});

      whiskersGroup.add(whiskerStraight);
      whiskersGroup.add(whiskerAngleUp);
      whiskersGroup.add(whiskerAngleDown);

      return this.put(whiskersGroup).move(0,0);
    }
  }
});
