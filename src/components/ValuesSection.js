import {
  bottomUp,
  leftRight1, rightLeft1
} from "@/animationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Value = ({ className = "", title, description, variants }) => {
  return (
    <motion.div
      className={`${className}`}
      initial="initial"
      variants={variants}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h1 className="text-xl font-semibold lg:text-left text-center lg:pr-0 pr-6">
        {title}
      </h1>
      <p className="mt-3 text-justify lg:text-lg text-sm">{description}</p>
    </motion.div>
  );
};

const ValuesSection = () => {
  return (
    <div className="mt-96" id="values_section">
      <SectionTitle title="Values" variants={leftRight1} />
      <motion.div
        className="lg:text-3xl text-md lg:text-left text-center text-gray-600 font-medium"
        initial="initial"
        variants={rightLeft1}
        whileInView="animate"
        viewport={{ once: true }}
      >
        Here are some of the values I live by.
      </motion.div>
      <div className="flex lg:flex-row flex-col lg:mt-10 mt-3 gap-14">
        <div className="lg:w-1/2">
          <Value
            variants={leftRight1}
            className="mt-5"
            title="Optimism"
            description="I firmly believe in the power of optimism to navigate life's challenges. It's not just about wishful thinking but about approaching obstacles with the firm belief that solutions exist. When faced with daunting tasks, I envision success and focus on the steps needed to achieve it."
          />
          <Value
            variants={rightLeft1}
            className="mt-10"
            title="Hard Work"
            description="Hard work has been the cornerstone of my journey. I've always believed that success is earned through dedication and perseverance. While talent may play a role, it's the hours of effort and commitment that truly make a difference. I embrace the grind, knowing that every ounce of sweat is an investment in my goals. "
          />
          <Value
            variants={leftRight1}
            className="mt-10"
            title="Constant Learning"
            description="My insatiable curiosity fuels a relentless pursuit of knowledge in every aspect of my life. Whether it's through the projects I work in, the conversations I engage in, the books I read, or the podcasts I eagerly listen to, I am constantly seeking to expand my horizons."
          />
        </div>
        <motion.div
          className="lg:w-1/2"
          initial="initial"
          variants={bottomUp}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Image
            src="/images/surf.JPG"
            alt="G-F brand robot welcoming blog readers"
            className="rounded-xl"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ValuesSection;
