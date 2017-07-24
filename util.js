'use strict';

const _ = require('lodash');

module.exports = {
    randInRange: function(min, max, step) {
        // From https://stackoverflow.com/a/1527820
        //return Math.floor(Math.random() * (max - min + 1)) + min;
        return _.sample(_.range(min, max, step));
    }
};
