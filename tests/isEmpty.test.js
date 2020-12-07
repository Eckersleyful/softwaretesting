import isEmpty from '../repototest/COMP.SE.200-2020-assignment/src/isEmpty.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('isEmpty', function(){
    describe(`Checks if given value is is an empty object, collection, map, or set.`, function(){
        it("Try non-empty array", function(){   
           
            expect(isEmpty([1,2,3,4,5])).to.be.false;

        });
        it("Try empty array", function(){   
               
            expect(isEmpty([])).to.be.true;

        });    
        it("Try non-empty JSON", function(){   
           
            expect(isEmpty({a: 2, b: 2})).to.be.false;

        });
        it("Try empty JSON", function(){   
           
            expect(isEmpty({})).to.be.true;

        });
        it("Try a non-empty string (len>0)", function(){   
                
            expect(isEmpty('Mon April 23 2012')).to.be.false;

        });
        it("Try a empty string (len==0)", function(){   
                
            expect(isEmpty("")).to.be.true;

        });
        it("Try an integer", function(){   
                
            expect(isEmpty(2)).to.be.true;

        });
    });
});
 

