"use client";

import { useParams } from "next/navigation";

export default function NewsDetailPage() {
  const params = useParams();
  const id = params?.id;

  // Dummy data (replace with API later)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newsData: any = {
    1: {
      title: "Virat Kohli scores stunning century against Australia",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      author: "CricStream",
      date: "April 1, 2026",
      content: [
        "Virat Kohli once again proved why he is one of the greatest batsmen in modern cricket. In a thrilling match against Australia, Kohli delivered a शानदार century under pressure.",
        
        "India was struggling in the initial overs, losing early wickets. However, Kohli stabilized the innings with patience and aggression, building crucial partnerships.",
        
        "His innings included elegant cover drives, powerful pulls, and calculated risks that kept the scoreboard moving.",
        
        "This century marks another milestone in Kohli's career, adding to his already legendary record in international cricket.",
      ],
      highlights: [
        "Century in 92 balls",
        "10 fours and 3 sixes",
        "Match-winning innings",
        "Player of the Match award",
      ],
    },

    2: {
      title: "IPL 2026 schedule announced officially",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
      author: "Admin",
      date: "March 30, 2026",
      content: [
        "The Board of Control for Cricket in India (BCCI) has officially announced the IPL 2026 schedule.",
        "The tournament will feature exciting clashes between top teams with new venues added this season.",
      ],
      highlights: [
        "Opening match: MI vs CSK",
        "Final in Ahmedabad",
        "Total 74 matches",
      ],
    },
  };

  const news = newsData[id as keyof typeof newsData];

  if (!news) {
    return <div className="p-6 text-white">News not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-green-950 text-white px-4 sm:px-6 lg:px-10 py-10">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
        {news.title}
      </h1>

      {/* META */}
      <div className="flex gap-4 text-sm opacity-70 mb-6">
        <span>✍️ {news.author}</span>
        <span>📅 {news.date}</span>
      </div>

      {/* IMAGE */}
      <div className="w-full h-60 sm:h-80 rounded-xl overflow-hidden mb-6">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-4 text-[15px] leading-relaxed">
        {news.content.map((para: string, index: number) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-8 p-5 rounded-xl bg-green-900/40 border border-green-800/50">
        <h2 className="text-xl font-bold mb-3">📌 Match Highlights</h2>

        <ul className="list-disc pl-5 space-y-2">
          {news.highlights.map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}