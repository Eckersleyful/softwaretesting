import toFinite from '../repototest/COMP.SE.200-2020-assignment/src/toFinite.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('toFinite', function(){
    describe(`Converts value to a finite number.`, function(){
        it("Try valid float number", function(){   
                
            expect(toFinite(4.5)).to.deep.equal(4.5);

        });
        it("Try valid integer", function(){   
                
            expect(toFinite(7)).to.deep.equal(7);

        });
        it("Try string typecasting to int", function(){   
                
            expect(toFinite("7")).to.deep.equal(7);

        });
        it("Try over MAX value integer", function(){   
                
            expect(toFinite(Number.MAX_SAFE_INTEGER+1)).to.deep.equal(Number.MAX_SAFE_INTEGER);

        });






    });
});
 

