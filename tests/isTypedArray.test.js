import isTypedArray from '../repototest/COMP.SE.200-2020-assignment/src/isTypedArray.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isTypedArray', function(){
    describe(`Checks if given value is a typed array`, function(){
        it("Try a non-typed array", function(){   
           
            expect(isTypedArray([])).to.be.false;

        });
        it("Try a typed array", function(){   
           
            expect(isTypedArray(new Uint32Array())).to.be.true;

        });
           
    });
});
 

