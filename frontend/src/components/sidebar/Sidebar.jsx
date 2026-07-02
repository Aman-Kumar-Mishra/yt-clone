import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./sidebar.css";

export function Sidebar({ menu }) {
  const {pathname} = useLocation()

  const isFeedPage = pathname.startsWith('/video-feed')

  if (menu === false) {
    if(isFeedPage){
      return(
        <></>
      )
    }
    return (
      <main className='sidebar'>
        <NavLink to='/'>
        <button>
          <img src="home.svg" alt="" />
          <span>Home</span>
        </button>
        </NavLink>
        <button>
          <img src="yt-shorts.svg" alt="" />
          <span>Shorts</span>
        </button>
        <NavLink to='/subscriptions'>
        <button>
          <img src="subscriptions.svg" alt="" />
          <span>Subscriptions</span>
        </button>
        </NavLink>
        <button>
          <img src="profile-icon.svg" alt="" />
          <span>You</span>
        </button>
      </main>
    );
  }
  if(menu===true){
    return(
      <main className={isFeedPage? 'feed-sidebar' : 'sidebar-toggled'}>
        <section>
          <NavLink to='/'>
          <div id="home-btn">
            <img src="home.svg" width='18px' alt="" />
            <span>Home</span>
          </div>
          </NavLink>  
          <div>
            <img src="yt-shorts.svg" width='18px' alt="" />
            <span>Shorts</span>
          </div>
        </section>
        <section>
          <NavLink to='/subscriptions'>
          <p>Subsciptions  &gt;</p>
          </NavLink>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="channel-img-1.jpg" width='18px' alt="" />
            <span>SuperSimpleDev</span>
          </div>
          <div>
            <img src="arrow-down.svg" width='18px' alt="" />
            <span>Show more</span>
          </div>
        </section>
        <section>
          <p>You  &gt;</p>
          <div>
            <img src="profile-icon.svg" width='18px' alt="" />
            <span>Your Channel</span>
          </div>
          <NavLink to='/history'>
          <div>
            <img src="history.svg" width='18px' alt="" />
            <span>History</span>
          </div>
          </NavLink>
          <NavLink to='/playlist'>
            <div>
              <img src="playlist.svg" width='18px' alt="" />
              <span>Playlists</span>
            </div>
          </NavLink>
          <NavLink to='/watch-later'>
            <div>
              <img src="clock.svg" width='18px' alt="" />
              <span>Watch Later</span>
            </div>
          </NavLink>
          <NavLink to='/liked'>
            <div>
              <img src="thumbs-up.svg" width='18px' alt="" />
              <span>Liked videos</span>
            </div>
          </NavLink>
          <NavLink to='/downloads'>  
            <div>
              <img src="downloads.svg" width='18px' alt="" />
              <span>Downloads</span>
            </div>
          </NavLink>
          <div>
            <img src="arrow-down.svg" width='18px' alt="" />
            <span>Show more</span>
          </div>
        </section>
        <section>
          <div>
            <img src="flag.svg" width='18px' alt="" />
            <span>Report history</span>
          </div>
        </section>
      </main>
    );
  }
}
