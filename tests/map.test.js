import reduce from '../repototest/COMP.SE.200-2020-assignment/src/reduce.js';
import pkg from "chai";
const { expect, assert } = pkg;


describe('reduce', function(){
    describe(`Reduces collection to a value which is the accumulated result of running
    each element in collection thru iteratee, where each successive
    invocation is supplied the return value of the previous. If accumulator
    is not given, the first element of collection is used as the initial
    value. The iteratee is invoked with four arguments:
    (accumulator, value, index|key, collection)`
    ,function(){
        it("Try reducing 1,2 with sum function", function(){   
           
            expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.deep.equal(3)

        });
        it("Try reducing object with by swapping key-value pairs", function(){   
           
            expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                (result[value] || (result[value] = [])).push(key)
                return result
                }, {})).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })

        });
           
    });
});
 
