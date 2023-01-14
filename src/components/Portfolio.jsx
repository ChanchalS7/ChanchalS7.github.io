import React from "react";

import zara from "./zara.png";
import hometogo from "./hometogo.png"
import mamaearth from "./mamaearth.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: zara,
      link: 'https://zara-vert.vercel.app/',
      repo: 'https://github.com/yashrajillusion/zara',
      des:"Zara-Clone",
      desc:"Zara is an international fashion brand which have online and offline high quality fashion brands available in many country",
      tech:"HTML | CSS | Javascript | JSON"
    },
    {
      id: 2,
      src: hometogo,
      link: 'https://home-to-go.vercel.app/',
      repo: 'https://github.com/ChanchalS7/HomeToGo',
      des:"Hometogo-Clone",
      desc:" Hometogo clone is ans American internation rental comparison and rental property provider webiste, here you can get the villas, hotel, and other rental property for residential purpose.",
      tech:"HTML | CSS | Javascript | JSON"
    },
    {
      id: 3,
      src: mamaearth,
      link: 'https://mama-earth.netlify.app/',
      repo: 'https://github.com/ChanchalS7/mamaearth-clone',
      des:"Mamaearth-Clone",
      desc:"Mamearch is an Indian beauty products company. Which provide high quality chemical free beauty products to its consumer.",
      tech:"HTML | CSS | Javascript | React| Redux| Express, Node, MongoDB"
    },
    
  ];

  return (
    <div
      name="projects"
       className="bg-slate-200 w-full text-black md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-600 font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, des, desc, tech }) => (
            <div key={id} className="shadow-md shadow-white bg-white	 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p style={{textAlign:"center", marginTop:"10px"}} className="text-2xl sm:text-1xl font-bold text-black">{des}</p>
              <p style={{textAlign:"center", marginTop:"10px"}}>{desc}</p>
              <p style={{textAlign:"center", marginTop:"10px",color:"#2b67eb"}}>`Tech stack:-{tech}`</p>
              <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={ () => window.open(link, '_blank')}>
                  Live
                </button>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={ () => window.open(repo, '_blank')}>
                  Source
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
