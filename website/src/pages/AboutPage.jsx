import About from '../components/About';

const AboutPage = () => {
    return (
        <div className="page-wrapper">

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Corporate Identity</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A deep dive into Integra Global Resources' history, mission, and commitment to international trade excellence.
                    </p>
                </div>
            </section>

            {/* Main About Component */}
            <About />

            {/* Extended Information */}
            <section className="section bg-light">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                        <div className="mission-vision">
                            <h2 className="section-title">Our Mission & Vision</h2>
                            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>■</span> Mission
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    To seamlessly bridge the gap between trusted global suppliers and serious international buyers through transparent, efficient, and compliant commodity trading practices.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-green)' }}>■</span> Vision
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    To be the premier, undisputed export intermediary in Southeast Asia, known worldwide for our integrity, reliability, and robust global network.
                                </p>
                            </div>
                        </div>

                        <div className="compliance">
                            <h2 className="section-title">Global Standards</h2>
                            <p className="section-description" style={{ marginBottom: '2rem' }}>
                                We operate under strict international trading guidelines to ensure every transaction is secure and beneficial for all parties involved.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Strict KYC & Partner Vetting',
                                    'Incoterms 2020 Compliance',
                                    'Secure Payment Protocols (LC/SBLC)',
                                    'End-to-End Logistics Oversight',
                                    'Market Analytics Integration'
                                ].map((item, idx) => (
                                    <li key={idx} style={{
                                        padding: '1rem', borderBottom: '1px solid var(--border-color)',
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        color: 'var(--primary-color)', fontWeight: '500'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
