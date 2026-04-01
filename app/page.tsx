import React from 'react'
import HomeHero from './components/home/HeroLiveMatch'
import MatchesSection from './components/home/MatchCard'
import MatchTabsSection from './components/home/MatchTabs'
import NewsSection from './components/home/NewsSection'
import { Subscript, Video } from 'lucide-react'

import VideoSection from './components/video/VideoCard'
import RankingsPreviewSection from './components/home/RankingPreview'
import ScheduleSection from './components/home/ScheduleSection'
import SubscriptionPage from './components/home/Subscription'



const page = () => {
 
  return (
   <>
      <HomeHero/>
      <MatchesSection/>
      <MatchTabsSection/>
      <NewsSection/>
      <RankingsPreviewSection/>
      <ScheduleSection/>
     
      <VideoSection />
       <SubscriptionPage/>
  </>
  )
}

export default page
