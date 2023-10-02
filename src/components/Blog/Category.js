import { cn } from "@/utils";
import Link from "next/link";
import { FC } from "react";

const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link
            href={link}
            className={cn(
                "inline-block py-2 px-10 rounded-full border-solid border-dark border-2 hover:scale-105 transition-all ease duration-200 m-2",
                props.className,
                active ? "bg-dark text-light" : "bg-light text-dark"
            )}
        >
            #{name}
        </Link>
    );
};

export default Category;
