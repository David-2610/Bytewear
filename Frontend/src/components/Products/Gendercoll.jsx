import { Link } from "react-router-dom";
import menscollimage from "../../assets/mens-collection.png";
import womencollimage from "../../assets/womens-collection.webp";

const Gendercoll = () => {
	return (
		<section className="py-16 px-4 md:px-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none z-0" />

			<div className="container mx-auto flex flex-col md:flex-row gap-8 relative z-10">
				{/* Men's Collection */}
				<div className="relative flex-1 group rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300">
					<img
						src={menscollimage}
						alt="mens-collection"
						className="w-full h-[700px] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-md">
						<h2 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
							Men's Collection
						</h2>
						<Link
							to="/collections/all?gender=Men"
							className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-black/60 hover:bg-black transition rounded-full"
						>
							Shop Now →
						</Link>
					</div>
				</div>

				{/* Women's Collection */}
				<div className="relative flex-1 group rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300">
					<img
						src={womencollimage}
						alt="womens-collection"
						className="w-full h-[700px] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-md">
						<h2 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
							Women's Collection
						</h2>
						<Link
							to="/collections/all?gender=Women"
							className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-black/60 hover:bg-black transition rounded-full"
						>
							Shop Now →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gendercoll;
