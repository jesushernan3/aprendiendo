import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { menuItems } from "./menuItems";

// const NavbarMenu = [
//   {
//     id: 1,
//     title: "Inicio",
//     path: "/",
//   },
//   {
//     id: 2,
//     title: "Servicios",
//     path: "#",
//   },
//   {
//     id: 3,
//     title: "Nosotros",
//     path: "#",
//   },
//   {
//     id: 4,
//     title: "Nuestro Equipo",
//     path: "#",
//   },
//   {
//     id: 5,
//     title: "Contacto",
//     path: "#",
//   },
// ];
// console.log({ NavbarMenu });
const Navbar = () => {
  return (
    <div className="container flex justify-between items-center">
      {/* Sección del Logo */}
      <div>
        <h1>Aprendiendo</h1>
      </div>
      {/* Sección del Menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-3">
          {menuItems.map((item, index) => (
            <div key={item.index}>
              {item.title}
              {item.submenu && (
                <div>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem.title}</li>
                  ))}
                </div>
              )}
              {/* {item.submenu && (
                <div>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem.label}</li>
                  ))}
                </div>
              )} */}
            </div>
            // <li>
            //   <a
            //     href="#"
            //     className="inline-block py-2 px-3 hover:text-secondary relative group"
            //   >
            //     <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
            //     {item.label}
            //   </a>
            // </li>
          ))}
          <button className="primary-btn">Iniciar sesion</button>
        </ul>
      </div>
      {/* Sección del Menu Mobile hamburguesa */}
      <div className="lg:hidden">
        <IoMdMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
