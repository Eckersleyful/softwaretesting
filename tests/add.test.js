import add from '../repototest/COMP.SE.200-2020-assignment/src/add.js';
import expect from 'chai';
import pkg from "chai";
const { expect, assert } = pkg;

describe('add', function(){
    describe('#adding two positive values', function(){
        it("Try passing 1+1 = 2", function(){   
           expect(add(1,1).to.eql(2));
            
        });
    });
});


describe('add', function(){
    describe('#adding two negative values', function(){
        it("Try passing -1-1 = -2", function(){   
            expect(add(-1,-1).to.eql(-2));
        });
    });
});