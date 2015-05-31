const RAD = 180 / Math.PI;

class VectorClass {

	/**
	 * Constructor for the Vector class
	 *
	 * @param {Number =} x
	 * @param {Number =} y
	 * @return {Vector} A vector of `x` and `y`
	 */

	constructor(x = 0, y = x) {
		this._value = new Float32Array(2);

		this._value[0] = x;
		this._value[1] = y;
	}

	get x() {
		return this._value[0];
	}
	set x(x) {
		this._value[0] = x;
	}

	get y() {
		return this._value[1];
	}
	set y(y) {
		this._value[1] = y;
	}

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

	static add(a, b) {
		if (typeof b === 'number')
			b = new Vector(b);

		var x = a._value[0] + b._value[0];
		var y = a._value[1] + b._value[1];

		return new Vector(x, y);
	}

	/**
	 * Subtract two vectors. If a `b` is a number, create
	 * a `Vector` from it.
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number} | number} b
	 * @return {Vector} the result of subtracting `b` form `a`
	 */

	static sub(a, b) {
		if (typeof b === 'number')
			b = new Vector(b);

		var x = a._value[0] - b._value[0];
		var y = a._value[1] - b._value[1];

		return new Vector(x, y);
	}

	/**
	 * Multiply two vectors. If a `b` is a number, create
	 * a `Vector` from it.
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number} | number} b
	 * @return {Vector} the product of the vectors
	 */

	static mul(a, b) {
		if (typeof b === 'number')
			b = new Vector(b);

		var x = a._value[0] * b._value[0];
		var y = a._value[1] * b._value[1];

		return new Vector(x, y);
	}

	/**
	 * Divide two vectors. If a `b` is a number, create
	 * a `Vector` from it.
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number} | number} b
	 * @return {Vector} the result of dividing `a` with `b`
	 */

	static div(a, b) {
		if (typeof b === 'number')
			b = new Vector(b);

		var x = a._value[0] / b._value[0];
		var y = a._value[1] / b._value[1];

		return new Vector(x, y);
	}

	/**
	 * Get the length of a vector
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Number} the length of vector `a`
	 */

	static len(a) {
		var x = a._value[0] * a._value[0];
		var y = a._value[1] * a._value[1];

		return Math.sqrt(x + y);
	}

	/**
	 * Get the length squared of a vector. Usefull for
	 * comparing two vectors
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Number} the length squared of vector `a`
	 */

	static lenSq(a) {
		var x = a._value[0] * a._value[0];
		var y = a._value[1] * a._value[1];

		return x + y;
	}

	/**
	 * Normalize a vector
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Vector} the vector `a` normalized
	 */

	static normalize(a) {
		var mag = Vector.len(a);

		return new Vector(a._value[0] / mag, a._value[1] / mag);
	}

	/**
	 * Get the angle between two vectors in degress
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the degree between the two vectors
	 */

	static angle(a, b) {
		return Vector.angleDeg(a, b);
	}

	/**
	 * Get the radian angle between two vectors
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the angle between the two vectors
	 */

	static angleRad(a, b) {
		return Math.acos(Vector.angleCos(a, b));
	}

	/**
	 * Get the angle between two vectors in degress
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the degree between the two vectors
	 */

	static angleDeg(a, b) {
		return Vector.angleRad(a, b) * RAD;
	}

	/**
	 * Get the angle between two vectors in cosin
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the angle between the two vectors before `Math.acos()`
	 */

	static angleCos(a, b) {
		var magA = Vector.len(a);
		var magB = Vector.len(b);

		var dot = Vector.mul(a, b)

		return ( dot._value[0] + dot._value[1] ) / ( magA * magB );
	}

	/**
	 * Get the dot product of two vectors
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the dot product
	 */

	static dot(a, b) {
		var magA = Vector.len(a);
		var magB = Vector.len(b);

		return Math.acos(( Vector.mul(a, b) ) / ( magA * magB ));
	}

	/*

		Class math functions

	*/

	/**
	 *
	 * @param {Vector} b The vector to add
	 * @return {Vector} the sum
	 */

	add(b) { return Vector.add(this, b) }

	sub(b) { return Vector.sub(this, b) }

	mul(b) { return Vector.mul(this, b) }

	div(b) { return Vector.div(this, b) }

	lenSq(b) { return Vector.lenSq(this) }

	len(b) { return Vector.len(this) }

	normalize(b) { return Vector.normalize(this) }

	angle(b) { return Vector.angle(this, b) }

	angleRad(b) { return Vector.angleRad(this, b) }

	angleDeg(b) { return Vector.angleDeg(this, b) }

	/*

		Helper methods

	*/

	static clone(a) {
		return new Vector(a._value[0], a._value[1]);
	}

	static equals(a, b) {
		return a._value[0] === b._value[0] && a._value[1] === b._value[1];
	}

	clone() {
		return new Vector(this._value[0], this._value[1]);
	}

	equals(b) {
		return Vector.equals(this, b);
	}

	toString() {
		return `${this._value[0]},${this._value[1]}`;
	}

}

// Convertion from ES6 to factory. Code stolen from `https://github.com/timoxley/to-factory`

let Vector = function(x, y) {
	return new VectorClass(x, y);
}

Vector.__proto__ = VectorClass;
Vector.prototype = VectorClass.prototype;

export default Vector;
