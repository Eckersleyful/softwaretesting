import every from '../repototest/COMP.SE.200-2020-assignment/src/every.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('every', function(){
    describe('Checks if predicate function returns true for every element in array for the wanted type.', function(){
        it("Try if every value is a boolean", function(){   
                
            expect(every([true, 1, null, 'yes'], Boolean)).to.be.false;

        });
        it("Try with empty array", function(){   
                
            expect(every([], Boolean)).to.be.true;

        });

    });
});
 

