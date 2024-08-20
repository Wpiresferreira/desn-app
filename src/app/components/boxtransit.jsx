import Image from 'next/image'
import { usePathname } from "next/navigation";
import CarImg from "../img/car.png";
import TrainImg from "../img/train.png";
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

export default function BoxTransit() {
  return (
    <div className="w-[45vw] max-w-[194px] h-[40vw] max-h-[194px] m-[1vh] flex flex-col justify-center items-center rounded-xl bg-color3 text-color5">
    <div className='w-[70%] left-0'>
      <Image src={CarImg} width={70} height={70} alt="Car" />
      </div>
    <div className='w-[70%] flex justify-end'>
    <Image src={TrainImg} width={70} height={70} alt="Train" />
      </div>
      <div className='pt-2'>Transit</div>
    </div>
  );
}
