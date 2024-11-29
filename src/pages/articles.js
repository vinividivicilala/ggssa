import { bottomUp } from "@/animationVariants";
import AnimatedText from "@/components/AnimatedText";
import ArticleCard from "@/components/Article";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useGetArticlesListQuery } from "@/services/aws";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ArticlesPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetArticlesListQuery();

  return (
    <Layout className="!py-0">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <motion.h1
            className="text-dark mb-4 lg:text-4xl text-lg lg:text-left text-center font-bold"
            initial="initial"
            animate="animate"
            variants={bottomUp}
          >
            Words Can Change The World
          </motion.h1>

          <AnimatedText
            className="w-full text-gray-600 text-md text-center lg:text-left lg:text-2xl xl:text-3xl lg:mt-5 leading-tight !font-normal"
            text=" In this blog I share ideas, projects, reflections..."
          />
          <Featured className="lg:mt-10 mt-3" article={data[2]} />
          <div className="grid grid-cols-12 gap-x-4 mt-10">
            {data
              .slice()
              .reverse()
              .map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  className="lg:col-span-4 col-span-12 mb-10"
                />
              ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default ArticlesPage;
