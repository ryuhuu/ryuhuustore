
(()=>{const dock=document.getElementById('mobile-dock');if(!dock)return;
let previousY=Math.max(0,scrollY),travel=0,direction=0,pending=false;
function reset(){dock.classList.remove('is-compact');previousY=Math.max(0,scrollY);travel=0;direction=0}
function update(){pending=false;const y=Math.max(0,Math.min(scrollY,document.documentElement.scrollHeight-innerHeight));const delta=y-previousY;previousY=y;if(y<24){reset();return}if(Math.abs(delta)<1)return;const next=Math.sign(delta);travel=next===direction?travel+Math.abs(delta):Math.abs(delta);direction=next;if(travel>=14)dock.classList.toggle('is-compact',direction>0&&y>64)}
addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});addEventListener('pageshow',reset);matchMedia('(max-width:767px)').addEventListener('change',reset);
const badge=document.querySelector('#navbar .cart-count');const target=document.getElementById('dock-cart-count');function sync(){const count=Number(badge?.textContent)||0;target.hidden=!count;target.textContent=count>99?'99+':count}if(badge)new MutationObserver(sync).observe(badge,{childList:true,characterData:true,subtree:true});sync();
})();
