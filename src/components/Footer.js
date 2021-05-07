import React from 'react'
import { Button } from "./Button"
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
This section is to showcase all my skills and ability to create                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>Let Us Help You</h2>
                        <Link to="/">Advertise</Link>
                        <Link to="/">Self Promotion</Link>
                        <Link to="/">Sell Apps</Link>
                        <Link to="/">Connect</Link>
                        <Link to="/">Blog</Link>

                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>Videos</h2>
                            <Link to="/">Submit Video</Link>
                            <Link to="/">Ambassadors</Link>
                            <Link to="/">Agency</Link>
                            <Link to="/">Influencer</Link>
                    
                        </div>
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <Link to="/"> Instagram</Link>
                            <Link to="/">Facebook</Link>
                            <Link to="/">Youtube</Link>
                            <Link to="/">Twitter</Link>

                        </div>
                    </div>
                </div>

            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="fab fa-typo3">
                        </Link>
                    </div>
                    <small className="website-rights"> FERD 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Footer
