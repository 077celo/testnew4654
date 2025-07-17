"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior Technical Artist",
    company: "NullSurface inc.",
    period: "2019 - 2025",
    description:
      "Developed procedural generation tools that streamlined 3D asset creation for characters, props, and environments. I optimized assets for performance, wrote C/C++ tools for pipelines, built pre-visualization prototypes, and collaborated across teams to ensure seamless integration into the game engine.",
  },
  {
    title: "Technical Artist",
    company: "Epic Games",
    period: "2018 - 2020",
    description:
      "Worked on technical and facial rigging, stylized animation, and motion capture. I developed tools in C++ and Blueprint, guided cross-team processes, and solved technical asset issues. I regularly presented design concepts and partnered across disciplines to improve both workflow and in-game performance.",
  },
  {
    title: "Game Artist & UI Designer",
    company: "Level Up! Global",
    period: "2017 - 2018",
    description:
      "Created a wide range of visual assets including HUDs, icons, and promotional artwork. I maintained brand consistency, translated mockups into game-ready assets, optimized implementation, and tracked industry trends to create engaging visuals for various game genres.",
  },
  {
    title: "Technical Artist",
    company: "NullSurface inc.",
    period: "2014 - 2016",
    description: "Crafted 3D prototypes while managing strict performance budgets. I built C/C++ tools to automate tasks, created detailed models and materials, and documented pipeline standards. I also implemented procedural tools that allowed artists to generate complex assets more efficiently within the game engine.",
  },
]

export function Timeline() {
  const isMobile = useIsMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-green-400/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/10 to-cyan-950/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-950 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
