"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {Engine,TRACKS} from "../../lib/engine";
import {analyze} from "../../lib/analyzer";
import {drawFallback} from "../../lib/fallback";
const box="rounded-xl border border-cyan-500/50 bg-panel p-4";
const REG=["Global","North","Equator","South"],SPEEDS=[.5,1,1.5,2];
export default function Jukebox(){
 const [ti,setTi]=useState(0),[play,setPlay]=useState(false),[year,setYear]=useState(2025),[reg,setReg]=useState("Global"),
  [vol,setVol]=useState(.7),[mute,setMute]=useState(false),[spd,setSpd]=useState(1),
  [text,setText]=useState("Press play to begin."),[st,setSt]=useState({rgb:[0,0,0],bright:0,hot:0}),[src,setSrc]=useState("procedural");
 const cv=useRef(),viz=useRef(),vid=useRef(),eng=useRef(null),R=useRef({});
 R.current={play,ti,year,reg,spd};
 const tr=TRACKS[ti];
 useEffect(()=>{eng.current=new Engine();},[]);
 useEffect(()=>{eng.current?.setVolume(vol,mute);},[vol,mute,play]);
 useEffect(()=>{const v=vid.current;setSrc("procedural");v.src=tr.file;v.load();
  v.onloadeddata=()=>{setSrc("NASA video");seek();};v.onerror=()=>setSrc("procedural");},[ti]);
 useEffect(()=>{if(vid.current)vid.current.playbackRate=spd;},[spd,ti]);
 useEffect(()=>{seek();},[year]);
 function seek(){const v=vid.current,{year,ti}=R.current;if(!v||!v.duration)return;const [a,b]=TRACKS[ti].range;v.currentTime=Math.min(1,Math.max(0,(year-a)/(b-a)))*v.duration*.98;}
 async function toggle(){const e=eng.current;if(!R.current.play){await e.start();e.setVolume(vol,mute);vid.current.play().catch(()=>{});setPlay(true);}else{e.stop();vid.current.pause();setPlay(false);}}
 useEffect(()=>{const sm=document.createElement("canvas");sm.width=sm.height=80;const sc=sm.getContext("2d",{willReadFrequently:true});
  let prev=0,lastN=0,t=0;
  const id=setInterval(()=>{const {play,ti,year,reg,spd}=R.current,c=cv.current;if(!c)return;const x=c.getContext("2d"),v=vid.current;t+=55*spd;
   if(v.readyState>=2&&v.videoWidth)x.drawImage(v,0,0,c.width,c.height);else drawFallback(x,c.width,c.height,t,TRACKS[ti].id,year);
   // audio-reactive bars
   const vx=viz.current.getContext("2d"),b=eng.current?.bars()||[];vx.clearRect(0,0,viz.current.width,viz.current.height);
   b.forEach((db,i)=>{const h=Math.max(2,(db+100)/100*viz.current.height);vx.fillStyle=`hsl(${190+i*5},90%,60%)`;vx.fillRect(i*12+4,viz.current.height-h,7,h);});
   if(!play)return;
   sc.drawImage(c,0,0,80,80);const z=["North","Equator","South"].indexOf(reg),m=analyze(sc,80,80,prev,z<0?null:z);prev=m.bright;
   setSt({rgb:m.rgb,bright:m.bright,hot:m.hot});const s=eng.current.update(m,TRACKS[ti],t);
   if(s&&Date.now()-lastN>3000){lastN=Date.now();const msg=`${TRACKS[ti].title}, ${reg}: ${s}`;setText(msg);}
  },55);return()=>clearInterval(id);},[]);
 useEffect(()=>{const k=e=>{if(["INPUT","SELECT","BUTTON"].includes(e.target.tagName))return;
  if(e.code==="Space"){e.preventDefault();toggle();}
  if(e.key==="ArrowRight")setTi(i=>(i+1)%3);if(e.key==="ArrowLeft")setTi(i=>(i+2)%3);};
  window.addEventListener("keydown",k);return()=>window.removeEventListener("keydown",k);},[]);
 return(<main id="main" className="mx-auto max-w-6xl space-y-4 p-4">
  <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
   <section className={box} aria-label="Earth visualization"><video ref={vid} muted loop playsInline className="hidden"/>
    <canvas ref={cv} width={400} height={400} role="img" aria-label={`${tr.title} visualization, source: ${src}`} className="mx-auto aspect-square max-h-[380px] rounded-full shadow-[0_0_40px_#1fb6d988]"/>
    <p className="mt-2 text-center text-xs text-sky-300">Source: {src}</p></section>
   <aside className="space-y-4">
    <div className="grid grid-cols-2 gap-3">
     <div className={box+" text-center"}><p className="font-bold text-sky-400">❄ Cold/Blue</p><p className="text-sm">150–300 Hz</p><p className="text-xs">Deep ambient tones</p></div>
     <div className={box+" text-center"}><p className="font-bold text-orange-400">🔥 Hot/Red</p><p className="text-sm">500–800 Hz</p><p className="text-xs">Intense tones</p></div></div>
    <div className={box}><p>⚠ High anomaly density → higher audio urgency / tempo</p><div className="mt-2 h-2 rounded bg-gradient-to-r from-cyan-400 via-yellow-300 to-red-500"/></div>
    <div className={box} aria-label="Climate data overview"><p className="mb-2 text-sm font-semibold">Climate Data Overview</p>
     <dl className="grid grid-cols-3 text-center text-xs"><div><dt>Avg RGB</dt><dd className="font-bold">{st.rgb.join(",")}</dd></div><div><dt>Brightness</dt><dd className="font-bold">{Math.round(st.bright*100)}%</dd></div><div><dt>Hot Pixel Density</dt><dd className="font-bold">{Math.round(st.hot*100)}%</dd></div></dl></div>
   </aside></div>
  <section className={box}><canvas ref={viz} width={580} height={90} aria-hidden="true" className="w-full"/>
   <p role="status" aria-live="polite" className="mt-2 text-sm text-sky-100">{text}</p></section>
  <section className={box+" grid items-center gap-4 md:grid-cols-[auto_auto_1fr]"} aria-label="Controls">
   <div className="flex gap-3 text-sm">
    <label>Selected Year<select value={year} onChange={e=>setYear(+e.target.value)} className="mt-1 block rounded-lg border border-cyan-500/50 bg-ink p-2">{Array.from({length:14},(_,i)=>2025-i).map(y=><option key={y}>{y}</option>)}</select></label>
    <label>Region<select value={reg} onChange={e=>setReg(e.target.value)} className="mt-1 block rounded-lg border border-cyan-500/50 bg-ink p-2">{REG.map(r=><option key={r}>{r}</option>)}</select></label></div>
   <div className="flex items-center gap-3">
    <button aria-label="Previous track" onClick={()=>setTi((ti+2)%3)} className="h-14 w-14 rounded-full border border-cyan-400 text-2xl">⏮</button>
    <button aria-label={play?"Pause":"Play"} onClick={toggle} className="h-20 w-20 rounded-full border-2 border-cyan-400 text-3xl">{play?"⏸":"▶"}</button>
    <button aria-label="Next track" onClick={()=>setTi((ti+1)%3)} className="h-14 w-14 rounded-full border border-cyan-400 text-2xl">⏭</button>
    <p className="max-w-[10rem] text-xs" aria-live="polite">Track {ti+1}/3: {tr.title}</p></div>
   <div className="space-y-2 text-sm">
    <label className="flex items-center gap-2">Volume<input type="range" min="0" max="1" step=".01" value={vol} onChange={e=>setVol(+e.target.value)} className="flex-1 accent-emerald-400"/></label>
    <div className="flex flex-wrap gap-2">
     <button onClick={()=>setSpd(SPEEDS[(SPEEDS.indexOf(spd)+1)%4])} className="rounded-lg border border-cyan-500/50 px-3 py-1">Speed {spd}x</button>
     <button aria-pressed={mute} onClick={()=>setMute(!mute)} className="rounded-lg border border-cyan-500/50 px-3 py-1">{mute?"Unmute":"Mute"}</button></div></div>
  </section>
  <p className="text-xs text-sky-300">Shortcuts: Space play/pause · ←/→ switch track.</p>
 </main>)}
