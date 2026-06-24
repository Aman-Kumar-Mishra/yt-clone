import { Header } from "../../components/header/Header"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { MainGrid } from "../Homepage/MainGrid"

export function PlaylistPage({menu, setMenu}){
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} />
            <MainGrid menu={menu} />
        </>
    )
}