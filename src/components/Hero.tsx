import Image from "next/image";
import heroImage from "@/assets/images/DesktopApp.png";
export default function Hero() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center justify-center m-5 rounded-2xl bg-[#252731]">
      <div className="flex flex-col gap-5 items-center lg:items-start justify-between p-3 m-10">
        <h1 className="text-center lg:text-left text-4xl font-manrope font-bold">
          All-In-One
          <br />
          Project
          <br />
          Management
        </h1>
        <p className="text-center lg:text-left font-roboto">
          Streamline your meetings, manage projects efficiently,
          <br />
          and optimize your workflow—all in one place
        </p>
        <div className="flex flex-row gap-2">
          <button className="bg-[linear-gradient(0deg,#423DF5,#5D5AF6)] py-2 px-4 rounded-xl ">
            Get Started
          </button>
          <button className="bg-[#1a1a23] py-2 px-4 rounded-xl">
            See Our Feature
          </button>
        </div>
      </div>
      <div className="lg:flex flex-1 self-stretch m-4 rounded-xl">
        <Image
          src={heroImage}
          alt="heroImage"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
