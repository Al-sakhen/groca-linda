import { useState } from "react";
import { Products } from "../../assets/Products";
import ProductsCard from "./ProductsCard";

const ProductTabs = () => {
    const [currentName, setCurrentName] = useState(Products[0].name);
    return (
        <div className="container">
            <div>
                {/* buttons */}
                <ul
                    className="nav nav-pills mb-3 justify-content-center py-5"
                    id="pills-tab"
                    role="tablist"
                >
                    {Products.map((product, id) => {
                        return (
                            <li
                                className="nav-item"
                                role="presentation"
                                key={product.id}
                            >
                                <button
                                    className={
                                        id === 0
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    onClick={() => setCurrentName(product.name)}
                                    data-bs-toggle="pill"
                                    data-bs-target={`#pills-${product.name}`}
                                    type="button"
                                    role="tab"
                                    aria-controls={`pills-${product.name}`}
                                    aria-selected="true"
                                >
                                    {product.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {/*
                            "pills-" + products.name 
                 */}
                {/* 
                            `pills-${products.name}`
                */}

                {/* items */}
                <div className="tab-content" id="pills-tabContent">
                    {Products.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className={
                                    currentName === product.name
                                        ? "tab-pane fade show active"
                                        : "tab-pane fade"
                                }
                                id={`pills-${product.name}`}
                                role="tabpanel"
                                aria-labelledby={`pills-${product.name}-tab`}
                                tabIndex={0}
                            >
                                <div className="row">
                                    {product.items.map((item) => {
                                        return (
                                            <ProductsCard
                                                key={item.id}
                                                data={item}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductTabs;
