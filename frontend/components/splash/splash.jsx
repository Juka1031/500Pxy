import React from 'react';
import { Link } from 'react-router-dom'


const Splash = () => {

    return(
        <div className="splash-full-body">
            <div className="discover-container">
            <div className="custom-shape-divider-bottom-1631840387">
                
            </div>
                <div className="discover-text">
                
                    <h1>Discover and share the world’s best photos</h1>
                    <h5>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography</h5>
                       
                    <button className="splash-login-button"><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
            <div className="about-container">
                <h2>What makes me different</h2>
                <div className="about-content-container">
                    <div className="about-content">
                    <img src={vine} />
                        <h4>Driven to success</h4>
                        <h5>No mountain too high or too low to achieve my goals and dreams. Always seeking new heights to expand my horizons and gain new insights.</h5>
                    </div>
                    <div className="about-content">
                    <img src={pencil} />
                        <h4>Always adapting and growing</h4>
                        <h5>Constantly seeking ways to improve myself and learn new technologies to put to use. There is no room for stagnation or complacency to dull my skills. Not afraid to make mistakes, as it is one of the the best tools for improvement</h5>
                    </div>
                    <div className="about-content">
                    <img src={graph} />
                        <h4>Fun to be around with</h4>
                        <h5>Always down to interact and meet new people. Will not shy away from new experiences and hope to learn the best from everyone.</h5>
                    </div>
                </div>
            </div>
            <div className="join-community">
                <h3>Join our community today</h3>
                <h5 className="join-text-2">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography.</h5>
                <button className="footer-login-button"><Link to="/signup">Sign up</Link></button>
            </div>

            <div className="splash-footer">

                 <ul>
                    <h6>Community</h6>
                    <li>Popular Photos</li>
                    <li>Galleries</li>
                    <li>Trending</li>

                </ul>
                <ul>
                    <h6>Company</h6>
                    <li>Newsroom</li>
                    <li>About us</li>
                    <li>Carrer</li>
                </ul>
                
                <ul>
                    <h6>About me</h6>
                    <li><a href="https://github.com/Juka1031">Github</a> </li>
                    <li>Linkedin</li>
                    <li>Other projects</li>

                </ul>


            </div>
        </div>
    )
}

export default Splash