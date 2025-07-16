import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [productId, setProductId] = useState("68772fbdb3fcc61d39f8ee59"); // Optional: Default productId
  const [form, setForm] = useState({ name: "", rating: "", comment: "" });

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/${productId}`);
      setReviews(res.data);
    } catch (err) {
      console.error(err);
      alert("Error loading reviews");
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, rating, comment } = form;
    if (!productId || !name || !rating || !comment) {
      return alert("All fields are required.");
    }

    try {
      await axios.post("http://localhost:5000/api/reviews", {
        productId,
        name,
        rating,
        comment,
      });
      alert("✅ Review submitted!");
      setForm({ name: "", rating: "", comment: "" });
      fetchReviews(); // Refresh after submit
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting review");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow">
        <input
          type="text"
          placeholder="Product ID"
          className="w-full border p-2"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <select
          className="w-full border p-2"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        >
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <textarea
          rows="4"
          placeholder="Your Comment"
          className="w-full border p-2"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">All Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div key={r._id} className="border p-3 mb-2 rounded shadow-sm bg-gray-50">
              <p className="font-bold">{r.name} – ⭐ {r.rating}/5</p>
              <p className="text-sm text-gray-700">{r.comment}</p>
              <p className="text-xs text-gray-400">{new Date(r.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet for this product.</p>
        )}
      </div>
    </div>
  );
}
