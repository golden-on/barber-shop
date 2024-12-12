import React from "react";
import { useNavigate } from "react-router-dom";

const HeroContent: React.FC = () => {
  const navigate = useNavigate();

  const handleBookOnline = () => {
    navigate("/reservation");
  };

  return (
    <div className="relative h-screen text-white">
      {/* Background Image */}
      <img
        src={`${process.env.PUBLIC_URL}/background/bg-image.png`}
        alt="Barbershop Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <br />
          <span className="text-yellow-500">Barbershop</span> in Manhattan <br />
          NEW YORK
        </h1>

        {/* Address Details */}
        <div className="mt-6 space-y-4 text-lg">
          <p>
            254 W 27ST ST, NEW YORK, NY 10011 <br />
            (212) 123-4567
          </p>
          <p>
            341 W 11ST ST, NEW YORK, NY 10022 <br />
            (212) 123-4567
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleBookOnline}
          className="mt-8 bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
        >
          Book Online
        </button>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/background/bg-1.png`}
        alt="Barbershop Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};

export default HeroContent;