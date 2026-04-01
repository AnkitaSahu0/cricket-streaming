// "use client";

// import VideoPlayer from "@/app/components/video/VideoPlayer";



// export default function VideoPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;

//   return <VideoPlayer videoId={id} />;
// }

// app/videos/[id]/page.tsx
"use client";
import VideoPlayer from "@/app/components/video/VideoPlayer";

 // <- make it a client component



interface VideoPageProps {
  params: { id: string };
}

export default function VideoPage({ params }: VideoPageProps) {
  const { id } = params;
  return <VideoPlayer videoId={id} />;
}