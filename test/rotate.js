const rotate = require('../rotate');
const chai = require('chai');
const expect = chai.expect;

describe('Rotate function', function() {
    it('should rotate the list by 2 steps', function(done) {
        var input = [1,2,3,4,5];
        var result = [3,4,5,1,2];
        var rot = 2;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
    it('should rotate the list by 5 steps', function(done) {
        var input = [1,2,3,4,5];
        var result = [1,2,3,4,5];
        var rot = 5;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
    it('should rotate the list by 6 steps', function(done) {
        var input = [1,2,3,4,5];
        var result = [2,3,4,5,1];
        var rot = 6;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
    it('should return the list when there is only one element', function(done) {
        var input = [1];
        var result = [1];
        var rot = 6;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
    it('should return the list when rotations are set to 0', function(done) {
        var input = [1,2,3,4,5];
        var result = [1,2,3,4,5];
        var rot = 0;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
    it('should work when the number of rotations is high', function(done) {
        var input = [1,2,3,4,5];
        var result = [2,3,4,5,1];
        console.log('length : ', input.length);
        var rot = 1001;
        const rotated = rotate.rotate(input, rot);
        expect(rotated).to.eql(result);
        done();
    });
})