"use client";
// import Image from "next/image";
import {Image} from "@nextui-org/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

type VideoData = {
  video_id: string;
  title: string;
  // full_description: string;
  thumbnails_default_url: string;
};

export function ExpandableCard({ videos }: { videos: VideoData[] }) {
  const [active, setActive] = useState<VideoData | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setActive(null);
    }
  };

  return (
    <div className="max-w-[30vw]">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]" onClick={handleOverlayClick}>
            <motion.div
              layoutId={`card-${active.video_id}`}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.video_id}`} className="w-full h-auto">
              <motion.button
                  layoutId={`close-${active.video_id}`}
                  className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <IoIosClose color="default" />
                </motion.button>
                {/* <Image
                  priority
                  width={500}
                  height={500}
                  src={active.thumbnails_high_url}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                /> */}
                <Image
                width={500}
                // height={500}
                className="w-full h-80 lg:h-80 max-h-[280px] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                alt="Youtube Video Thumbnail"
                src={active.thumbnails_default_url}
              />
              </motion.div>

              <div className="relative p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.video_id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    {/* <motion.p
                      layoutId={`description-${active.video_id}`}
                      className="text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap"
                    >
                      {active.full_description}
                    </motion.p> */}
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.video_id}`}
                    href={`https://www.youtube.com/watch?v=${active.video_id}`}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Watch Now
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.video_id}
            layoutId={`card-${video.video_id}`}
            className="bg-content1 rounded-lg shadow-lg overflow-hidden cursor-pointer flex" // before bg-white dark:bg-neutral-900
            onClick={() => setActive(video)}
          >
            <motion.div layoutId={`image-${video.video_id}`} className="flex-shrink-0">
              {/* <Image
                priority
                width={96}
                height={96}
                src={video.thumbnails_default_url}
                alt={video.title}
                className="w-full h-full object-cover max-h-[84px] min-w-[150px]"
              /> */}
              <Image
                width={150}
                height={84}
                className="w-full h-full object-cover max-h-[84px] min-w-[150px]"
                alt="Youtube Video Thumbnail"
                src={video.thumbnails_default_url}
              />
            </motion.div>
            <div className="p-4 flex-1">
              <motion.h3
                layoutId={`title-${video.video_id}`}
                className="font-bold text-neutral-700 dark:text-neutral-200"
              >
                {video.title}
              </motion.h3>
              {/* <motion.p
                layoutId={`description-${video.video_id}`}
                className="text-neutral-600 dark:text-neutral-400 "
              >
                {video.full_description.length > 32
                  ? `${video.full_description.substring(0, 32)}...`
                  : video.full_description}
              </motion.p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


