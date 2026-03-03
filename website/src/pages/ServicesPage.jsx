import Services from '../components/Services';

const ServicesPage = () => {
    return (
        <div className="page-wrapper">

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        End-to-end export intermediation services designed to mitigate risk and ensure seamless cross-border commodity trading.
                    </p>
                </div>
            </section>

            {/* Main Services Component */}
            <Services />

            {/* Trade Process Section */}
            <section className="section bg-light" style={{ paddingBottom: '8rem' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 className="section-title">The Trading Process</h2>
                        <p className="section-description mx-auto" style={{ maxWidth: '600px' }}>
                            We follow a strict, standardized operational procedure to guarantee security and efficiency in every transaction.
                        </p>
                    </div>

                    <div className="process-timeline" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {/* Timeline Line */}
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            bottom: '0',
                            left: '24px',
                            width: '2px',
                            backgroundColor: 'var(--primary-light)',
                            zIndex: '0'
                        }}></div>

                        {[
                            { step: '1', title: 'Buyer Inquiry & Needs Analysis', desc: 'Understanding precise volume, quality specifications, and delivery terms required by the buyer.' },
                            { step: '2', title: 'Supplier Sourcing & Vetting', desc: 'Leveraging our network to identify the optimal supplier, conducting rigorous due diligence.' },
                            { step: '3', title: 'Contracting & Financial Setup', desc: 'Drafting agreements and securing payment instruments (e.g., matching LC from buyer to supplier).' },
                            { step: '4', title: 'Logistics & Export Documentation', desc: 'Overseeing shipping arrangements, QA inspections, and managing all required customs documentation.' }
                        ].map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: '1'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--accent-gold)',
                                    color: 'var(--primary-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    flexShrink: '0'
                                }}>
                                    {item.step}
                                </div>
                                <div className="glass-card" style={{ padding: '1.5rem 2rem', backgroundColor: '#fff', border: '1px solid var(--border-color)', flexGrow: 1 }}>
                                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
