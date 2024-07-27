"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "NordVPN",
    designation: "VPN Provider",
    image:
      "https://logo.clearbit.com/nordvpn.com",
  },
  {
    id: 2,
    name: "Rhinoshield",
    designation: "Phone Case Manufacturer",
    image:
      "https://logo.clearbit.com/rhinoshield.fr",
  },
  {
    id: 3,
    name: "N26",
    designation: "E-Bank Services",
    image:
      "https://logo.clearbit.com/n26.com",
  },
  {
    id: 4,
    name: "SkillShare",
    designation: "Online Courses",
    image:
      "https://logo.clearbit.com/skillshare.com",
  },
  {
    id: 5,
    name: "Brilliant",
    designation: "Learn by doing",
    image:
      "https://logo.clearbit.com/brilliant.org",
  },
  {
    id: 6,
    name: "Happn",
    designation: "Dating Application",
    image:
      "https://logo.clearbit.com/happn.com",
  },
  {
    id: 7,
    name: "Factor75",
    designation: "Healthy Food",
    image:
      "https://logo.clearbit.com/factor75.com",
  },
  
];

export function SponsorTooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
