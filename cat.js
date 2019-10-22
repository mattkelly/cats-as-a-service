'use strict';

const colors = require('./colors.js');

require('./body.js');
require('./head.js');

// TODO much more dynamic than this
SVG.Cat = SVG.invent({
    create: function() {
        SVG.G.call(this);

        let colorScheme = colors.getRandomColorScheme();

        const head = this.symbol().ellipseHead(100, 80, colorScheme);

        const body = this.symbol().roundedRectBody(80, 80).fill(colorScheme.primary);

        this.use(body).move(10, 70);
        this.use(head).move(0, 10);

    },

    inherit: SVG.G,

    construct: {
        cat: function() {
            return this.put(new SVG.Cat);
        }
    }
});
