import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { bottomUp, zoomInOut } from "../animationVariants.js";

import Loader from "@/components/Loader.js";
import { useGetArticlesListQuery } from "@/services/aws.js";
import { useState } from "react";
import CustomLink from '@/components/CustomLink.js';

const RobotImage = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={zoomInOut}>
      <Image
        src="/images/gf_robot_welcome.png"
        className=""
        width={0}
        height={0}
        sizes="60vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </motion.div>
  );
};

export default function Home() {

  useGetArticlesListQuery();
  const [isLoading, setLoading] = useState(true);

  async function onImageLoad() {
    await new Promise(r => setTimeout(r, 500));
    setLoading(false);
  }

  return (
    <>
      <main className="flex text-dark w-full min-h-screen">
        {isLoading ? (
          <>
            <Layout className="!px-0 w-[100vw]">
              <Loader />
              <Image
                src="/images/gf_robot_welcome.png"
                className="opacity-0"
                width={0}
                height={0}
                sizes="60vw"
                style={{ width: "100%", height: "auto" }}
                onLoad={onImageLoad}
              />
            </Layout>
          </>
        ) : (
          <Layout className="lg:!px-32 !p-0">
            <div className="lg:flex-row flex flex-col items-center justify-between w-full lg:mt-28">
              <div className="w-1/3 hidden lg:flex">
                <RobotImage />
              </div>
              <div className="lg:w-3/5 w-3/4 flex flex-col items-center self-center">
                <AnimatedText
                  text="Welcome to my Blog!"
                  className="2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl lg:!text-left text-center"
                />
                <motion.p
                  className="my-4 lg:pr-24 lg:text-lg text-md font-medium text-center lg:text-left"
                  initial="initial"
                  animate="animate"
                  variants={bottomUp}
                >
                  Here, as a technology enthusiast with an insatiable thirst for
                  knowledge, I share insights, discoveries, and reflections that
                  capture the essence of my ongoing journey of learning.
                </motion.p>
                {/* lg:self-center */}
                <div className="w-52 lg:hidden">
                  <RobotImage />
                </div>
                <div className="flex items-center lg:self-start lg:mt-2 mt-9 ">
                  <CustomLink
                    route="/articles"
                    className="border-solid border-2 border-transparent bg-secondary text-light"
                    title="Articles"
                  />
                  <CustomLink
                    route="/about"
                    className="ml-4 border-solid border-2 border-secondary text-secondary"
                    title="About"
                  />
                </div>
              </div>
            </div>
          </Layout>
        )
        }

      </main>
    </>
  );
}
