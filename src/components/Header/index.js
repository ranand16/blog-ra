import { GITHUB, LINKED_IN, cn } from "@/utils";
import { FC } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Github, GithubIco, LinkedIn, LinkedInIco, SunIco } from "../Icons";
import siteMetadata from "@/utils/siteMetaData";

const Header = () => {
    return (
        <header
            className={cn("w-full p-4 px-10 flex items-center justify-between")}
        >
            <Logo />
            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-30">
                <Link className="mr-2" href="/">
                    Home
                </Link>
                <Link className="mx-2" href="/about">
                    About
                </Link>
                <Link className="mr-2" href="/contact">
                    Contact
                </Link>
                <button>
                    <SunIco />
                </button>
            </nav>
            <div>
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
                            "hover:scale-125 transition-all ease duration-100"
                        }
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
