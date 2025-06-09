import Link from "next/link";
import { ChevronDown, Download, Menu } from "lucide-react";
import Logo from "@/assets/logo";

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="mx-10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <Logo />
            </div>
            <Link
              href="/"
              className="text-white text-xl font-bold font-manrope"
            >
              TaskManager
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-roboto text-sm">
            {/* Features Dropdown - Uses hover instead of click */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors focus:outline-none">
                <span>Features</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Download Button */}
          <Link
            href="/"
            className="hidden md:flex items-center space-x-2 bg-[linear-gradient(0deg,#423DF5,#5D5AF6)] hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-xs"
          >
            <span>Download the App</span>
            <Download className="w-4 h-4" />
          </Link>

          {/* Mobile menu toggle - Uses checkbox hack */}
          <div className="md:hidden">
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="hidden peer"
            />
            <label
              htmlFor="mobile-menu-toggle"
              className="text-white hover:text-blue-400 transition-colors cursor-pointer block peer-checked:hidden"
            >
              <Menu className="w-6 h-6" />
            </label>
            <label
              htmlFor="mobile-menu-toggle"
              className="text-white hover:text-blue-400 transition-colors cursor-pointer hidden peer-checked:block"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>

            {/* Mobile Navigation */}
            <div className="fixed inset-x-0 top-[88px] bg-black border-t border-gray-700 hidden peer-checked:block z-40">
              <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
                {/* Mobile Features - Uses details/summary for accordion */}
                <details className="group">
                  <summary className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-blue-400 transition-colors cursor-pointer list-none">
                    <span>Features</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>

                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Task Management
                    </Link>
                    <Link
                      href="/"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Team Collaboration
                    </Link>
                    <Link
                      href="/"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Analytics
                    </Link>
                    <Link
                      href="/"
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Integrations
                    </Link>
                  </div>
                </details>

                <Link
                  href="/"
                  className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                >
                  Pricing
                </Link>

                <Link
                  href="/"
                  className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="/"
                  className="block px-3 py-2 text-white hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>

                {/* Mobile Download Button */}
                <Link
                  href="/"
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 mx-3 mt-4 rounded-lg transition-colors font-medium"
                >
                  <span>Download the App</span>
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
