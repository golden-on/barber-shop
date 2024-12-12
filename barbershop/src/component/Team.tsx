import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mark Brown",
    role: "Owner",
    image: `${process.env.PUBLIC_URL}/profiles/prof01.jpg`,
    description: "Mark is the owner of the barbershop with over 20 years of experience."
  },
  {
    name: "David Villegas",
    role: "Barber",
    image: `${process.env.PUBLIC_URL}/profiles/prof02.jpg`,
    description: "David is a skilled barber specializing in modern cuts and styles."
  },
  {
    name: "Mark Brown",
    role: "Owner",
    image: `${process.env.PUBLIC_URL}/profiles/prof03.jpg`,
    description: "Mark is the owner of the barbershop with over 20 years of experience."
  },
  {
    name: "David Villegas",
    role: "Barber",
    image: `${process.env.PUBLIC_URL}/profiles/prof04.jpg`,
    description: "David is a skilled barber specializing in modern cuts and styles."
  },
  {
    name: "Mark Brown",
    role: "Owner",
    image: `${process.env.PUBLIC_URL}/profiles/prof05.jpg`,
    description: "Mark is the owner of the barbershop with over 20 years of experience."
  },
  {
    name: "David Villegas",
    role: "Barber",
    image: `${process.env.PUBLIC_URL}/profiles/prof02.jpg`,
    description: "David is a skilled barber specializing in modern cuts and styles."
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-gold py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Our Barbers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-90 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;