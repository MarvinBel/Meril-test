import './Beautiful.css'

function Beautiful() {
    return (
        <div className='container'>
            <div className='subtitle'>Secure, scalable And supported</div>
            <div className='title'>Beautiful & Intuitive</div>
            <button className='text-freetrial-big'>START FREE TRIAL</button>
            <div className='photo-cont'>
                <img className='photo' src='/img/teamgribouille.png' alt='Placeholder'></img>
            </div>
            <div className='ourprod-cont'>
                <div className='littler-title'>Our Product</div>
                <div className='yellow-line'></div>
                <div className='product-container'>
                    <div className='card-container'>
                        <div className='white-card'></div>
                        <div className='placeholder'>
                        <img className='formes' src='/img/pholder1.png' alt='first placeholder'></img>
                        </div>
                        <div className='mini-title'>Asset Management</div>
                        <div className='mini-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
                        <a href='javascript:void(0)' className='learn-more'>learn more...</a>
                    </div>
                    <div className='card-container'>
                        <div className='white-card'></div>
                        <div className='placeholder2'>
                            <img className='formes' src='/img/pholder2.png' alt='second placeholder'></img>
                            </div>
                        <div className='mini-title'>Dashboard</div>
                        <div className='mini-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
                        <a href='javascript:void(0)' className='learn-more'>learn more...</a>
                    </div>
                    <div className='card-container'>
                        <div className='white-card'></div>
                        <div className='placeholder3'>
                        <img className='formes' src='/img/pholder3.png' alt='third placeholder'></img>
                        </div>
                        <div className='mini-title'>User Management</div>
                        <div className='mini-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
                        <a href='javascript:void(0)' className='learn-more'>learn more...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beautiful;