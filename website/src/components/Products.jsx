import { Droplet, Cookie, Factory, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const products = [
        {
            id: 1,
            title: 'Agricultural & Edible Oil',
            icon: <Droplet size={32} />,
            items: [
                'RBD Palm Oil',
                'RBD Palm Olein (CP6 / CP8 / CP10)',
                'Crude Palm Oil (CPO)',
                'Cooking oil',
                'Vegetable Shortening / Vegetable Fat',
                'Refined Coconut Oil'
            ],
            image: '/images/IMG_0266.JPG'
        },
        {
            id: 2,
            title: 'Cocoa & Soft Commodities',
            icon: <Cookie size={32} />,
            items: [
                'Cocoa Beans',
                'Cocoa Liquor',
                'Cocoa Butter',
                'Cocoa Powder'
            ],
            image: '/images/IMG_0257.WEBP'
        },
        {
            id: 3,
            title: 'Industrial Raw Materials',
            icon: <Factory size={32} />,
            items: [
                'Natural Rubber (TSR Grades)',
                'Latex Concentrate',
                'Industrial Rubber Products'
            ],
            image: '/images/IMG_0263.WEBP'
        },
        {
            id: 4,
            title: 'General Merchandise',
            icon: <Package size={32} />,
            items: [
                'Ready-Made Garments (OEM)',
                'Consumer Electronics',
                'Electrical Appliances',
                'Selected FMCG Products'
            ],
            image: '/images/IMG_0256.JPG'
        }
    ];

    return (
        <section id="products" className="section products">
            <div className="container">
                <div className="section-header">
                    <h5 className="section-label">Our Products</h5>
                    <h2 className="section-title">Global Sourcing Capabilities</h2>
                    <p className="section-subtitle">
                        We supply a diverse range of premium commodities and industrial materials,
                        sourced directly from trusted producers in Southeast Asia and beyond.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((category) => (
                        <div key={category.id} className="product-card">
                            <div className="card-image-container">
                                <img src={category.image} alt={category.title} className="card-image" />
                                <div className="card-overlay">
                                    <div className="card-icon-wrapper">
                                        {category.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">{category.title}</h3>
                                <ul className="product-list">
                                    {category.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-footer">
                                <Link to="/contact" className="card-link">Request Quote &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
