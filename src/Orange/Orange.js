import './Orange.css'

function Orange() {
    return (
        <div className='orange-background'>
            <div className='orange-container'>
                <div className='checked-container'>
                    <img className='orange-check-icon' src='/img/checkcirc.png' alt='check circle'></img>
                    <div className='orange-mini-title'>Asset Management</div>
                    <div className='orange-mini-text'>Best in class asset management comes standard</div>
                    <div className='separation'></div>
                </div>
                <div className='checked-container'>
                    <img className='orange-check-icon' src='/img/checkcirc.png' alt='check circle'></img>
                    <div className='orange-mini-title'>User Management</div>
                    <div className='orange-mini-text'>Define user groups, and optionally allow public user registration</div>
                    <div className='separation'></div>
                </div>
                <div className='checked-container'>
                    <img className='orange-check-icon' src='/img/checkcirc.png' alt='check circle'></img>
                    <div className='orange-mini-title'>Dashboard</div>
                    <div className='orange-mini-text'>Best in class asset management comes standard</div>
                    <div className='separation'></div>
                </div>
                <div className='checked-container'>
                    <img className='orange-check-icon' src='/img/checkcirc.png' alt='check circle'></img>
                    <div className='orange-mini-title'>Account Management</div>
                    <div className='orange-mini-text'>Best in class asset management comes standard</div>
                </div>
            </div>
        <div className='madame-gribouillis'>
            <img src='/img/gribouillis.png' alt='C est madame gribouillis'></img>
        </div>
        <div className='shapes'>
            <img src='/img/shapes.png' alt='Ce sont juste des formes'></img>
        </div>
        </div>
    );
}

export default Orange;