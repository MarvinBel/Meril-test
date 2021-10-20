import './Blue.css'

function Blue() {
    return (
        <div className='blue-background'>
            <div className='blue-container'>
                <div className='two-icon-cont'>
                    <div className='one-icon-cont'>
                        <img className='blue-icons' src='/img/diam.png' alt='diamond icon'></img>
                    </div>
                    <div className='one-icon-cont'>
                        <img className='blue-icons'src='/img/in.png' alt='in icon'></img>
                    </div>
                </div>
                <div className='phone'>
                    <div className='blue-burger-cont'>
                    <img classname='blue-miniburger' src='./img/miniburger.png' alt='miniborgar'></img>
                    </div>
                    <div className='blue-mini-text'>Secure, Scalable And Supported</div>
                    <div className='blue-littler-title'>Beautiful & Intuitive</div>
                    <button className='blue-freetrial'>START FREE TRIAL</button>
                    <div>
                        <img className='blue-minimadame-img' src='/img/minimadame.png' alt='mini madame dans le téléphone'></img>
                    </div>
                </div>
                <div className='two-icon-cont'>
                    <div className='one-icon-cont'>
                        <img className='blue-icons-m' src='/img/m.png' alt='m icon'></img>
                    </div>
                    <div className='one-icon-cont'>
                        <img className='blue-icons'src='/img/f.png' alt='f icon'></img>
                    </div>
                </div>
            </div>
            <div className='tktyar'></div>
        </div>
    );
}

export default Blue;