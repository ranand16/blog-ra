import { cn } from "@/utils";
import Link from "next/link";
import { FC } from "react";

const Tag = ({ link = "#", name, ...props }) => {
    return (
        <Link
            href={link}
            className={cn(
                "text-sm sm:text-base inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-solid border-light border-2 hover:scale-105 transition-all ease duration-200 ",
                props.className
            )}
        >
            {name}
        </Link>
    );
};

export default Tag;
