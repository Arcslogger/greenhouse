"use client";

import { Plant } from "@/utils/getContent";
import { getURLSlug } from "@/utils/misc";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface IFeelingLucky {
  plants: Plant[];
}

const FeelingLucky = ({ plants }: IFeelingLucky) => {
  if (!plants || plants.length === 0) return null;

  return (
    <span className="flex group ">
      <span
        className="group-hover:underline cursor-pointer"
        onClick={() => {
          const randomPlant = plants[Math.floor(Math.random() * plants.length)];
          const link = `https://nursery.wilbur	zhang.com/${getURLSlug(
            randomPlant.frontmatter.title
          )}`;
          window.open(link, "_self");
        }}
      >
        take me somewhere
      </span>
      <ArrowRightIcon className="ml-2 w-3.5 cursor-pointer" />
    </span>
  );
};

export default FeelingLucky;
