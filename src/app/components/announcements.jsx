import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FromTo from "../img/fromto.png";
import ArrowUpDown from "../img/arrowupdown.png";
import Image from "next/image";

export default function Announcements() {
  return (
    <div className="flex justify-center">
    <button className="bg-color1 text-color5
    text-xl font-semibold  m-[2vw] p-4 rounded-xl w-[90vw] max-w-[387px]" type="text">
      <FontAwesomeIcon icon={faNewspaper}/>
      {"  Announcements"}</button>
    </div>
  );
}
