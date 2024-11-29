import { leftRight1, rightLeft1 } from "@/animationVariants";
import {
  BookOpenIcon,
  ClipboardDocumentIcon,
  HeartIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ChefIcon, DumbellIcon } from "./Icons";
import SectionTitle from "./SectionTitle";

const factsAboutMe = [
  {
    title: "2nd Career Choice",
    description:
      "Considering college majors, political science was my second choice. Convinced of my knack for debate, I envisioned myself as the James Bond of politics.",
    icon: ClipboardDocumentIcon,
  },
  {
    title: "Morning Ritual",
    description:
      "I kickstart my day with a pre-sunrise pre-work gym session. Who needs coffee when you can have endorphins?",
    icon: DumbellIcon,
  },
  {
    title: "Calories Maestro",
    description:
      "For me, sculpting diets is just another thing I do with the engineer hat. I hate the uncertainty of not knowing if I'm fueling my body right for my current goal.",
    icon: ChefIcon,
  },
  {
    title: "Constant Listener",
    description:
      "I love hearing podcasts, who needs silence when you can tune in to wisdom and wit? My favorite ones (currently) are Itnig and The All-In Podcast.",
    icon: SpeakerWaveIcon,
  },
  {
    title: "Literary Explorer",
    description:
      "I find immense joy in delving into inspiring books that fuel my personal growth journey, interspersed with occasional forays into the enchanting realms of fiction.",
    icon: BookOpenIcon,
  },
  {
    title: "Egg Lover",
    description:
      "If I could only eat one thing for the rest of my life, it would undoubtedly be eggs. High quality fats, proteins, vitamins...eggs have it all!",
    icon: HeartIcon,
  },
];

const FactCard = ({ title, description, icon: IconComponent, index }) => {
  const variants = index % 2 === 0 ? rightLeft1 : leftRight1;

  return (
    <motion.div
      className="lg:col-span-6 col-span-1 col-start-1 bg-gray-200 rounded-lg lg:p-12 p-8 mb-6"
      initial="initial"
      variants={variants}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <IconComponent className="mb-8 lg:w-14 w-10 mx-auto lg:mx-0" />
      <div className="text-lg font-semibold lg:text-left text-center">
        {title}
      </div>
      <p className="mt-3 lg:text-lg text-md font-medium lg:text-left text-center text-gray-600 lg:w-4/5">
        {description}
      </p>
    </motion.div>
  );
};

const FactsSection = () => {
  return (
    <div
      className="mt-64 grid lg:grid-cols-12 lg:gap-x-6 grid-cols-1"
      id="facts_section"
    >
      <SectionTitle
        className="lg:col-span-12 col-span-1"
        title="Random Facts"
        variants={leftRight1}
      />
      <motion.h1
        className="lg:col-span-12 col-span-1 col-start-1 lg:text-left text-center lg:text-2xl text-lg font-medium"
        initial="initial"
        variants={rightLeft1}
        whileInView="animate"
        viewport={{ once: true }}
      >
        Here are some random facts about me.
      </motion.h1>
      <motion.h1
        initial="initial"
        variants={leftRight1}
        whileInView="animate"
        viewport={{ once: true }}
        className="col-start-1 lg:col-span-6 lg:text-2xl lg:text-left text-center text-lg font-medium text-gray-600 mt-2 mb-8"
      >
        Get to know me.
      </motion.h1>
      <div className="col-span-6"></div>
      {factsAboutMe.map((fact, index) => (
        <FactCard key={index} {...fact} index={index} />
      ))}
    </div>
  );
};

export default FactsSection;
