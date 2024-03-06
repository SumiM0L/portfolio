"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import { Oppia } from "../constants/Constant";
import voeuxlogo from "../assets/voeuxit_logo.png";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={voeuxlogo}
              title="Voeux Information Technology LLC - Dubai"
              subtitle="Front-End Web Developer "
              date="Augest 2023 - present"
              para=" Skills : react JS , Typescript, javaScript, MUI"
            />
          </div>
          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={voeuxlogo}
              title="Voeux Information Technology LLC - Dubai"
              subtitle="Front-End Web Developer "
              date="Augest 2023 - present"
              para=" Skills : react JS , Typescript, javaScript, MUI"
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
