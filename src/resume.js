import React, { useState } from "react";
import "./App.css";
import resumedata from "./data";
function ResumeFull(props) {
    var data = resumedata();
    console.log(data);
    return (<>
       <div className="resume-container">
            <div className="contact">
              
                <h4>Contact</h4>
                <div>
                    <p>
                        <a href="#"> sanju06ee38@gmail.com</a>                        
                        
                    </p>
                    <h5>+91-8423204648</h5>
                </div>
            </div>
            <div className="aboutme">
            <h4>About me</h4>
                <p>
                Result Driven Front-End Developer with 4+ years of experience in providing modern UI Interfaces in highly scalable software and products. I have been involved in the complete software development life cycle (SDLC) including requirement gathering, analysis, design, development, deploying, testing, debugging, UI performance optimization, implementation & maintenance of application.
                    
                </p>
                <ul>	
                    <li>Excellence in UI development using ReactJS, Angular, Material UI and other JS API</li>
                    <li>Experience in Microservices API Based Application</li>
                    <li>Experience in front end and middle layer development</li>
                    <li>Experience in managing all aspects of web, mobile applications.</li>
                    <li>Experience in UI/UX design.</li>
                    <li>Knowledge in Health Insurance and Health E-Commerce Application.</li>
                </ul>
            </div>

       </div>
            </>
    );
}
export default ResumeFull;