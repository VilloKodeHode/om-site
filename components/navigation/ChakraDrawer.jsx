// The navigation drawer. Made with Chakra UI.

import Link from "next/link";
import MENU_LIST, { LOGO } from "./menu_list";
import NavItem from "./NavItem";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";

//chakra components:
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from "@chakra-ui/react";
import { useContext } from "react";

export default function ChakraDrawer({
  activeLink,
  setActiveLink,
  handleImageClick,
  isOpen,
  onOpen,
  onClose,
}) {
  return (
    <>
      <div className="block md:hidden">
        <IconButton
          variant="ghost hover:bg-none hover-scale-110"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon boxSize="3rem" />}
          onClick={() => onOpen()}
          className="block ml-8 duration-200 hover:scale-110 text-JWC-black75"
        />
        <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader className="relative flex justify-center">
              {LOGO.map((logo) => (
                <Link key={logo.text} href={logo.href}>
                  <Image
                    onClick={() => {
                      activeLink && setActiveLink("");
                      onClose();
                    }}
                    src={logo.imageSrc}
                    className="p-4 my-[1.5px] duration-200 hover:scale-105"
                    width={logo.imageWidth}
                    height={logo.imageHeight}
                    alt="JV web consult"
                  />
                </Link>
              ))}
            </DrawerHeader>
            <DrawerBody>
              <ul
                className={`text-JWC-primary
           mt-0 p-2`}
              >
                <div className="flex flex-col items-center justify-center w-full mt-8">
                  {MENU_LIST.map((menu) => (
                    <NavItem
                      onClick={() => {
                        setActiveLink(menu.text);
                        onClose();
                      }}
                      textSize="text-h4"
                      textColor="text-JWC-black"
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
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
