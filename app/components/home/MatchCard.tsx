"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function MatchesSection() {
 const { dark } = useTheme();

  const matches = [
    {
      id: 1,
      series: "IPL 2026",
      team1: "MI",
      team2: "CSK",
      score1: "178/5 (18.2)",
      score2: "Yet to bat",
      status: "Mumbai Indians batting",
      live: true,
    },
    {
      id: 2,
      series: "World Cup",
      team1: "IND",
      team2: "AUS",
      score1: "250/8",
      score2: "240/9",
      status: "India won by 10 runs",
      live: false,
    },
    {
      id: 3,
      series: "Asia Cup",
      team1: "PAK",
      team2: "SL",
      score1: "190/6",
      score2: "120/4 (15.3)",
      status: "Sri Lanka chasing",
      live: true,
    },
  ];

  const sectionBg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";
  return (
    <section id="home" className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          🏏 Live Matches
        </h2>

       
      </div>

      {/* MATCH GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10">

        {matches.map((match) => (
          <div
            key={match.id}
            className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${cardBg}`}
          >

            {/* TOP ROW */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold opacity-80">
                {match.series}
              </span>

              {match.live && (
                <span className="flex items-center gap-1 text-xs font-bold text-white bg-red-600 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  LIVE
                </span>
              )}
            </div>

            {/* TEAMS */}
            <div className="flex flex-col gap-2 mb-3">

              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{match.team1}</span>
                <span className="font-semibold">{match.score1}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{match.team2}</span>
                <span className="font-semibold">{match.score2}</span>
              </div>

            </div>

            {/* STATUS */}
            <div className="text-sm opacity-70 mb-4">
              {match.status}
            </div>

            {/* BUTTON */}
            <Link
              href={`/live/${match.id}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                         bg-green-600 text-white font-bold hover:bg-green-500 transition"
            >
              <Play size={16} />
              {match.live ? "Watch Live" : "View Details"}
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}