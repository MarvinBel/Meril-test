import './Navbar.css'

function Navbar() {
    return (
        <div className='navig'>
            <nav className='navig'>
                <div className='start_img'>
                    <img src='/img/Meril2.png' alt='Meril' />
                </div>
                <div>
                    <ul>
                        <div className='navbar-tabs'>
                            <li className='item active' >Home</li>
                            <li className='item' >About us</li>
                            <li className='item' >Features</li>
                            <li className='item' >Fees</li>
                            <li className='item' >Contact Us</li>
                        </div>
                    </ul>
                </div>
                <div>
                    <button className='text-freetrial'>START FREE TRIAL</button>
                    <button className='search_button'>
                        <img src='/img/search_icon.svg' className='search_icon' alt='Search icon'></img>
                    </button>
                    <button className='search_button'>
                        <img src='/img/BurgerIcon.svg' className='burger' alt='Burger icon'></img>
                    </button>
                </div>
            </nav>
            <div className='navbar-line'></div>
        </div>
    );
}

export default Navbar;