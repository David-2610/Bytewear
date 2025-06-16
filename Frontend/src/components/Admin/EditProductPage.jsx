import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails, updateProduct } from "../../redux/slices/productsSlice";
import axios from "axios";

function EditProductPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { selectedProduct, loading, error } = useSelector((state) => state.products);

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
		rating: 0,
		numReviews: 0,
		images: [],
	});

	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		if (id) dispatch(fetchProductDetails(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (selectedProduct) setProductData(selectedProduct);
	}, [selectedProduct]);

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
			console.error("Upload failed", error);
		} finally {
			setUploading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(updateProduct({ id, productData }));
		navigate("/admin/products");
	};

	if (loading) return <p className="text-center mt-10">Loading...</p>;
	if (error) return <p className="text-red-600 text-center mt-10">Error: {error}</p>;

	return (
		<div className="max-w-6xl mx-auto p-6 bg-white shadow rounded-md">
			<h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Product</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
						["gender", "Gender", "text"],
					].map(([name, label, type]) => (
						<div key={name}>
							<label className="block mb-1 font-medium text-sm text-gray-700">{label}</label>
							<input
								type={type}
								name={name}
								value={productData[name] ?? ""}
								onChange={handleChange}
								className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
					))}
				</div>

				{/* Description */}
				<div>
					<label className="block mb-1 font-medium text-sm text-gray-700">Description</label>
					<textarea
						name="description"
						value={productData.description}
						onChange={handleChange}
						rows={4}
						className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>

				{/* Sizes */}
				<div>
					<label className="block mb-1 font-medium text-sm text-gray-700">Sizes (comma-separated)</label>
					<input
						type="text"
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
					<label className="block mb-1 font-medium text-sm text-gray-700">Colors (comma-separated)</label>
					<input
						type="text"
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
					<label className="block mb-1 font-medium text-sm text-gray-700">Upload Image</label>
					<input type="file" onChange={handleImageUpload} />
					{uploading && <p className="text-sm text-gray-500 mt-1">Uploading image...</p>}
					<div className="flex flex-wrap gap-4 mt-4">
						{productData.images.map((img, i) => (
							<div key={i} className="relative">
								<img
									src={img.url}
									alt={img.altText || "product"}
									className="w-20 h-20 object-cover rounded-md shadow-md"
								/>
							</div>
						))}
					</div>
				</div>

				{/* Submit */}
				<div>
					<button
						type="submit"
						className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold px-4 py-3 rounded-md text-lg transition duration-300"
					>
						Update Product
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditProductPage;
