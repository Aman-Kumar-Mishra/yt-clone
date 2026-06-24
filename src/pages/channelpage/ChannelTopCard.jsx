import './channeltopcard.css'

export function ChannelTopCard(){
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
                    <button>Home</button>
                    <button>Videos</button>
                    <button>Releases</button>
                    <button>Playlists</button>
                    <button>Posts</button>
                    <button>
                        <img src="search-button.svg" width='12px' alt="" />
                    </button>
                </div>
            </section>
        </main>
    )
}