import isDate from '../repototest/COMP.SE.200-2020-assignment/src/isDate.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isDate', function(){
    describe(`Checks if given value is a date object`, function(){
        it("Try non-Date object", function(){   
            var x = new Float32Array(32.0);
            expect(isDate(x)).to.be.false;

        });
        it("Try Date object", function(){   
               
            expect(isDate(new Date())).to.be.true;

        });    
        it("Try undefined", function(){   
                
            expect(isDate(undefined)).to.be.false;

        });   
        it("Try null", function(){   
                
            expect(isDate(null)).to.be.false;

        }); 
        it("Try date formated string", function(){   
                
            expect(isDate('Mon April 23 2012')).to.be.false;

        });     
    });
});
 

