'use strict';

const colors = require('./colors.js');

require('./body.js');
require('./face.js');
require('./head.js');

// TODO much more dynamic than this
SVG.Cat = SVG.invent({
    create: function() {
        SVG.G.call(this);

        let colorScheme = colors.getRandomColorScheme();

        const earLeft = this.symbol().polygon([[0, 0], [0, 50], [50, 50]])
            .fill(colorScheme.tertiary)
            .stroke({color: colorScheme.primary, width: 2, linecap: 'round'});
        const earRight = this.symbol().polygon([[50, 0], [50, 50], [0, 50]])
            .fill(colorScheme.tertiary)
            .stroke({color: colorScheme.primary, width: 2, linecap: 'round'});

        const head = this.symbol().ellipseHead(100, 80).fill(colorScheme.secondary);

        const body = this.symbol().roundedRectBody(80, 80).fill(colorScheme.primary);

        this.use(body).move(10, 70);
        this.use(earLeft).move(2, 2);
        this.use(earRight).move(48, 2);
        this.use(head).move(0, 10);

        this.face(100, 50, colorScheme).move(20, 40);
    },

    inherit: SVG.G,

    construct: {
        cat: function() {
            return this.put(new SVG.Cat);
        }
    }
});
