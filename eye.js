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
