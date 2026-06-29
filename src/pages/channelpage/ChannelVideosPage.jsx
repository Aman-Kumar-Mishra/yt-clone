import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { ChannelTopCard } from "./ChannelTopCard";

export function ChannelVideosPage({menu, setMenu, isActive, setActive}){
    setActive('videos');
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} />
            <ChannelTopCard isActive={isActive}/> 
        </>
    )
}