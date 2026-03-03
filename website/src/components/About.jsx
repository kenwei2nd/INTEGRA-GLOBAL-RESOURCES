import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid">

                    <div className="about-content">
                        <h5 className="section-label">Company Profile</h5>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            Committed to Structured, <br />
                            <span className="text-gradient">Transparent Trade</span>
                        </h2>

                        <p className="about-lead">
                            Headquartered in Malaysia, INTEGRA GLOBAL RESOURCES SDN. BHD. is an international commodity trading and export company committed to structured, transparent, and compliant trade execution.
                        </p>

                        <p className="about-text">
                            As an export-focused trading house, we manage the complete trade cycle — from supplier coordination and contract structuring to payment facilitation and logistics execution.
                        </p>

                        <div className="about-features">
                            <div className="feature">
                                <CheckCircle2 className="feature-icon" />
                                <span>Reliability & Trust</span>
                            </div>
                            <div className="feature">
                                <CheckCircle2 className="feature-icon" />
                                <span>Rigorous Due Diligence</span>
                            </div>
                            <div className="feature">
                                <CheckCircle2 className="feature-icon" />
                                <span>Long-Term Partnerships</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-registration">
                        <div className="registration-card glass-card">
                            <h3>Corporate Identity</h3>

                            <ul className="reg-list">
                                <li>
                                    <span className="reg-label">Company Name</span>
                                    <span className="reg-value">INTEGRA GLOBAL RESOURCES SDN. BHD.</span>
                                </li>
                                <li>
                                    <span className="reg-label">Registration No.</span>
                                    <span className="reg-value highlight">202501054518 (1655924-K)</span>
                                </li>
                                <li>
                                    <span className="reg-label">Country of Incorporation</span>
                                    <span className="reg-value">Malaysia</span>
                                </li>
                            </ul>

                            <div className="reg-image-wrapper">
                                <img src="/images/IMG_0255.JPG" alt="Corporate Logistics" className="reg-image" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
