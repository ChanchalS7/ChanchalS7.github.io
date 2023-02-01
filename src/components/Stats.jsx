import React from "react";

const Stats = () => {
    return (
        <div name="contact"
            className="contact w-full h-full bg-slate-200 to-gray-800 p-4 text-black">
            <div className="ml-40">
                <h1 className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">My Statistics</h1>
            </div>
            <div className='stats' style={{ display: "flex", justifyContent: "space-evenly", marginTop: "50px" }}>

                <img align="center" src="https://github-readme-stats.vercel.app/api?username=ChanchalS7&show_icons=true&locale=en" alt="ChanchalS7" />
                <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=ChanchalS7&" alt="ChanchalS7" />
            </div>
        </div>
    )
}

export default Stats