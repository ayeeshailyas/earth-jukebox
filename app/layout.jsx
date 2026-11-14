import "./globals.css";
import {Inter,DM_Sans} from "next/font/google";
import Nav from "../components/Nav";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const dm=DM_Sans({subsets:["latin"],variable:"--font-dm"});
export const metadata={title:"Earth Information Jukebox",description:"Hear the Earth's changing climate"};
export default function RootLayout({children}){return(<html lang="en"><body className={`${inter.variable} ${dm.variable} font-sans min-h-screen`}>
<a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-yellow-300 focus:text-black p-2">Skip to content</a><Nav/>{children}</body></html>)}
