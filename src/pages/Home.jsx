import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  const categories = [
    {
      id: 1,
      name: "Home & Kitchen",
      description: "Eco-friendly household essentials",
      products: [
        { id: 101, name: "Kitchen Towels", image: "https://via.placeholder.com/400x300" },
        { id: 102, name: "Compost Bin", image: "https://via.placeholder.com/400x300" },
        { id: 103, name: "Bamboo Utensils", image: "https://via.placeholder.com/400x300" },
        { id: 104, name: "Glass Storage Jars", image: "https://via.placeholder.com/400x300" },
        { id: 105, name: "Eco Dish Soap", image: "https://via.placeholder.com/400x300" },
      ],
    },
    {
      id: 2,
      name: "Personal & Body Care",
      description: "Natural and reusable personal items",
      products: [
        { id: 201, name: "Bamboo Toothbrush", image: "https://via.placeholder.com/400x300" },
        { id: 202, name: "Organic Soap", image: "https://via.placeholder.com/400x300" },
        { id: 203, name: "Natural Shampoo Bar", image: "https://via.placeholder.com/400x300" },
        { id: 204, name: "Reusable Cotton Pads", image: "https://via.placeholder.com/400x300" },
        { id: 205, name: "Eco Deodorant", image: "https://via.placeholder.com/400x300" },
      ],
    },
    {
      id: 3,
      name: "Eco-Friendly Gifting & Lifestyle",
      description: "Sustainable gifts and lifestyle products",
      products: [
        { id: 301, name: "Plantable Notebooks", image: "https://via.placeholder.com/400x300" },
        { id: 302, name: "Upcycled Bags", image: "https://via.placeholder.com/400x300" },
        { id: 303, name: "Coconut Bowl Gift Set", image: "https://via.placeholder.com/400x300" },
        { id: 304, name: "Eco Candles", image: "https://via.placeholder.com/400x300" },
        { id: 305, name: "Recycled Paper Cards", image: "https://via.placeholder.com/400x300" },
      ],
    },
    {
      id: 4,
      name: "Travel Essentials",
      description: "Sustainable and compact travel-friendly products",
      products: [
        { id: 401, name: "Steel Straws", image: "https://via.placeholder.com/400x300" },
        { id: 402, name: "Eco Travel Kit", image: "https://via.placeholder.com/400x300" },
        { id: 403, name: "Collapsible Bottles", image: "https://via.placeholder.com/400x300" },
        { id: 404, name: "Travel Soap Case", image: "https://via.placeholder.com/400x300" },
        { id: 405, name: "Reusable Snack Bags", image: "https://via.placeholder.com/400x300" },
      ],
    },
    {
      id: 5,
      name: "Kids & Baby Care",
      description: "Safe and eco-conscious products for kids",
      products: [
        { id: 501, name: "Organic Baby Wipes", image: "https://via.placeholder.com/400x300" },
        { id: 502, name: "Cloth Diapers", image: "https://via.placeholder.com/400x300" },
        { id: 503, name: "Wooden Toys", image: "https://via.placeholder.com/400x300" },
        { id: 504, name: "Eco Baby Bottles", image: "https://via.placeholder.com/400x300" },
        { id: 505, name: "Natural Baby Lotion", image: "https://via.placeholder.com/400x300" },
      ],
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-full h-[500px]"
        >
          <SwiperSlide>
            <img
              src="https://www.granddesignsmagazine.com/wp-content/uploads/2020/06/eco-friendly-kitchen-main-company.jpg"
              className="w-full h-full object-cover"
              alt="Eco-Friendly Kitchen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.ecobasketindia.com/cdn/shop/files/Skin_Care_EB.png?v=1667908960&amp;width=3840"
              className="w-full h-full object-cover"
              alt="Eco-Friendly Skin Care"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Welcome to EcoShop</h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            Discover eco-friendly products for every part of your life — home, care, and gifting.
          </p>
          <Link
            to="/menu"
            className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories Section with Scroll */}
      <div className="container mx-auto py-16 px-6">
        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-3xl font-bold text-green-700 mb-2">{category.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{category.description}</p>
            <div className="overflow-x-auto">
              <div className="flex gap-6 w-max">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[226px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <Link
                          to="/menu"
                          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all"
                        >
                          Buy Now
                        </Link>
                        <p
                          onClick={() => toggleFavorite(product.id)}
                          className="cursor-pointer text-2xl"
                          style={{ color: favorites.includes(product.id) ? "red" : "gray" }}
                        >
                          {favorites.includes(product.id) ? "❤️" : "🤍"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-24 px-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Join the Eco-Friendly Movement</h2>
        <p className="text-2xl text-green-100 mb-10">
          Explore our wide range of sustainable, reusable, and natural products for everyday life.
        </p>
        <Link
          to="/menu"
          className="bg-yellow-400 text-green-900 px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all shadow-lg"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
