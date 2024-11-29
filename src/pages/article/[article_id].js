// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetArticleQuery, useGetArticlesListQuery } from "@/services/aws";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

function getArticleId() {
  if (typeof window !== "undefined") {
    let url = window.location.pathname;
    const parts = url.split("/");
    const articleId = parts[parts.length - 1];
    return articleId;
  }
  return;
}

const Article = () => {
  const router = useRouter();
  var article_id = getArticleId();
  var articleMetadata;

  const { data: article, isLoading, isError } = useGetArticleQuery(article_id);
  const { data: articleList, isLoading: isLoadingList, isError: isErrorList } = useGetArticlesListQuery();

  if (!isLoadingList) {
    articleMetadata = articleList.find(article => article.blog_id === article_id);
  }

  if (isError || isErrorList) {
    router.push(`/notfound`)
  }

  return (
    <div>
      <Layout className="min-h-screen lg:!px-[27vw] !pt-0 md:!pt-16">
        {isLoading || isLoadingList || isError || isErrorList ? (
          <Loader />
        ) : (
          <motion.div initial="initial" animate="animate" variants={bottomUp}>
            <h1 className="text-left text-3xl md:text-6xl font-bold">{articleMetadata.title}</h1>
            <h2 className="text-gray-600 text-md md:text-2xl mt-4 md:mt-8">{articleMetadata.subtitle}</h2>
            <div className="flex gap-6 items-center mt-5 border-t border-b border-gray-300 py-2">
              <h1 className="md:text-md text-sm font-normal text-slate-600">
                {articleMetadata.publication_date} - {articleMetadata.reading_time} read
              </h1>
            </div>

            <Image
              src={articleMetadata.cover}
              alt="G-F brand robot welcoming blog readers"
              className="rounded-xl mt-6 aspect-[4/3] "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />

            <MarkdownRenderer>{article}</MarkdownRenderer>
          </motion.div>
        )}
      </Layout>
    </div>
  );
};

export default Article;
