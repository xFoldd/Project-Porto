// Contact.jsx
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Connect with Me</h1>
      
      <div className="flex space-x-6 mb-6">
        {/* Ikon GitHub */}
        <a href="https://github.com/xFoldd" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-white hover:text-blue-500" />
        </a>
        {/* Ikon Instagram */}
        <a href="https://instagram.com/notfizhh_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-white hover:text-pink-500" />
        </a>
      </div>
      
      <p className="text-sm text-gray-400">Feel free to reach out through my social media channels!</p>
    </div>
  );
};

export default Contact;
