import React from 'react'
import {Link} from 'react-router-dom'

function AboutText(){

    return(
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">I love smart, but affordable <br /> solutions.</h2>
                        <Link to='/'>View projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">Since i'm working alone from my apartment i got no external costs so my prices are really reasonable. I love having creative clients who dares to think outside the box. </p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <h5 style={{color:"#888", fontSize:"0.9em", fontWeight:"200", marginBottom:"20px"}}>Why pick me? I have</h5>
                        <ul>
                            <li></li>
                            <li>5 years Experience</li>
                            <li>10+ Completed Projects</li>
                            <li>2 years full stack studies</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                    <h5 style={{color:"#888", fontSize:"0.9em", fontWeight:"200", marginBottom:"20px"}}>And</h5>

                        <ul>
                            <li>A light roast coffee addiction</li>
                            <li>Too much energy</li>
                            <li>An office bike so i can funnel my energy</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
    
}

export default AboutText