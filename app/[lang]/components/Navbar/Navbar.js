import Link from "next/link";

import DarkMode from "@/app/[lang]/components/DarkMode/DarkMode";
import Lang from "@/app/[lang]/components/Lang/Lang";
import { getDictionary } from "@/lib/dictionary";
import Register from "@/app/[lang]/components/Register/Register";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const SHEET_SIDES = ["left"];
const SVG = () => {
  return (
    <svg
      className="sm:w-16 sm:h-16 w-12 h-12"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="50"
        height="50"
        rx="22"
        fill="url(#paint0_linear_28_728)"
      ></rect>
      <text
        x="25"
        y="30"
        font-size="20"
        text-anchor="middle"
        fill="white"
        font-family="Arial"
      >
        B
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_28_728"
          x1="39"
          y1="45"
          x2="5"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6440FB"></stop>
          <stop offset="1" stop-color="#8466FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default async function Navbar({ lang }) {
  const { Navbar } = await getDictionary(lang);
  return (
    <nav className="fixed  inset-0 z-40 h-20 bg-background/70 backdrop-blur-lg">
      <div className="container flex h-full max-w-7xl items-center justify-between">
        <div className="flex  items-center gap-4">
          <Link className="flex items-center gap-2 " href={"/"}>
            <SVG />
            <div className="flex flex-col ">
              <h1 className="font-space-grotesk sm:text-3xl text-sky-400 font-bold">
                BEST-IT
              </h1>
              <p className="sm:text-[10px] text-center text-sky-400 Letter">
                Company
              </p>
            </div>
          </Link>
          <div className="hidden mt-2 items-center gap-3 border-l pl-2 md:flex">
            <Link
              className="font-medium transition-all hover:text-blue-500 hover:underline text-blue-500"
              href="/"
            >
              {Navbar.Home}
            </Link>
            <Link
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href={`/${lang}/courses`}
            >
              {Navbar.courses}
            </Link>
            <Link
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/blogs"
            >
              {Navbar.blog}
            </Link>
            <Link
              className="font-medium transition-all hover:text-blue-500 hover:underline"
              href="/contacts"
            >
              {Navbar.Contact}
            </Link>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <Lang />
          <div className="sm:block hidden">
            <DarkMode />
          </div>
          <Register />
          <div className="sm:hidden block ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link className="flex items-center gap-2 mt-16 " href={"/"}>
                      <SVG />
                      <div className="flex flex-col justify-start ">
                        <h1 className="font-space-grotesk text-lg  text-sky-400 font-bold">
                          BEST-IT
                        </h1>
                        <p className=" text-sky-400 text-sm">Company</p>
                      </div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col  gap-12 mt-16 h-[100%]">
                  <Link
                    className="font-bold transition-all hover:text-blue-500 hover:underline text-blue-500"
                    href="/"
                  >
                    {Navbar.Home}
                  </Link>
                  <Link
                    className="font-bold transition-all hover:text-blue-500 hover:underline"
                    href={`/${lang}/courses`}
                  >
                    
                    {Navbar.courses}
                  </Link>
                  <Link
                    className="font-bold transition-all hover:text-blue-500 hover:underline"
                    href="/blogs"
                  >
                    {Navbar.blog}
                  </Link>
                  <Link
                    className="font-bold transition-all hover:text-blue-500 hover:underline"
                    href="/contacts"
                  >
                    {Navbar.Contact}
                  </Link>
                  <div className="border-t-2 p-2">
                    <DarkMode  />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
