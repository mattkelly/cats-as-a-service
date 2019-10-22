'use strict';

require('./face.js');
require('./ear.js');

SVG.EllipseHead = SVG.invent({
    create: function(width, height, colorscheme) {
        SVG.G.call(this);

        this.leftEar(colorscheme)
        this.rightEar(colorscheme)
        this.ellipse(width, height).fill(colorscheme.secondary)
        this.face(width, 50, colorscheme).move(20, height/2 - 10);

    },

    inherit: SVG.G,

    construct: {
        ellipseHead: function(width, height, colorscheme) {
            return this.put(new SVG.EllipseHead(width, height, colorscheme).move(0, 0));
        }
    }
});
