import { Link } from "react-router";
import HeroVisual from "../../assets/featured.jpeg"; // Replace with your actual anime hero image

const FeaturedCollection = () => {
	return (
		<section className="py-16 px-4 lg:px-0 bg-gradient-to-br from-black via-gray-900 to-purple-900">
			<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-3xl shadow-xl overflow-hidden">
				<div className="lg:w-1/2 p-8 text-center lg:text-left text-white">
					<h2 className="text-lg font-semibold text-purple-400 mb-2 uppercase tracking-widest">
						New Season
					</h2>
					<h2 className="text-4xl font-bold mb-6 leading-tight">
						Ascend: The Battle Begins
					</h2>
					<p className="text-lg text-gray-300 mb-6">
						In a fractured world, one hero rises to defy fate and ignite a legacy. Experience the epic story of power, loyalty, and rebellion.
					</p>
					<Link
						to="/collections/all"
						className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition duration-300 ease-in-out"
					>
						Shop Now
					</Link>
				</div>
				<div className="lg:w-1/2">
					<img
						src={HeroVisual}
						alt="Anime Hero Key Visual"
						className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default FeaturedCollection;
