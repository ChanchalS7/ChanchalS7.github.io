import React from "react";

import zara from "./zara.png";
import kfc from "./kfc.png"
import myntra from "./myntra.png"
import weather from "./weather.png"
import shoppingcart from "./shoppingcart.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: zara,
      link: 'https://zara-vert.vercel.app/',
      repo: 'https://github.com/yashrajillusion/zara',
      des: "Zara-Clone",
      desc: "Zara is an international fashion brand which have online and offline high quality fashion brands available in many country",
      tech: "HTML | CSS | Javascript | JSON"
    },
    {
      id: 2,
      src: kfc,
      link: 'https://kfc-taupe.vercel.app/',
      repo: 'https://github.com/ChanchalS7/KFC',
      des: "KFC-Clone",
      desc: "KFC clone is ans American internation food chain restaurant chain , here you can order or go to the outlet and get varieties of fast food.",
      tech: "HTML | CSS | Javascript | JSON"
    },
    {
      id: 3,
      src: myntra,
      link: 'https://myntraclonemernapp.netlify.app/',
      repo: 'https://github.com/ChanchalS7/Myntra-clone-',
      des: "Myntra-Clone",
      desc: "Myntra clone is an Indian e-commerce fashion platform, where you can buy varities of fashion and beauty product in all range.",
      tech: "HTML | CSS | Javascript | React| Redux| Express, Node, MongoDB"
    },
    {
      id: 4,
      src: shoppingcart,
      link: "https://the-awesome-chanchals7-site.netlify.app/",
      repo: "https://github.com/ChanchalS7/simple_shoppingcart",
      des: "Shopping Cart",
      desc: "It is simple react-redux shopping cart app where you can add the item to the cart filter it",
      tech: "JavaScript | React | Redux | fakeStore API"
    },
    {
      id: 5,
      src: weather,
      link: "https://weather-app-beta-mauve.vercel.app/",
      repo: "https://github.com/ChanchalS7/WeatherApp",
      des: "Weather App",
      desc: "It is weather app where you can all the data related to the weather, and also get the weather prediction for the next 7 days",
      tec: "React| Weather-API"
    },


  ];

  return (
    <>
      <div style={{ marginLeft: "250px" }}>
        <p className="text-4xl text-blue-600 font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>
      <div
        style={{ "height": "900px" }}
        name="projects"
        className="bg-slate-200 w-full text-black md:h-screen portfolio "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-4" >
            {portfolios.map(({ id, src, link, repo, des, desc, tech }) => (
              <div key={id} className="shadow-md shadow-white bg-white	 rounded-lg">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p style={{ textAlign: "center", marginTop: "10px" }} className="text-2xl sm:text-1xl font-bold text-black">{des}</p>
                <p style={{ textAlign: "center", marginTop: "10px" }}>{desc}</p>
                <p style={{ textAlign: "center", marginTop: "10px", color: "#2b67eb" }}>`Tech stack:-{tech}`</p>
                <div className="flex items-center justify-center">
                  <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={() => window.open(link, '_blank')}>
                    Live
                  </button>
                  <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={() => window.open(repo, '_blank')}>
                    Source
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
