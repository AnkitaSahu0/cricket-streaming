// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Menu, X, Calendar, BarChart2,
//   Users, Star, LogIn, Video, Newspaper, Sun, Moon,
// } from "lucide-react";

// const NAV_ITEMS = [
//   { href: "/videos",       label: "Videos",   icon: Video,      accent: "text-amber-400"   },
//   { href: "/news",         label: "News",      icon: Newspaper,  accent: "text-blue-400"    },
//   { href: "/schedule",     label: "Schedule",  icon: Calendar,   accent: "text-emerald-400" },
//   { href: "/rankings",     label: "Rankings",  icon: BarChart2,  accent: "text-violet-400"  },
//   { href: "/teams",        label: "Teams",     icon: Users,      accent: "text-cyan-400"    },
//   { href: "/subscription", label: "Pro",       icon: Star,       accent: "text-yellow-400"  },
// ];

// export default function Navbar() {
//   const [isOpen,    setIsOpen]    = useState(false);
//   const [scrolled,  setScrolled]  = useState(false);
//   const [liveCount, setLiveCount] = useState(3);
//   const [dark,      setDark]      = useState(true);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const t = setInterval(
//       () => setLiveCount(Math.floor(Math.random() * 4) + 2),
//       8000
//     );
//     return () => clearInterval(t);
//   }, []);

//   /* ── theme-aware class sets ───────────────────────────────────────────── */
//   const navBg     = dark ? "bg-gradient-to-b from-green-950 to-green-900"
//                          : "bg-gradient-to-b from-green-50  to-green-100";
//   const navBorder = dark ? "border-green-800/40" : "border-green-300/60";
//   const navShadow = scrolled
//     ? dark ? "shadow-[0_4px_40px_rgba(0,0,0,0.7)] ring-1 ring-green-700/20"
//            : "shadow-[0_4px_32px_rgba(0,0,0,0.10)] ring-1 ring-green-400/30"
//     : "";

//   const logoColor  = dark ? "text-white"           : "text-green-950";
//   const linkCls    = dark ? "text-green-100/75 hover:text-white hover:bg-green-800/50"
//                           : "text-green-900/75 hover:text-green-950 hover:bg-green-200/70";
//   const toggleCls  = dark ? "bg-green-800/40 border-green-700/50 text-green-400 hover:bg-green-700/60"
//                           : "bg-green-200/60 border-green-400/50 text-amber-500 hover:bg-green-300/70";
//   const loginCls   = dark ? "border-green-600/50 text-green-400 hover:bg-green-800/40"
//                           : "border-green-500/60 text-green-700 hover:bg-green-200/60";
//   const burgerCls  = dark ? "bg-green-800/40 border-green-700/50 text-green-400 hover:bg-green-700/60"
//                           : "bg-green-200/60 border-green-400/50 text-green-700 hover:bg-green-300/70";
//   const drawerBg   = dark ? "bg-green-950" : "bg-green-50";
//   const divCls     = dark ? "bg-green-800/50" : "bg-green-300/50";
//   const mLinkCls   = dark ? "text-green-100/80 hover:text-white hover:bg-green-800/50"
//                           : "text-green-900/80 hover:text-green-950 hover:bg-green-200/60";
//   const mIconBg    = dark ? "bg-white/5" : "bg-black/5";
//   const mLoginCls  = dark ? "border-green-600/50 text-green-400 hover:bg-green-800/40"
//                           : "border-green-500/60 text-green-700 hover:bg-green-200/60";

//   return (
//     <nav className={`w-full sticky  top-0 z-50 border-b transition-all duration-300 ${navBg} ${navBorder} ${navShadow}`}>

//       {/* ════════════ MAIN BAR ════════════ */}
//       <div className="w-full px-4 sm:px-5 lg:px-8 h-[70px] flex items-center justify-between gap-5">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
//           <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-xl
//                           shadow-[0_0_20px_rgba(34,197,94,0.5)]
//                           group-hover:shadow-[0_0_32px_rgba(34,197,94,0.8)]
//                           transition-shadow duration-300 relative overflow-hidden">
//             🏏
//             <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
//           </div>
//           <span className={`font-black tracking-[0.15em] text-[1.7rem] leading-none
//                             transition-colors duration-300 ${logoColor}`}
//                 style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
//             Cric<span className="text-green-500">Stream</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAV LINKS */}
//         <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
//           {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
//             <Link
//               key={href}
//               href={href}
//               className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl
//                           text-[1.1rem] font-bold tracking-wide
//                           transition-all duration-200 group ${linkCls}`}
//               style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//             >
//               <Icon
//                 size={16}
//                 className="opacity-65 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
//               />
//               {label}
//               {/* slide-in underline */}
//               <span className="absolute bottom-1 left-1/2 right-1/2 h-[2px] rounded-full bg-green-500
//                                group-hover:left-[12%] group-hover:right-[12%] transition-all duration-300" />
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT CLUSTER — desktop */}
//         <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">

