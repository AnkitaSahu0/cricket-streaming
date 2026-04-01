"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

/* ================= VIDEO PLAYER ================= */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function VideoPlayer({ videoId }: { videoId: string }) {
    const { dark } = useTheme();

  const video = {
    title: "Live: IND vs AUS Cricket Match",
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with real stream (.m3u8 or mp4)
    views: "120K",
    time: "Live now",
    description:
      "Watch the live cricket match between India and Australia. Enjoy high-quality streaming with real-time updates.",
    live: true,
  };

  const relatedVideos = [
    {
      id: 1,
      title: "Top 10 Sixes",
      thumbnail:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
    {
      id: 2,
      title: "Best Wickets",
      thumbnail:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
    {
      id: 3,
      title: "Match Highlights",
      thumbnail:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
    },
  ];

  const bg = dark
    ? "bg-gradient-to-b from-black to-green-950 text-white"
    : "bg-white text-black";

  return (
    <section className={`w-full min-h-screen ${bg}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 grid lg:grid-cols-3 gap-6">

        {/* ================= LEFT (PLAYER) ================= */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* VIDEO */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative">
            <video
              src={video.src}
              controls
              autoPlay={video.live}
              className="w-full h-full object-cover"
            />

            {/* LIVE BADGE */}
            {video.live && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                LIVE
              </span>
            )}
          </div>

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-bold">
            {video.title}
          </h1>

          {/* META */}
          <div className="flex gap-4 text-sm opacity-70">
            <span>{video.views} views</span>
            <span>{video.time}</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base opacity-80">
            {video.description}
          </p>

        </div>

        {/* ================= RIGHT (RELATED) ================= */}
        <div className="flex flex-col gap-4">

          <h2 className="text-lg font-bold mb-2">
            Related Videos
          </h2>

          {relatedVideos.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-2 rounded-xl hover:bg-green-900/40 transition cursor-pointer"
            >
              <div className="w-32 h-20 rounded-lg overflow-hidden relative">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition">
                  <Play size={20} className="text-white" />
                </div>
              </div>

              <h3 className="text-sm font-semibold line-clamp-2">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}