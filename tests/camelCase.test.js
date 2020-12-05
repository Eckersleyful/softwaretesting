import camelCase from '../repototest/COMP.SE.200-2020-assignment/src/camelCase.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe.skip('camelCase', function(){
    describe('#Converts string into camelcase, (camelExample). All non-alphabetic characters are omitted', function(){
        it("Try example string without additional chars", function(){   
                
            expect(camelCase("camel me")).to.eql("camelMe");

        });
        it("Try string with additional chars", function(){   
            expect(camelCase("-camel -me--")).to.eql("camelMe");
        });
        it("Try capitalized string with additional chars", function(){   
            expect(camelCase("-CAMEL -ME--")).to.eql("camelMe");

        });

    });
});
 

