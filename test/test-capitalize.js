import doCapitalize from '../repototest/COMP.SE.200-2020-assignment/src/capitalize.js';
import assert from 'assert';
import expect from 'chai';


describe('capitalizeFunction', function(){
   describe('#allBig', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("GABBAGE"),"Gabbage");
     });
   });
    
   describe('#allSmall', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gabbage"),"Gabbage");
     });
   });

   describe('#partBig', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gaBBAge"),"Gabbage");
     });
   });
   
   describe('#partNumber', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gabbag3"),"Gabbag3");
     });
   });

   describe('#partSpace', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gabbage is great success"),"Gabbage is great success");
     });
   });   
   
});

