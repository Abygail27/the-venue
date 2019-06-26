import React from 'react'
import Fade  from 'react-reveal/Fade';

const Footer =() => {
    return (
        <footer className = "bck_red">
            <Fade deñay = {500}>
                <div className = "font_righteous footer_logo_venue">
                    The Venue 
                    <div className = "footer_copyright">
                        The Venue 2019.All rights reserved. 
                    </div>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;
