import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation: React.FC = () => {
  const [name, setName] = useState('');
  const [haircut, setHaircut] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto p-10 z-10">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Haircut</label>
                <select
                  value={haircut}
                  onChange={(e) => setHaircut(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                    <option value="">Select a haircut</option>
                    <option value="Regular Haircut">{`Regular Haircut ---------> $34+`}</option>
                    <option value="Royal Shave">{`Royal Shave ---------> $35+`}</option>
                    <option value="Haircut + Royal Shave">{`Haircut + Royal Shave ---------> $60+`}</option>
                    <option value="Haircut + Beard Trim">{`Haircut + Beard Trim ---------> $65+`}</option>
                    <option value="Beard Trim Machine">{`Beard Trim Machine ---------> $23+`}</option>
                    <option value="Beard + Facial">{`Beard + Facial ---------> $55+`}</option>
                    <option value="Haircut and Facial">{`Haircut and Facial ---------> $50+`}</option>
                    <option value="Men’s Facial">{`Men’s Facial ---------> $25+`}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Reservation Confirmed</h2>
            <p className="mb-4">Thank you, {name}!</p>
            <p className="mb-4">Haircut: {haircut}</p>
            <p className="mb-4">Date: {date}</p>
            <p className="mb-4">Time: {time}</p>
            <button
              onClick={handleBackToHome}
              className="mt-4 bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
      <div className="">
            <img
                src={`${process.env.PUBLIC_URL}/background/bg-image.png`}
                alt="Barbershop Background"
                className="inset-0 w-full h-[45.6rem] object-cover"
            />
            <img
                src={`${process.env.PUBLIC_URL}/background/bg-1.png`}
                alt="Barbershop Background"
                className="absolute inset-0 w-full h-full object-cover "
            />
        </div>
    </div>
  );
};

export default Reservation;