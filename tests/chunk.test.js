import chunk from '../repototest/COMP.SE.200-2020-assignment/src/chunk.js';
import pkg from "chai";
import mocha from "mocha";
const {done} = mocha
const { expect, assert } = pkg;


describe('chunk', function(){
    describe(`#Creates an array of elements split into groups the length of size
    If array cant be split evenly, the final chunk will be the remaining
    elements`, function(){
        it("Try creating chunks that split evenly", function(done){   
            try{
                expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.eql([['a', 'b'], ['c', 'd']]);
                done()
            }
            catch(e){
                done(e)
            }

        });
        it.skip("Try creating chunks that split unevenly", function(){   
                
            expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.eql([['a', 'b', 'c'], ['d']]);
            

        });
        it.skip("Try creating chunk of equal size to the array", function(){   
                
            expect(chunk(['a', 'b', 'c', 'd'], 4)).to.deep.eql([['a', 'b', 'c']]);

        });
        it("Try passing empty array with zero sized chunks", function(){   
            expect(chunk([], 0)).to.eql([]);
        });

    });
});
 

