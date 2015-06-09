'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RAD = 180 / Math.PI;

var Vector = (function () {

  /**
   * Constructor for the Vector class
   *
   * @param {Number =} x
   * @param {Number =} y
   * @return {Vector} A vector of `x` and `y`
   */

  function Vector() {
    var x = arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments[1] === undefined ? x : arguments[1];
    return (function () {
      _classCallCheck(this, Vector);

      this.x = x;
      this.y = y;
    }).apply(this, arguments);
  }

  _createClass(Vector, [{
    key: 'add',

    /*
       Class math aliases
     */

    value: function add(b) {
      return Vector.add(this, b);
    }
  }, {
    key: 'sub',
    value: function sub(b) {
      return Vector.sub(this, b);
    }
  }, {
    key: 'mul',
    value: function mul(b) {
      return Vector.mul(this, b);
    }
  }, {
    key: 'div',
    value: function div(b) {
      return Vector.div(this, b);
    }
  }, {
    key: 'lenSq',
    value: function lenSq() {
      return Vector.lenSq(this);
    }
  }, {
    key: 'len',
    value: function len() {
      return Vector.len(this);
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      return Vector.normalize(this);
    }
  }, {
    key: 'angle',
    value: function angle(b) {
      return Vector.angle(this, b);
    }
  }, {
    key: 'angleRad',
    value: function angleRad(b) {
      return Vector.angleRad(this, b);
    }
  }, {
    key: 'angleDeg',
    value: function angleDeg(b) {
      return Vector.angleDeg(this, b);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'equals',
    value: function equals(b) {
      return Vector.equals(this, b);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '' + this.x + ',' + this.y;
    }
  }], [{
    key: 'add',

    /*
       Static math functions
     */

    /**
     * Add two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the sum of the vectors
     */

    value: function add(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x + b.x;
      var y = a.y + b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'sub',

    /**
     * Subtract two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the result of subtracting `b` form `a`
     */

    value: function sub(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x - b.x;
      var y = a.y - b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'mul',

    /**
     * Multiply two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the product of the vectors
     */

    value: function mul(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x * b.x;
      var y = a.y * b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'div',

    /**
     * Divide two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the result of dividing `a` with `b`
     */

    value: function div(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x / b.x;
      var y = a.y / b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'len',

    /**
     * Get the length of a vector
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Number} the length of vector `a`
     */

    value: function len(a) {
      var x = a.x * a.x;
      var y = a.y * a.y;

      return Math.sqrt(x + y);
    }
  }, {
    key: 'lenSq',

    /**
     * Get the length squared of a vector. Usefull for
     * comparing two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Number} the length squared of vector `a`
     */

    value: function lenSq(a) {
      var x = a.x * a.x;
      var y = a.y * a.y;

      return x + y;
    }
  }, {
    key: 'normalize',

    /**
     * Normalize a vector
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Vector} the vector `a` normalized
     */

    value: function normalize(a) {
      var mag = Vector.len(a);

      return new Vector(a.x / mag, a.y / mag);
    }
  }, {
    key: 'angle',

    /**
     * Get the angle between two vectors in degress
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the degree between the two vectors
     */

    value: function angle(a, b) {
      return Vector.angleDeg(a, b);
    }
  }, {
    key: 'angleRad',

    /**
     * Get the radian angle between two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the angle between the two vectors
     */

    value: function angleRad(a, b) {
      return Math.acos(Vector.angleCos(a, b));
    }
  }, {
    key: 'angleDeg',

    /**
     * Get the angle between two vectors in degress
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the degree between the two vectors
     */

    value: function angleDeg(a, b) {
      return Vector.angleRad(a, b) * RAD;
    }
  }, {
    key: 'angleCos',

    /**
     * Get the angle between two vectors in cosin
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the angle between the two vectors before `Math.acos()`
     */

    value: function angleCos(a, b) {
      var magA = Vector.len(a);
      var magB = Vector.len(b);

      var dot = Vector.mul(a, b);

      return (dot.x + dot.y) / (magA * magB);
    }
  }, {
    key: 'dot',

    /**
     * Get the dot product of two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the dot product
     */

    value: function dot(a, b) {
      var magA = Vector.len(a);
      var magB = Vector.len(b);

      return Math.acos(Vector.mul(a, b) / (magA * magB));
    }
  }, {
    key: 'random',

    /*
       Helper methods
     */

    value: function random() {
      var min = arguments[0] === undefined ? 0 : arguments[0];
      var max = arguments[1] === undefined ? min + 1 : arguments[1];
      return (function () {
        var x = Math.random() * (max - min) + min;
        var y = Math.random() * (max - min) + min;

        return new Vector(x, y);
      })();
    }
  }, {
    key: 'clone',
    value: function clone(a) {
      return new Vector(a.x, a.y);
    }
  }, {
    key: 'equals',
    value: function equals(a, b) {
      return a.x === b.x && a.y === b.y;
    }
  }]);

  return Vector;
})();

// Convertion from ES6 to factory. Code stolen from `https://github.com/timoxley/to-factory`

var VectorFactory = function VectorFactory(x, y) {
  return new Vector(x, y);
};

VectorFactory.__proto__ = Vector;
VectorFactory.prototype = Vector.prototype;

exports['default'] = VectorFactory;
module.exports = exports['default'];