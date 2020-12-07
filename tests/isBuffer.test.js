import isBuffer from '../repototest/COMP.SE.200-2020-assignment/src/isBuffer.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isBuffer', function(){
    describe(`Checks if value is a buffer`, function(){
        it("Try non-buffer object", function(){   
            var x = new Float32Array(32.0);
            expect(isBuffer(x)).to.be.false;

        });
        it.skip("Try buffer object", function(){   
               
            expect(isBuffer(new Buffer(2))).to.be.true;

        });    
        it("Try undefined", function(){   
                
            expect(isBuffer(undefined)).to.be.false;

        });   
        it("Try null", function(){   
                
            expect(isBuffer(null)).to.be.false;

        });   
    });
});
 

