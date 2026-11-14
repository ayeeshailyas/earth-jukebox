const box="rounded-xl border border-cyan-500/50 bg-panel p-5";
const MAP=[["Cool / blue pixels","Deep warm synth pads","150–300 Hz range"],["Warm / red-yellow pixels","Higher melodic notes","500–800 Hz range"],["Brightness","Volume and low-pass filter opening","Brighter = richer harmonics"],["Sudden frame-to-frame jump","Soft bell chime","Lightning, city-light surges"]];
const TR=[["Change in Night Lights (2012–2023)","Rhythmic ambient pulses and shimmering bells."],["Sea Surface Currents & Temperature","Evolving oceanic chords with stereo panning."],["ISS Lightning Events (2017–2023)","A deep atmospheric drone with crisp chimes."]];
export const metadata={title:"About · Earth Information Jukebox"};
export default function About(){return(
<main id="main" className="mx-auto max-w-4xl space-y-6 p-6">
 <h1 className="font-heading text-4xl font-semibold">About the Jukebox</h1>
 <p className="max-w-prose">Earth Information Jukebox turns NASA Earth Information Center imagery into music, live in your browser. It reads the pixels of each frame and plays notes from them, so people who can't see the image can still hear how it changes. Nothing is pre-recorded.</p>
 <section className={box} aria-labelledby="m"><h2 id="m" className="font-heading mb-3 text-xl font-semibold text-sky-400">How pixels become sound</h2>
  <div className="overflow-x-auto"><table className="w-full text-left text-sm"><caption className="sr-only">Mapping from image features to sound</caption>
   <thead><tr className="text-sky-300"><th className="p-2">Image feature</th><th className="p-2">Sound</th><th className="p-2">Note</th></tr></thead>
   <tbody>{MAP.map(r=><tr key={r[0]} className="border-t border-cyan-500/20">{r.map(c=><td key={c} className="p-2">{c}</td>)}</tr>)}</tbody></table></div>
  <p className="mt-3 text-sm">All notes come from the C major pentatonic scale, so any mix of colours stays harmonious.</p></section>
 <section className={box} aria-labelledby="t"><h2 id="t" className="font-heading mb-3 text-xl font-semibold text-sky-400">The three tracks</h2>
  <ul className="space-y-2">{TR.map(([a,b])=><li key={a}><strong>{a}:</strong> {b}</li>)}</ul></section>
 <section className={box} aria-labelledby="y"><h2 id="y" className="font-heading mb-2 text-xl font-semibold text-sky-400">Choosing a year</h2>
  <p className="text-sm">The year selector jumps the video to the matching point in its date range. Years outside a track's range snap to its first or last frame.</p></section>
 <p className="text-sm text-sky-300">Built by Greenbyte Explorers for NASA Space Apps Challenge 2026. Imagery: NASA Earth Information Center.</p>
</main>)}
