'use client';

import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { case_study_routes, documentation_routes } from "@/lib/routes-config";
import useDarkMode from "../hooks/useDarkMode"
import { BASE_PATH } from "@/lib/constants";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? BASE_PATH : '';

export const NAVLINKS = [
  {
    title: "Case Study",
    href: `/content${case_study_routes[0].href}`,
    newTab: false,
  },
  {
    title: "GitHub",
    href: "https://github.com/avocet-experimentation",
    newTab: true,
  },
  {
    title: "Documentation",
    href: ``,
    newTab: false,
  },
];

export function Navbar() {  
  const showLogo = usePathname() !== "/";
  return (
    <nav className="w-full h-16 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5 nav-custom">
      <div className="sm:container h-full max-sm:px-3 flex items-center justify-between nav-custom">
        <SheetLeftbar />
        <div className="flex items-center gap-9">
          {showLogo && <Logo />}
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
            {NAVLINKS.map((item) => {
              return (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-primary font-semibold"
                  absolute
                  className="flex items-center gap-1"
                  href={item.href}
                  target={item.newTab ? "_blank" : ""}
                  rel={item.newTab ? "noopener" : ""}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </div>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}

function Logo() {
  const isDarkMode = useDarkMode();
  const logoSrc = basePath + `/avocet-logo-${isDarkMode ? "dark" : "light"}-mode.svg`;

  return (
    <Link href="/" className="flex items-center gap-3">
      {/* <HexagonIcon className="w-6 h-6 text-muted-foreground fill-current" />
      <h2 className="text-md font-bold font-code">Avocet</h2> */}
      <img alt="Avocet Logo" className="nav-logo" src={logoSrc} />
    </Link>
  );
}
