"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function MagicPage(){
    return (
    // <div><AuroraBackground><div className="overflow-auto" style={{height:"500vh"}}></div></AuroraBackground></div>
    <div>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Let Magic Happen.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Use the Wizard
        </button>
      </motion.div>
    </AuroraBackground></div>
);
}