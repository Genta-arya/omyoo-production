import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";

import Footer from "../Home/Component/Footer";

import HeaderGame from "./Component/Header";

import game1 from "../../Asset/game1.png";
import game2 from "../../Asset/game2.png";

const GameList = () => {
  const games = [
    {
      id: 1,
      title: "Simulasi Slot Machine Game",

      imageURL: game1,
      url: "https://www.omyoo-studio.online/slot",
    },
    {
      id: 1,
      title: "Quiz Game",

      imageURL: game2,
      url: "https://www.omyoo-studio.online/quiz",
    },
  ];

  const handleShare = (url) => {};
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    document.title = `OmYoo-Studio | Game`;
  });


  return (
    <div>
      <HeaderGame />

      <div className="mx-4 my-8 bg-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-300">
          <h2 className="text-3xl font-bold job-list-heading">Game Menu</h2>
        </div>
      </div>

      <div className="p-2">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
          className="mobile-carousel"
        >
          {games.map((game) => (
            <div key={game.id} className="custom-card">
              <div className="card-inner">
                <div className="card-face">
                  <img
                    src={game.imageURL}
                    alt="Game Image"
                    className="w-full h-100 rounded-lg mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-center mb-28">
                    {game.title}
                  </h3>
                </div>
                <div className="card-face card-back">
                  <Link
                    to={game.url}
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
                  >
                    Play
                  </Link>
                </div>
                <div className="relative">
                  <FaShare
                    className="absolute text-gray-600 cursor-pointer hover:text-gray-800"
                    title="Share"
                    onClick={() => handleShare(game.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default GameList;
