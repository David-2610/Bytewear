import React, { useState, useEffect } from "react";
import Hero from "../components/Layout/Hero";
import Gendercoll from "../components/Products/Gendercoll";
import New_arival from "../components/Products/New_arival";
import Productdetail from "../components/Products/productdetail";
import ProductGrid from "../components/Products/productgrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import Featuresection from "../components/Products/Featuresection";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import axios from "axios";

const Home = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state) => state.products);
	const [bestSellerProduct, setBestSellerProduct] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(
					fetchProductsByFilters({
						gender: "Women",
						limit: 8,
					})
				);
				const response = await axios.get(
					`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
				);
				setBestSellerProduct(response.data[0]);
			} catch (error) {
				console.error("Error loading homepage data:", error);
			}
		};

		fetchData();
	}, [dispatch]);

	return (
		<div className="bg-white">
			{/* Hero Banner */}
			<Hero />

			{/* Gender Based Collection */}
			<Gendercoll />

			{/* New Arrivals */}
			<New_arival />

			{/* Best Sellers Section */}
			<section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
				<h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
					🔥 Best Sellers
				</h2>

				{bestSellerProduct ? (
					<Productdetail productId={bestSellerProduct._id} />
				) : (
					<p className="text-center text-gray-500 italic">Loading Best Seller Products...</p>
				)}
			</section>

			{/* Costume Wear For Women Section */}
			<section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
						✨ Costume Wear For Women
					</h2>
					<ProductGrid products={products} loading={loading} error={error} />
				</div>
			</section>

			{/* Additional Sections */}
			<FeaturedCollection />
			<Featuresection />
		</div>
	);
};

export default Home;
