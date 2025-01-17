// import React from 'react'
// import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

// const NavLinks =[
//     {
//         id:1,
//         name:"HOME",
//         link:"/#",
//     },
//     {
//         id:2,
//         name:"CARS",
//         link:"/#cars",
//     },
//     {
//         id:3,
//         name:"ABOUT",
//         link:"/#about",
//     },
//     {
//         id:4,
//         name:"BOOKING",
//         link:"/#booking",
//     },


// ]

// const Navbar = ({theme,setTheme}) => {
    
    
//   return (
//     <div>
//         <nav className='relative z-10 shadow-md w-full bg-white dark:bg-dark dark:text-white
//                         duration-300'>
//             <div className='container py-2 md:py-0'>
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
//                     </div>
//                     <div className='hidden md:block'>
//                     <ul className='flex items-center gap-8'>
//                         {NavLinks.map((data)=>(
//                             <li key={data.id} className='py-4'>
//                                 <a href={data.link} className=' py-2 hover:border-b-2 
//                                 hover:text-primary hover:border-primary transition-colors duration-500
//                                 text-lg font-medium'>
//                                 {data.name}</a>
//                             </li>

//                         ))}
                        
//                     </ul>
//                     </div>
//                     <div>
//                         {
//                             theme === "dark"?(
//                                 <BiSolidSun 
//                                 onClick={()=> setTheme("light")}
//                                 className='text-2xl'/>
//                             ):(
//                                 <BiSolidMoon 
//                                 onClick={()=> setTheme("dark")}
//                                 className='text-2xl'/>
//                             )
//                         }
                        
//                     </div>

//                 </div>
//             </div>
            
//         </nav>

//     </div>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#home",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "CARS",
    link: "/#cars",
  },
 
  {
    id: 4,
    name: "BOOKING",
    link: "/#contact",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">Car Rental</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;