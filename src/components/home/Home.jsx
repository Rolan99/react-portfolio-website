import React from "react";
import HeaderSocials from "./HeaderSocials";

import Me from "../../assets/logo.png";

import "./home.css";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='avatar' className='home__img' />
        <h1 className='home__name'>Rolan Abdo</h1>
        <span className='home__education'>I'm a Front-End developer</span>

        <HeaderSocials />

        <a href="#contact" className='btn'>
          Hire Me
        </a>
      </div>

      <ScrollDown />
      <Shapes />
    </section>
  );
};

export default Home;
