const RAD = 180 / Math.PI;

class Vector {

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

    var x = a.x + b.x;
    var y = a.y + b.y;

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

    var x = a.x - b.x;
    var y = a.y - b.y;

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

    var x = a.x * b.x;
    var y = a.y * b.y;

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

    var x = a.x / b.x;
    var y = a.y / b.y;

    return new Vector(x, y);
  }

  /**
   * Get the length of a vector
   *
   * @param {Vector | {x: number, y: number}} a
   * @return {Number} the length of vector `a`
   */

  static len(a) {
    var x = a.x * a.x;
    var y = a.y * a.y;

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
    var x = a.x * a.x;
    var y = a.y * a.y;

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

    return (dot.x + dot.y) / (magA * magB);
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

    return Math.acos((Vector.mul(a, b)) / (magA * magB));
  }

  /*

    Class math aliases

  */

  add(b) {return Vector.add(this, b) }

  sub(b) {return Vector.sub(this, b) }

  mul(b) {return Vector.mul(this, b) }

  div(b) {return Vector.div(this, b) }

  lenSq() {return Vector.lenSq(this) }

  len() {return Vector.len(this) }

  normalize() {return Vector.normalize(this) }

  angle(b) {return Vector.angle(this, b) }

  angleRad(b) {return Vector.angleRad(this, b) }

  angleDeg(b) {return Vector.angleDeg(this, b) }

  /*

    Helper methods

  */

  static random(min = 0, max = min + 1) {
    const x = Math.random() * (max - min) + min;
    const y = Math.random() * (max - min) + min;

    return new Vector(x, y);
  }

  static clone(a) {
    return new Vector(a.x, a.y);
  }

  static equals(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  equals(b) {
    return Vector.equals(this, b);
  }

  toString() {
    return `${this.x},${this.y}`;
  }

}

// Convertion from ES6 to factory. Code stolen from `https://github.com/timoxley/to-factory`

let VectorFactory = function(x, y) {
  return new Vector(x, y);
}

VectorFactory.__proto__ = Vector;
VectorFactory.prototype = Vector.prototype;

export default VectorFactory;
