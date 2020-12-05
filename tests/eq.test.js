import eq from '../repototest/COMP.SE.200-2020-assignment/src/eq.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('eq', function(){
    describe('comparison between two values to determine if they are equivalent', function(){
        const object = { 'a': 1 }
        const other = { 'a': 1 }  
        it("Try with two loosely equal objects", function(){   
     
            expect(eq(object,other)).to.be.false;

        });
        it("Try with two strictly equal object", function(){   
                
            expect(eq(object, object)).to.be.true;

        });
        it("Try with two equal characters", function(){   
                
            expect(eq('a', 'a')).to.be.true

        });
        it("Try with char and object char", function(){   
                
            expect(eq('a', Object('a'))).to.be.true

        });
        it("Try with NaN", function(){   
                
            expect(eq(NaN, NaN)).to.be.true

        });

    });
});
 

