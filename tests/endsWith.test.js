import endsWith from '../repototest/COMP.SE.200-2020-assignment/src/endsWith.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('endsWith', function(){
    describe('Checks if string ends with the given target string.', function(){
        it("Try with correct ending string", function(){   
                
            expect(endsWith('abc', 'c')).to.be.true;

        });
        it("Try with wrong ending string", function(){   
                
            expect(endsWith('abc', 'b')).to.be.false;

        });
        it("Try with the third parameter to specify on which index to stop looking", function(){   
                
            expect(endsWith('abc', 'b', 2)).to.be.true

        });
        it("Try with correct longer ending string and whitespace", function(){   
                
            expect(endsWith('Cat went to the sauna', 'sauna')).to.be.true

        });

    });
});
 

