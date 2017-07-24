'use strict';

const colors = require('./colors.js');

const normalMouthPathString =
    '<line style="stroke: rgb(0, 0, 0); stroke-width: 6;" x1="230" y1="50" x2="230" y2="160"/>' +
      '<path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 6; stroke-linecap: round" d="M 230 155 C 230 238 335 272 335 155"/>' +
      '<path style="stroke: rgb(0, 0, 0); fill: none; stroke-width: 6; stroke-linecap: round" d="M 124 230 C 122 148 230 114 230 231" transform="matrix(-1, 0, 0, -1, 354, 386)"/>';

SVG.NormalMouth = SVG.invent({
    create: function() {
        SVG.G.call(this);

        this.svg(normalMouthPathString).scale(0.12, 0.12).stroke(100);
    },

    inherit: SVG.G,

    construct: {
        normalMouth: function() {
            return this.put(new SVG.NormalMouth);
        }
    }
});


SVG.SeriousMouth = SVG.invent({
    create: function() {
        SVG.G.call(this);

        this.line(10, 0, 10, 15);
        this.line(0, 15, 20, 15);
        // TODO dynamic color
        this.stroke({color: '#202020', linecap: 'round'});
    },

    inherit: SVG.G,

    construct: {
        seriousMouth: function() {
            return this.put(new SVG.SeriousMouth);
        }
    }
});
