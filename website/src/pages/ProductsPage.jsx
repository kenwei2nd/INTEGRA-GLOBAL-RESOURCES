import Products from '../components/Products';

const ProductsPage = () => {
    return (
        <div className="page-wrapper">

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Commodities</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        A comprehensive portfolio of high-quality agricultural commodities, soft commodities, and industrial raw materials sourced globally.
                    </p>
                </div>
            </section>

            {/* Main Products Grid Component */}
            <Products />

            {/* Detailed Sourcing Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 className="section-title">Global Sourcing Capabilities</h2>
                        <p className="section-description mx-auto" style={{ maxWidth: '800px' }}>
                            Leveraging our strategic location in Malaysia, we have established a robust network of vetted suppliers across Southeast Asia and beyond, ensuring consistent supply and competitive pricing.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {[
                            { region: 'Southeast Asia', desc: 'Primary source for Palm Oil, Cocoa, Rubber, and Tropical Spices.' },
                            { region: 'Africa', desc: 'Strategic partnerships for Cashew Nuts, Sesame Seeds, and Hardwood.' },
                            { region: 'South America', desc: 'High-volume sourcing for Soybeans, Coffee, and Sugar.' }
                        ].map((source, index) => (
                            <div key={index} className="glass-card" style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid var(--border-color)' }}>
                                <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                    {source.region}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {source.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductsPage;
