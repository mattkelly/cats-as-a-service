SVG.EllipseHead = SVG.invent({
  // Define the type of element that should be created
  create: 'ellipse',

  // Specify from which existing class this shape inherits
  inherit: SVG.Ellipse,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    ellipseHead: function(width, height) {
      return this.put(new SVG.EllipseHead).size(width, height).move(0, 0);
    }
  }
});
