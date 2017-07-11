'use strict';

const colors = require('./colors.js');

SVG.SeriousMouth = SVG.invent({
    create: function() {
        SVG.G.call(this);

        this.line(10, 0, 10, 15);
        this.line(0, 15, 20, 15);
        // TODO dynamic color
        this.stroke({color: '#202020'});
    },

    inherit: SVG.G,

    construct: {
        seriousMouth: function() {
            return this.put(new SVG.SeriousMouth);
        }
    }
});
