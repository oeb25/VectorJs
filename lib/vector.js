import assign from 'object-assign';

const RAD = 180 / Math.PI;

export default class Vector {

	/**
	 * Constructor for the Vector class
	 *
	 * @param {Number =} x
	 * @param {Number =} y
	 * @return {Vector} A vector of `x` and `y`
	 */

	constructor(x = 0, y = x) {
		this.x = x;
		this.y = y;
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

		return new Vector(a.x + b.x, a.y + b.y);
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

		return new Vector(a.x - b.x, a.y - b.y);
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

		return new Vector(a.x * b.x, a.y * b.y);
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

		return new Vector(a.x / b.x, a.y / b.y);
	}

	/**
	 * Get the length of a vector
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Number} the length of vector `a`
	 */

	static len(a) {
		return Math.sqrt(a.x * a.x + a.y * a.y);
	}

	/**
	 * Get the length squared of a vector. Usefull for
	 * comparing two vectors
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Number} the length squared of vector `a`
	 */

	static lenSq(a) {
		return a.x * a.x + a.y * a.y;
	}

	/**
	 * Normalize a vector
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @return {Vector} the vector `a` normalized
	 */

	static normalize(a) {
		var mag = Vector.len(a);

		return new Vector(a.x / mag, a.y / mag);
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
		var magA = Vector.len(a);
		var magB = Vector.len(b);

		console.log(magA, magB)

		var dot = Vector.mul(a, b)

		return Math.acos(( dot.x + dot.y ) / ( magA * magB ));
	}

	/**
	 * Get the angle between two vectors in degress
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the degree between the two vectors
	 */

	static angleDeg(a, b) {
		return Vector.radToDeg(Vector.angleRad(a, b));
	}

	/**
	 * Get the dot product of two vectors
	 *
	 * @param {Vector | {x: number, y: number}} a
	 * @param {Vector | {x: number, y: number}} b
	 * @return {Number} the angle between the two vectors
	 */

	static dot(a, b) {
		var magA = Vector.len(a);
		var magB = Vector.len(b);

		console.log(magA, magB)

		return Math.acos(( Vector.mul(a, b) ) / ( magA * magB ));
	}

	/*

		Class math functions

	*/

	/**
	 *
	 * @param {Vector} b The vector to add
	 * @return {Vecto} the sum
	 */

	add(b) {
		return Vector.add(this, b);
	}

	sub(b) {
		return Vector.sub(this, b);
	}

	mul(b) {
		return Vector.mul(this, b);
	}

	div(b) {
		return Vector.div(this, b);
	}

	lenSq(b) {
		return Vector.lenSq(this);
	}

	len(b) {
		return Vector.len(this);
	}

	normalize(b) {
		return Vector.normalize(this);
	}

	/*

		Helper methods

	*/

	static clone(a) {
		return new Vector(a.x, a.y);
	}

	static radToDeg(rad) {
		return rad * RAD;
	}

}

Vector[Symbol.call] = function(x, y) { return new Vector(x, y) };