import compact from '../repototest/COMP.SE.200-2020-assignment/src/compact.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('compact', function(){
    describe(`Creates an array with all falsey values removed. The values false, null,
    0, "", undefined, and NaN are falsey`, function(){
        it("Try all values that should be removed by the function", function(){   
                
            expect(compact([false, null, 0, "", undefined, NaN])).to.deep.eql([]);

        });
        it.skip("Try an array with only correct values", function(){   
                
            expect(compact([true, 1, "cat"])).to.deep.eql([true, 1, "cat"]);


        });
        it.skip("Try an array with mixed values", function(){   
                
            expect(compact([0, 1, false, 2, '', 3])).to.deep.eql([1, 2, 3]);

        });

    });
});
 

