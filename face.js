'use strict';

const colors = require('./colors.js');

require('./eye.js');
require('./mouth.js');
require('./nose.js');
require('./whiskers.js');

SVG.Face = SVG.invent({
    create: function(width, height) {
        SVG.G.call(this);

        this._width = width;
        this._height = height;

        const eyeRadius = width/12;
        this.circleEye(eyeRadius).fill(colors.black).move(4, 0);
        this.circleEye(eyeRadius).fill(colors.black).move(width/2 - 4, 0);

        const noseX = 40; // @TODO don't hardcode

        this.seriousMouth().move(noseX/2, 20);

        this.triangleNose().move(noseX, 30).fill(colors.pink);

        this.whiskersRight(width/2, height/3).move(noseX, 15);
        this.whiskersLeft(width/2, height/3).move(noseX/2, 15);
    },

    inherit: SVG.G,

    construct: {
        face: function(width, height) {
            return this.put(new SVG.Face(width, height));
        }
    }
});

SVG.extend(SVG.Face, {
    width: function() {
        return this._width;
    },
    height: function() {
        return this._height;
    }
});
