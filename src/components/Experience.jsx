import React, { useEffect } from "react";
import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

import voeuxlogo from "../assets/voeuxit_logo.png";
import cyberialogo from "../assets/cyberia.logo.jpg";
import ddugkylogo from "../assets/ddugky.png";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-5 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            style={{ lineHeight: 0 }}
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-1 max-sm:grid-cols-1 grid-cols-3 flex-col" // Added 'flex-col' class
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={voeuxlogo}
              title="Voeux Information Technology LLC - Dubai, UAE"
              subtitle="Front-End Web Developer "
              date="Augest 2023 - present"
              // para={
              //   <>
              //     <p>Technology used</p>
              //     <p>
              //       ReactJS <span>s sdfgh</span>
              //     </p>
              //     <p>
              //       TypeScript <span>s sdfgh</span>
              //     </p>
              //     <p>
              //       Material UI <span>s Material UI</span>
              //     </p>
              //   </>
              // }
            />

            <Exp_prop
              img={cyberialogo}
              title="Cyberia Softwares Pvt.Ltd. - Trivandrum, INDIA"
              subtitle="Software Developer"
              date="August 2022 - November 2022"
              // para={
              //   <>
              //     <p>Technology used</p>
              //     <p>ReactJS</p>
              //     <p>TypeScript</p>
              //     <p>Material UI</p>
              //   </>
              // }
            />
            <Exp_prop
              img={ddugkylogo}
              title="DDUGKY - Trivandrum, INDIA"
              subtitle="Data Associate and Junior Software Developer"
              date="August 2022 - November 2022"
              // para={
              //   <>
              //     <p>Technology used</p>
              //     <p>ReactJS</p>
              //     <p>TypeScript</p>
              //     <p>Material UI</p>
              //   </>
              // }
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
