import {Header} from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { VideoList } from '../../components/videoList/VideoList'
import { HistoryOptions } from '../HistoryPage/HistoryOptions'
import './historypage.css'

export function HistoryPage({menu, setMenu}){
    return(
        <main>
            <Header menu={menu} setMenu={setMenu}/>
            <Sidebar menu={menu} setMenu={setMenu}/>
            <div className='history-page-container'>

            <section className={menu?'watched-videos': 'watched-videos-sidebar-closed'}>
                <VideoList/>
            </section>
            <section className='history-options-container'>
                <HistoryOptions/>
            </section>     
            </div>
        </main>
    )
}