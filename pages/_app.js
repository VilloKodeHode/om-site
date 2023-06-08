import Header from "@/components/navigation/Header";
import getRecipes from "@/sanity-utils";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Figtree } from "next/font/google";
import { useState } from "react";
const figtree = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <div className={` ${figtree.className} font-Figtree`}>
        <ChakraProvider>
          <Header activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className="z-50 flex flex-col items-center justify-start min-h-screen gap-12 px-6 py-20 overflow-x-hidden md:px-12">
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </div>
    </>
  );
}