//           {/* Theme toggle */}
//           <button
//             onClick={() => setDark(d => !d)}
//             aria-label="Toggle theme"
//             className={`w-11 h-11 rounded-xl border flex items-center justify-center
//                         transition-all duration-200 hover:scale-110 hover:rotate-12 ${toggleCls}`}
//           >
//             {dark ? <Sun size={18} /> : <Moon size={18} />}
//           </button>

//           {/* LIVE pill */}
//           <Link
//             href="/live"
//             className="flex items-center gap-2 px-5 py-2.5 rounded-full
//                        bg-red-600 text-white font-black tracking-[0.15em] text-[1.05rem]
//                        shadow-[0_0_20px_rgba(239,68,68,0.55)]
//                        hover:shadow-[0_0_36px_rgba(239,68,68,0.85)]
//                        hover:scale-105 transition-all duration-200 animate-pulse flex-shrink-0"
//             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//           >
//             <span className="w-2 h-2 rounded-full bg-white animate-ping" />
//             LIVE
//             <span className="bg-black/25 text-xs font-bold px-2 py-0.5 rounded-full tracking-normal"
//                   style={{ fontFamily: "Inter, sans-serif" }}>
//               {liveCount}
//             </span>
//           </Link>

//           {/* Login */}
//           <Link
//             href="/login"
//             className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border
//                         text-[1.05rem] font-bold tracking-wide transition-all duration-200 ${loginCls}`}
//             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//           >
//             <LogIn size={15} />
//             Login
//           </Link>
//         </div>

//         {/* MOBILE RIGHT ROW */}
//         <div className="flex lg:hidden md:block items-center gap-2 flex-shrink-0">

//           {/* Theme toggle */}
//           <button
//             onClick={() => setDark(d => !d)}
//             aria-label="Toggle theme"
//             className={`w-10 h-10 rounded-lg border flex items-center justify-center
//                         transition-all duration-200 ${toggleCls}`}
//           >
//             {dark ? <Sun size={16} /> : <Moon size={16} />}
//           </button>

//           {/* LIVE mini */}
//           <Link
//             href="/live"
//             className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
//                        bg-red-600 text-white font-black tracking-widest text-sm
//                        shadow-[0_0_16px_rgba(239,68,68,0.5)] animate-pulse"
//             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
//             LIVE
//           </Link>

//           {/* Hamburger */}
//           <button
//             onClick={() => setIsOpen(o => !o)}
//             aria-label="Menu"
//             className={`w-10 h-10 rounded-lg border flex items-center justify-center
//                         transition-all duration-200 ${burgerCls}`}
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* ════════════ MOBILE DRAWER ════════════ */}
//       <div
//         className={`lg:hidden overflow-hidden border-t transition-all duration-300 ease-in-out
//                     ${navBorder} ${drawerBg}
//                     ${isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"}`}
//       >
//         <div className="px-4 py-4 flex flex-col gap-1.5">

//           {/* Live CTA */}
//           <Link
//             href="/live"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl
//                        bg-red-600 text-white font-black tracking-[0.15em] text-xl mb-1
//                        shadow-[0_4px_22px_rgba(239,68,68,0.4)]"
//             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//           >
//             <span className="w-2 h-2 rounded-full bg-white animate-ping" />
//             WATCH LIVE NOW
//             <span className="bg-black/25 text-xs font-bold px-2 py-0.5 rounded-full tracking-normal"
//                   style={{ fontFamily: "Inter, sans-serif" }}>
//               {liveCount} matches
//             </span>
//           </Link>

//           <div className={`h-px my-1 ${divCls}`} />

//           {/* Nav links */}
//           {NAV_ITEMS.map(({ href, label, icon: Icon, accent }) => (
//             <Link
//               key={href}
//               href={href}
//               onClick={() => setIsOpen(false)}
//               className={`flex items-center gap-3 px-3.5 py-3 rounded-xl
//                           font-bold tracking-wide text-[1.15rem]
//                           transition-all duration-200 ${mLinkCls}`}
//               style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//             >
//               <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${mIconBg}`}>
//                 <Icon size={17} className={accent} />
//               </span>
//               {label}
//             </Link>
//           ))}

//           <div className={`h-px my-1 ${divCls}`} />

//           {/* Login + theme row */}
//           <div className="flex gap-2 mt-1">
//             <Link
//               href="/login"
//               onClick={() => setIsOpen(false)}
//               className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border
//                           font-bold text-[1.05rem] tracking-wide transition-all duration-200 ${mLoginCls}`}
//               style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//             >
//               <LogIn size={16} />
//               Login / Sign Up
//             </Link>

//             <button
//               onClick={() => setDark(d => !d)}
//               aria-label="Toggle theme"
//               className={`w-12 h-12 rounded-xl border flex items-center justify-center
//                           flex-shrink-0 transition-all duration-200 ${toggleCls}`}
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//           </div>

//         </div>
//       </div>

//     </nav>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, Calendar, BarChart2,
  Users, Star, LogIn, Video, Newspaper, Sun, Moon,
  Home,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

