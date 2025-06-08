import React from "react";
import Hero from "../components/ui/Hero";
import { useParams } from "react-router";

const PhpPage = () => {
  const { subcategoria } = useParams();
  console.log(useParams(subcategoria));
  return (
    <div>
      <Hero titulo="Php" />
      {subcategoria}
    </div>
  );
};

export default PhpPage;
