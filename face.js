'use strict';

const colors = require('./colors.js');
const util = require('./util.js');

require('./eye.js');
require('./mouth.js');
require('./nose.js');
require('./whiskers.js');

SVG.Face = SVG.invent({
    create: function(width, height, colorScheme) {
        SVG.G.call(this);

        this._width = width;
        this._height = height;

        const eyeRadius = width/12;
        // TODO dynamic colors
        this.circleEye(eyeRadius).fill('#202020').move(4, 0);
        this.circleEye(eyeRadius).fill('#202020').move(width/2 - 4, 0);

        const noseX = 40; // @TODO don't hardcode

        // TODO yup this code is bad
        const beSerious = Math.random() >= 0.5;
        if (beSerious) {
            this.seriousMouth().move(noseX/2, 20);
        } else {
            this.normalMouth().move(noseX/2, 90);
        }

        this.triangleNose().move(noseX, 30).fill(colorScheme.tertiary);

        this.whiskersRight(width/2, height/3).move(noseX, 15);
        this.whiskersLeft(width/2, height/3).move(noseX/2, 15);
    },

    inherit: SVG.G,

    construct: {
        face: function(width, height, colorScheme) {
            return this.put(new SVG.Face(width, height, colorScheme));
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
