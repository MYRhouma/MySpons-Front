"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import {Avatar,Image} from "@nextui-org/react";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var hover:cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-72 sm:w-80 h-auto rounded-xl p-4 border">
        
        
        <CardItem translateZ="30" className="w-full">
          {/* <Image
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://i.ytimg.com/vi/erLbbextvlY/hqdefault.jpg"
            height="500"
            width="500"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          <Image
            width={300}
            height={160}
            className=""
            alt="Youtube Video Thumbnail"
            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </CardItem>
        
        <CardItem
          translateZ="30"
          className="text-md font-bold text-neutral-600 dark:text-white flex items-center">     
          <Avatar className="" src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="sm" />
            <p className="m-2">Mr Beast</p>
            <p className="text-neutral-500 font-light text-sm dark:text-neutral-300">
              5 min ago
            </p>
        </CardItem>
        <CardItem
          translateZ="30"
          className="text-md font-bold text-neutral-600 dark:text-white flex items-center">     
            <p className="my-1">7 Jours Échoué Sur Une Île deserte</p>
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="10"
          className="text-neutral-500 text-sm max-w-sm mt-2 float-right dark:text-neutral-300"
        >
          Discovered 5 min ago
        </CardItem> */}
        {/* <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={10}
            as={Link}
            href=""
            target="__blank"
            className="px-2 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={10}
            as="button"
            className="px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}