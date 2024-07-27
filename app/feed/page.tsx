import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThreeDCardDemo } from '@/components/3dcard';

const Feed: React.FC = () => (
  <div className="relative w-full">
    <Carousel className="relative w-full">
      <CarouselContent className="flex w-full space-x-2 pl-20">
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-2" />
    </Carousel>
    <Carousel className="relative w-full">
      <CarouselContent className="flex w-full space-x-2 pl-20">
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-2" />
    </Carousel>
    <Carousel className="relative w-full">
      <CarouselContent className="flex w-full space-x-2 pl-20">
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
        <CarouselItem className="hover:z-10 hover:-translate-y-1  transition-all duration-300 ease-in-out md:basis-1/2 lg:basis-1/3 p-0"><ThreeDCardDemo/></CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 ml-2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mr-2" />
    </Carousel>

  </div>
);

export default Feed;
