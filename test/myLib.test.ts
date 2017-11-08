import {myAdd, stringTimes} from "../src/myLib"
import * as assert  from 'power-assert'

describe("myLib", ()=>{
    context("myAdd", ()=>{

        it("should return added number", ()=>{
           assert.equal(myAdd(2, 3), 5);
           assert.equal(myAdd(-1, 2), 1);
        });
    });

    context("stringTimes", ()=>{

        it("should return repeated string 'aaa'", ()=>{
            assert.equal(stringTimes('a', 3), 'aaa');
        });


        it("should return repeated string 'hellohellohellohellohello'", ()=>{
            assert.equal(stringTimes('hello', 5), 'hellohellohellohellohello');
        });
    });

});