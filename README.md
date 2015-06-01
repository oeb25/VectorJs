# VectorJs

[![Join the chat at https://gitter.im/oeb25/VectorJs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/oeb25/VectorJs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Travis testing](https://travis-ci.org/oeb25/VectorJs.svg?branch=master)](https://travis-ci.org/oeb25/VectorJs)

A 2D Vector class for JavaScript. That's it!

## Installation

`$ npm install vectorjs`

### Building

`$ npm run build`

`$ npm run test`

## Usage

```javascript
var Vector = require('vectorjs');

var a = new Vector(2, 2);
var b = new Vector(5, 3);

var ab = a.add(b);

console.log(ab);
// => { x: 7, y: 5 }
```

Usage without `new` is also supported

```javascript
var a = new Vector(2, 2);
// works the same as
var a = Vector(2, 2);
```

### Methods

None of the methods are mutable, which means that they wont modify the caller, but rather return a new `Vector`

---

#### .add(amount): Vector

Returns the vector sum of the two vectors

`amount` can be either a `Number` or a `Vector`

---

#### .sub(amount): Vector

Returns caller subtracted by the amount

`amount` can be either a `Number` or a `Vector`

---

#### .mul(amount): Vector

Returns the result of caller multiplied by the amount

`amount` being either a `Number` or a `Vector`

---

#### .div(amount): Vector

Returns the result of caller divided by the amount

`amount` being either a `Number` or a `Vector`

---

#### .len(): Number

Returns the length of the Vector. Alternatively use .lenSq()

---

#### .lenSq(): Number

Returns the squared length of the Vector. Useful for comparing two vectors

---

#### .normalize(): Vector

Returns the normal of the Vector. This is a unit sized Vector

---

#### .angle(other): Number

Returns the angle between calle and `other` in degrees. Alias for `.angleDeg()`

`other` being the other vector

---

#### .angleDeg(other): Number

Returns the angle between calle and `other` in degrees. Returns the same as `.angle()`

`other` being the other vector

---

#### .angleRad(other): Number

Returns the angle between calle and `other` in radian.

`other` being the other vector

---

#### .clone(): Vector

Returns the a copy or clone of the vector

---

#### .equals(other): Boolean

Returns whether the `x` and `y` of the vectors are the same.

This is here since JavaScript is weird and doesn't do.

```javascript
{ x: 2, y: 3 } === { x: 2, y: 3 }
// => false

Vector.equals({ x: 2, y: 3 }, { x: 2, y: 3 })
// => true
```

They have their reasons.

`other` being the other vector

---

All of these functions can also be called from the class it self, as shown below.

```javascript
a.add(b) <=> Vector.add(a, b)
a.len() <=> Vector.len(a)
// etc...
```

## Motivation

In the past weeks, I've wrote multiple vector classes for every single one of my games, each with a different implementation. I needed something that was as simple as `v(2, 1).add(3)` and was easy to install. If you're looking for a super high performance vector library for rendering thousands of particles, this one might not be the one. Although if you do, [send it to me please](mailto:lvrmlbvng@gmail.com)!

## Misconceptions

The source it self is written in `ES6`, but is transpiled to pure `ES5` and is ready to be required and used without a precompiler nor transpiler.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Thanks to [timoxley](https://github.com/timoxley/to-factory) for supporting me with a wrapper for class to factory.

Thanks to [Tribuadore](http://www.reddit.com/user/Tribuadore) on reddit for pointing out this wasn't a "propper" "libary", but rather just a class.

## License

The MIT License (MIT)

