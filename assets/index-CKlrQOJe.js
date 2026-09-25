(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://github.com/DanielCartesC`;document.querySelector(`#app`).innerHTML=`
  <header class="topbar">
    <a class="brand" href="#inicio" aria-label="Daniel Cartes, inicio"><span class="brand-mark">D</span><span>Daniel Cartes<span class="brand-dot">.</span></span></a>
    <nav aria-label="Navegación principal">
      <a href="#juegos">Mini juegos</a>
      <a href="#proyectos">Full stack</a>
      <a class="nav-github" href="${e}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero section-wrap" id="inicio">
      <div class="hero-copy">
        <div class="eyebrow"><span class="status-dot"></span> PORTAFOLIO PERSONAL <span class="eyebrow-line"></span> 2026</div>
        <h1>Hola, soy<br><span>Daniel Cartes.</span></h1>
        <p class="hero-lead">Construyo experiencias digitales con intención.<br>Ideas que funcionan, se sienten y se recuerdan.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#juegos">Explorar portafolio <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="${e}" target="_blank" rel="noreferrer">Ver mi GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-outer"></div><div class="orbit orbit-inner"></div>
        <div class="art-glow"></div>
        <span class="art-label label-top">CREATIVIDAD</span><span class="art-label label-bottom">× CÓDIGO</span>
        <span class="art-cross cross-one">+</span><span class="art-cross cross-two">+</span>
      </div>
      <a class="scroll-note" href="#juegos"><span class="scroll-line"></span> DESLIZA PARA EXPLORAR</a>
    </section>

    <section class="section-wrap games-section" id="juegos">
      <div class="section-heading">
        <div><div class="eyebrow"><span class="heading-index">01</span> ARCADE · MINI JUEGOS</div><h2>Mini <span>juegos.</span></h2></div>
        <p>Pequeños experimentos interactivos.<br>Este es el primero — ¿hasta dónde llegas?</p>
      </div>
      <article class="game-card">
        <div class="game-info">
          <div class="game-type"><span class="game-dot"></span> MINI JUEGO · 01</div>
          <h3>Salto al<br><span>infinito.</span></h3>
          <p>Salta cada vez más alto, recoge monedas doradas y esquiva a los enemigos. Tienes tres vidas: ¡que no te pillen!</p>
          <div class="game-controls"><span class="keycap">←</span><span class="keycap">→</span><span>flechas / A y D · móvil: mantén pulsado</span></div>
          <button class="button button-primary play-button" id="start-game" type="button">Jugar ahora <span aria-hidden="true">↗</span></button>
        </div>
        <div class="game-stage-wrap">
          <div class="stage-topline"><span>ARCADE / 001</span><div class="game-hud"><span class="score-label">PUNTOS <strong id="score">0000</strong></span><span class="coin-label">MONEDAS <strong id="coin-count">00</strong></span><span class="lives-label">VIDAS <strong id="lives">♥ ♥ ♥</strong></span></div></div>
          <div class="game-stage" id="game-stage" role="application" aria-label="Juego de saltos. Usa las flechas izquierda y derecha para mover al personaje.">
            <div class="stage-scanlines"></div>
            <div class="stage-hint" id="game-hint"><span class="hint-icon">↑</span><strong>Tu aventura empieza aquí</strong><small>Haz clic en Jugar ahora</small></div>
            <canvas id="game-canvas" aria-label="Área jugable"></canvas>
            <div class="mobile-controls" aria-label="Controles táctiles"><button type="button" id="move-left" aria-label="Mantener para mover a la izquierda">←</button><button type="button" id="move-right" aria-label="Mantener para mover a la derecha">→</button></div>
          </div>
          <div class="stage-bottomline"><span>MEJOR <strong id="best-score">0000</strong></span><span id="game-status">LISTO PARA JUGAR</span><button type="button" id="sound-toggle" class="sound-toggle" aria-label="Alternar sonido">♪ <span>SONIDO</span></button></div>
        </div>
      </article>
    </section>

    <section class="projects-section" id="proyectos"><div class="section-wrap projects-inner">
      <div class="section-heading">
        <div><div class="eyebrow"><span class="heading-index">02</span> LO QUE ESTOY CONSTRUYENDO</div><h2>Proyectos <span>full stack.</span></h2></div>
        <p>Aplicaciones de principio a fin.<br>Pronto, nuevos proyectos por aquí.</p>
      </div>
      <div class="empty-projects"><div class="empty-icon" aria-hidden="true">＋</div><div><strong>El próximo proyecto empieza con una idea.</strong><p>Este espacio está listo para lo que viene.</p></div><span class="empty-count">01 — ∞</span></div>
    </div></section>

    <section class="coming-soon section-wrap" aria-label="Próximamente"><span class="coming-star">✳</span><p>Y esto es solo el comienzo.<br><span>Más cosas increíbles, pronto.</span></p><span class="coming-line"></span></section>
  </main>

  <footer class="footer section-wrap"><a class="brand footer-brand" href="#inicio"><span class="brand-mark">D</span><span>Daniel Cartes<span class="brand-dot">.</span></span></a><span>Diseñado y construido con intención <span class="footer-heart">✳</span></span><a href="${e}" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
`;var t=document.querySelector(`#game-canvas`),n=t.getContext(`2d`),r=document.querySelector(`#game-stage`),i=document.querySelector(`#score`),a=document.querySelector(`#coin-count`),o=document.querySelector(`#lives`),s=document.querySelector(`#best-score`),c=document.querySelector(`#game-status`),l=document.querySelector(`#game-hint`),u=document.querySelector(`#start-game`),d={left:!1,right:!1},f=!1,p=0,m,h=[],g=[],_=[],v=0,y=0,b=3,x=Number(localStorage.getItem(`daniel-jump-best`)||0),S=0,C=0,w=0,T,E=!0;s.textContent=String(x).padStart(4,`0`);function D(){let e=r.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2);C=e.width,w=e.height,t.width=Math.round(C*i),t.height=Math.round(w*i),t.style.width=`${C}px`,t.style.height=`${w}px`,n.setTransform(i,0,0,i,0,0),f||N()}function O(){n.clearRect(0,0,C,w),n.strokeStyle=`rgba(227, 189, 120, 0.055)`,n.lineWidth=1;let e=v*.24%36;for(let t=18;t<C;t+=36)for(let r=(18+e)%36;r<w;r+=36)n.beginPath(),n.arc(t,r,1,0,Math.PI*2),n.stroke()}function k(e){n.fillStyle=`rgba(215, 174, 102, 0.12)`,n.shadowColor=`rgba(222, 183, 116, 0.34)`,n.shadowBlur=12,n.beginPath(),n.roundRect(e.x,e.y,e.w,7,4),n.fill(),n.shadowBlur=0,n.fillStyle=`#d6b57d`,n.beginPath(),n.roundRect(e.x+2,e.y,e.w-4,3,2),n.fill()}function A(e,t){let r=1+Math.sin(t/180+e.phase)*.12;n.save(),n.translate(e.x,e.y),n.scale(r,1),n.shadowColor=`rgba(255, 199, 87, 0.72)`,n.shadowBlur=15,n.fillStyle=`#f1c96e`,n.beginPath(),n.arc(0,0,8,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.strokeStyle=`#fff0bd`,n.lineWidth=1.5,n.beginPath(),n.arc(0,0,4,0,Math.PI*2),n.stroke(),n.restore()}function j(e){n.save(),n.translate(e.x,e.y),n.shadowColor=`rgba(172, 112, 201, 0.45)`,n.shadowBlur=13,n.fillStyle=`#9a72b0`,n.beginPath(),n.arc(0,0,11,Math.PI,0),n.quadraticCurveTo(12,10,8,8),n.lineTo(4,11),n.lineTo(0,8),n.lineTo(-4,11),n.lineTo(-8,8),n.quadraticCurveTo(-12,10,-11,0),n.closePath(),n.fill(),n.shadowBlur=0,n.fillStyle=`#211a27`,n.beginPath(),n.arc(-4,-1,1.5,0,Math.PI*2),n.arc(4,-1,1.5,0,Math.PI*2),n.fill(),n.restore()}function M(){let{x:e,y:t}=m;n.shadowColor=`rgba(226, 193, 132, 0.45)`,n.shadowBlur=18,n.fillStyle=`#e8c98e`,n.beginPath(),n.roundRect(e-11,t-12,22,25,8),n.fill(),n.shadowBlur=0,n.fillStyle=`#292219`,n.beginPath(),n.arc(e-4,t-3,1.5,0,Math.PI*2),n.arc(e+4,t-3,1.5,0,Math.PI*2),n.fill(),n.strokeStyle=`#8f734d`,n.lineWidth=1.5,n.beginPath(),n.arc(e,t+1,3,.15,Math.PI-.15),n.stroke()}function N(e=performance.now()){if(!C||!w)return;O();let t=w-52;k({x:C*.38,y:t,w:C*.24}),k({x:C*.17,y:t-89,w:C*.22}),k({x:C*.6,y:t-168,w:C*.22}),A({x:C*.28,y:t-112,phase:0},e),A({x:C*.7,y:t-191,phase:1},e),j({x:C*.53,y:t-10}),m={x:C*.5,y:t-18},M()}function P(e,t=Math.random()*Math.max(20,C-78),n=54+Math.random()*22){let r={x:t,y:e,w:n};if(h.push(r),Math.random()<.78&&g.push({x:t+12+Math.random()*Math.max(5,n-24),y:e-20,phase:Math.random()*Math.PI*2,collected:!1}),v>180&&Math.random()<Math.min(.42,.18+v/3e3)){let r=t+12,i=Math.max(r,t+n-12);_.push({x:r+Math.random()*(i-r),y:e-12,minX:r,maxX:i,direction:Math.random()<.5?-1:1,speed:.55+Math.random()*.45,active:!0})}return r}function F(){v=0,y=0,b=3,g=[],_=[],i.textContent=`0000`,a.textContent=`00`,o.textContent=`♥ ♥ ♥`,m={x:C/2,y:w-80,vy:-5,vx:0,invulnerable:0},h=[{x:C/2-45,y:w-48,w:90}];let e=w-125;for(;e>-w;)P(e),e-=62+Math.random()*22}function I(e=520,t=.07){if(!T||!E)return;let n=T.createOscillator(),r=T.createGain();n.type=`sine`,n.frequency.value=e,r.gain.setValueAtTime(.055,T.currentTime),r.gain.exponentialRampToValueAtTime(.001,T.currentTime+t),n.connect(r),r.connect(T.destination),n.start(),n.stop(T.currentTime+t)}function L(){f=!1,cancelAnimationFrame(p),c.textContent=`FIN DE LA PARTIDA`,u.innerHTML=`Intentar de nuevo <span aria-hidden="true">↗</span>`,l.hidden=!1,l.innerHTML=`<span class="hint-icon">✦</span><strong>¡${v} puntos!</strong><small>${y} monedas · Haz clic para intentarlo otra vez</small>`,v>x&&(x=v,localStorage.setItem(`daniel-jump-best`,String(x)),s.textContent=String(x).padStart(4,`0`)),N()}function R(){if(!(m.invulnerable>0)){if(--b,o.textContent=`♥ `.repeat(Math.max(0,b)).trim()||`—`,I(190,.18),b<=0){L();return}c.textContent=`¡CUIDADO! TE QUEDAN `+b,m.invulnerable=72,m.vy=-5.8}}function z(e){if(!f)return;let t=Math.min((e-S)/16.67||1,2);S=e;let n=Math.min(4.8,C*.011);m.vx=(d.right?n:0)-(d.left?n:0),m.x+=m.vx*t,m.x<-10&&(m.x=C+10),m.x>C+10&&(m.x=-10),m.vy+=.18*t,m.invulnerable>0&&(m.invulnerable-=t);let r=m.y;if(m.y+=m.vy*t,m.vy>0)for(let e of h){let t=r+12<=e.y,n=m.y+12>=e.y,i=m.x+8>e.x&&m.x-8<e.x+e.w;if(t&&n&&i){m.y=e.y-12,m.vy=-6.2,I(560+Math.random()*140);break}}for(let e of g){if(e.collected)continue;let t=m.x-e.x,n=m.y-e.y;t*t+n*n<400&&(e.collected=!0,y+=1,v+=100,i.textContent=String(v).padStart(4,`0`),a.textContent=String(y).padStart(2,`0`),c.textContent=`¡MONEDA DORADA!`,I(880,.13))}for(let e of _){if(!e.active)continue;e.x+=e.direction*e.speed*t,(e.x<=e.minX||e.x>=e.maxX)&&(e.direction*=-1);let n=m.x-e.x,r=m.y-e.y;if(n*n+r*r<484&&m.invulnerable<=0&&(e.active=!1,R(),!f))return}if(m.y<w*.43&&m.vy<0){let e=w*.43-m.y;m.y=w*.43,v+=Math.round(e),i.textContent=String(v).padStart(4,`0`);for(let t of h)t.y+=e;for(let t of g)t.y+=e;for(let t of _)t.y+=e;for(h=h.filter(e=>e.y<w+12),g=g.filter(e=>!e.collected&&e.y<w+14),_=_.filter(e=>e.active&&e.y<w+16);Math.min(...h.map(e=>e.y))>-8;)P(Math.min(...h.map(e=>e.y))-(64+Math.random()*22))}if(m.y-15>w){if(R(),!f)return;m.x=C/2,m.y=w*.72,h.push({x:Math.max(0,Math.min(C-84,m.x-42)),y:m.y+14,w:84})}O(),h.forEach(k),g.forEach(t=>{t.collected||A(t,e)}),_.forEach(e=>{e.active&&j(e)}),(m.invulnerable<=0||Math.floor(e/90)%2==0)&&M(),p=requestAnimationFrame(z)}function B(){C||D(),f=!0,l.hidden=!0,c.textContent=`¡A SALTAR!`,u.innerHTML=`Partida en curso <span aria-hidden="true">●</span>`,F(),S=performance.now(),p=requestAnimationFrame(z),T||=new(window.AudioContext||window.webkitAudioContext),T.resume()}u.addEventListener(`click`,B),window.addEventListener(`resize`,D),window.addEventListener(`keydown`,e=>{[`ArrowLeft`,`ArrowRight`,` `].includes(e.key)&&e.preventDefault(),(e.key===`ArrowLeft`||e.key.toLowerCase()===`a`)&&(d.left=!0),(e.key===`ArrowRight`||e.key.toLowerCase()===`d`)&&(d.right=!0),e.key===` `&&!f&&B()}),window.addEventListener(`keyup`,e=>{(e.key===`ArrowLeft`||e.key.toLowerCase()===`a`)&&(d.left=!1),(e.key===`ArrowRight`||e.key.toLowerCase()===`d`)&&(d.right=!1)}),window.addEventListener(`blur`,()=>{d.left=!1,d.right=!1});for(let[e,t]of[[`move-left`,`left`],[`move-right`,`right`]]){let n=document.querySelector(`#${e}`);n.addEventListener(`pointerdown`,e=>{e.preventDefault(),n.setPointerCapture(e.pointerId),d[t]=!0});let r=e=>{n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),d[t]=!1};n.addEventListener(`pointerup`,r),n.addEventListener(`pointercancel`,r),n.addEventListener(`lostpointercapture`,()=>{d[t]=!1})}document.querySelector(`#sound-toggle`).addEventListener(`click`,e=>{let t=e.currentTarget;E=!E,t.setAttribute(`aria-pressed`,String(!E)),t.classList.toggle(`muted`,!E),t.querySelector(`span`).textContent=E?`SONIDO`:`SILENCIO`,T&&(E?T.resume():T.suspend())}),D();