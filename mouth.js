'use strict';

const colors = require('./colors.js');

SVG.SeriousMouth = SVG.invent({
    create: function() {
        SVG.G.call(this);

        this.line(10, 0, 10, 15);
        this.line(0, 15, 20, 15);
        this.stroke({color: colors.black});
    },

    inherit: SVG.G,

    construct: {
        seriousMouth: function() {
            return this.put(new SVG.SeriousMouth);
        }
    }
});
