import React from 'react';
import { Link } from 'react-router-dom'


const Splash = () => {

    return(
        <div className="splash-full-body">
            <div className="discover-container">
                <div className="discover-text">
                    <h1>Discover and share the world’s best photos</h1>
                    <h5>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography</h5>
                       
                    <button className="splash-login-button"><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
            <div className="about-container">
                <h2>What makes us different</h2>
                <div className="about-content-container">
                    <div className="about-content">
                    <img src={vine} />
                        <h4>Grow as a photographer</h4>
                        <h5>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</h5>
                    </div>
                    <div className="about-content">
                    <img src={pencil} />
                        <h4>Build your career</h4>
                        <h5>Present yourself as a professional. Display your Services, create a Directory listing and get hired, showcase your articles, presets, videos, and more with Resources, and curate Galleries to highlight your work.</h5>
                    </div>
                    <div className="about-content">
                    <img src={graph} />
                        <h4>See how you're performing</h4>
                        <h5>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash