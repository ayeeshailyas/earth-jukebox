import Link from "next/link";
export default function Landing(){return(
<main id="main" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 p-8 md:grid-cols-2">
 <div className="relative mx-auto aspect-square w-full max-w-md">
  <img src="/main.png" alt="Earth drawn as a glowing vinyl record with a tonearm" className="h-full w-full object-contain"/>
 </div>
 <div>
  <p className="text-sm text-sky-400">NASA Space App Challenges 2026 | Greenbyte Explorers</p>
  <h1 className="font-heading text-5xl font-semibold md:text-6xl">Earth Information <span className="block font-bold text-[#2bff1f]">Jukebox</span></h1>
  <p className="mt-2 text-lg text-sky-200">Hear the Earth's Changing Climate</p>
  <p className="mt-4 text-sm">Every year since 1880 holds a note in Earth's changing story.</p>
  <p className="mt-4 max-w-md text-sm">Through the colours of our planet, we transform Earth imagery into music, turning visual patterns into sounds you can see, hear, and explore.</p>
  <Link href="/jukebox" className="mt-8 inline-block rounded-xl bg-sky-400 px-6 py-4 font-bold text-ink hover:bg-sky-300">Start Listening →</Link>
 </div></main>)}
