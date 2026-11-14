// Procedural stand-ins so audio works before NASA files are added.
const flashes=[];
export function drawFallback(ctx,w,h,t,key,year=2023){
 if(key==="night"){ctx.fillStyle="#02050c";ctx.fillRect(0,0,w,h);const c=60+(year-2012)*18;
  for(let i=0;i<c;i++){const x=(Math.sin(i*91.7)*.5+.5)*w,y=(Math.sin(i*37.3)*.5+.5)*h,p=.5+.5*Math.sin(t/900+i);
   const g=ctx.createRadialGradient(x,y,0,x,y,14);g.addColorStop(0,`rgba(255,${190+p*50|0},90,${.4+p*.6})`);g.addColorStop(1,"transparent");ctx.fillStyle=g;ctx.fillRect(x-14,y-14,28,28);}}
 else if(key==="sea"){for(let y=0;y<h;y+=8)for(let x=0;x<w;x+=8){const v=.5+.5*Math.sin(y/45+x/90+t/1800);ctx.fillStyle=`hsl(${210-v*210},85%,${30+v*25}%)`;ctx.fillRect(x,y,8,8);}}
 else{ctx.fillStyle="#03060e";ctx.fillRect(0,0,w,h);if(Math.random()<.05)flashes.push({x:Math.random()*w,y:Math.random()*h,a:1});
  for(const f of flashes){const g=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,90);g.addColorStop(0,`rgba(200,220,255,${f.a})`);g.addColorStop(1,"transparent");ctx.fillStyle=g;ctx.fillRect(f.x-90,f.y-90,180,180);f.a-=.12;}
  for(let i=flashes.length-1;i>=0;i--)if(flashes[i].a<=0)flashes.splice(i,1);}
}
