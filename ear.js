'use strict';

SVG.LeftEar = SVG.invent({
    create: function(colorScheme) {
        SVG.G.call(this)

        this.polygon([[0, 0], [0, 50], [50, 50]])
            .fill(colorScheme.tertiary)
            .stroke({color: colorScheme.primary, width: 2, linecap: 'round'});
    },

    inherit: SVG.G,

    construct: {
        leftEar: function(colorScheme) {
            return this.put(new SVG.LeftEar(colorScheme).move(2, -8));
        }
    }
});

SVG.RightEar = SVG.invent({
    create: function(colorScheme) {
        SVG.G.call(this)

        this.polygon([[50, 0], [50, 50], [0, 50]])
            .fill(colorScheme.tertiary)
            .stroke({color: colorScheme.primary, width: 2, linecap: 'round'});
    },

    inherit: SVG.G,

    construct: {
        rightEar: function(colorScheme) {
            return this.put(new SVG.RightEar(colorScheme).move(48, -8));
        }
    }
});
