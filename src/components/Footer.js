import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {

    const date = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: 'Twitter',
            url: 'https://www.twitter.com/'
        }
    ]

    return(
        <footer id="footerSection">
            <div className="container-fluid-small">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 footer-title anim-bot">
                        <h2 className="big-title">Let's create something together.</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 footer-project anim-bot">
                        <Link to='/contact'>Start a project</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-4 copyright">
                        <p>Copyright © {date} Brightwood Design.</p>
                        <div className="footer-menu">
                            <ul>
                                {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-1 footer-offset"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 contact-box contact-mail">
                        <h5 className="sub-title">Contact</h5>
                        <ul>
                            <li>anton@brightwood.design</li>
                            <li>hello@antonwall.in</li>
                            <li>0708782688</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 contact-box contact-address">
                        <h5 className="sub-title">Visit Me</h5>
                        <ul>
                            <li>Kommendörsgatan 8A</li>
                            <li>Gothenborg, 41459</li>
                            <li>Sweden</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )

}

export default Footer