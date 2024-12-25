import React, { useState } from "react";

const CardTemplate = ({ text, bgImage, children, newText }) => {
  const [quote, setQuote] = useState(0);

  return (
    <div
      onMouseOver={() => setQuote(1)}
      onMouseOut={() => setQuote(0)}
      className="w-64 h-64 bg-center bg-cover flex justify-center items-center transition-all duration-300 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {quote === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-semibold px-4 py-2 bg-black bg-opacity-70 rounded">
            {text}
          </h1>
          {children}
        </div>
      ) : (
        <div className="bg-black/70 w-full h-full cursor-pointer backdrop-blur-md flex justify-center items-center rounded-lg">
          <h1 className="text-white text-xl font-semibold text-center">
            {newText}
          </h1>
        </div>
      )}
    </div>
  );
};

const About = () => {
  const skills = [
    {
      title: "HTML1",
      description: "HTML (HyperText Markup Language) adalah bahasa standar yang digunakan untuk membuat dan menyusun halaman web. HTML adalah tulang punggung dari semua halaman web, yang menyediakan struktur dasar untuk menampilkan teks, gambar, video, dan elemen lain di internet.",
      image: "/images/html.png", // Pastikan gambar ada di folder public/images
    },
    {
      title: "CSS",
      description: "bahasa yang digunakan untuk mengatur tampilan dan tata letak elemen pada halaman web. Dengan CSS, Anda dapat mengubah warna, font, ukuran, jarak, dan banyak aspek lain dari elemen HTML untuk membuat halaman web lebih menarik dan profesional.",
      image: "/images/css.png", // Pastikan gambar ada di folder public/images
    },
    {
      title: "React JS",
      description: "Description of Skill 3.",
      image: "/images/jsx.png", // Pastikan gambar ada di folder public/images
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-start justify-center pl-8">
      {/* About Section with Background and Blur */}
      <div
        className="w-full h-96 bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/bg1.jpg')", // Ganti dengan path gambar yang benar
          height: "500px", // Pastikan ini cukup tinggi untuk menampilkan gambar
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col justify-center items-start px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-white mb-4">
            Hai, saya Muhammad Hafiz Raihan, Saya adalah junior front end developer. Saya memiliki pengetahuan dasar tentang HTML, CSS, dan JavaScript. 
          </p>
          
        </div>
      </div>

      {/* Skills Section with Background and Blur */}
      <div
        className="w-full min-h-screen bg-center bg-cover bg-no-repeat relative mt-8"
        style={{
          backgroundImage: "url('/images/bg2.jpg')", // Ganti dengan path gambar yang benar
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <CardTemplate
                key={index}
                text={skill.title}
                bgImage={skill.image} // Pastikan path gambar benar
                newText={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
