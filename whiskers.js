'use strict';

const colors = require('./colors.js');

SVG.WhiskersLeft = SVG.invent({
    create: function(width, height) {
        SVG.G.call(this);

        const whiskerStraight = this.line(0, height/2, -width, height/2);
        const whiskerAngleUp = this.line(0, height/2 + 1, -width, height);
        const whiskerAngleDown = this.line(0, height/2 - 1, -width, 0);

        this.add(whiskerStraight);
        this.add(whiskerAngleUp);
        this.add(whiskerAngleDown);
        this.stroke({color: '#202020', width: 0.5, linecap: 'round'});
    },

    inherit: SVG.G,

    construct: {
        whiskersLeft: function(width, height) {
            return this.put(new SVG.WhiskersLeft(width, height));
        }
    }
});

SVG.WhiskersRight = SVG.invent({
    create: function(width, height) {
        SVG.G.call(this);

        const whiskerStraight = this.line(0, height/2, width, height/2);
        const whiskerAngleUp = this.line(0, height/2 + 1, width, height);
        const whiskerAngleDown = this.line(0, height/2 - 1, width, 0);

        this.add(whiskerStraight);
        this.add(whiskerAngleUp);
        this.add(whiskerAngleDown);
        this.stroke({color: '#202020', width: 0.5, linecap: 'round'});
    },

    inherit: SVG.G,

    construct: {
        whiskersRight: function(width, height) {
            return this.put(new SVG.WhiskersRight(width, height));
        }
    }
});
