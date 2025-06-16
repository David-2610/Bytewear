import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    anime: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const anime = [
    "Naruto", "One Piece", "Bleach", "Attack on Titan", "Demon Slayer",
    "Jujutsu Kaisen", "My Hero Academia", "Re:Zero", "Tokyo Revengers",
    "Hunter x Hunter", "Fullmetal Alchemist", "Death Note",
    "Dragon Ball Z", "Sword Art Online", "Chainsaw Man"
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      anime: params.anime ? params.anime.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });
    setPriceRange([
      Number(params.minPrice) || 0,
      Number(params.maxPrice) || 100,
    ]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    if (type === "checkbox") {
      newFilters[name] = checked
        ? [...(newFilters[name] || []), value]
        : newFilters[name].filter((item) => item !== value);
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl w-full max-w-xs space-y-6 sticky top-4 text-sm">
      <h3 className="text-xl font-semibold text-gray-900">Filters</h3>

      {/* Category */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Category</label>
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2 mb-1 text-gray-600">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="accent-blue-600"
            />
            {category}
          </label>
        ))}
      </div>

      {/* Gender */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Gender</label>
        {genders.map((gender) => (
          <label key={gender} className="flex items-center gap-2 mb-1 text-gray-600">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="accent-blue-600"
            />
            {gender}
          </label>
        ))}
      </div>

      {/* Color */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                filters.color === color ? "border-black scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Size</label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <label key={size} className="flex items-center gap-1 text-gray-600">
              <input
                type="checkbox"
                name="size"
                value={size}
                checked={filters.size.includes(size)}
                onChange={handleFilterChange}
                className="accent-blue-600"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Material</label>
        <div className="grid grid-cols-2 gap-2">
          {materials.map((material) => (
            <label key={material} className="flex items-center gap-1 text-gray-600">
              <input
                type="checkbox"
                name="material"
                value={material}
                checked={filters.material.includes(material)}
                onChange={handleFilterChange}
                className="accent-blue-600"
              />
              {material}
            </label>
          ))}
        </div>
      </div>

      {/* Anime */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Anime</label>
        <div className="max-h-32 overflow-y-auto pr-1">
          {anime.map((item) => (
            <label key={item} className="flex items-center gap-2 mb-1 text-gray-600">
              <input
                type="checkbox"
                name="anime"
                value={item}
                checked={filters.anime.includes(item)}
                onChange={handleFilterChange}
                className="accent-blue-600"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="text-gray-700 font-medium mb-1 block">Price Range</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-1 text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
