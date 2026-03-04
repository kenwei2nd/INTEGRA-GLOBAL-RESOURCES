import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">Global Commodity Trading & Export Solutions</div>
                    <h1 className="hero-title">
                        Bridging Trusted Suppliers with <br />
                        <span className="text-gradient">International Buyers</span>
                    </h1>
                    <p className="hero-description">
                        IGR is a Malaysia-based export trading company specializing in the international trade of agricultural commodities, soft commodities, industrial raw materials, and general merchandise.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
                        <Link to="/services" className="btn btn-secondary">Explore Services</Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>Scroll down</span>
                </div>
            </div>
        </section >
    );
};

export default Hero;
