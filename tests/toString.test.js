import toString from '../repototest/COMP.SE.200-2020-assignment/src/toString.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe.skip('toNumber', function(){
    describe(`Converts value to a number.`, function(){
        it("Try valid float number", function(){   
                
            expect(toNumber(4.5)).to.deep.equal(4.5);

        });
        it("Try typecasting string to number", function(){   
                
            expect(toNumber("4.5")).to.deep.equal(4.5);

        });

        it("Try over MAX value integer", function(){   
                
            expect(toNumber(1.7976931348623157e+308+1)).to.deep.equal(1.7976931348623157e+308);

        });
        it("Try 0", function(){   
                
            expect(toNumber(0)).to.deep.equal(0);

        });

        it("Try null", function(){   
                
            expect(toNumber(null)).to.deep.equal(0);

        });
        it("Try infinity", function(){   
                
            expect(toNumber(Infinity)).to.deep.equal(Infinity);

        });







    });
});
 

