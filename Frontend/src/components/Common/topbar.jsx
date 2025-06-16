import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
	return (
		<div className="bg-gray-900 text-white text-sm">
			<div className="container mx-auto flex justify-between items-center py-3 px-4">
				{/* Social Icons */}
				<div className="hidden md:flex items-center space-x-4">
					<a href="#" className="hover:text-gray-400 transition-colors">
						<TbBrandMeta className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-pink-400 transition-colors">
						<IoLogoInstagram className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-400 transition-colors">
						<RiTwitterXLine className="h-4 w-4" />
					</a>
				</div>

				{/* Center Message */}
				<div className="text-center flex-grow">
					<span className="tracking-wide text-gray-300">
						We ship worldwide — Fast and reliable shipping!
					</span>
				</div>

				{/* Phone */}
				<div className="hidden md:block">
					<a href="tel:+1234567893" className="hover:text-gray-400 transition-colors">
						+1 234 567 893
					</a>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
