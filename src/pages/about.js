//disciplina de ferro, optimisme i aprenentatge constant
//I do whatever is required to complete my objectives

import {
  leftRight1,
  rightLeft1,
  rightLeft2,
  rightLeft3,
} from "@/animationVariants";
import FactsSection from "@/components/FactsSection";
import Layout from "@/components/Layout";
import StorySection from "@/components/StorySection";
import ValuesSection from "@/components/ValuesSection";
import { BookOpenIcon, GiftIcon, StarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Link from "next/link";

const AboutSection = ({
  title,
  anchor = "",
  icon: IconComponent,
  variants,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      initial="initial"
      animate="animate"
      variants={variants}
      className="rounded-lg hover:shadow-lg hover:border hover:border-secondary"
    >
      <Link
        className="flex items-center rounded-xl p-3 text-gray-600 text-lg xl:text-xl font-semibold"
        href={anchor}
      >
        <IconComponent className="h-8 w-8 text-secondary mr-4" />
        <h2>{title}</h2>
      </Link>
    </motion.div>
  );
};

export default function About({ className }) {
  return (
    <div>
      <Layout>
        <section className={className}>
          <div>
            <div className="place-self-center">
              <motion.h1
                className="xl:text-8xl md:text-left text-center md:text-5xl text-3xl font-bold"
                initial="initial"
                animate="animate"
                variants={leftRight1}
              >
                <span className="text-black">
                  Hey, I'm Gabriel <span className="text-secondary">.</span>
                </span>
              </motion.h1>
              <motion.h2
                className="xl:text-6xl md:text-3xl md:text-left text-xl font-extrabold flex md:mt-4 mt-2"
                initial="initial"
                animate="animate"
                variants={leftRight1}
              >
                <br></br>
                <TypeAnimation
                  className="mx-auto md:mx-0"
                  style={{ color: "#FF8C00" }}
                  sequence={[
                    "a Telecom. Engineer",
                    1000,
                    "a Software Developer",
                    1000,
                    "an AI Enthusiast",
                    1000,
                    "a Builder",
                    1000,
                    "Not Just a Developer.",
                    6000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>
              <motion.p
                initial="initial"
                animate="animate"
                variants={rightLeft1}
                className="text-gray-600 text-base text-center sm:text-lg md:text-xl xl:text-3xl md:w-2/3 mt-10 leading-normal md:text-left"
              >
                I am on a constant journey of discovery, exploring the intricate
                complexities of our ever-changing world
                {/*through a passion for building and insatiable curiosity. */}
              </motion.p>
            </div>
          </div>
          <div className="pt-12">
            <div className="items-center flex md:flex-row flex-col md:gap-14 gap-5 min-w-min">
              <AboutSection
                title="Story"
                anchor="#story_section"
                icon={BookOpenIcon}
                variants={rightLeft1}
              />
              <AboutSection
                title="Values"
                icon={StarIcon}
                anchor="#values_section"
                variants={rightLeft2}
              />
              <AboutSection
                title="Facts"
                icon={GiftIcon}
                variants={rightLeft3}
                anchor="#facts_section"
              />
            </div>
          </div>

          <StorySection />
          <ValuesSection />
          <FactsSection />
        </section>
      </Layout>
    </div>
  );
}
