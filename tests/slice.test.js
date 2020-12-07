import slice from '../repototest/COMP.SE.200-2020-assignment/src/slice.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('slice', function(){
    describe(`Creates a slice of array from start up to, but not including, end`, function(){
        it("Try valid array with valid normal start, no end", function(){   
                
            expect(slice([1,2,3,4], 2)).to.deep.equal([3,4]);

        });
        it("Try valid array with valid start and valid end", function(){   
                
            expect(slice([1,2,3,4], 0, 4)).to.deep.equal([1,2,3,4]);

        });
        it("Try empty array with valid start and valid end", function(){   
                
            expect(slice([], 0, 4)).to.deep.equal([]);

        });
        it.skip("Try valid array with negative start, to offset from the end", function(){   
                
            expect(slice([1,2,3,4], -4, 4)).to.deep.equal([4,3,2,1]);

        });



    });
});
 

