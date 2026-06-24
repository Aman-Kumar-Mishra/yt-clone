import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { PageCard } from "../../components/pagecard/PageCard";
import { VideoList } from "../../components/videoList/VideoList";
import './downloadspage.css'

export function DownloadsPage({menu, setMenu}) {
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} />
      <div
        className={
          menu ? "downloads-sidebar-open" : "downloads-sidebar-closed"
        }
      >
        <div className="pagecard-container">
          <PageCard />
        </div>
        <div className="downloads-videolist">
          <VideoList />
        </div>
      </div>
    </>
  );
}
