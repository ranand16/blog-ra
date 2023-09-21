import { cn } from "@/utils";
import { FC } from "react";
import Logo from "./Logo";

const Header = () => {
    return (
        <div
            className={cn("w-full p-4 px-10 flex items-center justify-between")}
        >
            <Logo />
        </div>
    );
};

export default Header;
