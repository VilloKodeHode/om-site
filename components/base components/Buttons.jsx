import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export default function NormalButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center w-full px-10 py-4 font-semibold text-black uppercase duration-100 ease-in-out rounded-md shadow-md active:scale-95 text-p font-Roboto shadow-KV-tertiary bg-gradient-to-r hover:scale-105 from-KV-primary via-KV-tertiary to-KV-secondary"
    >
      <>{children}</>
    </button>
  );
}

export function StaffButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center w-full px-10 py-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-md max-h-20 text-KV-black active:scale-95 text-p font-Roboto shadow-KV-tertiary bg-gradient-to-r hover:scale-105 from-KV-primary to-KV-secondary"
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center px-10 py-4 m-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-sm active:scale-95 text-p text-KV-white font-Roboto shadow-KV-black bg-gradient-to-r from-KV-black hover:scale-105 to-KV-black75"
    >
      <>{children}</>
    </button>
  );
}

export function BigButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-20 px-16 py-4 m-4 w-80 text-KV-white font-Roboto shadow-KV-black btn bg-gradient-to-r from-KV-black75 to-KV-black rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}

export function SmallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-1 rounded-md font-Roboto shadow-KV-black text-[12px] bg-gradient-to-r from-KV-black75 to-KV-black"
    >
      <>{children}</>
    </button>
  );
}

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.pageYOffset > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`text-KV-white15 z-50 p-1 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200 text-KV-primary hover:text-KV-secondary hover:scale-125  ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FiArrowUpCircle className="w-12 h-12" />
    </button>
  );
}
