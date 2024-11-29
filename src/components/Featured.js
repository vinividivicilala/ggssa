import { bottomUp } from "@/animationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Featured = ({ className = "", article }) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/article/${article.blog_id}`);
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      initial="initial"
      animate="animate"
      variants={bottomUp}
      className={`${className} hover:border border-secondary p-1 rounded-lg`}
      onClick={handleClick}
    >
      <div
        className={` w-full bg-gray-200 rounded-lg lg:py-20 py-10 lg:px-16 px-4 grid lg:grid-cols-2 grid-cols-1 gap-4 hover:cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="col-span-1 flex flex-col justify-between text-center lg:text-left">
          <div>
            <h1 className="font-medium lg:text-base text-xs">
              Featured article
            </h1>
            <h1 className="xl:text-4xl text-2xl font-medium mt-5">
              {article.title}
            </h1>
            <h1 className="lg:text-lg text-sm font-semibold text-slate-400 lg:mt-5 mt-3">
              {article.publication_date} - {article.reading_time} read
            </h1>
          </div>
          <div className="">
            <div
              className={`font-semibold lg:text-lg text-xs underline decoration-orange-500 lg:mt-0 mt-6  ${isHovered ? "underline underline-offset-2" : "no-underline"
                }`}
            >
              Read full article
            </div>
          </div>
        </div>
        <div className="flex items-end lg:mt-0 mt-5">
          <Image
            className="aspect-[4/3] lg:aspect-[4/5] rounded-xl mx-auto"
            src={article.cover}
            alt="featured article cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Featured;
