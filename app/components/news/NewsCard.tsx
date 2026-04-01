"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsCard({ news }: any) {
     const { dark } = useTheme();
  if (!news) return null;


  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";

  return (
    <div className="space-y-2">

      {/* 🆕 NEWS HEADING / LABEL */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold tracking-wide text-green-400 uppercase">
          📰 Latest News
        </span>

        {/* OPTIONAL TYPE */}
        {news.type && (
          <span className="text-[10px] px-2 py-0.5 rounded bg-green-700/40 text-green-200">
            {news.type}
          </span>
        )}
      </div>

      <Link
        href={`/news/${news.id}`}
        className={`group block rounded-2xl overflow-hidden border hover:scale-[1.02] transition duration-300 ${cardBg}`}
      >
        {/* IMAGE */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />

          {/* CATEGORY BADGE */}
          <span className="absolute top-2 left-2 px-2 py-1 text-xs bg-green-600 text-white rounded">
            {news.category}
          </span>

          {/* 🆕 BREAKING TAG */}
          {news.breaking && (
            <span className="absolute top-2 right-2 px-2 py-1 text-xs bg-red-600 text-white rounded animate-pulse">
              BREAKING
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg leading-snug line-clamp-2">
            {news.title}
          </h3>

          <p className="text-sm opacity-70 line-clamp-2">
            {news.description}
          </p>

          {/* FOOTER */}
          <div className="flex justify-between text-xs opacity-60 pt-2">
            <span>{news.author}</span>
            <span>{news.time}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}