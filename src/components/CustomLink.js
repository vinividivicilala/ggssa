import { motion } from "framer-motion"
import Link from "next/link";
import { buttonVariants } from "../animationVariants.js";

const CustomLink = ({ title, route, className = "", iconClassname = "", icon: Icon, target }) => {
    return (
        <motion.div
            initial="initial"
            alt="friendly robot welcoming blog readers"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
        >
            <Link
                href={route}
                className={`p-2.5 px-6 flex rounded-lg text-lg font-semibold hover:shadow-lg justify-center ${className}`}
            >
                {Icon && <Icon className={`mr-2 !w-6 h-auto ${iconClassname}`} />}
                {title}
            </Link>
        </motion.div>
    );
};

export default CustomLink;