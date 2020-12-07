import drop from '../repototest/COMP.SE.200-2020-assignment/src/drop.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('drop', function(){
    describe(`Creates a slice of array with n elements dropped from the beginning.`, function(){
        it("Try without passing n parameter", function(){   
                
            expect(drop([1,2,3])).to.deep.equal([2,3]);

        });
        it.skip("Try with passing n parameter", function(){   
                
            expect(drop([1,2,3,4,5,6]), 4).to.deep.equal([7]);

        });
        it("Try with passing n parameter and empty array", function(){   
                
            expect(drop([]), 3).to.deep.equal([]);

        });
        it("Try without passing n parameter and empty array", function(){   
                
            expect(drop([])).to.deep.equal([]);

        });
        it("Try with passing n parameter beyond array size", function(){   
                
            expect(drop([1,2,3], 4)).to.deep.equal([]);

        });



    });
});
 

