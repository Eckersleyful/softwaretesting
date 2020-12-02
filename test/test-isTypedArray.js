import isTypedArray from '../repototest/COMP.SE.200-2020-assignment/src/isTypedArray.js';
import assert from 'assert';
import expect from 'chai';


describe('isTypedArray', function(){
   describe('#yesTypedArray', function(){
      it("True if is typed array", function(){   
         const typedArray1 = new Int8Array(8);
         typedArray1[0] = 45;
         assert.strictEqual(isTypedArray(typedArray1),true);
     });
   });
   
   describe('#noTypedArray', function(){
      it("False if is not a typed array", function(){   
         assert.strictEqual(isTypedArray("Gabbage is a horse."),false);
      });
   });
});