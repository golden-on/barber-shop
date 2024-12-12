import React from "react";

const Pricing: React.FC = () => {
  const services = [
    { name: "Regular Haircut", price: "$34+" },
    { name: "Royal Shave", price: "$35+" },
    { name: "Haircut + Royal Shave", price: "$60+" },
    { name: "Haircut + Beard Trim", price: "$65+" },
    { name: "Beard Trim Machine", price: "$23+" },
    { name: "Beard + Facial", price: "$55+" },
    { name: "Haircut and Facial", price: "$50+" },
    { name: "Men’s Facial", price: "$25+" },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Our Pricing</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2 text-gray-700"
          >
            <span>{service.name}</span>
            <span className="text-yellow-600 font-semibold">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
