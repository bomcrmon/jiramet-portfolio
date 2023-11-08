 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';
 import Social from '../components/Social';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education <i class="fa-solid fa-school fa-bounce"></i></h1>
                 <Widecard title="Electronics Engineering Technology (EnET-C)" where="King Mongkut's University of Technology North Bangkok" from="2019" to="2023" />
                 <Widecard title="Diploma in Electronic" where="Chiangrai Technical College" from="2016" to="2019" />
                 <Social />
             </div>
         );
     }
 }
 
 export default Education;