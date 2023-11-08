import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me <i class="fa-solid fa-id-card-clip fa-beat-fade"></i></h1>
                <h3>Email : bomcrmon@gmail.com</h3>
                <h3>github: github.com/bomcrmon</h3>
                <h3>Instagram : @bomcrmon</h3>                
                <h3>facebook : facebook.com/bomcrmon</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;
