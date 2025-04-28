"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "motion/react";

interface SocialMediaButtonProps {
  icon: JSX.Element;
  href: string;
}

const SocialMediaButton: FC<SocialMediaButtonProps> = ({ icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <motion.div
        whileHover={{ translateY: -4 }}
        whileTap={{ scale: 0.9 }}
        className="gap-2 bg-black rounded-full p-2 hover:bg-gray-700 h-fit">
        {icon}
      </motion.div>
    </Link>
  );
};

export default SocialMediaButton;
