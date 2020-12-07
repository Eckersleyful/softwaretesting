import keys from '../repototest/COMP.SE.200-2020-assignment/src/keys.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('keys', function(){
    describe(`Creates an array of the own enumerable property names of the passed object`, function(){
        it("Try an object with defined keys", function(){   
           
            expect(keys({a:2, b:2})).to.deep.equal(['a','b'])

        });
        it("Try an object with automatically indexed keys", function(){   
           
            expect(keys("cat")).to.deep.equal(['0','1','2'])

        });
        it("Try an empty object", function(){   
           
            expect(keys({})).to.deep.equal([])

        });
           
    });
});
 

