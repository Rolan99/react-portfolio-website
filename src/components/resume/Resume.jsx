/* eslint-disable array-callback-return */
import React from "react";

import Card from "./Card";
import Data from "./Date";

import "./resume.css";

const Resume = () => {
  return (
    <section className='resume container section'>
      <h2 className='section__title' id='resume'>
        Experience
      </h2>

      <div className='resume__container grid'>
        <div className='timeline grid'>
          {Data.map((val) => {
            if (val.category === "education") {
              return (
                <Card
                  key={val.id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className='timeline grid'>
          {Data.map((val) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={val.id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
