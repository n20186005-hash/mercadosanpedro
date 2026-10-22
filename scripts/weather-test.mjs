import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';import {stripTypeScriptTypes} from 'node:module';
const worker=(await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(fs.readFileSync('src/worker.ts','utf8'))).toString('base64'))).default;
const current={time:'2026-10-22T12:00',temperature_2m:14.3,relative_humidity_2m:55,apparent_temperature:12.4,precipitation:0.2,is_day:0,weather_code:63,wind_speed_10m:15,wind_direction_10m:270};
const daily={time:Array.from({length:7},(_,i)=>'2026-10-'+(22+i)),weather_code:[63,0,95,3,1,2,61],temperature_2m_max:[18,19,18,18,18,19,18],temperature_2m_min:[4,4,4,4,4,4,4],precipitation_probability_max:[75,0,90,20,20,20,50],precipitation_sum:[3,0,9,1,1,1,2],wind_speed_10m_max:[20,20,20,20,20,20,20],uv_index_max:[8,8,8,8,8,8,8]};
let mode='ok',calls=0,requests=[];globalThis.caches={default:{match:async()=>undefined,put:async()=>{}}};globalThis.fetch=async url=>{calls++;requests.push(new URL(url));if(mode==='throw')throw Error('network');if(mode==='badjson')return new Response('{');if(mode==='incomplete')return Response.json({current:{},daily:{}});return Response.json({timezone:'America/Lima',current,daily});};
const pending=[],ctx={waitUntil:p=>pending.push(p)},env={ASSETS:{fetch:async()=>new Response('unused')}};
const payloads={};
for(const lang of ['es','en']){const response=await worker.fetch(new Request('https://mercadosanpedro.com/api/weather?lang='+lang),env,ctx);assert.equal(response.status,200);payloads[lang]=await response.json();assert.equal(payloads[lang].daily.length,7);assert.equal(payloads[lang].current.temp,14.3);assert.equal(payloads[lang].timezone,'America/Lima');assert.match(payloads[lang].current.condLabel,lang==='en'?/Rain/:/Lluvia/);assert.equal(requests.at(-1).searchParams.get('latitude'),'-13.5209577');assert.equal(requests.at(-1).searchParams.get('wind_speed_unit'),'kmh');}
for(const failure of ['throw','badjson','incomplete']){mode=failure;const response=await worker.fetch(new Request('https://mercadosanpedro.com/api/weather'),env,ctx);assert.equal(response.status,502);assert((await response.json()).error);}
await Promise.all(pending);
const code=fs.readFileSync('dist/weather.js','utf8');assert.equal(code,fs.readFileSync('public/weather.js','utf8'));
class Element{constructor(){this.children=[];this.textContent='';this.hidden=false;this.className='';}replaceChildren(){this.children=[];}append(...items){this.children.push(...items);}remove(){this.removed=true;}}
function allText(el){return el.textContent+' '+el.children.map(allText).join(' ');}
let rendered=0;
for(const lang of ['es','en'])for(const state of ['ok','http','invalid']){
 const ids=Object.fromEntries(['w-now','w-now-cond','w-now-details','w-updated','w-daily','w-travel','w-play','w-items','w-risk','blk-travel','blk-play','blk-items','w-loading','w-content','w-error'].map(id=>[id,new Element()]));ids['w-content'].hidden=true;ids['w-error'].hidden=true;
 const document={documentElement:{lang:lang==='es'?'es-PE':'en'},getElementById:id=>ids[id],createElement:()=>new Element()};
 let request;vm.runInNewContext(code,{document,Intl,Date,fetch:async url=>{request=url;return {ok:state!=='http',json:async()=>state==='invalid'?{}:payloads[lang]};}});
 await new Promise(resolve=>setImmediate(resolve));assert.equal(request,'/api/weather?lang='+lang);assert(ids['w-loading'].removed);
 if(state==='ok'){
  assert.equal(ids['w-content'].hidden,false);assert.equal(ids['w-error'].hidden,true);assert.equal(ids['w-now'].textContent,'14 °C');assert.match(allText(ids['w-now-details']),lang==='en'?/Feels like.*Humidity.*Wind.*W.*Precipitation.*0.2 mm/:/Sensación.*Humedad.*Viento.*O.*Precipitación.*0.2 mm/);assert.match(ids['w-now-cond'].textContent,lang==='en'?/night/:/noche/);assert.equal(ids['w-daily'].children.length,7);assert.match(allText(ids['w-daily']),lang==='en'?/Rain 75 %/:/Lluvia 75 %/);assert.match(ids['w-updated'].textContent,/2026-10-22T12:00.*America\/Lima/);assert(ids['w-travel'].children.length);
 }else{assert.equal(ids['w-content'].hidden,true);assert.equal(ids['w-error'].hidden,false);}
 const html=fs.readFileSync(lang==='es'?'dist/index.html':'dist/en/index.html','utf8');assert.match(html,/<script[^>]*\bdefer\b[^>]*src="\/weather.js"/);assert(html.includes('w-error')&&html.includes('SENAMHI'));
 rendered++;
}
const css=fs.readdirSync('dist/_astro').filter(n=>n.endsWith('.css')).map(n=>fs.readFileSync('dist/_astro/'+n,'utf8')).join('');for(const selector of ['.weather-label','.weather-value','.weather-day','.weather-condition'])assert(css.includes(selector));
console.log(JSON.stringify({result:'PASS',workerUpstreamCases:calls,clientLocaleStates:rendered,coverage:'Actual Worker transform with explicit deterministic upstream fixtures, invalid JSON/network/incomplete failures; exact built weather.js callback with Worker payload in ES/EN, units, wind directions, decimal localisation, timestamp, seven days, loading/error fallback and shipped same-origin selectors.',limits:'DOM fixture does not establish computed browser geometry or live API rendering. Official warnings and telemetry are not simulated as facts.'}));
