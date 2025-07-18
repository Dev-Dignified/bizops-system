import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import "../style/products.css";
import "../style/dash.css";

const Products = () => {
    const products = [
        {name: "Organic Apples", category: "Fruits", price: "₦2.50", stock: 150},
        {name: "Whole Wheat Bread", category: "Bakery", price: "₦3.00", stock: 80},
        {name: "Free-Range Eggs", category: "Dairy", price: "₦4.00", stock: 200},
        {name: "Almond Milk", category: "Dairy", price: "₦3.50", stock: 120},
        {name: "Organic Spinach", category: "Vegetables", price: "₦2.00", stock: 100},
        {name: "Chicken Breast", category: "Meat", price: "₦6.00", stock: 50},
        {name: "Salmon Fillet", category: "Seafood", price: "₦8.00", stock: 30},
        {name: "Quinoa", category: "Grains", price: "₦5.00", stock: 70},
        {name: "Olive Oil", category: "Pantry", price: "₦10.00", stock: 40},
        {name: "Honey", category: "Pantry", price: "₦7.00", stock: 60},
    ];

    return (
        <div className="app-container">
            <Header showNav={false} />
            <div className="dashboard-container">
                <SideNav />
                <div className="layout-container">
                    <main className="main-content">
                        <div className="header">
                            {/* <div className="header-logo">
                                <div className="size-4">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                                            fill="#0d151c"
                                        ></path>
                                    </svg>
                                </div>
                                <h2 className="header-title">BizOps</h2>
                            </div> */}
                            <div className="header-actions">
                                <label className="flex flex-col">
                                    <div className="search-container">
                                        <span className="search-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                            </svg>
                                        </span>
                                        <input type="text" className="search-input" placeholder="Search" />
                                    </div>
                                </label>
                                <button>
                                    <div
                                        className="text-[#0d151c]"
                                        data-icon="Bell"
                                        data-size="20px"
                                        data-weight="regular"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className="user-avatar"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmuN5C9PCtZQfYDDXewVegJojITVThqhC4NWfzKko-AsaEe54VlRjaQDoxIbgM4f5PVC543thjfc4OML7TpvFu3OxWJS_PDXIDMvW8GxMQ0O23vhrv7YFpsyDhWjA99B4qB-j0aBgSUcnZimJrTcHecedQZMTW70p-VAScszr-u-SdvFDkyls_zet3X4pbLNHi2I06Qt0urk2GD06xO9ByyvaK65AIDvfxqUHE_rWQ8nGHVs0CuqO8YF7oamB9VgMH85t34aUAEJs")',
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="products-header">
                            <h2 className="products-title">Products</h2>
                        </div>
                        <div className="filters-container">
                            <div className="filter-tag">All Products</div>
                            <div className="filter-tag">In Stock</div>
                            <div className="filter-tag">Out of Stock</div>
                        </div>
                        <div className="products-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>
                                                <span className="action-btn">View</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
