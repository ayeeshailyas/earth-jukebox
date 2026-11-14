const box="rounded-xl border border-cyan-500/50 bg-panel p-5";
const K=[["Space","Play or pause"],["← / →","Previous or next track"],["Tab / Shift+Tab","Move between controls"],["Enter / Space on a button","Activate it"]];
export const metadata={title:"Accessibility · Earth Information Jukebox"};
export default function A11y(){return(
<main id="main" className="mx-auto max-w-4xl space-y-6 p-6">
 <h1 className="font-heading text-4xl font-semibold">Accessibility guide</h1>
 <p className="max-w-prose">The Jukebox is built for blind and low-vision users first. Every picture has a spoken or written equivalent.</p>
 <section className={box} aria-labelledby="k"><h2 id="k" className="font-heading mb-3 text-xl font-semibold text-sky-400">Keyboard shortcuts</h2>
  <table className="w-full text-left text-sm"><caption className="sr-only">Keyboard shortcuts</caption><tbody>{K.map(([a,b])=><tr key={a} className="border-t border-cyan-500/20"><th scope="row" className="p-2 font-semibold"><kbd>{a}</kbd></th><td className="p-2">{b}</td></tr>)}</tbody></table>
  <p className="mt-2 text-xs">Space and the arrow keys are ignored while a dropdown, slider or button has focus, so they never fight with those controls.</p></section>
 <section className={box} aria-labelledby="s"><h2 id="s" className="font-heading mb-2 text-xl font-semibold text-sky-400">Screen reader support</h2>
  <ul className="list-disc space-y-1 pl-5 text-sm">
   <li>A text description of what you're hearing updates every three seconds in a polite live region.</li>
   <li>Turn on <strong>Screen Reader</strong> in the player to have the browser speak those descriptions aloud, even without a screen reader running.</li>
   <li>The visualization canvas has a text label naming the track and data source. The audio bars are hidden because the description covers them.</li>
   <li>Track changes are announced.</li></ul></section>
 <section className={box} aria-labelledby="v"><h2 id="v" className="font-heading mb-2 text-xl font-semibold text-sky-400">Visual comfort</h2>
  <ul className="list-disc space-y-1 pl-5 text-sm"><li>Yellow focus ring on every control.</li><li>Light text on a dark background for strong contrast.</li><li>Animations stop if your system asks for reduced motion.</li><li>Playback speed (0.5x to 2x) and volume are adjustable; mute is one button.</li></ul></section>
 <p className="text-sm text-sky-300">Found a barrier? Tell the team so it can be fixed.</p>
</main>)}
