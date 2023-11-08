import React, { Component } from 'react'
import Social from '../components/Social';

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'ReactJS', 'PHP', 'SQL']
        }
    }

    render() {
        return(
            <div className="condiv skills ">
                
                <h1 className="subtopic">My Skills <i class="fa-solid fa-screwdriver-wrench fa-shake"></i></h1>
                <ul>
                    <li>HTML<i class="fa-brands fa-html5 " aria-hidden="true" /></li>
                    <li>CSS<i class="fa-brands fa-css3 "></i></li>
                    <li>JS<i class="fa-brands fa-js "></i></li>
                    <li>React<i class="fa-brands fa-react fa-spin"></i></li>
                    <li>PHP<i class="fa-brands fa-php "></i></li>
                    <li>SQL<i class="fa-solid fa-code "></i></li>
                    
                </ul>
                <Social />
            </div>
        );
    }
}

export default Skills;
