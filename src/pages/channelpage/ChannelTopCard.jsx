import { NavLink } from 'react-router-dom'
import './channeltopcard.css'

export function ChannelTopCard({isActive}){
    return(
        <main className="channel-top-card">
            <section className="channel-banner-image">
                <img src="channel_banner-1.jpg" alt="" />
            </section>
            <section className='channeltopcard-channel-description-content'>
                <div className='channeltopcard-channel-dp'>
                    <img src="channel-dp.jpg" alt="" />
                </div>
                <div className='channeltopcard-channel-description'>
                    <span className='channeltopcard-channel-name'>2CELLOS</span>
                    <div>
                        <span>@CELLOSlive</span>
                        <span>&middot;</span>
                        <span>67.2 lakh subscribers</span>
                        <span>&middot;</span>
                        <span>213 videos</span>
                    </div>
                    <div>
                        <div>The official home of 2CELLOS<button id='channeltopcard-more-button'>...more</button></div>
                        <div>2cellos.com and 5 more links</div>
                    </div>
                    <button className='channeltopcard-subscribe-button'>
                        <img src="bell.svg" width='18px' alt="" />
                        <span>Subscribed</span>
                        <img src="arrow-down.svg" width='12px' alt="" />
                    </button>
                </div>
            </section>
            <section className='channeltopcard-navigation'>
                <div>
                    <NavLink to='/channel-home'>
                        <button id={isActive==='home'?'decorate':''}>Home</button>
                    </NavLink>
                    <NavLink to='/channel-videos'>
                        <button id={isActive==='videos'?'decorate':''}>Videos</button>
                    </NavLink>
                    <NavLink to='/channel-releases'>
                        <button id={isActive==='releases'?'decorate':''}>Releases</button>
                    </NavLink>
                    <NavLink to='/channel-playlists'>
                        <button id={isActive==='playlists'?'decorate':''}>Playlists</button>
                    </NavLink>
                    <NavLink to='/channel-posts'>
                        <button id={isActive==='posts'?'decorate':''}>Posts</button>
                    </NavLink>
                    <button className='channeltopcard-search-button'>
                        <img src="search-button.svg" width='12px' alt="" />
                    </button>
                </div>
            </section>
        </main>
    )
}