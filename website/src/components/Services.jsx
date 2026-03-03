import {
    Globe2,
    FileText,
    CreditCard,
    ClipboardCheck,
    Ship,
    ShieldCheck,
    CheckCircle
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Globe2 size={28} />,
            title: "Global Buyer Sourcing",
            desc: "Active sourcing and supplier matching across international markets."
        },
        {
            icon: <FileText size={28} />,
            title: "Contract Negotiation",
            desc: "Structured trade agreements protecting all parties."
        },
        {
            icon: <CreditCard size={28} />,
            title: "Secure Payments",
            desc: "Flexible terms including LC, SBLC, TT, DLC, and MT103."
        },
        {
            icon: <ClipboardCheck size={28} />,
            title: "Compliance Management",
            desc: "Comprehensive export documentation and regulatory compliance."
        },
        {
            icon: <Ship size={28} />,
            title: "Logistics Coordination",
            desc: "End-to-end freight and shipping execution worldwide."
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Risk-Managed Structuring",
            desc: "Inspection, quality assurance, and secure transaction execution."
        }
    ];

    const whyUs = [
        "Legally registered Malaysian company",
        "Strong regional supplier access",
        "Active global buyer sourcing",
        "Structured and secure transaction procedures",
        "Transparent documentation",
        "Long-term partnership approach"
    ];

    return (
        <section id="services" className="section services">
            <div className="container">

                <div className="services-grid">

                    <div className="services-content">
                        <h5 className="section-label">Our Services</h5>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Trade Execution & <br /><span className="text-gradient">Intermediary Solutions</span></h2>
                        <p className="services-intro">
                            As a Malaysian exporter and global trade intermediary, we ensure all transactions are professionally structured and compliant with international trade standards.
                        </p>

                        <div className="service-cards">
                            {services.map((service, idx) => (
                                <div key={idx} className="service-card glass-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <div className="service-info">
                                        <h4>{service.title}</h4>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="why-us-panel">
                        <div className="why-us-card">
                            <h3>Why Work With Us</h3>
                            <p className="why-us-subtitle">We do not merely supply products — we facilitate international trade.</p>

                            <ul className="why-us-list">
                                {whyUs.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle className="check-icon" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="why-us-cta">
                                <p>Ready to secure your supply chain?</p>
                                <a href="#contact" className="btn btn-primary">Contact Our Team</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;

