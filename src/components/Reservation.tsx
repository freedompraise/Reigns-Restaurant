import { useState } from "react";
import bg from "../img/center.jpeg";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    guests: "1 Person",
    date: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full" id="reservation">
      {/* Left Side: Reservation Form */}
      <div className="bg-black text-white p-8 w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-yellow-500 text-lg font-semibold">Reservation</h2>
        <h1 className="text-3xl font-bold mt-2">BOOK A TABLE NOW!</h1>

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="mt-4 p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-yellow-500"
        >
          <option>1 Person</option>
          <option>2 People</option>
          <option>3 People</option>
          <option>4+ People</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-4 p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="mt-4 p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="mt-4 p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-yellow-500"
        />

        <textarea
          name="message"
          placeholder="Message.."
          value={formData.message}
          onChange={handleChange}
          className="mt-4 p-3 bg-gray-800 rounded-md focus:ring-2 focus:ring-yellow-500 h-24"
        ></textarea>

        <button className="mt-6 bg-green-500 text-white py-3 rounded-md hover:bg-green-700 transition duration-300">
          RESERVE NOW
        </button>
      </div>

      {/* Right Side: Image with Overlay */}
      <div className="hidden md:block w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <img src={bg} alt="Restaurant" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ReservationSection;
