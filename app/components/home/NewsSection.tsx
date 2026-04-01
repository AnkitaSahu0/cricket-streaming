"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

export default function NewsSection() {
     const { dark } = useTheme();

  const newsData = [
    {
      id: 1,
      title: "India wins thrilling match against Australia",
      category: "Match Report",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    },
    {
      id: 2,
      title: "Virat Kohli hits another century",
      category: "Player News",
      time: "5 hours ago",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
    {
      id: 3,
      title: "IPL 2026 schedule announced",
      category: "Tournament",
      time: "1 day ago",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    },
    {
      id: 4,
      title: "Top 5 Batsman of this season",
      category: "Analysis",
      time: "2 days ago",
      image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
  ];

  const sectionBg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50"
    : "bg-white border-green-200";

  return (
    <section className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          📰 Latest Cricket News
        </h2>

        <Link href="/news" className="text-green-500 font-semibold">
          View All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10">

        {/* FEATURED NEWS */}
        <Link
          href={`/news/${newsData[0].id}`}
          className="lg:col-span-2 group relative rounded-2xl overflow-hidden"
        >
          <img
            src={newsData[0].image}
            alt="news"
            className="w-full h-[280px] sm:h-[350px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
            <span className="text-green-400 text-sm font-bold">
              {newsData[0].category}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              {newsData[0].title}
            </h3>

            <span className="text-xs opacity-80 mt-2">
              {newsData[0].time}
            </span>
          </div>
        </Link>

        {/* SIDE NEWS */}
        <div className="flex flex-col gap-4">
          {newsData.slice(1).map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className={`flex gap-3 rounded-xl border p-2 hover:shadow-lg transition ${cardBg}`}
            >
              <img
                src={news.image}
                alt="news"
                className="w-24 h-20 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <span className="text-xs text-green-500 font-bold">
                  {news.category}
                </span>

                <h4 className="text-sm font-semibold line-clamp-2">
                  {news.title}
                </h4>

                <span className="text-xs opacity-70">
                  {news.time}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}