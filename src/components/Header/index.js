"use client";
import { cn } from "@/utils";
import { FC, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GithubIco, LinkedInIco, SunIco } from "../Icons";
import siteMetadata from "@/utils/siteMetaData";
import useThemeSwitch from "../Hooks/useThemeHook";

const Header = () => {
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click);
    };

    return (
        <header
            className={cn(
                "w-full p-4 px-5 sm:px-10 flex items-center justify-between"
            )}
        >
            <Logo />
            <button className="inline-block sm:hidden z-50" onClick={toggle}>
                <div className="w-6 pointer transition-all ease duration-300">
                    <div className="relative">
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(-45deg) translateY(0)"
                                    : "rotate(0deg) translateY(6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1,
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(45deg) translateY(0)"
                                    : "rotate(0deg) translateY(-6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                    </div>
                </div>
            </button>
            <nav
                className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize sm:hidden flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-30 transition-all ease duration-200"
                style={{
                    top: click ? "1rem" : "-5rem",
                }}
            >
                <Link className="mr-2" href="/">
                    Home
                </Link>
                <Link className="mx-2" href="/about">
                    About
                </Link>
                <Link className="mr-2" href="/contact">
                    Contact
                </Link>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                    <SunIco />
                </button>
            </nav>

            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-30">
                <Link className="mr-2" href="/">
                    Home
                </Link>
                <Link className="mx-2" href="/about">
                    About
                </Link>
                <Link className="mr-2" href="/contact">
                    Contact
                </Link>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                    <SunIco />
                </button>
            </nav>
            <div className="hidden sm:flex items-center">
                <a
                    href={siteMetadata.linkedin}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <LinkedInIco
                        className={
                            "hover:scale-125 transition-all ease duration-100"
                        }
                    />
                </a>
                <a
                    href={siteMetadata.github}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <GithubIco
                        className={
                            "hover:scale-125 transition-all ease duration-100 dark:fill-light"
                        }
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
