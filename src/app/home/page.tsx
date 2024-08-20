"use client";
import BoxWeather from "../components/boxweather";
import BoxTickets from "../components/boxtickets";

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap justify-around content-around h-[90vh] rounded-2xl bg-color50">
        <div className="flex flex-wrap justify-around content-around h-[90vw] rounded-2xl">
          <BoxWeather />
          <BoxTickets />
        </div>
      </div>
    </>
  );
}
