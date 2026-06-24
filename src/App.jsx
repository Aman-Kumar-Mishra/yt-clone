import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage/HomePage'
import { VideoFeedPage } from './pages/VideoFeedPage/VideoFeedPage'
import { HistoryPage } from './pages/HistoryPage/HistoryPage'
import { SubscriptionsPage } from './pages/SubscriptionsPage/SubscriptionsPage'
import { WatchLaterPage } from './pages/watchlaterpage/WatchLaterPage'
import { PlaylistPage } from './pages/playlistpage/PlaylistPage'
import { LikedPage } from './pages/likedpage/LikedPage'
import { DownloadsPage } from './pages/downloadspage/DownloadsPage'
import './App.css'

function App() {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage menu={menu} setMenu={setMenu}/>}/>
        <Route path='/video-feed' element={<VideoFeedPage menu={menu} setMenu={setMenu}/>}/>
        <Route path='/history' element={<HistoryPage menu={menu} setMenu={setMenu}/>}/>
        <Route path='/watch-later' element={<WatchLaterPage menu={menu} setMenu={setMenu} />}/> 
        <Route path='/liked' element={<LikedPage menu={menu} setMenu={setMenu} />}/>
        <Route path='/subscriptions' element={<SubscriptionsPage menu={menu} setMenu={setMenu}/>}/>
        <Route path='/playlist' element={<PlaylistPage menu={menu} setMenu={setMenu}/>} />
        <Route path='/downloads' element={<DownloadsPage menu={menu} setMenu={setMenu} />} />
      </Routes>
    </>
  )
}

export default App
