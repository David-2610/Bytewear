import React, { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
	const scrollRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [newArrivals, setNewArrivals] = useState([]);

	useEffect(() => {
		const fetchNewArrivals = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_BACKEND_URL
					}/api/products/new-arrivals`
				);
				setNewArrivals(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchNewArrivals();
	}, []);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - scrollRef.current.offsetLeft);
		setScrollLeft(scrollRef.current.scrollLeft);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = x - startX;
		scrollRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUpOrLeave = () => {
		setIsDragging(false);
	};

	const scroll = (direction) => {
		const scrollAmount = direction === "left" ? -300 : 300;
		scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	const updateScrollButtons = () => {
		const container = scrollRef.current;
		if (container) {
			const leftScroll = container.scrollLeft;
			setCanScrollLeft(leftScroll > 0);
			const rightScrollable =
				container.scrollWidth > leftScroll + container.clientWidth;
			setCanScrollRight(rightScrollable);
		}
	};

	useEffect(() => {
		const container = scrollRef.current;
		if (container) {
			container.addEventListener("scroll", updateScrollButtons);
			updateScrollButtons();
			return () =>
				container.removeEventListener("scroll", updateScrollButtons);
		}
	}, [newArrivals]);

	return (
		<section className="py-20 px-4 lg:px-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative">
			<div className="container mx-auto text-center mb-12">
				<h2 className="text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
						Explore New Arrivals
					</span>
				</h2>
				<p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
					Discover the latest styles inspired by anime culture — bold,
					limited, and freshly dropped.
				</p>
			</div>

			{/* Scroll buttons */}
			<div className="flex justify-end gap-3 pr-4 lg:pr-16 mb-4">
				<button
					onClick={() => scroll("left")}
					disabled={!canScrollLeft}
					className={`p-2 rounded-full shadow-md border transition ${
						canScrollLeft
							? "bg-white text-black hover:bg-gray-100"
							: "bg-gray-200 text-gray-400 cursor-not-allowed"
					}`}
				>
					<FiChevronLeft className="text-2xl" />
				</button>
				<button
					onClick={() => scroll("right")}
					disabled={!canScrollRight}
					className={`p-2 rounded-full shadow-md border transition ${
						canScrollRight
							? "bg-white text-black hover:bg-gray-100"
							: "bg-gray-200 text-gray-400 cursor-not-allowed"
					}`}
				>
					<FiChevronRight className="text-2xl" />
				</button>
			</div>

			<div className="overflow-hidden">
				<div
					ref={scrollRef}
					className={`flex overflow-x-scroll scrollbar-hide space-x-6 px-4 ${
						isDragging ? "cursor-grabbing" : "cursor-grab"
					}`}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUpOrLeave}
					onMouseLeave={handleMouseUpOrLeave}
					onWheel={(e) => {
						// Prevent vertical scroll turning into horizontal
						if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
							e.preventDefault();
						}
					}}
				>
					{newArrivals.map((product) => (
						<div
							key={product._id}
							className="min-w-[100%] sm:min-w-[50%] lg:min-w-[28%] bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
						>
							<Link
								to={`/product/${product._id}`}
								className="block group"
							>
								<img
									src={product.images[0]?.url}
									alt={
										product.images[0]?.altText ||
										product.name
									}
									className="w-full h-[400px] object-cover rounded-t-2xl"
									draggable="false"
								/>
								<div className="p-4">
									<h4 className="font-semibold text-lg text-gray-900 group-hover:text-red-600 transition">
										{product.name}
									</h4>
									<p className="mt-1 text-gray-600">
										${product.price}
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
