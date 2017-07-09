SVG.EllipseHead = SVG.invent({
  create: 'ellipse',

  inherit: SVG.Ellipse,

  construct: {
    ellipseHead: function(width, height) {
      return this.put(new SVG.EllipseHead).size(width, height).move(0, 0);
    }
  }
});
