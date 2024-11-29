import {
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { LINKEDIN_URL as myLinkedinUrl, MAIL_URL as myMailUrl } from '../app/constants';
import { LinkedinOutlineIcon, MyBlogLogo } from "./Icons";
import Layout from "./Layout";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <div>
      <Layout className="!px-0 !pb-8 !min">
        {/* <footer className="border-t-2 border-solid border-gray-200 mt-20 flex justify-center"> */}
        <footer className="bg-gray-200 mx-8 px-4 md:mx-36  xl:mx-64 md:rounded-full rounded-xl p-1 shadow-xl shadow-orange-100 pb-5">
          <div className="flex justify-center items-center flex-col md:flex-row">
            <MyBlogLogo className="mt-6 lg:h-52 h-40 shrink flex order-last md:order-first " />
            <div className="mt-10 flex-col flex lg:gap-5 gap-3 items-center ">
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">Thanks for visiting!</h2>
              <h3 className="lg:text-lg text-sm text-center w-56 md:w-64 lg:w-96">Your presence is appreciated. Feel free to reach out anytime, I'd love to connect!</h3>
              <div className="flex md:flex-row flex-col gap-4">
                <CustomLink
                  route={myLinkedinUrl}
                  className="border-solid border-2  border-secondary text-secondary lg:!px-6 lg:!text-lg !px-2 !text-sm"
                  iconClassname="!w-5"
                  title="Connect"
                  icon={LinkedinOutlineIcon}
                />
                <CustomLink
                  route={myMailUrl}
                  className="border-solid border-2  border-secondary text-secondary lg:!px-6 lg:!text-lg !px-2 !text-sm"
                  iconClassname="!w-5"
                  title="Email"
                  icon={EnvelopeIcon}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-3 md:mb-0 mb-5">
            <div className=" lg:text-sm text-xs text-gray-800">
              &copy; {new Date().getFullYear()}. All Rights Reserved.
            </div>
            <div className="text-xs lg:text-sm text-gray-800 text-center">Built with &#10084; by Gabriel Fortià</div>
          </div>
        </footer>
      </Layout>
    </div>
  );
};

export default Footer;
