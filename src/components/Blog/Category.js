"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { FC } from "react";

const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link
            href={link}
            className={cn(
                "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-solid border-dark dark:border-light border-2 hover:scale-105 transition-all ease duration-200 m-2",
                props.className,
                active
                    ? "bg-dark text-light dark:bg-light dark:text-dark"
                    : "bg-light text-dark dark:bg-dark dark:text-light"
            )}
        >
            #{name}
        </Link>
    );
};

export default Category;
