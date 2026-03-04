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


        </div>
    );
};

export default ProductsPage;
