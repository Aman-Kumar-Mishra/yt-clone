import { NavLink } from 'react-router-dom'
import './header.css'

export function Header({menu,setMenu}){

    function activateSidebar(){
        setMenu(!menu)
        console.log('sidebar toggled')
    }

    return(
        <main className='header'>
            <section className='left-section'>
                <button onClick={activateSidebar} className='hamburger-menu-button'>
                    <img src="hamburger.svg" width='16px' alt="" />
                </button>
                <NavLink to='/'>
                <button className='yt-logo'>
                    <img src="YT-Logo.svg" width='60px' alt="" />
                </button>
                </NavLink>
            </section>
            <section className='middle-section'>
                <input type="text" placeholder='Search' />
                <button className='search-button'>
                    <img src="search-button.svg" width='15px' alt="" />
                </button>
                <button className='microphone-search-button'>
                    <img src="microphone-alt.svg" width='15px' alt="" />
                </button>
            </section>
            <section className='right-section'>
                <button className='create-button'>
                    <img src="plus.svg" width='15px' alt="" />
                    <span>Create</span>
                </button>
                <button className='notification-button'>
                    <img src="bell.svg" width='15px' alt="" />
                </button>
                <img src="profile-pic.jpg" className='profile' width='30px' alt="" />
            </section>
        </main>
    )
}