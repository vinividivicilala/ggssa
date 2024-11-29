import { useRouter } from "next/router";
import Link from "next/link";
import { GoodreadsIcon, LinkedInIcon, MoonIcon, TwitterIcon } from "./Icons";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  LINKEDIN_URL as myLinkedinUrl,
  TWITTER_URL as myTwitterUrl,
  MAIL_URL as myMailUrl,
  GOODREADS_URL as myGoodReadsUrl,
} from "../app/constants";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group text-gray-600 font-semibold`}
    >
      {title}
      <span
        className={`h-[1px]  inline-block bg-secondary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
           ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2 text-black`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-secondary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-8 md:px-16 lg:px-20 xl:px-32 2xl:px-60 md:py-16 py-10 flex items-center justify-between relative z-10 bg-light">
      <div className="w-full lg:hidden justify-between items-center flex">
        <h1 className="font-semibold text-lg text-orange-400">
          Not Just a Developer
        </h1>
        <button
          className="flex-col justify-center items-center"
          onClick={handleClick}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 text-secondary" />
          ) : (
            <Bars3Icon className="w-6 text-secondary" />
          )}
        </button>
      </div>

      <div className="w-full lg:flex justify-between items-center hidden">
        <h1 className="font-semibold text-2xl text-orange-400  ">
          Not Just a Developer
        </h1>
        <nav className="flex xl:gap-16 gap-12">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/articles" title="Articles" />
          <CustomLink href="/subscribe" title="Subscribe" />
        </nav>
        <div className="flex gap-6 items-center">
          <motion.a
            href={myTwitterUrl}
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={myLinkedinUrl}
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={myGoodReadsUrl}
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoodreadsIcon className="w-5 h-auto" />
          </motion.a>
          <motion.a
            href={myMailUrl}
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <EnvelopeIcon className="text-blue-600 w-5 h-auto" />
          </motion.a>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] justify-between items-center fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-slate-300/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />{" "}
            <CustomMobileLink
              href="/subscribe"
              title="Subscribe"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-10">
            <motion.a
              href={myTwitterUrl}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={myLinkedinUrl}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={myGoodReadsUrl}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GoodreadsIcon className="w-5 h-auto" />
            </motion.a>
            <motion.a
              href={myLinkedinUrl}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <EnvelopeIcon className="text-blue-600 w-5 h-auto" />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
