// Samples a w*h canvas: brightness, warm ratio, flash delta, avg RGB, hot-pixel density. zone: null|0|1|2 (N/Equator/S)
export function analyze(ctx,w,h,prev,zone=null){
 const d=ctx.getImageData(0,0,w,h).data;let R=0,G=0,B=0,n=0,hot=0,L=0;
 for(let y=0;y<h;y++){const zi=Math.min(2,Math.floor(y/(h/3)));if(zone!==null&&zi!==zone)continue;
  for(let x=0;x<w;x++){const i=(y*w+x)*4,r=d[i],g=d[i+1],b=d[i+2];R+=r;G+=g;B+=b;n++;L+=(.2126*r+.7152*g+.0722*b)/255;if(r>g+30&&r>b+30)hot++;}}
 n=n||1;const bright=L/n,warm=R/(R+B+1);
 return{bright,warm,delta:Math.max(0,bright-prev),rgb:[R/n|0,G/n|0,B/n|0],hot:hot/n};}
