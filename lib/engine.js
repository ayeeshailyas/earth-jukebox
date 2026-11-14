import * as Tone from "tone";
const S=["C","D","E","G","A"]; // C major pentatonic
export const TRACKS=[
 {id:"night",title:"Change in Night Lights (2012–2023)",file:"/datasets/night_lights.mp4",range:[2012,2023],padOct:3,padEvery:4,leadEvery:.45,flash:.02,pan:false,about:"rhythmic pulses and shimmering bells"},
 {id:"sea",title:"Sea Surface Currents & Temperature",file:"/datasets/sea_temp.mp4",range:[2012,2025],padOct:3,padEvery:3,leadEvery:1.2,flash:.06,pan:true,about:"evolving oceanic chords with stereo sweeps"},
 {id:"lightning",title:"ISS Lightning Events (2017–2023)",file:"/datasets/lightning.mp4",range:[2017,2023],padOct:2,padEvery:6,leadEvery:3,flash:.015,pan:false,about:"a deep drone with crisp chimes"}];
export class Engine{
 ready=false;last={pad:0,lead:0,chime:0};
 async start(){await Tone.start();if(this.ready)return;
  this.filter=new Tone.Filter(800,"lowpass");this.pan=new Tone.Panner(0);this.rev=new Tone.Reverb({decay:6,wet:.4});
  this.pad=new Tone.PolySynth(Tone.Synth,{oscillator:{type:"fatsine"},envelope:{attack:2,release:4},volume:-14});
  this.lead=new Tone.Synth({oscillator:{type:"triangle"},envelope:{attack:.02,release:1.5},volume:-12});
  this.chime=new Tone.FMSynth({harmonicity:8,modulationIndex:2,envelope:{attack:.001,decay:1.2,sustain:0,release:1.5},volume:-16});
  this.pad.connect(this.filter);this.lead.connect(this.filter);this.filter.chain(this.pan,this.rev,Tone.Destination);this.chime.connect(this.rev);
  this.an=new Tone.Analyser("fft",32);Tone.Destination.connect(this.an);this.ready=true;}
 setVolume(v,mute){Tone.Destination.volume.value=mute||v<.02?-Infinity:-40+v*40;}
 bars(){return this.ready?this.an.getValue():[];}
 stop(){if(this.ready)this.pad.releaseAll();}
 update(m,p,t){if(!this.ready)return"";const now=Tone.now()+.05,cool=1-m.warm;
  this.filter.frequency.rampTo(250+m.bright*5000,.3);this.pan.pan.rampTo(p.pan?Math.sin(t/4000)*.8:0,.5);
  let said=[];
  if(now-this.last.pad>p.padEvery){const i=Math.min(4,Math.floor(cool*5));
   this.pad.triggerAttackRelease([S[i]+p.padOct,S[(i+2)%5]+p.padOct,S[(i+4)%5]+(p.padOct+1)],p.padEvery*1.5,now);this.last.pad=now;}
  if(m.warm>.55&&now-this.last.lead>p.leadEvery){this.lead.triggerAttackRelease(S[Math.min(4,Math.floor(m.bright*5))]+(m.warm>.7?6:5),"8n",now);this.last.lead=now;}
  if(m.delta>p.flash&&now-this.last.chime>.25){this.chime.triggerAttackRelease(S[Math.random()*5|0]+"6","8n",now);this.last.chime=now;said.push("a chime rings for a sudden flash");}
  const temp=m.warm>.6?"warm, higher melodic notes for hot or lit areas":m.warm<.4?"deep, cool pads for ocean and cold areas":"a balanced blend of pad and melody";
  const lvl=m.bright>.5?"bright, open and rich":m.bright>.2?"moderately bright":"dark, muted and soft";
  return`Hearing ${temp}. The image is ${lvl}${said.length?"; "+said[0]:""}.`;}
}
