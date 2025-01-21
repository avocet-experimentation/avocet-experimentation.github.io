'use client';

import { buttonVariants } from "@/components/ui/button";
import { case_study_routes } from "@/lib/routes-config";
import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode"

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? process.env.BASE_PATH : '';

export default function Home() {
  const isDarkMode = useDarkMode();
  const logoSrc = basePath + `/avocet-logo-with-title-${isDarkMode ? "dark" : "light"}-mode.svg`;

  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <img src={logoSrc} className="landing-logo"/>
      {/* <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        avocet
      </h1> */}
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Experiment on-the-fly
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        Avocet is an open-source feature flagging and software experimentation platform capable of integrating with any telemetry infrastructure.
      </p>
      <div>
        <Link
          href={`/docs${case_study_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Get Stared
        </Link>
      </div>
    </div>
  );
}
