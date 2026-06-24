import { Header } from "../../components/header/Header"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { MainGrid } from "./MainGrid"

export function HomePage({menu, setMenu}){
    return(
        <>
            <Header menu={menu} setMenu={setMenu} />
            <Sidebar menu={menu} setMenu={setMenu} />
            <MainGrid menu={menu}/>
        </>
    )
}