const triangleNosePathString = '<path id="triangleNose" d="M 4.976 -17.287 Q 14.013 -31.489 23.05 -17.287 L 25.014 -14.202 Q 34.051 0 15.977 0 L 12.049 0 Q -6.025 0 3.012 -14.202 Z" transform="matrix(1, 0, 0, -1, 0, 0)"/>';

SVG.TriangleNose = SVG.invent({
  // Define the type of element that should be created
  create: 'triangleNose',

  // Specify from which existing class this shape inherits
  inherit: SVG.Shape,

  // Add method to parent elements
  construct: {
    // Create a rounded element
    triangleNose: function(width, height) {
      this.defs().svg(triangleNosePathString);
      return this.use('triangleNose').scale(0.5, 0.5);
    }
  }
});
