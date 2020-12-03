import isZero from '../repototest/COMP.SE.200-2020-assignment/src/testZero.js';
import assert from 'assert';
import expect from 'chai';


describe('isEqual', function(){
    describe('#something', function(){
        it("True if 1 = 1", function(){   
            assert.strictEqual(1,1);
            
        });
    });
});


describe('isValueZero', function(){
    describe('#something', function(){
        it("True if parameter is zero", function(){   
            assert.strictEqual(true, isZero(0));
            
        });
    });
});