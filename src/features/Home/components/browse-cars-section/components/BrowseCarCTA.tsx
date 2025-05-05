"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const BrowseCarCTA = () => {
  return (
    <div className="w-full py-6 flex items-center justify-center md:justify-start gap-2 text-sm md:text-lg font-semibold">
      Can`t found the car you want?
      <motion.div
        className="group"
        whileHover="hover"
        initial="rest"
        animate="rest">
        <Link
          href="#"
          className="flex items-center w-fit gap-2 text-blue-600 hover:text-blue-800">
          Browse more
          <motion.span
            variants={{
              hover: { translateX: 6 },
            }}
            transition={{ type: "spring", stiffness: 500 }}>
            <ArrowRightIcon className="w-4" />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
};

export default BrowseCarCTA;
