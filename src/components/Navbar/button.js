import React, { useState } from "react";
import { Link } from "react-router-dom";
import PP from "../../assets/pp.jpg";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div class="flex items-center md:order-2">
      <div>
        <div class="dropdown relative">
          <button
            type="button"
            class="hidden md:flex text-sm transition duration-150 ease-in-out items-center whitespace-nowrap bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
          >
            <span class="sr-only">Open user menu</span>
            <img class="flex w-12 h-12 rounded-full" src={PP} alt="user" />
          </button>
          <ul
            class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="/"
              >
                Action
              </a>
            </li>
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="/"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="/"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
