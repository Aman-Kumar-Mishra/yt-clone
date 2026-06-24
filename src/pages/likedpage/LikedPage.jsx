import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { PageCard } from "../../components/pagecard/PageCard";
import { VideoList } from "../../components/videoList/VideoList";
import './likedpage.css'

export function LikedPage({ menu, setMenu }) {
  return (
    <main>
      <Header menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} />
      <div
        className={
          menu ? "likedvideo-sidebar-open" : "likedvideo-sidebar-closed"
        }
      >
        <div className="pagecard-container">
          <PageCard />
        </div>
        <div className="likedvideo-videolist">
          <VideoList />
        </div>
      </div>
    </main>
  );
}
