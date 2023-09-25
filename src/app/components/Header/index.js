import { GITHUB, LINKED_IN, cn } from "@/utils";
import { FC } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Github, LinkedIn } from "../Icons";

const Header = () => {
    return (
        <header
            className={cn("w-full p-4 px-10 flex items-center justify-between")}
        >
            <Logo />
            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
                <Link className="mr-2" href="/">
                    Home
                </Link>
                <Link className="mx-2" href="/about">
                    About
                </Link>
                <Link className="mr-2" href="/contact">
                    Contact
                </Link>
                <button>H</button>
            </nav>
            <div>
                <a href={LINKED_IN}>
                    <LinkedIn />
                </a>
                <a href={GITHUB}>
                    <Github />
                </a>
            </div>
        </header>
    );
};

export default Header;
