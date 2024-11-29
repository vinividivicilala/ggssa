import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import ConfettiExplosion from "react-confetti-explosion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSubscribeMutation } from "@/services/aws.js";

import {
  bottomUp,
  buttonVariants,
  leftRight1,
  onClickScale,
  zoomInOutLeftRight,
} from "../animationVariants.js";

import Loader from "@/components/Loader.js";
import { useState } from "react";

const RobotImage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={zoomInOutLeftRight}
    >
      <Image
        src="/images/subscribe.png"
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

const Badge = ({ success = false, onClose, className }) => {
  const badgeColor = success
    ? "bg-green-100 border-green-300"
    : "bg-red-100 border-red-300";

  const badgeMessage = success
    ? "Verification email sent!"
    : "Error! Wrong email format";

  const badgeMessage2 = success ? "Confirm and becoma a VIP" : null;

  return (
    <div
      className={`flex items-center justify-between border-2 px-3 py-1 rounded-xl ${badgeColor} ${className}`}
    >
      <div>
        <p className="text-sm font-medium text-gray-800">{badgeMessage}</p>
        {badgeMessage2 && (
          <p className="text-sm font-medium text-gray-800">{badgeMessage2}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="flex items-baseline justify-center w-5 h-5 text-gray-500 hover:text-gray-800 ml-4"
      >
        <XMarkIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

const SubscribePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isSuccesful, setIsSuccesful] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [subscribe] = useSubscribeMutation();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  async function onImageLoad() {
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
  }

  function onSubscribeClick() {
    if (!isValidEmail(inputValue)) {
      setIsSuccesful(false);
    } else {
      subscribe(inputValue);
      setIsSuccesful(true);
      setIsExploding(true);
    }
    setShowBadge(true);
  }

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  return (
    <>
      <main className="flex text-dark w-full min-h-screen">
        {isLoading ? (
          <>
            <Layout className="!px-0 w-[100vw]">
              <Loader />
              <Image
                src="/images/subscribe.png"
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
          <Layout className="lg:!px-32 !p-0 !w-screen">
            <div className="lg:flex-row flex flex-col items-center justify-between w-full lg:mt-28">
              <div className="w-1/3 hidden lg:flex">
                <RobotImage />
              </div>
              <motion.div
                className="lg:w-3/5 w-3/4 flex flex-col md:items-start  items-center"
                animate="animate"
                initial="initial"
                variants={leftRight1}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline lg:mx-0 mx-auto ">
                  <h1 className="2xl:text-5xl xl:text-4xl lg:text-2xl sm:text-xl text-2xl lg:!text-left text-center font-bold">
                    Become a VIP
                  </h1>
                  <a className="ml-3 2xl:text-2xl lg:text-xl sm:text-lg text-sm font-medium">
                    (Very Informed Person)
                  </a>
                </div>
                <p
                  className="my-4 xl:text-lg lg:px-0  lg:max-w-[650px] lg:text-md w-full text-sm  font-medium text-center lg:text-left"
                  initial="initial"
                  animate="animate"
                  variants={bottomUp}
                >
                  Join my exclusive club of Very Informed Persons (VIPs) and
                  never miss a beat! VIPs receive an email notification every
                  time I post a blog.
                </p>
                {/* lg:self-center */}
                <div className="w-52 lg:hidden self-center">
                  <RobotImage />
                </div>
                <div className="flex items-center lg:self-start lg:mt-2 mt-9 w-full">
                  <motion.div
                    className="flex-grow flex shadow-xl md:max-w-[650px] md:min-w-80"
                    animate="animate"
                    variants={buttonVariants}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={inputValue}
                      onChange={handleInputChange}
                      className={`${
                        isHovered
                          ? "border-orange-300 text-secondary"
                          : "border-secondary"
                      } border-solid border-2 focus:outline-0 p-2 rounded sm:pr-10 pr-2 w-full sm:text-md text-sm`}
                    />
                    <motion.button
                      onClick={onSubscribeClick}
                      variants={onClickScale}
                      whileTap="tap"
                      type="submit"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="font-semibold bg-secondary text-white sm:px-4 hover:border-r-2 hover:border-y-2 hover:border-orange-300 hover:text-secondary hover:bg-white sm:text-md text-sm px-1 py-2 rounded -ml-3"
                    >
                      Subscribe
                    </motion.button>
                    {isExploding && <ConfettiExplosion duration={4000} />}
                  </motion.div>
                </div>
                <Badge
                  className={`mt-6 sm:w-64 ${
                    showBadge ? "opacity-100" : "opacity-0"
                  }`}
                  success={isSuccesful}
                  onClose={() => setShowBadge(false)}
                />
                {/* {showBadge && (
                  <Badge
                    className={"mt-6 w-96"}
                    success={isSuccesful}
                    onClose={() => setShowBadge(false)}
                  />
                )} */}
              </motion.div>
            </div>
          </Layout>
        )}
      </main>
    </>
  );
};

export default SubscribePage;
