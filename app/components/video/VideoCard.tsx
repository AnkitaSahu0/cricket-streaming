"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

/* ================= VIDEO CARD ================= */
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  time: string;
  duration?: string;
  live: boolean;
}

export function VideoCard({ video,dark }: { video: Video; dark: boolean }) {
   
  const cardBg = dark
    ? "bg-green-900/40 border-green-800/50 text-white"
    : "bg-white border-green-200 text-green-950";

  return (
    <Link
      href={`/videos/${video.id}`}
      className={`group block rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${cardBg}`}
    >
      {/* THUMBNAIL */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* PLAY BUTTON */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>

        {/* LIVE BADGE */}
        {video.live && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            LIVE
          </span>
        )}

        {/* DURATION */}
        {!video.live && (
          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-base line-clamp-2">
          {video.title}
        </h3>

        <div className="flex justify-between text-sm opacity-70">
          <span>{video.views} views</span>
          <span>{video.time}</span>
        </div>
      </div>
    </Link>
  );
}

/* ================= MAIN SECTION ================= */
// export default function VideoSection() {
//   const dark = true; // keep same theme like navbar

//   const videos = [
//     {
//       id: 1,
//       title: "IND vs AUS Full Match Highlights",
//       thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
//       views: "120K",
//       time: "2 hours ago",
//       duration: "12:30",
//       live: false,
//     },
//     {
//       id: 2,
//       title: "Live: MI vs CSK IPL Match",
//       thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
//       views: "45K",
//       time: "Live now",
//       live: true,
//     },
//     {
//       id: 3,
//       title: "Top 10 Sixes of the Season",
//       thumbnail: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
//       views: "89K",
//       time: "1 day ago",
//       duration: "08:45",
//       live: false,
//     },
//     {
//       id: 4,
//       title: "Best Wickets Compilation",
//       thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//       views: "60K",
//       time: "3 days ago",
//       duration: "10:20",
//       live: false,
//     },
//   ];

//   const sectionBg = dark
//     ? "bg-gradient-to-b from-black to-green-950 text-white"
//     : "bg-gradient-to-b from-white to-green-50 text-green-950";

//   return (
//     <section className={`w-full py-10 ${sectionBg}`}>
      
//       {/* HEADER */}
//       <div className="px-4 sm:px-6 lg:px-10 mb-6 flex justify-between items-center">
//         <h2 className="text-2xl sm:text-3xl font-extrabold">
//           🎥 Live & Highlights
//         </h2>

//         <Link href="/videos" className="text-green-500 font-semibold">
//           View All →
//         </Link>
//       </div>

//       {/* GRID */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10">
//         {videos.map((video) => (
//           <VideoCard key={video.id} video={video} dark={dark} />
//         ))}
//       </div>

//     </section>
//   );
// }



export default function VideoSection() {
//   const dark = true; // same theme
  const { dark } = useTheme();

  const videos = [
    {
      id: 1,
      title: "IND vs AUS Full Match Highlights",
      teams: "India vs Australia",
      type: "ODI",
      category: "Highlights",
      description: "Complete match highlights with key moments",
      thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      views: "120K",
      time: "2 hours ago",
      duration: "12:30",
      live: false,
    },
    {
      id: 2,
      title: "Live: MI vs CSK IPL Match",
      teams: "Mumbai Indians vs Chennai Super Kings",
      type: "IPL",
      category: "Live",
      description: "Watch live IPL action now",
      thumbnail: "https://images.pexels.com/photos/30671896/pexels-photo-30671896.jpeg?auto=compress&cs=tinysrgb&w=1200",
      views: "45K",
      time: "Live now",
      live: true,
    },
    {
      id: 3,
      title: "Top 10 Sixes of the Season",
      teams: "Multiple Teams",
      type: "T20",
      category: "Trending",
      description: "Best sixes from ongoing tournaments",
      thumbnail: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      views: "89K",
      time: "1 day ago",
      duration: "08:45",
      live: false,
    },
    {
      id: 4,
      title: "Best Wickets Compilation",
      teams: "World Teams",
      type: "Test",
      category: "Highlights",
      description: "Top wickets from recent matches",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      views: "60K",
      time: "3 days ago",
      duration: "10:20",
      live: false,
    },
  ];

  const sectionBg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-gradient-to-b from-white to-green-50 text-green-950";

  return (
    <section className={`w-full py-10 ${sectionBg}`}>

      {/* HEADER */}
      <div className="px-4 sm:px-6 lg:px-10 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            🎥 Live & Highlights
          </h2>

          <p className="text-sm opacity-70 mt-1">
            Watch live matches, highlights & trending cricket videos
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* LIVE COUNT */}
          <span className="px-3 py-1 text-xs bg-red-600 text-white rounded-full animate-pulse">
            🔴 {videos.filter(v => v.live).length} Live
          </span>

          <Link
            href="/videos"
            className="text-green-500 font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10">
        {videos.map((video) => (
          <div key={video.id} className="space-y-2">

            {/* CATEGORY + TYPE */}
            <div className="flex justify-between text-xs opacity-70">
              <span className="bg-green-800/40 px-2 py-0.5 rounded">
                {video.type}
              </span>

              <span
                className={`px-2 py-0.5 rounded ${
                  video.live
                    ? "bg-red-600 text-white animate-pulse"
                    : "bg-green-700/40"
                }`}
              >
                {video.category}
              </span>
            </div>

            {/* VIDEO CARD */}
            <VideoCard video={video} dark={dark} />

            {/* EXTRA DETAILS */}
            <div className="px-1">
              <p className="text-sm font-semibold">
                {video.teams}
              </p>

              <p className="text-xs opacity-70">
                {video.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}