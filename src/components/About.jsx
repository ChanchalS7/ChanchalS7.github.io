import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-slate-100	text-black about "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-600 font-bold inline border-b-4 border-blue-600 ">
            About
          </p>
        </div>
        <p className="text-xl mt-5 text-gray-600">
          Hello! My name is Chanchal Verma, and I am a full-stack web developer working on both, backend and frontend technologies. I am open to developing web products and excited to learn new tech stacks.
          <br /> <br />
          I'm a passionate developer with strong administrative and communication skills, and proficient software development skills using, MERN stack. I have spent nine months as an instructional associate at Masai School. In Masai, I mentored a large number of students to get skilled in MERN Stack and DSA problem solving. I helped them or guided them to achieve their dream.
        </p>

        <br />

        <p className="text-xl text-gray-600">



          I am interested in writing code from scratch and keenly excited to design and develop web products, maintain them, and have optimised problem-solving skills. As I grow as a full-stack developer, I am looking forward to working with organisations where I can contribute to technology that makes human life easier.



        </p>

      </div>
    </div>
  );
};

export default About;
