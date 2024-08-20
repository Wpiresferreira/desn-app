import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center justify-between bg-color5 w-[90vw] max-w-[387px] my-[2vh] h-[8vh] rounded-md">
        <FontAwesomeIcon
          className="px-[8px] text-color1"
          icon={faMapMarked}
        ></FontAwesomeIcon>
        <span> Where to</span>
        <FontAwesomeIcon
          className="px-[8px] text-color1"
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>
      <div className="flex w-[90vw] max-w-[387px] h-[6vh] bg-color5 rounded-t-md overflow-hidden">
        <div className="flex-1 text-center">Leave at</div>
        <div className="flex-1 bg-color1 text-center">Arrive by</div>
      </div>
      <div className="flex flex-col items-start bg-color5 w-[90vw] max-w-[387px] mb-[2vh] rounded-b-md">
        <div className="m-[8px]">
          <input className="mx-[8px]" type="radio" name="part" defaultChecked={true} />
          <span className="mx-[8px]"> Now </span>
        </div>
        <div className="m-[8px]">
          <input className="mx-[8px]" type="radio" name="part" />
          <input className="mx-[8px]" type="time" defaultValue="13:45:25" />
        </div>
      </div>
    </div>
  );
}
