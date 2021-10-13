import React from 'react';
import { Link } from 'react-router-dom'


const Splash = () => {

    return(
        <div className="splash-full-body">
            <div className="discover-container">
                <div className="custom-shape-divider-bottom-1628697126">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
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
            <div className="portfolio-div">
            <h2 className="portfolio-text">Portfolio</h2>
                <img src={mountain} className="mountain-img"/>
            </div>
            <div className="project-list">
                <div className="project-containers">
                    <h1><a className="project-links" target="_blank" href="https://juka1031.github.io/Ascension/">Ascension</a></h1>
                    <h4>A 2d platformer built in javascript, featuring a dynamic engine that supports gravity and friction. Find your way to the top and Ascend!</h4>.
                    <a className="project-links" target="_blank" href="https://juka1031.github.io/Ascension/"><img src={ascension} className="ascension-gif" /></a>
                </div>
                <div className="project-containers">
                    <h1><a className="project-links" target="_blank" href="https://homesweetwoof.herokuapp.com/#/">Home Sweet Woof</a></h1>
                    <h4>A dog adoption platform that connects potential adopters with shelters through a systematic and dynamic database of adoptable dogs</h4>
                    <a className="project-links" target="_blank" href="https://homesweetwoof.herokuapp.com/#/"><img className="project-img"src={mern} className="ascension-gif" /></a>
                </div>
            </div>
            <div className="join-community">
                <h3>Join our community today</h3>
                <h5 className="join-text-2">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography.</h5>
                <button className="footer-login-button"><Link to="/signup">Sign up</Link></button>
            </div>
            
            <div className="splash-footer">

                 <ul className="footer-text"> 
                    <h6>Community</h6>
                    <li><a href="#/popular">Popular</a></li>
                    <li><a href="#/fresh">Trending</a></li>
                    <li><a href="#/galleries">Galleries</a></li>

                </ul>
                
                <ul className="footer-text">
                    <h6>About me</h6>
                    <li><a target="_blank" href="https://github.com/Juka1031">Github</a> </li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/julian-kang-09b561221/">LinkedIn</a> </li>
                    <li><a target="_blank" href="https://angel.co/u/julian-kang-1">AngelList</a> </li>
                    <li><a target="_blank" href="https://julian-kang.com/">Portfolio</a> </li>

                </ul>


            </div>
        </div>
    )
}

export default Splash