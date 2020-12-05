import clamp from '../repototest/COMP.SE.200-2020-assignment/src/clamp.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('clamp', function(){
    describe(`#Clamps number within the inclusive lower and upper bounds.`, function(){
        it("Try lower bound clamp", function(){   
                
            expect(clamp(-10, -5, 5)).to.deep.eql(-5);

        });
        it("Try upper bound clamp", function(){   
                
            expect(clamp(15, -5, 10)).to.deep.eql(15);

        });
        it("Try equal value clamp", function(){   
            expect(clamp(10, 10, 10)).to.deep.eql(10);
        });

    });
});
 

