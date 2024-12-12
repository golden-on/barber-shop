import React from "react";

const WorkingHours: React.FC = () => {
    const hours = [
        { day: "Sunday", time: "10 AM – 5 PM" },
        { day: "Monday", time: "9 AM – 7 PM" },
        { day: "Tuesday", time: "8 AM – 8 PM" },
        { day: "Wednesday", time: "8 AM – 8 PM" },
        { day: "Thursday", time: "8 AM – 8 PM" },
        { day: "Friday", time: "8 AM – 7 PM" },
        { day: "Saturday", time: "9 AM – 6 PM" },
    ];

    return (
        <div className="py-10 bg-gray-50 relative">
            <img
                src={`${process.env.PUBLIC_URL}/background/bg-image.png`}
                alt="Barbershop Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-white">
                {/* Left Section: Why Choose Us */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Why choose us?</h2>
                    <p className="mb-6">
                        In addition, there are 5 more reasons why men prefer Manhattan
                        Barbershop N.Y.C:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Always welcoming environment</li>
                        <li>Our masters focus on the quality</li>
                        <li>We value both the time and the money of our clients</li>
                        <li>
                            We work only with high-quality, hypoallergenic premium products
                        </li>
                        <li>
                            All surfaces and tools are cleaned, disinfected before and after
                            using
                        </li>
                    </ul>
                </div>

                {/* Right Section: Working Hours */}
                <div className="flex-1 bg-white shadow-lg rounded-md p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        WORKING HOURS
                    </h3>
                    <ul className="space-y-2 mb-6 text-gray-700">
                        {hours.map((hour, index) => (
                            <li key={index} className="flex justify-between">
                                <span>{hour.day}</span>
                                <span>{hour.time}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
                        Book Online
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkingHours;
