import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value || 'N/A';
        const interest = form.interest.options[form.interest.selectedIndex].text;
        const message = form.message.value;

        const subject = `Trade Inquiry: ${interest}`;
        const body = `*New Inquiry via IGR Website*%0A%0A*Name/Company:* ${name}%0A*Email:* ${email}%0A*Phone/WhatsApp:* ${phone}%0A*Commodity of Interest:* ${interest}%0A%0A*Requirements:*%0A${message}`;

        // Redirect to WhatsApp API
        const whatsappNumber = "601137239521"; // Number without +
        window.open(`https://wa.me/${whatsappNumber}?text=${body}`, '_blank');
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-header">
                    <h5 className="section-label">Contact Us</h5>
                    <h2 className="section-title">Ready for Global Trade?</h2>
                    <p className="section-subtitle">
                        We welcome serious buyers and long-term trade collaborations worldwide.
                        Reach out to our team to discuss your commodity sourcing needs.
                    </p>
                </div>

                <div className="contact-grid">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3 className="contact-heading">Get in Touch</h3>
                        <p className="contact-text">
                            INTEGRA GLOBAL RESOURCES SDN. BHD. <br />
                            <span className="registration-small">Company Registration No.: 202501054518 (1655924-K)</span>
                        </p>

                        <ul className="contact-details">
                            <li>
                                <div className="icon-box">
                                    <MapPin size={24} />
                                </div>
                                <div className="detail-content">
                                    <h4>Head Office</h4>
                                    <p>Level 11, Menara Dungun<br />
                                        Jalan Dungun, Damansara Heights<br />
                                        50490 Kuala Lumpur, Malaysia</p>
                                </div>
                            </li>

                            <li>
                                <div className="icon-box">
                                    <Phone size={24} />
                                </div>
                                <div className="detail-content">
                                    <h4>Phone / WhatsApp</h4>
                                    <p>+60 11-3723 9521</p>
                                </div>
                            </li>

                            <li>
                                <div className="icon-box">
                                    <Mail size={24} />
                                </div>
                                <div className="detail-content">
                                    <h4>Email</h4>
                                    <a href="mailto:integraglobalresources@gmail.com">integraglobalresources@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper glass-card">
                        <h3 className="form-title">Send an Inquiry</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name or Company</label>
                                <input type="text" id="name" name="name" placeholder="E.g., John Doe / ABC Corp" required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone / WhatsApp</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="interest">Primary Commodity of Interest</label>
                                <select id="interest" name="interest" required defaultValue="">
                                    <option value="" disabled>Select a product...</option>
                                    <option value="palm-oil">RBD Palm Oil / Olein</option>
                                    <option value="cocoa">Cocoa & Soft Commodities</option>
                                    <option value="rubber">Natural Rubber / Latex</option>
                                    <option value="general">General Merchandise</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message / Requirements</label>
                                <textarea id="message" name="message" rows="4" placeholder="Please specify quantity, destination port, and other terms..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
