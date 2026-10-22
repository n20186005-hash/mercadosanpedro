(() => {
 const en=document.documentElement.lang.startsWith('en'),locale=en?'en-US':'es-PE';
 const byId=id=>document.getElementById(id);
 const number=n=>Number.isFinite(n)?new Intl.NumberFormat(locale,{maximumFractionDigits:1}).format(n):'–';
 const rounded=n=>Number.isFinite(n)?new Intl.NumberFormat(locale,{maximumFractionDigits:0}).format(n):'–';
 const direction=d=>Number.isFinite(d)?(en?['N','NE','E','SE','S','SW','W','NW']:['N','NE','E','SE','S','SO','O','NO'])[Math.round(((d%360)+360)%360/45)%8]:'–';
 function element(tag,text,className){const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
 function render(data){
  if(!Number.isFinite(data?.current?.temp)||!Array.isArray(data.daily)||!data.daily.length)throw Error('Incomplete forecast');
  const c=data.current;
  byId('w-now').textContent=rounded(c.temp)+' °C';
  byId('w-now-cond').textContent=(c.glyph||'')+' '+(c.condLabel||'')+(c.isDay===false?(en?' (night)':' (noche)'):'');
  const details=byId('w-now-details');details.replaceChildren();
  const labels=en?['Feels like','Humidity','Wind','Precipitation']:['Sensación','Humedad','Viento','Precipitación'];
  const values=[rounded(c.feels)+' °C',rounded(c.humidity)+' %',rounded(c.wind)+' km/h '+direction(c.windDir),number(c.precip)+' mm'];
  labels.forEach((label,i)=>{const row=element('div','');row.append(element('dt',label,'weather-label'),element('dd',values[i],'weather-value'));details.append(row);});
  byId('w-updated').textContent=(en?'Model data time: ':'Hora del dato modelado: ')+(data.updated||'–')+' · '+(data.timezone||'–');
  const a=data.advisory||{};
  for(const key of ['travel','play','items']){
   const list=byId('w-'+key),items=Array.isArray(a[key])?a[key]:[];list.replaceChildren();byId('blk-'+key).hidden=!items.length;
   for(const text of items)list.append(element('li','• '+text));
  }
  const risk=byId('w-risk');risk.replaceChildren();risk.hidden=!a.risk?.length;
  for(const text of a.risk||[])risk.append(element('p','• '+text));
  const daily=byId('w-daily');daily.replaceChildren();
  for(const day of data.daily){
   const li=element('li','','weather-day');
   const date=new Date(day.date+'T12:00:00');
   const label=Number.isFinite(date.getTime())?date.toLocaleDateString(locale,{weekday:'short',day:'numeric',month:'short'}):day.date;
   li.append(element('span',label,'weather-date'),element('span',(day.glyph||'')+' '+(day.condLabel||''),'weather-condition'),element('span',rounded(day.tmax)+'° / '+rounded(day.tmin)+'°','weather-value'),element('span',(en?'Rain ':'Lluvia ')+rounded(day.precipProb)+' %','weather-rain'));
   daily.append(li);
  }
 }
 async function load(){
  try{const response=await fetch('/api/weather?lang='+(en?'en':'es'));if(!response.ok)throw Error('Unavailable');render(await response.json());byId('w-content').hidden=false;}
  catch{byId('w-content').hidden=true;byId('w-error').hidden=false;}
  finally{byId('w-loading')?.remove();}
 }
 load();
})();
