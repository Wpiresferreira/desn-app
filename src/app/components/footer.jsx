import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeart,  faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { pathToFileURL } from "url";

const links = [
  { text: "Home", icon: faHome, href: "/home" },
  { text: "Favorites", icon: faHeart, href: "/home/payment" },
  { text: "User", icon: faUserCircle, href: "/home/trip" },
];

export default function Footer() {

  const pathname = usePathname();
  console.log(pathname);
  console.log(links[0].href);
  console.log(links[0].href == pathname);



  return (
    <div className="fixed bottom-0 flex w-screen">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.text}
            href={link.href}
            className={clsx(
              "flex font- h-[48px] text-lg items-center justify-center gap-2 rounded-md  p-3 font-medium hover:bg-color30 hover:text-color1  md:p-2 md:px-3 flex-auto",
              {
                "bg-color30 text-color1": pathname == link.href,
                "bg-color50 text-color5": pathname != link.href,
                
              }
            )}
          >
            <FontAwesomeIcon icon={link.icon} className="w-6"/>
            {/* <p className="hidden md:block">{link.name}</p> */}
            {/* <p >{link.text}</p> */}
          </Link>
        );
      })}
    </div>
  );
}
