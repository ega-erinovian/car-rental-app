"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface FeaturesItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeaturesItem: FC<FeaturesItemProps> = ({ icon, title, desc }) => {
  return (
    <motion.li
      className=" group"
      whileHover="hover"
      initial="rest"
      animate="rest">
      <div className="w-full p-4 mx-auto flex items-center justify-center">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.25 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center justify-center transition-colors duration-300">
          {icon}
        </motion.div>
      </div>
      <h4 className="text-2xl text-gray-800 font-bold group-hover:text-blue-600">
        {title}
      </h4>
      <p className="md:text-sm xl:text-base pt-4">{desc}</p>
    </motion.li>
  );
};

export default FeaturesItem;
