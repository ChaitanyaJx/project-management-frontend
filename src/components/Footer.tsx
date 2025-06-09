import Logo from "@/assets/logo";
export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 self-stretch lg:self-auto flex flex-col mx-5 mt-5 lg:mt-0 gap-5">
        <div className="font-manrope font-semibold">
          Subscribe to our Newsletter
        </div>
        <div>
          <p className="text-[#bdbec1] text-xs">
            Subscribe to receive the latest updates, news, and exclusive tips
            right to your inbox.
          </p>
        </div>
        <div className="bg-[#191919] flex-1 flex flex-row rounded-2xl">
          <div className="flex-1 flex items-center text-xs text-[#bdbec1] px-4">
            <div>Email Address</div>
          </div>
          <button className="font-manrope text-sm px-4 py-2 bg-[linear-gradient(0deg,#423DF5,#5D5AF6)] rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden lg:flex-1 lg:flex font-manrope">
        <div className="flex-1 flex flex-col gap-3">
          <p>Overview</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p>Resources</p>
          <p>Blog</p>
          <p>FAQ</p>
          <p>Support</p>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col mx-5 mb-5 lg:my-10 lg:mx-5 gap-4">
        <div className="flex flex-row mb-5 gap-2">
          <Logo />
          <p className="text-xl font-bold font-manrope">TaskManager</p>
        </div>
        <div>
          <p className="text-[#bdbec1] text-xs">
            Maximize project efficiency with our advanced management tools
            designed to enhance team collaboration and streamline workflows
          </p>
        </div>
        <div>
          <p className="text-[#404040] text-xs">
            © 2024. TaskManager. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
