import {
	HiShoppingBag,
	HiOutlineCreditCard,
	HiChartSquareBar,
} from "react-icons/hi";

const Featuresection = () => {
	return (
		<section className="py-20 px-4 bg-white">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
				<div className="flex flex-col items-center transition hover:scale-105 duration-300">
					<div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 shadow-lg">
						<HiShoppingBag className="text-4xl animate-pulse" />
					</div>
					<h4 className="text-md font-semibold text-gray-800 mb-2 tracking-wide uppercase">
						Free International Shipping
					</h4>
					<p className="text-gray-600 text-sm">
						On all orders over $100.00
					</p>
				</div>

				<div className="flex flex-col items-center transition hover:scale-105 duration-300">
					<div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full mb-4 shadow-lg">
						<HiChartSquareBar className="text-4xl animate-pulse" />
					</div>
					<h4 className="text-md font-semibold text-gray-800 mb-2 tracking-wide uppercase">
						45 Days Return Policy
					</h4>
					<p className="text-gray-600 text-sm">
						Money back within 30 days
					</p>
				</div>

				<div className="flex flex-col items-center transition hover:scale-105 duration-300">
					<div className="p-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full mb-4 shadow-lg">
						<HiOutlineCreditCard className="text-4xl animate-pulse" />
					</div>
					<h4 className="text-md font-semibold text-gray-800 mb-2 tracking-wide uppercase">
						Secure Checkout
					</h4>
					<p className="text-gray-600 text-sm">
						100% Secure payment
					</p>
				</div>
			</div>
		</section>
	);
};

export default Featuresection;
