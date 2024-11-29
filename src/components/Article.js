import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

const ArticleCard = ({ className = "", article }) => {
  const {
    title,
    publication_date,
    reading_time,
    views_count,
    subtitle,
    blog_id,
    cover,
  } = article;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/article/${blog_id}`);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      initial="initial"
      whileInView="animate"
      variants={bottomUp}
      viewport={{ once: true }}
      className={`${className} rounded-lg `}
      onClick={handleClick}
    >
      <Image
        className="aspect-[4/3] lg:aspect-[4/4] rounded-lg  hover:border border-secondary p-1"
        src={cover}
        alt="G-F brand robot welcoming blog readers"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 className="text-lg font-semibold text-slate-600 mt-5">
        {publication_date} - {reading_time} read
      </h1>
      <h1 className="text-xl font-bold mt-3">{title}</h1>
    </motion.div>
  );
};

export default ArticleCard;
