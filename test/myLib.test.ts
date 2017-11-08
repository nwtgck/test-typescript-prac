import {myAdd}       from "../src/myLib"
import * as assert  from 'power-assert'

describe("myLib", ()=>{
    context("myAdd", ()=>{

        it("should return added number", ()=>{
           assert.equal(myAdd(2, 3), 5);
           assert.equal(myAdd(-1, 2), 1);
        });
    });
});