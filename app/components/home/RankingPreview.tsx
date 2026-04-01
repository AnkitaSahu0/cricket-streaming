"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

export default function RankingsPreviewSection() {
  const [activeTab, setActiveTab] = useState<"batsmen" | "bowlers" | "teams">("batsmen");
   const { dark } = useTheme();

  const data: {
    batsmen: { name: string; rating: number; team: string }[];
    bowlers: { name: string; rating: number; team: string }[];
    teams: { name: string; rating: number }[];
  } = {
    batsmen: [
      { name: "Virat Kohli", rating: 890, team: "IND" },
      { name: "Babar Azam", rating: 880, team: "PAK" },
      { name: "Joe Root", rating: 870, team: "ENG" },
      { name: "Steve Smith", rating: 865, team: "AUS" },
      { name: "Kane Williamson", rating: 860, team: "NZ" },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", rating: 900, team: "IND" },
      { name: "Shaheen Afridi", rating: 885, team: "PAK" },
      { name: "Mitchell Starc", rating: 870, team: "AUS" },
      { name: "Trent Boult", rating: 865, team: "NZ" },
      { name: "Rashid Khan", rating: 860, team: "AFG" },
    ],
    teams: [
      { name: "India", rating: 125 },
      { name: "Australia", rating: 120 },
      { name: "England", rating: 118 },
      { name: "Pakistan", rating: 115 },
      { name: "New Zealand", rating: 112 },
    ],
  };

  const sectionBg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";

  const tabActive = "bg-green-500 text-white";
  const tabInactive = dark
    ? "bg-green-800/40 text-green-200"
    : "bg-green-100 text-green-800";

  return (
    <section id="ranking" className={`w-full  py-20 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          📊 ICC Rankings
        </h2>

        <Link href="/rankings" className="text-green-500 font-semibold">
          View Full →
        </Link>
      </div>

      {/* TABS */}
      <div className="flex gap-3 px-4 sm:px-6 lg:px-10 mb-6">
        {["batsmen", "bowlers", "teams"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "batsmen" | "bowlers" | "teams")}
            className={`px-4 py-2 rounded-full font-semibold capitalize transition ${
              activeTab === tab ? tabActive : tabInactive
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className={`rounded-2xl border overflow-hidden ${cardBg}`}>

          {data[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b last:border-none hover:bg-green-800/20 transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <span className="text-green-500 font-bold text-lg">
                  #{index + 1}
                </span>

                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  {"team" in item && item.team && (
                    <span className="text-xs opacity-70">
                      {item.team}
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <span className="font-bold text-green-400">
                {item.rating}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}