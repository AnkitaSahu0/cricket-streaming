"use client";

import { useState } from "react";
import { Play, Eye } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

const matches = [
  {
    id: 1,
    title: "India vs Australia",
    viewers: "1.2M watching",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
  },
  {
    id: 2,
    title: "England vs Pakistan",
    viewers: "860K watching",
    thumbnail: "https://images.pexels.com/photos/30671896/pexels-photo-30671896.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "CSK vs MI",
    viewers: "2.5M watching",
    thumbnail: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
  },
  {
    id: 4,
    title: "RCB vs KKR",
    viewers: "1.8M watching",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },
];

export default function LiveMatches() {
//   const [dark, setDark] = useState(true);
 const { dark } = useTheme();

   const bg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";
  return (
    <section id="home" className={`w-full py-10 px-4 sm:px-6 lg:px-10 ${bg} `}>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-black tracking-wide">
          🔴 Live Matches
        </h2>

       
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {matches.map((match) => (
          <div
            key={match.id}
            className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer ${cardBg}`}
          >

            {/* VIDEO THUMBNAIL */}
            <div className="relative h-48 overflow-hidden">

              <img
                src={match.thumbnail}
                alt={match.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition">
                  <Play className="text-black" />
                </div>
              </div>

              {/* LIVE BADGE */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                LIVE
              </div>

            </div>

            {/* DETAILS */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-lg">{match.title}</h3>

              <div className="flex items-center gap-2 text-sm opacity-80">
                <Eye size={14} />
                {match.viewers}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}