const NAV_ITEMS = [
     { href: "/#home", label: "Home", icon: Home, accent: "text-red-400" },
  { href: "/videos", label: "Videos", icon: Video, accent: "text-amber-400" },
  { href: "/news", label: "News", icon: Newspaper, accent: "text-blue-400" },
  {href:"/#schedule", label: "Schedule", icon: Calendar, accent: "text-emerald-400" },
  { href: "/#ranking", label: "Rankings", icon: BarChart2, accent: "text-violet-400" },
  { href: "/", label: "Teams", icon: Users, accent: "text-cyan-400" },
  { href: "/#subscription", label: "Pro", icon: Star, accent: "text-yellow-400" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [liveCount, setLiveCount] = useState(3);
 const { dark, setDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setLiveCount(Math.floor(Math.random() * 4) + 2),
      8000
    );
    return () => clearInterval(t);
  }, []);

  /* THEME (UNCHANGED) */
  const navBg = dark
     ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";


  const navBorder = dark ? "border-green-800/40" : "border-green-300/60";

  const navShadow = scrolled
    ? dark
      ? "shadow-[0_4px_40px_rgba(0,0,0,0.7)] ring-1 ring-green-700/20"
      : "shadow-[0_4px_32px_rgba(0,0,0,0.10)] ring-1 ring-green-400/30"
    : "";

  const logoColor = dark ? "text-white" : "text-green-950";

  const linkCls = dark
    ? "text-green-100/75 hover:text-white hover:bg-green-800/50"
    : "text-green-900/75 hover:text-green-950 hover:bg-green-200/70";

  const toggleCls = dark
    ? "bg-green-800/40 border-green-700/50 text-green-400 hover:bg-green-700/60"
    : "bg-green-200/60 border-green-400/50 text-amber-500 hover:bg-green-300/70";

  const loginCls = dark
    ? "border-green-600/50 text-green-400 hover:bg-green-800/40"
    : "border-green-500/60 text-green-700 hover:bg-green-200/60";

  const burgerCls = dark
    ? "bg-green-800/40 border-green-700/50 text-green-400 hover:bg-green-700/60"
    : "bg-green-200/60 border-green-400/50 text-green-700 hover:bg-green-300/70";

  const drawerBg = dark ? "bg-green-950" : "bg-green-50";
  const divCls = dark ? "bg-green-800/50" : "bg-green-300/50";

  const mLinkCls = dark
    ? "text-green-100/80 hover:text-white hover:bg-green-800/50"
    : "text-green-900/80 hover:text-green-950 hover:bg-green-200/60";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mIconBg = dark ? "bg-white/5" : "bg-black/5";

  const mLoginCls = dark
    ? "border-green-600/50 text-gray-200 hover:bg-green-800/40"
    : "border-green-500/60 text-white hover:bg-green-200/60";

  return (
    <nav className={`w-full  sticky top-0 z-50 border-b ${navBg} ${navBorder} ${navShadow}`}>

      {/* MAIN BAR */}
      <div className="w-full px-4 sm:px-5 lg:px-8 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-xl shadow-lg">
            🏏
          </div>
          <span className={`font-black text-xl ${logoColor}`}>
            Cric<span className="text-green-500">Web</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${linkCls}`}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE DESKTOP */}
        <div className="hidden lg:flex items-center gap-3">

          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center ${toggleCls}`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/live" className="bg-red-600 text-white px-4 py-2 rounded-full font-bold animate-pulse">
            LIVE {liveCount}
          </Link>

          <Link href="/login" className={`px-4 py-2 rounded-xl border ${loginCls}`}>
            Login
          </Link>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden items-center gap-2">

          <button onClick={() => setDark(!dark)} className={`w-10 h-10 rounded-lg border flex items-center justify-center ${toggleCls}`}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link href="/live" className="bg-red-600 text-white px-3 py-1 rounded-full text-sm animate-pulse">
            LIVE
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-10 h-10  rounded-lg border flex items-center align-middle justify-center p-0 m-0 transition-transform duration-200 hover:scale-105 ${burgerCls}`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (

        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* FULL SCREEN MENU */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen z-50 transform transition-all duration-500
        ${drawerBg} ${navBorder}
        ${isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
      >

        {/* TOP */}
        <div className="flex justify-between items-center px-4 h-[70px] border-b">
          <span className={`font-bold text-lg ${logoColor}`}>
            Cric<span className="text-green-500">Stream</span>
          </span>

          <button onClick={() => setIsOpen(false)} className={`w-10 h-10 border flex items-center justify-center rounded-lg ${burgerCls}`}>
            <X className="w-5 h-5"  />
          </button>
        </div>

        {/* LINKS */}
        <div className="p-4 flex flex-col gap-3">

          {NAV_ITEMS.map(({ href, label, icon: Icon, accent }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-xl ${mLinkCls}`}
            >
              <Icon className={accent} />
              {label}
            </Link>
          ))}

          <Link href="/login" className={` text-center bg-green-500 p-3 border rounded-xl ${mLoginCls}`}>
            Login / Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}