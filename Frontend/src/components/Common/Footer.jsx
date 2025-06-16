import { FaMeta } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-50 border-t border-gray-200 py-16 text-sm">
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
				{/* Newsletter */}
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
					<p className="text-gray-500 mb-3">
						Be the first to hear about new products, exclusive events, and online offers.
					</p>
					<p className="font-medium text-gray-600 mb-5">Sign up and get 10% off your first order.</p>
					<form action="post" className="flex flex-col sm:flex-row">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="p-3 w-full text-sm border border-gray-300 rounded-md sm:rounded-r-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
						/>
						<button
							type="submit"
							className="mt-2 sm:mt-0 sm:ml-2 bg-black text-white px-6 py-3 rounded-md sm:rounded-l-none hover:bg-gray-800 transition-all"
						>
							Subscribe
						</button>
					</form>
				</div>

				{/* Shop */}
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Shop</h3>
					<ul className="space-y-3 text-gray-600">
						{["Men's Top Wear", "Women's Top Wear", "Men's Bottom Wear", "Women's Bottom Wear"].map((item, idx) => (
							<li key={idx}>
								<Link
									to="/shop"
									className="hover:text-gray-900 transition-colors duration-200"
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Support */}
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Support</h3>
					<ul className="space-y-3 text-gray-600">
						{["Contact Us", "About Us", "FAQs", "Features"].map((item, idx) => (
							<li key={idx}>
								<Link
									to="/shop"
									className="hover:text-gray-900 transition-colors duration-200"
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Follow Us */}
				<div>
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
					<div className="flex items-center gap-5 mb-6">
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110">
							<FaMeta className="w-6 h-6" />
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110">
							<IoLogoInstagram className="w-6 h-6" />
						</a>
						<a href="https://www.x.com" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:text-black transition-transform transform hover:scale-110">
							<RiTwitterXLine className="w-6 h-6" />
						</a>
					</div>
					<p className="text-gray-500">Call Us</p>
					<p className="mt-1 flex items-center text-gray-700 font-medium">
						<FiPhoneCall className="inline-block mr-2" /> 0724-123-146
					</p>
				</div>
			</div>

			<div className="border-t border-gray-200 mt-12 pt-6 text-center">
				<p className="text-gray-400 text-xs">
					© 2025 CompileTab. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
