const triangleNosePathString = '<path id="triangleNose" d="M 11 23 Q 20 37 29 23 L 31 20 Q 40 6 21 6 L 18 6 Q 0 6 9 20 Z"/>';

SVG.TriangleNose = SVG.invent({
  // Define the type of element that should be created
  create: function() {
    SVG.G.call(this);
    this.svg(triangleNosePathString).scale(0.5, 0.4).move(0,1);
  },

  // Specify from which existing class this shape inherits
  inherit: SVG.G,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    triangleNose: function(width, height) {
      return this.put(new SVG.TriangleNose);
    }
  }
});
