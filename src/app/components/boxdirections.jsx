import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FromTo from "../img/fromto.png";
import ArrowUpDown from "../img/arrowupdown.png";
import Image from "next/image";

export default function BoxDirections() {
  return (
    <div className="ml-[5vw] w-[90vw] rounded-xl bg-color3 h-[18vh]
     text-color5">
      <div className="">
        <div className="bg-color1 right-[5vw] rounded-md mt-[4vh] absolute h-[10vh] w-[10vw] overflow-hidden">
          <Image
            className=" mt-[30%] p-1 h-[70%] "
            src={ArrowUpDown}
            alt="Arrows"
          />
        </div>
        <div className="ml-[3vw] mt-[4vh] absolute h-[10vh] w-[5vw] overflow-hidden">
          <Image className=" h-[100%]" src={FromTo} alt="Arrows" />
        </div>
        <input
          className="mt-[2vh] mb-[2vh] h-[6vh] bg-color5 text-black w-[94%] ml-[3%] pl-[10%] rounded-md"
          type="text"
          placeholder="Where are we starting from?"
        />
        <input
          className="mb-[2vh] h-[6vh] bg-color5 text-black w-[94%] ml-[3%] pl-[10%] rounded-md"
          type="text"
          placeholder="Where are we starting from?"
        />
      </div>
    </div>
  );
}
