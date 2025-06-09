import { CardPic1, CardPic2, CardPic3 } from "@/assets/images";
export default function Cards() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 rounded-2xl bg-[#252731] m-5 p-4 flex flex-row justify-start">
        <div className="flex-1 py-5">
          <p className="font-semibold text-xl">Efficiently Manage Every Task</p>
          <p className="font-light">
            Organize, prioritize, and track task progress with precision tools,
            ensuring clarity and focus for all team members
          </p>
        </div>
        <div className="flex-1 mx-2">
          <CardPic1 />
        </div>
      </div>
      <div className="flex-1 flex flex-row lg:flex-col justify-center rounded-2xl bg-[#252731] mx-5 lg:my-5 p-4">
        <div className="flex-1 mr-5 lg:mb-5 lg:mx-2">
          <CardPic2 />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-xl">Stay on Schedule</p>
          <p className="font-light">
            Effortlessly synchronize with multiple calendar platforms to ensure
            every deadline and meeting is perfectly aligned
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-row lg:flex-col rounded-2xl bg-[#252731] m-5 p-4">
        <div className="flex-1 lg:flex-0 lg:mb-10">
          <p className="font-semibold text-xl pb-2">
            Gain Insightful Analytics
          </p>
          <p className="font-light">
            Access detailed reports to measure performance and optimize
            productivity
          </p>
        </div>
        <div className="flex-1 ml-5 lg:mx-0">
          <CardPic3 />
        </div>
      </div>
    </div>
  );
}
