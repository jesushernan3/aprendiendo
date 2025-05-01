import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MenuItems } from "./menuItems";

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
function SubMenu({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.path}>
        {item.title}
        {item.submenu && isOpen && (
          <ul className="absolute bg-amber-300 p-1 m-1 w-[120px]">
            {item.submenu.map((subItem, subIndex) => (
              <li className="underline-offset-auto bg-amber-200" key={subIndex}>
                <SubMenu item={subItem} key={subIndex} />
              </li>
            ))}
          </ul>
        )}
      </a>
    </li>
  );
}

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center">
      {/* Sección del Logo */}
      <div>
        <a href="/">
          <h1>Aprendiendo</h1>
        </a>
      </div>
      {/* Sección del Menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-3 relative">
          {MenuItems.map((item, index) => (
            <SubMenu item={item} key={index} />
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
