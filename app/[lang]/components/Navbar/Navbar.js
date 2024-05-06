import Link from "next/link";

import DarkMode from "@/app/[lang]/components/DarkMode/DarkMode";
import Lang from "@/app/[lang]/components/Lang/Lang";
import { getDictionary } from "@/lib/dictionary";
import Register from "@/app/[lang]/components/Register/Register";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default async function Navbar({ lang }) {
  const { Navbar } = await getDictionary(lang);
  return (
    <nav className="fixed  inset-0 z-40 h-20 bg-background/70 backdrop-blur-lg">
      <div className="container flex h-full max-w-7xl items-center justify-between">
        <div className="flex  items-center gap-4">
          <Link className="flex items-center gap-2" href={"/"}>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-4xl">BEST-IT</p>
              <p className="text-sm Letter">company</p>
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
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link className="flex items-center gap-2 mt-16 " href={"/"}>
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
                    <DarkMode />
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
