import {test} from 'node:test';
import assert from 'node:assert/strict';
import {units,protocols,series,change} from './dist/data.mjs';
test('USDC ERC20 six decimals are independent from native decimals',()=>assert.equal(units('0x3b9aca00',6),1000));
test('Arc-only balances, zero retained, curator overlap marked',()=>{const p=protocols([{name:'Morpho',slug:'m',category:'Lending',chainTvls:{Arc:20,Ethereum:900}},{name:'Curator',slug:'c',category:'Risk Curators',chainTvls:{Arc:15}},{name:'Other',chainTvls:{Ethereum:70}},{name:'Zero',slug:'z',category:'Dexs',chainTvls:{Arc:0}}]); assert.equal(p.length,3);assert.equal(p[0].tvl,20);assert.equal(p[1].overlap,true);assert.equal(p[2].tvl,0)});
test('missing amounts never become zero',()=>assert.deepEqual(series([{date:'123',totalCirculating:{}},{date:'124',totalCirculating:{peggedUSD:0}}]),[{date:124,value:0}]));
test('change handles zero reference',()=>{assert.equal(change(2,0),null);assert.equal(change(110,100),10)});
