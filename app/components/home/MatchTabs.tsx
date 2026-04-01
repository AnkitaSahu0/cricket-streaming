"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function MatchTabsSection() {
  const [activeTab, setActiveTab] = useState("live");
 const { dark } = useTheme();
  const matches: Record<string, Array<{
    id: number;
    series: string;
    team1: string;
    team2: string;
    score1: string;
    score2: string;
    status: string;
  }>> = {
    live: [
      {
        id: 1,
        series: "IPL 2026",
        team1: "MI",
        team2: "CSK",
        score1: "178/5 (18.2)",
        score2: "Yet to bat",
        status: "Mumbai Indians batting",
      },
    ],
    upcoming: [
      {
        id: 2,
        series: "Asia Cup",
        team1: "IND",
        team2: "PAK",
        score1: "-",
        score2: "-",
        status: "Starts at 7:30 PM",
      },
    ],
    results: [
      {
        id: 3,
        series: "World Cup",
        team1: "AUS",
        team2: "ENG",
        score1: "280/8",
        score2: "275/9",
        status: "Australia won by 5 runs",
      },
    ],
  };

  const sectionBg = dark
    ? "bg-gradient-to-b from-green-950 to-black text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";

  const tabActive = "bg-green-600 text-white";
  const tabInactive = dark
    ? "bg-green-800/40 text-green-200"
    : "bg-green-200 text-green-900";

  return (
    <section className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          🏏 Matches
        </h2>
      </div>

      {/* TABS */}
      <div className="flex gap-3 px-4 sm:px-6 lg:px-10 mb-6">
        {["live", "upcoming", "results"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-bold capitalize transition
              ${activeTab === tab ? tabActive : tabInactive}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MATCH GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10">

        {matches[activeTab].map((match) => (
          <div
            key={match.id}
            className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${cardBg}`}
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold opacity-80">
                {match.series}
              </span>

              {activeTab === "live" && (
                <span className="flex items-center gap-1 text-xs font-bold text-white bg-red-600 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  LIVE
                </span>
              )}
            </div>

            {/* TEAMS */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{match.team1}</span>
                <span>{match.score1}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold">{match.team2}</span>
                <span>{match.score2}</span>
              </div>
            </div>

            {/* STATUS */}
            <div className="text-sm opacity-70 mb-4">
              {match.status}
            </div>

            {/* BUTTON */}
            <Link
              href={`/match/${match.id}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                         bg-green-600 text-white font-bold hover:bg-green-500 transition"
            >
              <Play size={16} />
              {activeTab === "live"
                ? "Watch Live"
                : activeTab === "upcoming"
                ? "View Details"
                : "View Summary"}
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}