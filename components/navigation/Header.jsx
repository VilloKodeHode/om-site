"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGO } from "./menu_list";
import ChakraDrawer from "./ChakraDrawer";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";


export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleImageClick = () => {
    activeLink && setActiveLink("");
    onClose();
  };

  return (
    <>
      <ChakraProvider>
        <header
          className={`relative flex flex-col h-28 w-full justify-center md:px-12 px-6 animate-SlideInFromTop shadow-md z-10 backdrop-blur-[1px] bg-white`}
        >
          <div className="z-50 flex items-center justify-between h-28">
            <div className="flex lg:min-w-[500px] min-w-[150px] gap-8">
              {LOGO.map((logo) => (
                <Link key={logo.text} href={logo.href}>
                  <Image
                    onClick={handleImageClick}
                    src={logo.imageSrc}
                    width={logo.imageWidth}
                    height={logo.imageHeight}
                    alt="Vallhalla Beards logo"
                    className="duration-200 hover:scale-105"
                  />
                </Link>
              ))}
            </div>
            <Navbar
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />

            <ChakraDrawer
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </div>
        </header>
      </ChakraProvider>
    </>
  );
}

