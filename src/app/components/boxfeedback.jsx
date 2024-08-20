import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faMessage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BoxFeedback() {
  return (
    <div className="w-[45vw] max-w-[194px] h-[40vw] max-h-[194px] m-[1vh] flex flex-col justify-center items-center rounded-xl bg-color3  text-color5">
      <div className="w-[60%] flex justify-end">
        <FontAwesomeIcon icon={faMessage} className="h-6  text-color1" />
      </div>

      <FontAwesomeIcon icon={faUserGroup} className="h-12 p-2 text-color1" />
    <div>
      Feedback
    </div>
    </div>
  );
}
