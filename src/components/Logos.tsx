import { LogoPic } from "@/assets/images";

export default function Logos() {
  return (
    <div className="flex-1 flex flex-col items-center rounded-2xl bg-[#252731] m-5 p-4 ">
      <div className="font-manrope text-xl font-bold">
        Trusted By Industy Leaders
      </div>
      <div className="my-5">
        <LogoPic />
      </div>
    </div>
  );
}
