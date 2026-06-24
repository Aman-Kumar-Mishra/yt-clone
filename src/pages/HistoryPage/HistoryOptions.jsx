import './historyoptions.css'
export function HistoryOptions(){
    return(
        <main className='history-options'>
            <div>
                <img src="search-button.svg" width='15px' alt="" />
                <input type="text" placeholder='Search watch history' />
            </div>
            <button>
                <img src="dustbin.svg" width='18px' alt="" />
                <span>Clear all watch history</span>
            </button>
            <button>
                <img src="pause.svg" width='18px' alt="" />
                <span>Pause watch history</span>
            </button>
            <button>
                <img src="setting.svg" width='18px' alt="" />
                <span>Manage all history</span>
            </button>
            <a href="">Comments</a>
            <a href="">Posts</a>
            <a href="">Live chat</a>
        </main>
    )
}