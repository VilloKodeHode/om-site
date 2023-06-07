import { useContext } from "react";
import NavItem from "./NavItem";
import MENU_LIST from "./menu_list";

export default function Navbar({
  activeLink,
  setActiveLink,
  onClose,
  className,
}) {
  return (
    <div className={`flex items-center w-[800px] ${className}`}>
      <div className="flex-row justify-end hidden w-full gap-2 md:flex">
        {MENU_LIST.map((menu) => (
          <NavItem
            onClick={() => {
              setActiveLink(menu.text);
              onClose();
            }}
            textSize="text-p0"
            textColor="text-black"
            key={menu.text}
            text={menu.text}
            href={menu.href}
            color={menu.color}
            active={activeLink === menu.text}
            activeLink={activeLink}
            icon={menu.icon}
          />
        ))}
      </div>
    </div>
  );
}
