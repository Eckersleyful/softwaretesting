import add from '../repototest/COMP.SE.200-2020-assignment/src/at.js';
import pkg from "chai";
const { expect, assert } = pkg;
at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]

describe('at', function(){
    describe('#Creates an array of values corresponding to `paths` of `object`.', function(){
        it("Try example object, with correct object paths", function(){   
                const object = { 'a': [
                                 { 'b': 
                                    {'c': 3 }}
                                  , 4]}
                expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, 4]);

        });
    });
});


describe('at', function(){
    describe('#Creates an array of values corresponding to `paths` of `object`.', function(){
        it("Try empty object, with correct object paths, should return empty array", function(){   
                const object = {}
                expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([]);

        });
    });
});