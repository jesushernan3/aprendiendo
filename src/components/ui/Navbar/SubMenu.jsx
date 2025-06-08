import { useState } from "react";
import { NavLink } from "react-router";

const SubMenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink className={"hover:text-gray-500/80 transition"} to={item.path}>
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
      </NavLink>
    </li>
  );
};
export default SubMenu;
