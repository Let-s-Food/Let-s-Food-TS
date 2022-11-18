import React from "react";
import Button from "../Button/Button";

import { FaSignOutAlt } from "react-icons/fa";

const navMenu = [
   {
      name: "Trang chủ",
      link: "/",
   },
   {
      name: "Thực đơn",
      link: "/menu",
   },
   {
      name: "Hoạt động",
      link: "/activity",
   },
   {
      name: "Về chúng tôi",
      link: "/about",
   },
   {
      name: "Liên hệ",
      link: "/contact",
   },
];

const Nav = () => {

   window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      
      if (window.scrollY > 0) {
         nav?.classList.add("header-scroll");
      }
      else {
         nav?.classList.remove("header-scroll");
      }
   });

   return (
      <nav className="bg-backgroundColor fixed z-10 w-full">
         {/* logo link home */}
         <div className="max-w-[1200px] h-[108px] mx-auto flex items-center justify-between">
            <a href="/home" className="flex items-center gap-2">
               <span className="text-blackColor font-semibold text-2xl">
                  Let'sFood
               </span>
               <svg
                  width="43"
                  height="35"
                  viewBox="0 0 43 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M17.0996 4.83496C17.5835 4.83498 18.0479 4.64398 18.3917 4.30347C18.7355 3.96297 18.9309 3.50051 18.9356 3.01665C18.9403 2.53248 18.7536 2.06605 18.4161 1.71889C18.0785 1.37174 17.6175 1.17197 17.1334 1.16309M16.941 8.48921C16.4571 8.48923 15.9928 8.29823 15.649 7.95772C15.3052 7.61722 15.1097 7.15476 15.1051 6.6709C15.1003 6.18673 15.2871 5.7203 15.6246 5.37314C15.9621 5.02599 16.4231 4.82622 16.9072 4.81734M17.0996 12.1611C17.5835 12.1611 18.0479 11.9701 18.3917 11.6296C18.7355 11.2891 18.9309 10.8266 18.9356 10.3428C18.9403 9.85861 18.7536 9.39217 18.4161 9.04502C18.0785 8.69786 17.6175 8.4981 17.1334 8.48921M24.4434 4.83496C24.9273 4.83498 25.3916 4.64398 25.7354 4.30347C26.0792 3.96297 26.2747 3.50051 26.2793 3.01665C26.2841 2.53248 26.0973 2.06605 25.7598 1.71889C25.4223 1.37174 24.9613 1.17197 24.4772 1.16309M24.2848 8.48921C23.8009 8.48923 23.3366 8.29823 22.9928 7.95772C22.649 7.61722 22.4535 7.15476 22.4488 6.6709C22.4441 6.18673 22.6308 5.7203 22.9683 5.37314C23.3059 5.02599 23.7669 4.82622 24.251 4.81734M24.4434 12.1611C24.9273 12.1611 25.3916 11.9701 25.7354 11.6296C26.0792 11.2891 26.2747 10.8266 26.2793 10.3428C26.2841 9.85861 26.0973 9.39217 25.7598 9.04502C25.4223 8.69786 24.9613 8.4981 24.4772 8.48921M10.3243 4.83496C10.8082 4.83498 11.2725 4.64398 11.6163 4.30347C11.9601 3.96297 12.1556 3.50051 12.1602 3.01665C12.165 2.53273 11.9784 2.06651 11.6412 1.7194C11.304 1.37229 10.8434 1.17235 10.3595 1.16309M10.1671 8.48921C9.68326 8.48923 9.21893 8.29823 8.87513 7.95772C8.53133 7.61722 8.33585 7.15476 8.3312 6.6709C8.32647 6.18698 8.51299 5.72076 8.8502 5.37365C9.18741 5.02654 9.64804 4.8266 10.1319 4.81734M10.3243 12.1611C10.8082 12.1611 11.2725 11.9701 11.6163 11.6296C11.9601 11.2891 12.1556 10.8266 12.1602 10.3428C12.165 9.85886 11.9784 9.39264 11.6412 9.04553C11.304 8.69841 10.8434 8.49848 10.3595 8.48921"
                     stroke="#FAA41A"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M11.0396 33.8369H24.2554V29.4659C21.4398 30.7085 19.7992 30.9023 17.5168 30.9493C14.663 31.0081 12.7286 30.5146 11.0396 30.0916V33.8369Z"
                     stroke="#383747"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M34.2811 18.0126C31.8136 27.2275 22.3827 32.6957 13.1678 30.2267C10.2434 29.4459 7.57664 27.9078 5.43636 25.7675C3.29608 23.6272 1.75798 20.9604 0.977173 18.0361L34.2811 18.0126Z"
                     fill="#FAA41A"
                     stroke="#383747"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M0.968353 15.0677H34.2869V18.0919H0.968353V15.0677Z"
                     stroke="#383747"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M22.49 15.0589C33.9462 15.5113 31.066 7.34799 39.5333 6.61067C40.3705 6.53724 40.8111 6.52108 41.9861 6.59598L42.0302 6.5813C40.5688 5.7118 37.8751 4.24011 35.6265 4.86433C34.4764 5.18452 32.6846 6.4212 31.4846 8.77855C28.4634 15.3938 25.5215 15.0457 23.1274 15.0575L22.49 15.0589Z"
                     stroke="#383747"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M29.5399 20.6079C28.5001 23.7804 25.7168 25.9835 22.4855 26.5828"
                     stroke="white"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </a>

            <ul className="flex items-center gap-6">
               {navMenu.map((item, index) => (
                  <li key={index}>
                     <a
                        href={item.link}
                        className="relative font-medium text-[22px] text-blackColor text-opacity-80 after:absolute after:w-0 after:h-1 after:rounded after:bg-orange after:bottom-[-5px] after:left-0 hover:after:duration-300 hover:after:ease-in-out hover:after:w-full hover:text-opacity-100">
                        {item.name}
                     </a>
                  </li>
               ))}
            </ul>

            <Button
               button={{ src: "#", icon: <FaSignOutAlt />, text: "Đăng nhập" }}
            />
         </div>
      </nav>
   );
};

export default Nav;
