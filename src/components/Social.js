import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/bomcrmon" target="_blank" rel="noopender noreferrer"><i class="fab fa-github" aria-hidden="true" /></a>
                <a href="https://www.instagram.com/bomcrmon/" target="_blank" rel="noopender noreferrer"><i class="fab fa-instagram" aria-hidden="true" /></a>
                <a href="https://www.facebook.com/bomcrmon/" target="_blank" rel="noopender noreferrer"><i class="fab fa-facebook" aria-hidden="true" /></a>
                {/* <a href="http://localhost:3000/contact" target="_blank" rel="noopender noreferrer"><i class="fa fa-envelope"  aria-hidden="true" /></a> */}
            </div>
        );
    }
}

export default Social;
