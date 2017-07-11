'use strict';

const _ = require('lodash');

// TODO autogen using palettes
module.exports = {
    colorSchemes: {
        'gray': {
            id: 0,
            primary: 'rgb(145, 145, 145)', // TODO light gray
            secondary:  'rgb(216, 216, 216)', // TODO dark gray
            tertiary: '#f4728e' // TODO pink
        },
        'brown': {
            id: 1,
            primary:  '#805c15',
            secondary: '#d4b16a',
            tertiary: '#ffe3aa'
        }
    },

    getRandomColorScheme: function() {
        return _.sample(this.colorSchemes);
    }
};
