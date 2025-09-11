/* 背景粒子 + 轻交互 */
const c = document.getElementById('bg');
const ctx = c.getContext('2d');
let w, h, dpr, dots;

function resize(){
  dpr = Math.min(2, window.devicePixelRatio || 1);
  w = c.width = innerWidth * dpr;
  h = c.height = innerHeight * dpr;
  c.style.width = innerWidth + 'px';
  c.style.height = innerHeight + 'px';
  initDots();
}
function initDots(){
  const count = Math.floor(Math.min(140, (w*h)/(16000*dpr)));
  dots = Array.from({length:count}).map(()=>({
    x: Math.random()*w,
    y: Math.random()*h,
    vx: (Math.random()-.5)*0.25*dpr,
    vy: (Math.random()-.5)*0.25*dpr
  }));
}

function step(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = 'rgba(124,247,255,0.6)';
  ctx.strokeStyle = 'rgba(124,247,255,0.15)';
  for(const p of dots){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
  }
  // draw links
  for(let i=0;i<dots.length;i++){
    for(let j=i+1;j<dots.length;j++){
      const a=dots[i], b=dots[j];
      const dx=a.x-b.x, dy=a.y-b.y;
      const dist = Math.hypot(dx,dy);
      if(dist < 140*dpr){
        ctx.globalAlpha = (1 - dist/(140*dpr))*0.8;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
  for(const p of dots){
    ctx.beginPath(); ctx.arc(p.x,p.y,1.6*dpr,0,Math.PI*2); ctx.fill();
  }
  requestAnimationFrame(step);
}

addEventListener('resize', resize);
resize();
step();

/* 表单本地模拟提交 */
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(form);
  const name = fd.get('name');
  if(!fd.get('email') || !fd.get('message')){
    toast.textContent = '请填写必填项（邮箱与需求）';
    return;
    }
  toast.textContent = `感谢${name || '您'}的提交，我们会尽快联系！`;
  form.reset();
});

/* 年份自动更新 */
document.getElementById('year').textContent = new Date().getFullYear();