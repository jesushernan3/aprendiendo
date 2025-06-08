import React from "react";
import Hero from "../components/ui/Hero";
import { useParams } from "react-router";

const HtmlPage = () => {
  const { path } = useParams();
  return (
    <div>
      <Hero titulo={path} />
    </div>
  );
};

export default HtmlPage;
