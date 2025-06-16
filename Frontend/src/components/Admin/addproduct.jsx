import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/slices/productsSlice";
import axios from "axios";

function AddProductPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [productData, setProductData] = useState({
		name: "",
		description: "",
		price: 0,
		discountPrice: 0,
		countInStock: 0,
		sku: "",
		category: "",
		anime: "",
		sizes: [],
		colors: [],
		collections: "",
		material: "",
		gender: "",
		images: [],
		rating: "",
		numReviews: "",
	});

	const [uploading, setUploading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProductData((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("image", file);

		try {
			setUploading(true);
			const { data } = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/api/upload`,
				formData,
				{ headers: { "Content-Type": "multipart/form-data" } }
			);
			setProductData((prev) => ({
				...prev,
				images: [...prev.images, { url: data.imageUrl, altText: "" }],
			}));
		} catch (error) {
			console.error("Upload error:", error);
		} finally {
			setUploading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(createProduct(productData));
		navigate("/admin/products");
	};

	return (
		<div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md">
			<h2 className="text-3xl font-bold mb-8 text-gray-800">Add New Product</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Basic Inputs */}
					{[
						["name", "Product Name", "text"],
						["sku", "SKU", "text"],
						["price", "Price", "number"],
						["discountPrice", "Discount Price", "number"],
						["countInStock", "Stock Count", "number"],
						["category", "Category", "text"],
						["anime", "Anime", "text"],
						["collections", "Collections", "text"],
						["material", "Material", "text"],
						["rating", "Rating", "number"],
						["numReviews", "Number of Reviews", "number"],
					].map(([name, label, type]) => (
						<div key={name}>
							<label className="block mb-1 font-medium text-sm">{label}</label>
							<input
								type={type}
								name={name}
								value={productData[name]}
								onChange={handleChange}
								className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
					))}
				</div>

				{/* Description */}
				<div>
					<label className="block mb-1 font-medium text-sm">Description</label>
					<textarea
						name="description"
						value={productData.description}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
						rows={4}
					/>
				</div>

				{/* Gender */}
				<div>
					<label className="block mb-1 font-medium text-sm">Gender</label>
					<select
						name="gender"
						value={productData.gender}
						onChange={handleChange}
						className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
					>
						<option value="">Select Gender</option>
						<option value="Men">Men</option>
						<option value="Women">Women</option>
						<option value="Unisex">Unisex</option>
					</select>
				</div>

				{/* Sizes */}
				<div>
					<label className="block mb-1 font-medium text-sm">
						Sizes (comma separated)
					</label>
					<input
						name="sizes"
						value={productData.sizes.join(",")}
						onChange={(e) =>
							setProductData({
								...productData,
								sizes: e.target.value.split(",").map((s) => s.trim()),
							})
						}
						className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
					/>
				</div>

				{/* Colors */}
				<div>
					<label className="block mb-1 font-medium text-sm">
						Colors (comma separated)
					</label>
					<input
						name="colors"
						value={productData.colors.join(",")}
						onChange={(e) =>
							setProductData({
								...productData,
								colors: e.target.value.split(",").map((c) => c.trim()),
							})
						}
						className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
					/>
				</div>

				{/* Image Upload */}
				<div>
					<label className="block mb-1 font-medium text-sm">Upload Image</label>
					<input type="file" onChange={handleImageUpload} />
					{uploading && (
						<p className="text-sm text-gray-500 mt-1 italic">
							Uploading image...
						</p>
					)}
					<div className="flex flex-wrap gap-4 mt-4">
						{productData.images.map((img, i) => (
							<div key={i} className="relative">
								<img
									src={img.url}
									alt={img.altText || "Product"}
									className="w-20 h-20 object-cover rounded"
								/>
							</div>
						))}
					</div>
				</div>

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-3 rounded-lg transition duration-300"
					>
						Create Product
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddProductPage;
