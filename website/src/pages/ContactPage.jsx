import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="page-wrapper">

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Reach out to our trading desk in Malaysia to discuss your commodity sourcing or export requirements.
                    </p>
                </div>
            </section>

            {/* Main Contact Component */}
            <div style={{ padding: '2rem 0' }}>
                <Contact />
            </div>

        </div>
    );
};

export default ContactPage;
