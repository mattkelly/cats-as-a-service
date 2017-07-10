module.exports = {
  randInRange: function(min, max) {
    // From https://stackoverflow.com/a/1527820
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
