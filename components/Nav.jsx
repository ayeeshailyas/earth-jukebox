"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
const L=[["/","Home"],["/jukebox","Jukebox"],["/about","About"],["/accessibility","Accessibility"]];
export default function Nav(){const p=usePathname();return(
<nav aria-label="Main" className="flex justify-end gap-1 border-b border-cyan-500/30 bg-panel/80 px-4 py-2 text-sm">
 {L.map(([h,t])=><Link key={h} href={h} aria-current={p===h?"page":undefined} className={"rounded-lg px-3 py-1 hover:bg-sky-400/20 "+(p===h?"bg-sky-400 font-semibold text-ink":"text-sky-200")}>{t}</Link>)}
</nav>)}
