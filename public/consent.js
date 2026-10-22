(() => {
  const KEY='msp-cookie-preferences', DENY='msp-analytics-denied', MARK='|msp-analytics-denied|', ID='G-HXM22WWPKP';
  const es=!document.documentElement.lang.startsWith('en');
  function denied(){
    if(window.__mspDenied)return true;
    try{if(sessionStorage.getItem(DENY)==='1')return true;}catch{return true;}
    try{return window.name.includes(MARK);}catch{return true;}
  }
  function markDeny(){
    window.__mspDenied=true;window['ga-disable-'+ID]=true;
    let retained=false;
    try{sessionStorage.setItem(DENY,'1');retained=sessionStorage.getItem(DENY)==='1';}catch{}
    try{window.name=window.name.split(MARK).join('')+MARK;retained=window.name.includes(MARK)||retained;}catch{}
    return retained;
  }
  function clearDeny(){
    // Verify a tab-local refusal can be cleared before publishing a shared grant.
    sessionStorage.removeItem(DENY);
    if(sessionStorage.getItem(DENY)==='1')throw Error('Session refusal remains');
    window.name=window.name.split(MARK).join('');
    if(window.name.includes(MARK))throw Error('Tab refusal remains');
  }
  function read(){
    if(denied())return null;
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||'null');
      localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');
      return saved&&typeof saved.analytics==='boolean'?saved:null;
    }catch{return null;}
  }
  let active=false,retainedDenial=false;
  function apply(grant){
    active=grant===true;window['ga-disable-'+ID]=!active;
    if(!active){window.gtag?.('consent','update',{analytics_storage:'denied'});return;}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    if(document.getElementById('msp-ga4')){window.gtag('consent','update',{analytics_storage:'granted'});return;}
    window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    const script=document.createElement('script');script.id='msp-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
  }
  function save(analytics){
    analytics=analytics===true;
    if(!analytics){retainedDenial=markDeny();apply(false);}
    try{
      if(analytics){clearDeny();localStorage.getItem(KEY);localStorage.setItem(KEY+'-write-check','1');localStorage.removeItem(KEY+'-write-check');}
      localStorage.setItem(KEY,JSON.stringify({necessary:true,analytics,preferences:false,marketing:false}));
      if(analytics)window.__mspDenied=false;
      if(analytics&&read()?.analytics!==true)throw Error('Grant could not be confirmed');
      apply(analytics);return true;
    }catch{
      // A failed grant must not leave a shared allow value for a healthy second tab.
      try{localStorage.setItem(KEY,JSON.stringify({necessary:true,analytics:false,preferences:false,marketing:false}));}catch{}
      retainedDenial=markDeny();apply(false);return false;
    }
  }
  window.mspConsent={read,save};
  apply(read()?.analytics===true);
  const checkbox=document.getElementById('analytics'),status=document.getElementById('status');
  const stateText=()=>active?(es?'Google Analytics está activado en esta pestaña.':'Google Analytics is on in this tab.'):(es?'Google Analytics está desactivado en esta pestaña.':'Google Analytics is off in this tab.');
  if(checkbox)checkbox.checked=active;
  function choose(value){
    const stored=save(value);
    if(checkbox)checkbox.checked=active;
    if(status)status.textContent=stored
      ?(es?'Elección guardada. ':'Choice saved. ')+stateText()+(value&&!active?(es?' No se pudo confirmar el almacenamiento del navegador.':' Browser storage could not be confirmed.'):'')
      :retainedDenial
        ?(es?'Google Analytics está desactivado en esta pestaña; la negativa se mantiene al navegar o recargar en esta pestaña. No se pudo guardar una elección permanente: otras pestañas pueden conservar una autorización anterior. Para eliminarla, borra los datos del sitio en el navegador.':'Google Analytics is off in this tab; refusal is retained when navigating or reloading in this tab. A permanent choice could not be saved: other tabs may retain an earlier grant. Clear site data in the browser to remove it.')
        :(es?'Google Analytics está desactivado en esta página. No se pudo guardar la elección. Borra los datos del sitio antes de navegar o recargar.':'Google Analytics is off on this page. The choice could not be saved. Clear site data before navigating or reloading.');
  }
  checkbox?.addEventListener('change',()=>{if(status)status.textContent='';});
  document.getElementById('cookie-form')?.addEventListener('submit',event=>{event.preventDefault();choose(checkbox?.checked===true);});
  document.getElementById('reject')?.addEventListener('click',()=>choose(false));
  window.addEventListener('storage',event=>{
    if(event.key!==KEY&&event.key!==null)return;
    let grant=false;try{grant=JSON.parse(event.newValue||'null')?.analytics===true;}catch{}
    if(!grant)markDeny();
    apply(read()?.analytics===true);
    if(checkbox)checkbox.checked=active;
    if(status)status.textContent=stateText();
  });
})();
