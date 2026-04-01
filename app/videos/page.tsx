
// import VideoSection from "../components/video/VideoCard";



// export default function VideosPage() {
     
//   return (
//     <div>
//       <VideoSection />
//     </div>
//   );
// }

"use client"; // <- must for client-side access

import VideoPlayer from "@/app/components/video/VideoPlayer";

interface VideoPageProps {
  params: { id: string };
}

export default function VideoPage({ params }: VideoPageProps) {
  const { id } = params; // safe in client component
  return <VideoPlayer videoId={id} />;
}