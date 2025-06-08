import React from "react";

const MainHero = ({ titulo, subtitulo, categoria }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white">
      <img
        className="brightness-25 w-full hidden md:block"
        src="https://picsum.photos/1200/400"
        alt=""
      />
      <img
        className="brightness-25 w-full  md:hidden"
        src="https://picsum.photos/1200/400"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl ">
          {titulo}
        </h1>
        <p className="max-w-xl text-center mt-6 px-4 text-gray-300">
          {subtitulo}Unlock potential with tailored strategies designed for
          success. Simplify challenges, maximize results, and stay ahead in the
          competitive market.
        </p>
      </div>
    </div>
  );
};

export default MainHero;
