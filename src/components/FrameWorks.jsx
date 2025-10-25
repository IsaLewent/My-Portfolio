import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
  const skills = [
    "cplusplus",
    "css3",
    "git",
    "github",
    "html5",
    "javascript",
    "microsoftsqlserver",
    "react",
    "tailwindcss",
    "visualstudiocode",
    "vitejs",
  ];

  return (
    <div className="relative flex h-[15rem] justify-center items-center w-full flex-col overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    className="h-full w-full rounded-sm hover:scale-110 duration-200"
  />
);
