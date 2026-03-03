import { Link } from 'react-router-dom';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col about-col">
                        <h3 className="footer-title">INTEGRA GLOBAL RESOURCES</h3>
                        <p className="footer-reg">Registration No.: 202501054518 (1655924-K)</p>
                        <p className="footer-desc">
                            A Malaysia-based global commodity trading and export intermediary bridging trusted suppliers with serious international buyers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col links-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-subtitle">Contact info</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>
                                    Level 11, Menara Dungun<br />
                                    Jalan Dungun, Damansara Heights<br />
                                    50490 Kuala Lumpur, Malaysia
                                </span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+60 11-3723 9521</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:integraglobalresources@gmail.com">integraglobalresources@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="footer-disclaimer">
                    <h5>Legal Disclaimer</h5>
                    <p>
                        INTEGRA GLOBAL RESOURCES SDN. BHD. operates as an international trading and export company. All product offers are subject to availability, formal quotation, and mutually executed sales contracts. Specifications, pricing, and delivery terms are subject to change based on market conditions and supplier confirmation. All transactions are conducted in accordance with applicable international trade laws and regulations.
                    </p>
                    <p className="footer-warning">
                        Prospective buyers are advised to conduct independent due diligence prior to entering into any contractual agreement.
                    </p>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Integra Global Resources Sdn. Bhd. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
