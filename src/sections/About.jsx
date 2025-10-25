import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <div className="bg-gradient-to-r from-transparent via-lavender to-transparent mb-12 h-[2px] w-full" />
      <h2 className="text-heading text-center">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid-1 */}
        <div className=" flex items-end grid-default-color grid-1 ">
          <img
            src="/assets/coding-pov.png"
            alt=""
            className="absloute scale-[1.75] -right-[5rem] -top-[3rem] md:scale[5] md:left-50 md:inset-y-10 lg:scae[2.5]"
          />
          <div className="z-10 absolute ">
            <p className="headtext">Isa Levent</p>
            <p className="subtext">
              I have been actively working on web design for about the last year
              and Web design the languages ​​I have generally learned are
              advanced HTML and CSS. However, in recent months I have improved
              tremendously in React and Tailwind CSS.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/2 bg-gradient-to-t from-blue-950" />
        </div>
        {/* Grid-2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ top: "10%", left: "10%", rotate: "-35deg" }}
              text="Solid"
              containerRef={grid2Container}
              gridelasticity={1}
            />
            <Card
              style={{ top: "15%", left: "60%", rotate: "45deg" }}
              text="Smooth"
              containerRef={grid2Container}
              gridelasticity={1}
            />
            <Card
              style={{ top: "30%", left: "35%", rotate: "10deg" }}
              text="Marvel Design"
              containerRef={grid2Container}
              gridelasticity={4}
            />
            <Card
              style={{ top: "60%", right: "0%", rotate: "-20deg" }}
              text="Solid"
              containerRef={grid2Container}
              gridelasticity={1}
            />
            <Card
              style={{ top: "60%", left: "10%", rotate: "25deg" }}
              text="Cool"
              containerRef={grid2Container}
              gridelasticity={1}
            />
          </div>
        </div>
        {/* Grid-3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm live in the world and I feeling ready to work
            </p>
          </div>
          <figure className="absolute left-[35%] top-[13%]">
            <Globe />
          </figure>
        </div>
        {/* Grid-4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do u want to project together ?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid-5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">The technologies I have</p>
            <p className="subtext">
              I am familiar with a variety of languages, frameworks, and tools
              that allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0  md:inset-y-9  w-full h-full start-[50%] md:scale-125">
            <FrameWorks />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-lavender to-transparent mt-[6rem] h-[2px] w-full" />
    </section>
  );
};

export default About;
