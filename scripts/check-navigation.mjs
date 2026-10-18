import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { strict as assert } from 'node:assert';
import { transformSync } from 'esbuild';
const code = transformSync(readFileSync('src/scrollToSection.ts', 'utf8'), { loader: 'ts', format: 'cjs' }).code;
for (const [name, heights, reduced] of [['desktop', [38, 96], false], ['mobile', [74, 96, 250], false], ['reduced motion', [38, 96], true]]) {
 let frame, result, replacements=0;
 const location={hash:'#hero',pathname:'/',search:'?campaign=test'};
 const state={retained:true};
 const context={exports:{},module:{exports:{}},requestAnimationFrame:fn=>frame=fn,
 document:{getElementById:id=>id==='missing'?null:{getBoundingClientRect:()=>({top:600})},querySelector:()=>({children:heights.map(height=>({getBoundingClientRect:()=>({height})}))})},
 getComputedStyle:()=>({paddingTop:'16px',borderTopWidth:'1px'}),
 window:{scrollY:400,location,history:{state,pushState:()=>assert.fail('Section navigation must not add history entries'),replaceState:(s,_,url)=>{assert.equal(s,state);assert.equal(url,'/?campaign=test');location.hash='';replacements++}},matchMedia:()=>({matches:reduced}),scrollTo:value=>result=value}};
 runInNewContext(code,context);const {scrollToSection,clearSectionHash}=context.module.exports;
 clearSectionHash();assert.equal(location.hash,'');assert.equal(replacements,1);
 clearSectionHash();assert.equal(replacements,1,'Clean URLs need no history mutation');
 for(const id of ['services','system','case-studies','about','contact','hero']){scrollToSection(id);assert.equal(location.hash,'');frame();assert.equal(result.top,id==='hero'?0:1000+17-heights[0]-heights[1]-24);assert.equal(result.behavior,reduced?'auto':'smooth');}
 assert.equal(replacements,1);console.log(`${name}: clean URL, history preservation and section offsets passed`);
}
