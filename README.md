# VectorJs

[![Join the chat at https://gitter.im/oeb25/VectorJs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/oeb25/VectorJs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A 2D Vector class for JavaScript. That's it!

## Installation

`npm install vectorjs`

## Usage

```javascript
var Vector = require('vectorjs');

var a = new Vector(2, 2);
var b = new Vector(5, 3);

var ab = a.add(b);

console.log(a, b);
// => { x: 7, y: 5 }
```

Usage without `new` is also supported

```javascript
var a = new Vector(2, 2);
// works the same as
var a = Vector(2, 2);

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
