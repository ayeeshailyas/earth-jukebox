(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/jukebox/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Jukebox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fallback.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const box = "rounded-xl border border-cyan-500/50 bg-panel p-4";
const REG = [
    "Global",
    "North",
    "Equator",
    "South"
], SPEEDS = [
    .5,
    1,
    1.5,
    2
];
function Jukebox() {
    _s();
    const [ti, setTi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [play, setPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2025), [reg, setReg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Global"), [vol, setVol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(.7), [mute, setMute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [spd, setSpd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Press play to begin."), [st, setSt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rgb: [
            0,
            0,
            0
        ],
        bright: 0,
        hot: 0
    }), [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("procedural");
    const cv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), viz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), vid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), eng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    R.current = {
        play,
        ti,
        year,
        reg,
        spd
    };
    const tr = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][ti];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            eng.current = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"]();
        }
    }["Jukebox.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            eng.current?.setVolume(vol, mute);
        }
    }["Jukebox.useEffect"], [
        vol,
        mute,
        play
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            const v = vid.current;
            setSrc("procedural");
            v.src = tr.file;
            v.load();
            v.onloadeddata = ({
                "Jukebox.useEffect": ()=>{
                    setSrc("NASA video");
                    seek();
                }
            })["Jukebox.useEffect"];
            v.onerror = ({
                "Jukebox.useEffect": ()=>setSrc("procedural")
            })["Jukebox.useEffect"];
        }
    }["Jukebox.useEffect"], [
        ti
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            if (vid.current) vid.current.playbackRate = spd;
        }
    }["Jukebox.useEffect"], [
        spd,
        ti
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            seek();
        }
    }["Jukebox.useEffect"], [
        year
    ]);
    function seek() {
        const v = vid.current, { year, ti } = R.current;
        if (!v || !v.duration) return;
        const [a, b] = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][ti].range;
        v.currentTime = Math.min(1, Math.max(0, (year - a) / (b - a))) * v.duration * .98;
    }
    async function toggle() {
        const e = eng.current;
        if (!R.current.play) {
            await e.start();
            e.setVolume(vol, mute);
            vid.current.play().catch(()=>{});
            setPlay(true);
        } else {
            e.stop();
            vid.current.pause();
            setPlay(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            const sm = document.createElement("canvas");
            sm.width = sm.height = 80;
            const sc = sm.getContext("2d", {
                willReadFrequently: true
            });
            let prev = 0, lastN = 0, t = 0;
            const id = setInterval({
                "Jukebox.useEffect.id": ()=>{
                    const { play, ti, year, reg, spd } = R.current, c = cv.current;
                    if (!c) return;
                    const x = c.getContext("2d"), v = vid.current;
                    t += 55 * spd;
                    if (v.readyState >= 2 && v.videoWidth) x.drawImage(v, 0, 0, c.width, c.height);
                    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawFallback"])(x, c.width, c.height, t, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][ti].id, year);
                    // audio-reactive bars
                    const vx = viz.current.getContext("2d"), b = eng.current?.bars() || [];
                    vx.clearRect(0, 0, viz.current.width, viz.current.height);
                    b.forEach({
                        "Jukebox.useEffect.id": (db, i)=>{
                            const h = Math.max(2, (db + 100) / 100 * viz.current.height);
                            vx.fillStyle = `hsl(${190 + i * 5},90%,60%)`;
                            vx.fillRect(i * 12 + 4, viz.current.height - h, 7, h);
                        }
                    }["Jukebox.useEffect.id"]);
                    if (!play) return;
                    sc.drawImage(c, 0, 0, 80, 80);
                    const z = [
                        "North",
                        "Equator",
                        "South"
                    ].indexOf(reg), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyze"])(sc, 80, 80, prev, z < 0 ? null : z);
                    prev = m.bright;
                    setSt({
                        rgb: m.rgb,
                        bright: m.bright,
                        hot: m.hot
                    });
                    const s = eng.current.update(m, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][ti], t);
                    if (s && Date.now() - lastN > 3000) {
                        lastN = Date.now();
                        const msg = `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACKS"][ti].title}, ${reg}: ${s}`;
                        setText(msg);
                    }
                }
            }["Jukebox.useEffect.id"], 55);
            return ({
                "Jukebox.useEffect": ()=>clearInterval(id)
            })["Jukebox.useEffect"];
        }
    }["Jukebox.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jukebox.useEffect": ()=>{
            const k = {
                "Jukebox.useEffect.k": (e)=>{
                    if ([
                        "INPUT",
                        "SELECT",
                        "BUTTON"
                    ].includes(e.target.tagName)) return;
                    if (e.code === "Space") {
                        e.preventDefault();
                        toggle();
                    }
                    if (e.key === "ArrowRight") setTi({
                        "Jukebox.useEffect.k": (i)=>(i + 1) % 3
                    }["Jukebox.useEffect.k"]);
                    if (e.key === "ArrowLeft") setTi({
                        "Jukebox.useEffect.k": (i)=>(i + 2) % 3
                    }["Jukebox.useEffect.k"]);
                }
            }["Jukebox.useEffect.k"];
            window.addEventListener("keydown", k);
            return ({
                "Jukebox.useEffect": ()=>window.removeEventListener("keydown", k)
            })["Jukebox.useEffect"];
        }
    }["Jukebox.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main",
        className: "mx-auto max-w-6xl space-y-4 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-[2fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: box,
                        "aria-label": "Earth visualization",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: vid,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 42,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: cv,
                                width: 400,
                                height: 400,
                                role: "img",
                                "aria-label": `${tr.title} visualization, source: ${src}`,
                                className: "mx-auto aspect-square max-h-[380px] rounded-full shadow-[0_0_40px_#1fb6d988]"
                            }, void 0, false, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 43,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-center text-xs text-sky-300",
                                children: [
                                    "Source: ",
                                    src
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 44,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 42,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: box + " text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-sky-400",
                                                children: "❄ Cold/Blue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 47,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "150–300 Hz"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 47,
                                                columnNumber: 95
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                children: "Deep ambient tones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 47,
                                                columnNumber: 132
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 47,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: box + " text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-orange-400",
                                                children: "🔥 Hot/Red"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 48,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "500–800 Hz"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 48,
                                                columnNumber: 97
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                children: "Intense tones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 48,
                                                columnNumber: 134
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 48,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 46,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: box,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "⚠ High anomaly density → higher audio urgency / tempo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 49,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 h-2 rounded bg-gradient-to-r from-cyan-400 via-yellow-300 to-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 49,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 49,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: box,
                                "aria-label": "Climate data overview",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-sm font-semibold",
                                        children: "Climate Data Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 50,
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "grid grid-cols-3 text-center text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Avg RGB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 64
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-bold",
                                                        children: st.rgb.join(",")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 51,
                                                columnNumber: 59
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Brightness"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 140
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-bold",
                                                        children: [
                                                            Math.round(st.bright * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 159
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 51,
                                                columnNumber: 135
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Hot Pixel Density"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 229
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-bold",
                                                        children: [
                                                            Math.round(st.hot * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/jukebox/page.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 255
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 51,
                                                columnNumber: 224
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 51,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 50,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 45,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/jukebox/page.jsx",
                lineNumber: 41,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: box,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: viz,
                        width: 580,
                        height: 90,
                        "aria-hidden": "true",
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 53,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        "aria-live": "polite",
                        className: "mt-2 text-sm text-sky-100",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 54,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/jukebox/page.jsx",
                lineNumber: 53,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: box + " grid items-center gap-4 md:grid-cols-[auto_auto_1fr]",
                "aria-label": "Controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Selected Year",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: year,
                                        onChange: (e)=>setYear(+e.target.value),
                                        className: "mt-1 block rounded-lg border border-cyan-500/50 bg-ink p-2",
                                        children: Array.from({
                                            length: 14
                                        }, (_, i)=>2025 - i).map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: y
                                            }, y, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 57,
                                                columnNumber: 202
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 57,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Region",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: reg,
                                        onChange: (e)=>setReg(e.target.value),
                                        className: "mt-1 block rounded-lg border border-cyan-500/50 bg-ink p-2",
                                        children: REG.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: r
                                            }, r, false, {
                                                fileName: "[project]/app/jukebox/page.jsx",
                                                lineNumber: 58,
                                                columnNumber: 158
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 58,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 58,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 56,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Previous track",
                                onClick: ()=>setTi((ti + 2) % 3),
                                className: "h-14 w-14 rounded-full border border-cyan-400 text-2xl",
                                children: "⏮"
                            }, void 0, false, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 60,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": play ? "Pause" : "Play",
                                onClick: toggle,
                                className: "h-20 w-20 rounded-full border-2 border-cyan-400 text-3xl",
                                children: play ? "⏸" : "▶"
                            }, void 0, false, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 61,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Next track",
                                onClick: ()=>setTi((ti + 1) % 3),
                                className: "h-14 w-14 rounded-full border border-cyan-400 text-2xl",
                                children: "⏭"
                            }, void 0, false, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 62,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[10rem] text-xs",
                                "aria-live": "polite",
                                children: [
                                    "Track ",
                                    ti + 1,
                                    "/3: ",
                                    tr.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 63,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 59,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2",
                                children: [
                                    "Volume",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "1",
                                        step: ".01",
                                        value: vol,
                                        onChange: (e)=>setVol(+e.target.value),
                                        className: "flex-1 accent-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 65,
                                        columnNumber: 54
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 65,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSpd(SPEEDS[(SPEEDS.indexOf(spd) + 1) % 4]),
                                        className: "rounded-lg border border-cyan-500/50 px-3 py-1",
                                        children: [
                                            "Speed ",
                                            spd,
                                            "x"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 67,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-pressed": mute,
                                        onClick: ()=>setMute(!mute),
                                        className: "rounded-lg border border-cyan-500/50 px-3 py-1",
                                        children: mute ? "Unmute" : "Mute"
                                    }, void 0, false, {
                                        fileName: "[project]/app/jukebox/page.jsx",
                                        lineNumber: 68,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/jukebox/page.jsx",
                                lineNumber: 66,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/jukebox/page.jsx",
                        lineNumber: 64,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/jukebox/page.jsx",
                lineNumber: 55,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-sky-300",
                children: "Shortcuts: Space play/pause · ←/→ switch track."
            }, void 0, false, {
                fileName: "[project]/app/jukebox/page.jsx",
                lineNumber: 70,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/jukebox/page.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(Jukebox, "SEnV3h7lE1MmI9sAaAsGKp2t68o=");
_c = Jukebox;
var _c;
__turbopack_context__.k.register(_c, "Jukebox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analyzer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Samples a w*h canvas: brightness, warm ratio, flash delta, avg RGB, hot-pixel density. zone: null|0|1|2 (N/Equator/S)
__turbopack_context__.s([
    "analyze",
    ()=>analyze
]);
function analyze(ctx, w, h, prev, zone = null) {
    const d = ctx.getImageData(0, 0, w, h).data;
    let R = 0, G = 0, B = 0, n = 0, hot = 0, L = 0;
    for(let y = 0; y < h; y++){
        const zi = Math.min(2, Math.floor(y / (h / 3)));
        if (zone !== null && zi !== zone) continue;
        for(let x = 0; x < w; x++){
            const i = (y * w + x) * 4, r = d[i], g = d[i + 1], b = d[i + 2];
            R += r;
            G += g;
            B += b;
            n++;
            L += (.2126 * r + .7152 * g + .0722 * b) / 255;
            if (r > g + 30 && r > b + 30) hot++;
        }
    }
    n = n || 1;
    const bright = L / n, warm = R / (R + B + 1);
    return {
        bright,
        warm,
        delta: Math.max(0, bright - prev),
        rgb: [
            R / n | 0,
            G / n | 0,
            B / n | 0
        ],
        hot: hot / n
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/engine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Engine",
    ()=>Engine,
    "TRACKS",
    ()=>TRACKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/core/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$filter$2f$Filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/component/filter/Filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$channel$2f$Panner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/component/channel/Panner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$Reverb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/effect/Reverb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$PolySynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/instrument/PolySynth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$Synth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/instrument/Synth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$FMSynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/instrument/FMSynth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$analysis$2f$Analyser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tone/build/esm/component/analysis/Analyser.js [app-client] (ecmascript)");
;
const S = [
    "C",
    "D",
    "E",
    "G",
    "A"
]; // C major pentatonic
const TRACKS = [
    {
        id: "night",
        title: "Change in Night Lights (2012–2023)",
        file: "/datasets/night_lights.mp4",
        range: [
            2012,
            2023
        ],
        padOct: 3,
        padEvery: 4,
        leadEvery: .45,
        flash: .02,
        pan: false,
        about: "rhythmic pulses and shimmering bells"
    },
    {
        id: "sea",
        title: "Sea Surface Currents & Temperature",
        file: "/datasets/sea_temp.mp4",
        range: [
            2012,
            2025
        ],
        padOct: 3,
        padEvery: 3,
        leadEvery: 1.2,
        flash: .06,
        pan: true,
        about: "evolving oceanic chords with stereo sweeps"
    },
    {
        id: "lightning",
        title: "ISS Lightning Events (2017–2023)",
        file: "/datasets/lightning.mp4",
        range: [
            2017,
            2023
        ],
        padOct: 2,
        padEvery: 6,
        leadEvery: 3,
        flash: .015,
        pan: false,
        about: "a deep drone with crisp chimes"
    }
];
class Engine {
    ready = false;
    last = {
        pad: 0,
        lead: 0,
        chime: 0
    };
    async start() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$core$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]();
        if (this.ready) return;
        this.filter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$filter$2f$Filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Filter"](800, "lowpass");
        this.pan = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$channel$2f$Panner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panner"](0);
        this.rev = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$effect$2f$Reverb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reverb"]({
            decay: 6,
            wet: .4
        });
        this.pad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$PolySynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolySynth"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$Synth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Synth"], {
            oscillator: {
                type: "fatsine"
            },
            envelope: {
                attack: 2,
                release: 4
            },
            volume: -14
        });
        this.lead = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$Synth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Synth"]({
            oscillator: {
                type: "triangle"
            },
            envelope: {
                attack: .02,
                release: 1.5
            },
            volume: -12
        });
        this.chime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$instrument$2f$FMSynth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FMSynth"]({
            harmonicity: 8,
            modulationIndex: 2,
            envelope: {
                attack: .001,
                decay: 1.2,
                sustain: 0,
                release: 1.5
            },
            volume: -16
        });
        this.pad.connect(this.filter);
        this.lead.connect(this.filter);
        this.filter.chain(this.pan, this.rev, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Destination"]);
        this.chime.connect(this.rev);
        this.an = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$component$2f$analysis$2f$Analyser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analyser"]("fft", 32);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Destination"].connect(this.an);
        this.ready = true;
    }
    setVolume(v, mute) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Destination"].volume.value = mute || v < .02 ? -Infinity : -40 + v * 40;
    }
    bars() {
        return this.ready ? this.an.getValue() : [];
    }
    stop() {
        if (this.ready) this.pad.releaseAll();
    }
    update(m, p, t) {
        if (!this.ready) return "";
        const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tone$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["now"]() + .05, cool = 1 - m.warm;
        this.filter.frequency.rampTo(250 + m.bright * 5000, .3);
        this.pan.pan.rampTo(p.pan ? Math.sin(t / 4000) * .8 : 0, .5);
        let said = [];
        if (now - this.last.pad > p.padEvery) {
            const i = Math.min(4, Math.floor(cool * 5));
            this.pad.triggerAttackRelease([
                S[i] + p.padOct,
                S[(i + 2) % 5] + p.padOct,
                S[(i + 4) % 5] + (p.padOct + 1)
            ], p.padEvery * 1.5, now);
            this.last.pad = now;
        }
        if (m.warm > .55 && now - this.last.lead > p.leadEvery) {
            this.lead.triggerAttackRelease(S[Math.min(4, Math.floor(m.bright * 5))] + (m.warm > .7 ? 6 : 5), "8n", now);
            this.last.lead = now;
        }
        if (m.delta > p.flash && now - this.last.chime > .25) {
            this.chime.triggerAttackRelease(S[Math.random() * 5 | 0] + "6", "8n", now);
            this.last.chime = now;
            said.push("a chime rings for a sudden flash");
        }
        const temp = m.warm > .6 ? "warm, higher melodic notes for hot or lit areas" : m.warm < .4 ? "deep, cool pads for ocean and cold areas" : "a balanced blend of pad and melody";
        const lvl = m.bright > .5 ? "bright, open and rich" : m.bright > .2 ? "moderately bright" : "dark, muted and soft";
        return `Hearing ${temp}. The image is ${lvl}${said.length ? "; " + said[0] : ""}.`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/fallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawFallback",
    ()=>drawFallback
]);
// Procedural stand-ins so audio works before NASA files are added.
const flashes = [];
function drawFallback(ctx, w, h, t, key, year = 2023) {
    if (key === "night") {
        ctx.fillStyle = "#02050c";
        ctx.fillRect(0, 0, w, h);
        const c = 60 + (year - 2012) * 18;
        for(let i = 0; i < c; i++){
            const x = (Math.sin(i * 91.7) * .5 + .5) * w, y = (Math.sin(i * 37.3) * .5 + .5) * h, p = .5 + .5 * Math.sin(t / 900 + i);
            const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
            g.addColorStop(0, `rgba(255,${190 + p * 50 | 0},90,${.4 + p * .6})`);
            g.addColorStop(1, "transparent");
            ctx.fillStyle = g;
            ctx.fillRect(x - 14, y - 14, 28, 28);
        }
    } else if (key === "sea") {
        for(let y = 0; y < h; y += 8)for(let x = 0; x < w; x += 8){
            const v = .5 + .5 * Math.sin(y / 45 + x / 90 + t / 1800);
            ctx.fillStyle = `hsl(${210 - v * 210},85%,${30 + v * 25}%)`;
            ctx.fillRect(x, y, 8, 8);
        }
    } else {
        ctx.fillStyle = "#03060e";
        ctx.fillRect(0, 0, w, h);
        if (Math.random() < .05) flashes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            a: 1
        });
        for (const f of flashes){
            const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 90);
            g.addColorStop(0, `rgba(200,220,255,${f.a})`);
            g.addColorStop(1, "transparent");
            ctx.fillStyle = g;
            ctx.fillRect(f.x - 90, f.y - 90, 180, 180);
            f.a -= .12;
        }
        for(let i = flashes.length - 1; i >= 0; i--)if (flashes[i].a <= 0) flashes.splice(i, 1);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_060hin6loiepo._.js.map