import './Footer.css'

function Footer() {
    return (
        <div className='footer-background'>
            <div className='footer-container'>
                <div className='footer-title'>Ready to get started?</div>
                <div className='footer-input-cont'>
                    <input className='footer-input' placeholder='Write Your Email'></input>
                    <button className='footer-input-button'>Get Started</button>
                </div>
                <div className='footer-links-container'>
                    <div>
                        <img src='/img/Meril.png' alt='Meril'></img>
                        <div className='footer-text-copyright'>2018© All rights reserved</div>
                        <div className='footer-social-media'>
                            <img src='/img/fb.png' alt='facebook icon'></img>
                            <img src='/img/google.png' alt='google + icon'></img>
                            <img src='/img/twitter.png' alt='twitter icon'></img>
                            <img src='/img/youtube.png' alt='youtube icon'></img>
                        </div>
                    </div>
                    <div className='footer-mini-title'>COMPANY
                        <div className='footer-inside-titles'>
                            <div className='footer-text-link'>About</div>
                            <div className='footer-text-link'>Security & Privacy</div>
                            <div className='footer-text-link'>Careers</div>
                            <div className='footer-text-link'>Blog</div>
                        </div>
                    </div>
                    <div className='footer-mini-title'>PRODUCT
                        <div className='footer-inside-titles'>
                            <div className='footer-text-link'>Feature</div>
                            <div className='footer-text-link'>Explore</div>
                            <div className='footer-text-link'>Pricing</div>
                            <div className='footer-text-link'>Apps</div>
                            <div className='footer-text-link'>For iOS</div>
                        </div>
                    </div>
                    <div className='footer-mini-title'>ABOUT
                        <div className='footer-inside-titles'>
                            <div className='footer-text-link'>Stories</div>
                            <div className='footer-text-link'>About Us</div>
                            <div className='footer-text-link'>Blog</div>
                            <div className='footer-text-link'>Careers</div>
                        </div>
                    </div>
                    <div className='footer-mini-title'>BITS
                        <div className='footer-inside-titles'>
                            <div className='footer-text-link'>Help Center</div>
                            <div className='footer-text-link'>Enterprise</div>
                            <div className='footer-text-link'>Terms of Service</div>
                            <div className='footer-text-link'>Privacy</div>
                            <div className='footer-text-link'>Security</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;