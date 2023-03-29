import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center ">
        <p className="text-xl tracking-widest text-blue-700 uppercase">
          skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center mx-auto gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">

                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center mx-auto gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">

                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center mx-auto gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">

                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center mx-auto gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">

                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center mx-auto gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">

                <h3>Git Hub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
