import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { ChannelTopCard } from "./ChannelTopCard";

export function ChannelPage({menu, setMenu}){
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} />
            <ChannelTopCard />  
        </>
    )
}