import words from '../repototest/COMP.SE.200-2020-assignment/src/words.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('words', function(){
    describe(`Used to match words composed of alphanumeric characters.`, function(){
        it("Try without passing regex", function(){   
                
            expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);

        });
        it("Try with passing regex", function(){   
                
            expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);

        });



    });
});
 

