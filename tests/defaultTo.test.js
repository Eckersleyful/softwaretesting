import defaultTo from '../repototest/COMP.SE.200-2020-assignment/src/defaultTo.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe.skip('defaultTo', function(){
    describe(`Checks value to determine whether a default value should be returned in
    its place. The defaultValue is returned if value is NaN, null,
    or undefined`, function(){
        it("Try undefined", function(){   
                
            expect(defaultTo(undefined, 10)).to.deep.eql(10);

        });
        it("Try null", function(){   
                
            expect(defaultTo(null, 10)).to.deep.eql(10);

        });
        it("Try NaN", function(){   
                
            expect(defaultTo(NaN, 10)).to.deep.eql(10);

        });

    });
});
 

