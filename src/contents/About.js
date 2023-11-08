import React, { Component } from 'react'
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'
import Social from '../components/Social'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me <i class="fa-regular fa-address-card fa-flip"></i></h1>
                <img src={profilepic} alt='profile' className='profilepic'/>
                <br></br>
                <ReactTypingEffect text={"Hi, I'm Jiramet"} speed={80} eraseDelay={200} className="typingeffect" />
                {/* <h3>Hi, I'm Jiramet</h3> */}
                <br/>
                <br/>
                <br/>
            
                <p >Hello, my name is Jiramet Kaewchum. I'm 22 years old and currently reside in Wiang Chai 
                    District, Chiang Rai Province, Thailand. I stand at 165 centimeters tall and weigh 50 kilograms.</p><br/>
                <p align ="left">
                    {/* Educational Background:<br/>
                    - School: King Mongkut's University of Technology North Bangkok<br/>
                    - College: College of Industrial Technology<br/>
                    - Major: Electronics Engineering Technology (EnET-C)<br/>
                    <br/> */}
                    I am passionate about pursuing a career in the field of web and software development. Here are some positions I'm interested in:<br/>
                    - Web Developer<br/>
                    - Front End Developer<br/>
                    - Back End Developer<br/>
                    - Full Stack Developer<br/>
                    - Software Developer<br/>
                    <br/>
                    While I am a recent college graduate and still in the early stages of my career, I possess several qualities that make me a promising candidate:<br/>
                    - Fast learner: I have a strong ability to quickly grasp new concepts and technologies, which is essential in the fast-paced world of technology.<br/>
                    - Tenacity: I am determined and persistent when it comes to handling challenging tasks. I don't give up easily and am committed to overcoming obstacles.<br/>
                    - Enthusiastic: I approach my work with enthusiasm and a positive attitude. I believe that a positive mindset can lead to better results and creative problem-solving.<br/>
                    - Responsible: I take my responsibilities seriously and ensure that I meet deadlines and deliver high-quality work.<br/>
                    <br/>
                    I am excited about the opportunity to work in the field of technology and to contribute my skills and enthusiasm to a dynamic team. I'm eager to learn, grow, and make a meaningful impact in the world of web and software development.
                    
                </p>
                
                
            </div>
            
            
        );
    }
}

export default About;
