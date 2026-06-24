import {Header} from '../../components/header/Header'
import {Sidebar} from '../../components/sidebar/Sidebar'
import { MainGrid } from '../Homepage/MainGrid'
import './subscriptionspage.css'

export function SubscriptionsPage({menu, setMenu}){
    return(
        <main>
            <Header menu={menu} setMenu={setMenu}/>
            <Sidebar menu={menu}/>
            <MainGrid menu={menu}/>
        </main>
    )
}``