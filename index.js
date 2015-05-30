(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.vectorjs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var RAD = 180 / Math.PI;

var VectorClass = (function () {

	/**
  * Constructor for the Vector class
  *
  * @param {Number =} x
  * @param {Number =} y
  * @return {Vector} A vector of `x` and `y`
  */

	function VectorClass() {
		var x = arguments[0] === undefined ? 0 : arguments[0];
		var y = arguments[1] === undefined ? x : arguments[1];
		return (function () {
			_classCallCheck(this, VectorClass);

			this.x = x;
			this.y = y;
		}).apply(this, arguments);
	}

	_createClass(VectorClass, [{
		key: 'add',

		/*
  		Class math functions
  	*/

		/**
   *
   * @param {Vector} b The vector to add
   * @return {Vecto} the sum
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
		value: function lenSq(b) {
			return Vector.lenSq(this);
		}
	}, {
		key: 'len',
		value: function len(b) {
			return Vector.len(this);
		}
	}, {
		key: 'normalize',
		value: function normalize(b) {
			return Vector.normalize(this);
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

			return new Vector(a.x + b.x, a.y + b.y);
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

			return new Vector(a.x - b.x, a.y - b.y);
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

			return new Vector(a.x * b.x, a.y * b.y);
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

			return new Vector(a.x / b.x, a.y / b.y);
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
			return Math.sqrt(a.x * a.x + a.y * a.y);
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
			return a.x * a.x + a.y * a.y;
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
			var magA = Vector.len(a);
			var magB = Vector.len(b);

			console.log(magA, magB);

			var dot = Vector.mul(a, b);

			return Math.acos((dot.x + dot.y) / (magA * magB));
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
			return Vector.radToDeg(Vector.angleRad(a, b));
		}
	}, {
		key: 'dot',

		/**
   * Get the dot product of two vectors
   *
   * @param {Vector | {x: number, y: number}} a
   * @param {Vector | {x: number, y: number}} b
   * @return {Number} the angle between the two vectors
   */

		value: function dot(a, b) {
			var magA = Vector.len(a);
			var magB = Vector.len(b);

			console.log(magA, magB);

			return Math.acos(Vector.mul(a, b) / (magA * magB));
		}
	}, {
		key: 'clone',

		/*
  		Helper methods
  	*/

		value: function clone(a) {
			return new Vector(a.x, a.y);
		}
	}, {
		key: 'radToDeg',
		value: function radToDeg(rad) {
			return rad * RAD;
		}
	}]);

	return VectorClass;
})();

// Convertion from ES6 to factory. Code stolen from `https://github.com/timoxley/to-factory`

var Vector = function Vector(x, y) {
	return new VectorClass(x, y);
};

Vector.__proto__ = VectorClass;
Vector.prototype = VectorClass.prototype;

exports['default'] = Vector;
module.exports = exports['default'];

},{"object-assign":2}],2:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}]},{},[1])(1)
});