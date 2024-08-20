import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faUserCircle,
  faTicket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BoxTickets() {
  return (
    <div className="w-[45vw] max-w-[194px] h-[40vw] max-h-[194px] m-[1vh] flex flex-col justify-center items-center rounded-xl bg-color3">
      <button className=" w-[90%] mb-1 flex items-center bg-color5 text-black h-14  rounded-md">
          <FontAwesomeIcon
            icon={faTicket}
            className="h-4 p-2 -rotate-45 text-color2"
          />
        <span className="p-2">Buy Tickets</span>
      </button >
      <button  className=" w-[90%] mt-1 flex items-center bg-color5 text-black h-14  rounded-md">

        <FontAwesomeIcon icon={faWallet} className=" -rotate-45 h-4 p-2 text-color2" />
        Tickets Wallet
      </button>
    </div>
  );
}
