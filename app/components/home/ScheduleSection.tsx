"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { useState } from "react";

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { dark } = useTheme();
  const matches: Record<string, Array<{ teams: string; time: string; venue: string }>> = {
    upcoming: [
      {
        teams: "India vs Australia",
        time: "Today, 7:30 PM",
        venue: "Wankhede Stadium",
      },
      {
        teams: "England vs Pakistan",
        time: "Tomorrow, 6:00 PM",
        venue: "Lord's",
      },
    ],
    live: [
      {
        teams: "South Africa vs NZ",
        time: "Live Now",
        venue: "Cape Town",
      },
    ],
    results: [
      {
        teams: "India beat SL by 5 wickets",
        time: "Yesterday",
        venue: "Mumbai",
      },
      {
        teams: "Australia beat England by 3 runs",
        time: "2 days ago",
        venue: "Melbourne",
      },
    ],
  };

  const sectionBg = dark
    ? "bg-gradient-to-b from-green-950 to-black text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";

  const tabActive = "bg-green-500 text-white";
  const tabInactive = dark
    ? "bg-green-800/40 text-green-200"
    : "bg-green-100 text-green-800";

  return (
    <section id="schedule" className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          📅 Match Schedule
        </h2>
      </div>

      {/* TABS */}
      <div className="flex gap-3 px-4 sm:px-6 lg:px-10 mb-6">
        {["upcoming", "live", "results"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold capitalize transition ${
              activeTab === tab ? tabActive : tabInactive
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MATCH CARDS */}
      <div className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {matches[activeTab].map((match, index) => (
          <div
            key={index}
            className={`rounded-2xl border p-4 hover:scale-[1.02] transition duration-300 ${cardBg}`}
          >
            {/* TEAMS */}
            <h3 className="font-bold text-lg mb-2">
              {match.teams}
            </h3>

            {/* TIME */}
            <p className="text-sm opacity-80">
              🕒 {match.time}
            </p>

            {/* VENUE */}
            <p className="text-sm opacity-70">
              📍 {match.venue}
            </p>

            {/* STATUS */}
            {activeTab === "live" && (
              <span className="inline-block mt-3 px-3 py-1 text-xs bg-red-600 text-white rounded-full animate-pulse">
                LIVE
              </span>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}