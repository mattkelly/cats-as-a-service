'use strict';

const util = require('./util.js');

SVG.RoundedRectBody = SVG.invent({
    create: function(width, height) {
        SVG.G.call(this);

        const bodyRx = util.randInRange(20, width, 5);
        const bodyRy = util.randInRange(20, height, 5);
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
