import {
  GridPic1,
  GridPic2,
  GridPic3,
  GridPic4,
  GridPic5,
} from "@/assets/images";

export default function GridCards() {
  return (
    <div className="flex-1 flex flex-col items-center rounded-2xl bg-[#252731] m-5 p-4">
      <div className="flex flex-col lg:flex-row font-manrope lg:w-[50%] gap-2 lg:gap-0">
        <div className="flex-1 flex justify-between text-2xl px-2 font-bold">
          <p className=" lg:w-fit">Unleash Efficiency in Project Mangement</p>
        </div>
        <p className="flex-1 text-sm text-[#bdbec1] font-thin px-2">
          Plan and organize your entire project work from start to finish.
          Communicate and collaborate wit your manage team.
        </p>
      </div>
      <div className="mt-10 w-full grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-3">
        <div className="flex flex-col col-span-2 row-span-1 bg-[#1a1a23] rounded-3xl">
          <div className="h-48 rounded-2xl">
            <GridPic1 />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <p className="font-manrope font-bold text-xl">
              Streamline Your Workflow
            </p>
            <p className="font-manrope font-extralight">
              Simplify your project management with intuitive tools designed to
              enhance productivity and keep your team aligned
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-[#1a1a23] rounded-3xl">
          <div className="h-48">
            <GridPic2 />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <p className="font-manrope font-bold text-xl">
              Collaborate Seamlessly
            </p>
            <p className="font-manrope font-extralight">
              Foster collaboration with real-time updates and communication
              tools that keep everyone on the same page
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-[#1a1a23] rounded-3xl">
          <div className="h-48">
            <GridPic3 />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <p className="font-manrope font-bold text-xl">
              Optimize Task Management
            </p>
            <p className="font-manrope font-extralight">
              Prioritize tasks efficiently and ensure timely project delivery
              with our advanced tracking features
            </p>
          </div>
        </div>
        <div className="col-span-3 row-span-1 bg-[#1a1a23] rounded-3xl">
          <div className="h-48">
            <GridPic4 />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <p className="font-manrope font-bold text-xl">
              Enhance Team Performance
            </p>
            <p className="font-manrope font-extralight">
              Boost your team's performance with clear goals, streamlined
              processes, and insightful analytics
            </p>
          </div>
        </div>
        <div className="col-span-3 row-span-1 bg-[#1a1a23] rounded-3xl">
          <div className="h-48">
            <GridPic5 />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            <p className="font-manrope font-bold text-xl">
              Enhance Team Performance
            </p>
            <p className="font-manrope font-extralight">
              Boost your team's performance with clear goals, streamlined
              processes, and insightful analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
