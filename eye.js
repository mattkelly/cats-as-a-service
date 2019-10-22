SVG.CircleEye = SVG.invent({
    create: function(radius) {
        SVG.G.call(this);

        this.circle(radius);
    },

    inherit: SVG.G,

    construct: {
        circleEye: function(radius) {
            return this.put(new SVG.CircleEye(radius));
        }
    }
});

SVG.OvalEye = SVG.invent({
    create: function(radius, color) {
        SVG.G.call(this);

        this.ellipse(radius * 2, radius).fill(color)
        this.ellipse(radius/4, radius).fill('#202020').move(radius - (radius/8))
    },

    inherit: SVG.G,

    construct: {
        ovalEye: function(radius, color) {
            return this.put(new SVG.OvalEye(radius, color));
        }
    }
});
