"use client";

import { useTheme } from "@/app/context/ThemeContext";
import NewsCard from "./NewsCard";

export default function NewsList() {
     const { dark } = useTheme();
//   const dark = true;

  const newsData = [
    {
      id: 1,
      title: "Virat Kohli scores stunning century against Australia",
      description: "Kohli leads India to victory with an शानदार innings.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      category: "Match",
      author: "CricStream",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "IPL 2026 schedule announced officially",
      description: "BCCI releases full IPL schedule with exciting matches.",
      image: "https://images.pexels.com/photos/30671896/pexels-photo-30671896.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "IPL",
      author: "Admin",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Top 5 bowlers dominating world cricket",
      description: "These bowlers are ruling international cricket.",
      image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      category: "Ranking",
      author: "CricStream",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "India vs Pakistan clash date confirmed",
      description: "Biggest rivalry match date officially announced.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      category: "Breaking",
      author: "Admin",
      time: "2 days ago",
    },
  ];

  const sectionBg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  return (
    <section className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          📰 Latest Cricket News
        </h2>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} dark={dark} />
        ))}
      </div>

    </section>
  );
}