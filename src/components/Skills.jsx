import {
  HTML,
  CSS,
  Github,
  Git,
  react,
  Python,
  Javascript,
  Typescript,
  wordpress,
  mysql,
  boostrap,
  materialui,
  sql,
  aws,
  android,
  microsoft,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-4 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image img={react}></Image>
          <Image img={Typescript}></Image>
          <Image img={Javascript}></Image>
          <Image img={Python}></Image>
          <Image img={HTML}></Image>
          <Image img={CSS}></Image>
          <Image img={boostrap}></Image>
          <Image img={materialui}></Image>
          <Image img={wordpress}></Image>
          <Image img={mysql}></Image>
          <Image img={sql}></Image>
          <Image img={Git}></Image>
          <Image img={Github}></Image>
          <Image img={aws}></Image>
          <Image img={android}></Image>
          <Image img={microsoft}></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
