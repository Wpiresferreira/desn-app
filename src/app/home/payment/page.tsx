import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Payments from "../../img/payments.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[430px]">
      <div className="flex flex-col justify-center items-center w-[90vw] max-w-[387px] h-[12vh] min-h-[90px] bg-color5 rounded-md">
        <h1>Payment Methods</h1>
        <Image src={Payments} width={870} height={100} alt="Payments icons" />
      </div>
      <div className="flex flex-col items-center bg-color5 w-[90vw] max-w-[387px] my-[2vh] rounded-md h-[40vh] min-h-[300px]">
        <div className="text-xl my-3 font-bold">Choose Tickets</div>
        <div className="flex">
          <div className="flex flex-col">
            <input
              type="number"
              className="m-3 w-10 text-center rounded-md"
              defaultValue={1}
            ></input>
            <input
              type="number"
              className="m-3 w-10 text-center rounded-md"
              defaultValue={0}
            ></input>
            <input
              type="number"
              className="m-3 w-10 text-center rounded-md"
              defaultValue={0}
            ></input>
            <input
              type="number"
              className="m-3 w-10 text-center rounded-md"
              defaultValue={0}
            ></input>
          </div>
          <div className="flex flex-col">
            <p className="my-3 w-32">Adult pass day</p>
            <p className="my-3 w-32">Youth pass day</p>
            <p className="my-3 w-32">Adult pass mo.</p>
            <p className="my-3 w-32">Youth pass mo.</p>
            <p className="my-3 w-32 font-bold">Total</p>
          </div>
          <div className="flex flex-col">
            <p className="my-3 w-16">$ 5.50</p>
            <p className="my-3 w-16">$ 3.50</p>
            <p className="my-3 w-16">$ 45.50</p>
            <p className="my-3 w-16">$ 15.50</p>
          </div>
          <div className="flex flex-col">
            <p className="my-3 w-16 text-right">$ 5.50</p>
            <p className="my-3 w-16 text-right">$ 0.00</p>
            <p className="my-3 w-16 text-right">$ 0.00</p>
            <p className="my-3 w-16 text-right">$ 0.00</p>
            <p className="my-3 w-16 text-right font-bold">$ 5.50</p>
          </div>
        </div>
        {/* <div className="flex items-center justify-between">
          <input
            type="number"
            className="m-3 w-10 text-center rounded-md"
          ></input>
          <span> Adult Pass</span>
          <span> x $5.50</span>
          <span> = $11.00</span>
        </div>
        <input
          type="number"
          className="m-3 w-10 text-center  rounded-md"
        ></input>
        <span> Youth Pass</span> */}
      </div>
      <button className="w-[90vw] bg-color1 font-bold text-color5 text-xl max-w-[387px] rounded-md my-[2vh] p-[2vh]"> Proceed Checkout</button>
    </div>
  );
}
