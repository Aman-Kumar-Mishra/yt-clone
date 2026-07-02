import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { PageCard } from "../../components/pagecard/PageCard";
import { VideoList } from "../../components/videoList/VideoList";
import './watchlater.css'

export function WatchLaterPage({menu, setMenu}){
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} />
            <div className= {menu? 'watchlater-sidebar-open':'watchlater-sidebar-closed'}>
                <div className="pagecard-container">
                    <PageCard />
                </div>
                <div className="watchlater-videolist">
                    <VideoList />
                </div>
            </div>
        </>
    )
}