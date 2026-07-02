import './pagecard.css'

export function PageCard(){
    return(
        <main className='pagecard'>
            <div className='pagecard-content'>    
                <img src="thumbnail-1.jpg" width='220px' alt="" />
                <p>Watch Later</p>
                <span className='pagecard-username'>Aman Kumar Mishra</span>
                <div className='pagecard-stats'>
                    <span>65 videos</span>
                    <span>No views</span>
                    <span>Updated today</span>
                </div>
                <div className='pagecard-options-button'>
                    <button>
                        <img src="downloads.svg" width='18px' alt="" />
                    </button>
                    <button className='pagecard-three-dots-button'>
                        <img src="three-dots.svg" width='15px' alt="" />
                    </button>
                </div>
                <div className='pagecard-accessibilities'>
                    <button>
                        <img src="play.svg" width='10px' alt="" />
                        <span>Play all</span>
                    </button>
                    <button className='pagecard-shuffle-button'>
                        <img src="shuffle.svg" width='15px' alt="" />
                        <span>Shuffle</span>
                    </button>
                </div>
            </div>
        </main>
    )
}