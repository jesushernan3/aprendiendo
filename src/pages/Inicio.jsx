import React from "react";
import Hero from "../components/ui/Hero";
import MainHero from "../components/ui/MainHero";

const Inicio = () => {
  return (
    <div>
      <MainHero titulo={"Aprendiendo"} />
      <div className="container bg-green-300 flex flex-col items-center h-screen justify-center">
        deberia andar
        <h1 className="bg-red-300">APRENDIENDO</h1>
        <p className="font-primary">
          si yo pongo aca algo para ver como se la fuente
        </p>
      </div>
    </div>
  );
};

export default Inicio;
