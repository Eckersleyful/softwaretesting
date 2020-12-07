import isBoolean from '../repototest/COMP.SE.200-2020-assignment/src/isBoolean.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isBoolean', function(){
    describe(`Checks if value is classified as a boolean primitive or object.`, function(){
        it("Try null", function(){   
                
            expect(isBoolean(null)).to.be.false;

        });
        it("Try boolean object", function(){   
            var x = new Boolean(true)    
            expect(isBoolean(x)).to.be.true;

        });    
        it("Try undefined", function(){   
                
            expect(isBoolean(undefined)).to.be.false;

        });   

    });
});
 

