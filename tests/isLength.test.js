import isLength from '../repototest/COMP.SE.200-2020-assignment/src/isLength.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isLength', function(){
    describe(`Checks if given value is a valid array-like length.`, function(){
        it("Try a valid number", function(){   
           
            expect(isLength(1)).to.be.true;

        });
        it("Try over max safe integer number", function(){   
           
            expect(isLength(9007199254740993)).to.be.false;

        }); 
        it("Try infinity", function(){   
           
            expect(isLength(Infinity)).to.be.false;

        }); 
        it("Try float number", function(){   
           
            expect(isLength(2.5)).to.be.false;

        });
        it("Try string", function(){   
           
            expect(isLength("2.5")).to.be.false;

        });
        it("Try string", function(){   
           
            expect(isLength(Number.MIN_VALUE)).to.be.false;

        });    
    });
});
 

