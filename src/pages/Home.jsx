import React from "react";
import Row from "../components/Row";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Movies />
      <Row />
    </div>
  );
};

export default Home;
