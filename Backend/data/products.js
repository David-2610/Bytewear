const products = [
  {
    name: "Uchiha Clan Street Hoodie",
    description: "Bold and edgy, this hoodie features a stylized Uchiha clan symbol on the back...",
    price: 49.99,
    discountPrice: 42.99,
    countInStock: 30,
    sku: "AN-HO-001",
    category: "Top Wear",
    anime: "Naruto",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Red"],
    collections: "Anime Streetwear",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/51el5z9GeTL._SX679_.jpg",
        altText: "Uchiha Clan Hoodie Front View"
      },
      {
        url: "https://m.media-amazon.com/images/I/51KamqjewpL._SX569_.jpg",
        altText: "Uchiha Clan Hoodie Back View"
      }
    ],
    rating: 4.8,
    numReviews: 18
  },
  {
    name: "Eren Titan Form Muscle Tee",
    description: "Sleeveless gym tee inspired by Eren Yeager’s Titan form with ripped effect...",
    price: 33.99,
    discountPrice: 29.99,
    countInStock: 25,
    sku: "AN-TE-020",
    category: "Top Wear",
    anime: "Attack on Titan",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Black"],
    collections: "Attack Workout",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71yY9rWnw0L._SX679_.jpg",
        altText: "Eren Titan Tee Front"
      },
      {
        url: "https://m.media-amazon.com/images/I/41Te5x-XuSL._SX38_SY50_CR,0,0,38,50_.jpg",
        altText: "Eren Titan Tee Back Thumbnail"
      }
    ],
    rating: 4.6,
    numReviews: 21
  },
  {
    name: "Ichigo Hollow Mask Hoodie",
    description: "Black hoodie featuring Ichigo’s Hollow mask design with red stitching...",
    price: 48.99,
    discountPrice: 43.99,
    countInStock: 19,
    sku: "AN-HO-021",
    category: "Top Wear",
    anime: "Bleach",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Crimson"],
    collections: "Bleach Core",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://i.imgur.com/epIQ4Ki.jpg",
        altText: "Ichigo Hoodie Front"
      },
      {
        url: "https://i.imgur.com/E3K4Nzd.jpg",
        altText: "Ichigo Hoodie Back"
      }
    ],
    rating: 4.5,
    numReviews: 26
  },
  {
    name: "Tanjiro Checkered Kimono Shirt",
    description: "Button-down short-sleeve shirt mimicking Tanjiro’s iconic pattern...",
    price: 39.99,
    discountPrice: 35.99,
    countInStock: 22,
    sku: "AN-SH-022",
    category: "Top Wear",
    anime: "Demon Slayer",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green", "Black"],
    collections: "Demon Slayer Drop",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61l749q85vL._SX679_.jpg",
        altText: "Tanjiro Shirt Front"
      },
      {
        url: "https://m.media-amazon.com/images/I/51W8omLLp6L._SX679_.jpg",
        altText: "Tanjiro Shirt Back"
      },
      {
        url: "https://m.media-amazon.com/images/I/51PsU-L+LiL._SX679_.jpg",
        altText: "Tanjiro Shirt Side"
      }
    ],
    rating: 4.8,
    numReviews: 30
  },
  {
    name: "Rem Sleepwear Set",
    description: "Soft pajama set inspired by Rem from Re:Zero...",
    price: 45.99,
    discountPrice: 40.99,
    countInStock: 14,
    sku: "AN-PJ-023",
    category: "Sleepwear",
    anime: "Re:Zero",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Baby Blue"],
    collections: "Re:Zero Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/h/06/df9fca85-a0fd-4782-8b4c-a1085dad5805.jpg",
        altText: "Rem Pajama Front"
      },
      {
        url: "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/h/06/493accbf-8146-415b-afbe-e60e7c05f4d3.jpg",
        altText: "Rem Pajama Back"
      },
      {
        url: "https://img4.dhresource.com/webp/m/100x100/f3/albu/ys/h/06/339103ed-63dc-4038-8b58-9a72d70a2b81.jpg",
        altText: "Rem Pajama Thumbnail"
      }
    ],
    rating: 4.9,
    numReviews: 24
  },
  {
    name: "Naruto Sage Cloak Tee",
    description: "Bright orange and black tee featuring flames from Sage Mode...",
    price: 37.99,
    discountPrice: 33.99,
    countInStock: 28,
    sku: "AN-TE-024",
    category: "Top Wear",
    anime: "Naruto",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Orange", "Black"],
    collections: "Naruto Gear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71TLjOXa2BL._SX679_.jpg",
        altText: "Naruto Sage Tee Front"
      },
      {
        url: "https://m.media-amazon.com/images/I/61YEe0uI58L._SX679_.jpg",
        altText: "Naruto Sage Tee Back"
      }
    ],
    rating: 4.7,
    numReviews: 33
  },
  {
    name: "Luffy Straw Hat Tank",
    description: "Relaxed fit tank top with Luffy’s straw hat emblem...",
    price: 29.99,
    discountPrice: 25.99,
    countInStock: 20,
    sku: "AN-TA-025",
    category: "Top Wear",
    anime: "One Piece",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Brown"],
    collections: "One Piece Gymwear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81m1pbwkjXL._SX679_.jpg",
        altText: "Luffy Tank Front"
      },
      {
        url: "https://m.media-amazon.com/images/I/91ii8BfX07L._SX679_.jpg",
        altText: "Luffy Tank Back"
      }
    ],
    rating: 4.3,
    numReviews: 20
  },
  {
    name: "Killua Lightning Shorts",
    description: "Breathable athletic shorts with blue electric detailing inspired by Killua...",
    price: 30.99,
    discountPrice: 27.99,
    countInStock: 18,
    sku: "AN-SH-026",
    category: "Bottom Wear",
    anime: "Hunter x Hunter",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    collections: "HXH Active",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://www.dhresource.com/webp/m/0x0/f2/albu/g22/M01/6B/49/rBVaE2J2nJCAcqT9AADuq9G29LY409.jpg",
        altText: "Killua Shorts Front"
      },
      {
        url: "https://www.dhresource.com/webp/m/0x0/f2/albu/g22/M01/54/A4/rBVaE2J2nJuATYp_AAHZlxyGIBM374.jpg",
        altText: "Killua Shorts Back"
      }
    ],
    rating: 4.5,
    numReviews: 18
  }
];

module.exports = products;
