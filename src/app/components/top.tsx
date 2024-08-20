import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Top() {
  return (
    <div className="w-screen h-[100%] min-h-[15vh] max-w-[430px] flex items-center justify-center">
      <FontAwesomeIcon
        icon={faLocationArrow}
        className="h-10 rotate-[-75deg] text-color1"
      />
      <div className="text-color5 text-4xl italic font-bold">Navi</div>
    </div>
  );
}
