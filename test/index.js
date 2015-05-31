import assert from 'assert';
import Vector from '../';

describe('Vector', () => {
  describe('Construction', () => {
    var a = new Vector();
    var b = Vector(2);

    it('should return a vector when new is present', () => {
      assert.equal(true, a instanceof Vector);
    });

    it('should return a vector when new is not present', () => {
      assert.equal(true, b instanceof Vector);
    });

    describe('default paramertes', () => {
      it('should default to 0 on both x and y', () => {
        assert.equal(0, a.x);
        assert.equal(0, a.y);
      });

      it('should use x as y, if y isn not present', () => {
        assert.equal(b.x, b.y);
      });

      it('should not default to 0 if x is present', () => {
        assert.notEqual(0, b.y);
      });
    });
  });

  describe('Helpers', () => {
    var a = Vector(5, 10);
    var b = Vector(6, 2);

    describe('#toString()', () => {
      it(`should return '${a.x},${a.y}'`, () => {
        assert.equal(`${a.x},${a.y}`, a.toString());
      });
      it(`should return '${b.x},${b.y}'`, () => {
        assert.equal(`${b.x},${b.y}`, b.toString());
      });
    });

    describe('#clone()', () => {
      var copy = a.clone();

      it('should return an exact copy of the vector', () => {
        assert.equal(a.x, copy.x);
        assert.equal(a.y, copy.y);
      });

      it('should not return the object it self', () => {
        assert.notEqual(a, copy);
      });
    });

    describe('#equals()', () => {
      var aClone = Vector(a.x, a.y);

      it('should return true when the vectors are the same', () => {
        assert.equal(true, a.equals(aClone));
      });

      it('should not return true when the vectors are diffrent', () => {
        assert.equal(false, a.equals(b));
      });
    });
  });

  describe('Math', () => {
    var a = Vector(6, 1);
    var b = Vector(10, 4);

    describe('#add()', () => {
      var result = a.add(b);

      it('should return the sum of the two vectors ', () => {
        assert.equal(a.x + b.x, result.x);
        assert.equal(a.y + b.y, result.y);
      });
    });

    describe('#sub()', () => {
      var result = a.sub(b);

      it('should return the first vector minus the last vector', () => {
        assert.equal(a.x - b.x, result.x);
        assert.equal(a.y - b.y, result.y);
      });
    });

    describe('#mul()', () => {
      var result = a.mul(b);

      it('should return the product of the two vectors', () => {
        assert.equal(a.x * b.x, result.x);
        assert.equal(a.y * b.y, result.y);
      });
    });

    describe('#div()', () => {
      var result = a.div(b);

      it('should return the first vector divded by the last', () => {
        var x = Math.round((a.x / b.x) * 10000);
        var y = Math.round((a.y / b.y) * 10000);

        assert.equal(x, Math.round(result.x * 10000));
        assert.equal(y, Math.round(result.y * 10000));
      });
    });

    describe('#len()', () => {
      it('should return the length of the vector', () => {
        assert.equal(6, Math.floor(a.len()));
        assert.equal(10, Math.floor(b.len()));
      });
    });

    describe('#lenSq()', () => {
      it('should return the length of the vector squared', () => {
        assert.equal(37, Math.floor(a.lenSq()));
        assert.equal(116, Math.floor(b.lenSq()));
      });
    });

    describe('#normalize()', () => {
      var result = a.normalize();

      it('should return the normal of the vector', () => {
        assert.equal(986, Math.round(result.x * 1000));
        assert.equal(164, Math.round(result.y * 1000));
      });
    });

    describe('#angle()', () => {
      it('should return the angle between the two vectors', () => {
        assert.equal(12339, Math.round(a.angle(b) * 1000));
      });

      it('should return the exact same as #angleDeg()', () => {
        assert.equal(a.angleDeg(b), a.angle(b));
      });

      it(`should return the same from #angle() and
          #angleRad() but in rad and deg`, () => {
            assert.equal(a.angle(b), a.angleRad(b) * 180 / Math.PI);
          });
    });
  });
});
