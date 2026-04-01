"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function SubscriptionPage() {
  const { dark } = useTheme();

  const pageBg = dark
    ? "bg-gradient-to-b from-green-950 to-black text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/30 border-green-800/50"
    : "bg-white border-green-200";

  const buttonCls = dark
    ? "bg-green-600 hover:bg-green-500 text-white font-bold"
    : "bg-green-400 hover:bg-green-300 text-green-950 font-bold";

  const plans = [
    {
      name: "Basic",
      price: "$5/mo",
      features: ["Access to free highlights", "Limited live matches"],
    },
    {
      name: "Pro",
      price: "$15/mo",
      features: ["All Basic features", "Live matches", "Ad-free experience"],
    },
    {
      name: "Premium",
      price: "$25/mo",
      features: [
        "All Pro features",
        "Exclusive interviews",
        "Early match notifications",
      ],
    },
  ];

  return (
    <div id="subscription" className={`min-h-screen ${pageBg} transition-all duration-300`}>
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-green-700/40">
        <h1 className="text-3xl font-extrabold tracking-wide">
          🏏 CricStream Subscription
        </h1>

        
      </header>

      {/* MAIN CONTENT */}
      <main className="px-6 sm:py-1 md:my-28 flex flex-col items-center align-middle justify-center gap-8">
        <p className="text-lg text-center max-w-xl opacity-80">
          Upgrade your experience with our subscription plans and get full access
          to live matches, highlights, and exclusive content.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col gap-4 border ${cardBg} shadow-lg hover:scale-105 transition`}
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="text-xl font-extrabold">{plan.price}</p>
              <ul className="flex flex-col gap-2 mt-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-4 py-2 rounded-lg ${buttonCls} transition-all`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm opacity-60  max-w-md text-center">
          All subscriptions are automatically renewed monthly. Cancel anytime.
        </p>
      </main>

      
    </div>
  );
}