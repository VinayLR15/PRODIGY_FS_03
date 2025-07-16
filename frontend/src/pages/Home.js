import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const fetchProducts = () => {
    const params = {};
    if (category) params.category = category;
    if (sort) params.sort = sort;

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products", err));
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sort]);

  const handleAddToCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const idx = cart.findIndex((i) => i._id === prod._id);
    if (idx !== -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...prod, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${prod.name} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="mb-4 flex gap-4">
        <select className="border p-2" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="grocery">Grocery</option>
        </select>

        <select className="border p-2" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod) => (
          <ProductCard key={prod._id} product={prod} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
