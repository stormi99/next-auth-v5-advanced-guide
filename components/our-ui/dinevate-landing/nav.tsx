"use client";

import { useState } from "react";
import { NavLogo } from "./nav-logo";
import { Button } from "@/components/ui/button";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl grid grid-cols-3 items-center mx-auto p-4">
        <NavLogo />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 col-start-3 justify-self-end"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          !isSidebarOpen && "hidden"
        } w-full px-3 md:block md:w-auto pb-3`}
        id="navbar-default"
      >
        <div className="font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <ul className="flex flex-col">
            {["Home", "About", "Services", "Pricing", "Contact"].map(
              (item, i) => (
                <li key={i} className="mb-1">
                  <a
                    href="#"
                    className={`block py-2 px-3 text-gray-900 rounded transition-all ease-in-out ${
                      i === 0
                        ? "bg-[#fa4616] text-white cursor-not-allowed"
                        : "hover:text-black hover:font-bold"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="h-[1px] bg-stone-300 w-full my-3"></div>

          <div className="flex items-center justify-center gap-x-8">
            <Button variant="link" className="font-medium">
              Partner Login
            </Button>
            <Button variant="default" className="font-medium">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
