import castArray from '../repototest/COMP.SE.200-2020-assignment/src/castArray.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('castArray', function(){
    describe('Casts and returns `value` as an array if its not one', function(){
        it("Try simple alphabetic character", function(){   
                
            expect(castArray("a")).to.deep.eql(["a"]);

        });
        it("Try simple numeric character", function(){   
                
            expect(castArray(2)).to.deep.eql([2]);

        });
        it("Try JSON object", function(){ 
              
            expect(castArray({ 'a': 1 })).to.deep.eql([{ 'a': 1 }]);
        });
        it.skip("Try empty parameter", function(){   
            expect(castArray()).to.deep.eql([]);
        });
        it("Try passing undefined as parameter", function(){   
            expect(castArray(undefined)).to.deep.eql([undefined]);
        });
        it("Try if the return value type equals to an array", function(){   
            expect(castArray(12)).to.be.an.instanceof(Array);
        });

    });
});
 

