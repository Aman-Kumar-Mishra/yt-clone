import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { ChannelTopCard } from "./ChannelTopCard";

export function ChannelPlaylistsPage({menu, setMenu, isActive, setActive}){
    setActive('playlists');
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} />
            <ChannelTopCard isActive={isActive}/> 
        </>
    )
}