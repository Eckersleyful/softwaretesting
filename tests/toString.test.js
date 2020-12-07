import toString from '../repototest/COMP.SE.200-2020-assignment/src/toString.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('toString', function(){
    describe(`Converts value to a number.`, function(){
        it("Try valid string", function(){   
                
            expect(toString("cat")).to.deep.equal("cat");

        });
        it("Try empty string", function(){   
                
            expect(toString("")).to.deep.equal("");

        });

        it.skip("Try null", function(){   
                
            expect(toString(null)).to.deep.equal('');

        });
        it.skip("Try undefined", function(){   
                
            expect(toString(undefined)).to.deep.equal('');

        });
        it("Try an array with integer elements", function(){   
                
            expect(toString([1,2,3])).to.deep.equal("1,2,3");

        });

        it("Try integer", function(){   
                
            expect(toString(3)).to.deep.equal("3");
        });







    });
});
 

