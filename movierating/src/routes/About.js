import React from "react";
import './About.css'



function About(props){
    console.log(props);
    return( 
    <div className ="about__container">
        <span> 
            MOVIE RATING WEB:) 
        </span> <br />
        <span>-made by Bomin Kim</span>
    </div>
    )
}

export default About;