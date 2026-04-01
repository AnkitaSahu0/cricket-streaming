"use client";

import Link from "next/link";
import { Heart, X, Mail, Music } from "lucide-react";
import { use } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function Footer() {
//   const dark = true; // same as navbar (later global theme se control kar sakte ho)
const {dark}=useTheme();

  const bg = dark
    ? "bg-gradient-to-b from-green-950 to-black text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const border = dark ? "border-green-800/50" : "border-green-200";

  const linkCls = dark
    ? "text-green-200 hover:text-white"
    : "text-green-700 hover:text-green-950";

  return (
    <footer className={`w-full pt-8 border-t ${bg} ${border}`}>

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 sm:px-8 lg:px-16 py-10">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-wide">
            🏏 Cric<span className="text-green-500">Web</span>
          </h2>
          <p className="text-sm opacity-70 leading-relaxed">
            Watch live cricket matches, highlights, latest news, rankings and more.
            Your one-stop destination for everything cricket.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-2">
            <SocialIcon Icon={Heart} />
            <SocialIcon Icon={X} />
            <SocialIcon Icon={Mail} />
            <SocialIcon Icon={Music} />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#home" className={linkCls}>Home</Link></li>
            <li><Link href="/videos" className={linkCls}>Videos</Link></li>
            <li><Link href="/news" className={linkCls}>News</Link></li>
            <li><Link href="/#schedule" className={linkCls}>Schedule</Link></li>
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="font-bold text-lg mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/live" className={linkCls}>Live Streaming</Link></li>
            <li><Link href="/rankings" className={linkCls}>Rankings</Link></li>
            <li><Link href="/teams" className={linkCls}>Teams</Link></li>
            <li><Link href="/subscription" className={linkCls}>Subscription</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Email: support@cricstream.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={`border-t ${border} text-center py-4 text-sm opacity-70`}>
        © {new Date().getFullYear()} CricWeb. All rights reserved.
      </div>
    </footer>
  );
}

/* 🔥 SOCIAL ICON COMPONENT */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SocialIcon({ Icon }: any) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-800/40 hover:bg-green-600 cursor-pointer transition">
      <Icon size={16} />
    </div>
  );
}