import { ClassValue, clsx } from "clsx";
import { compareDesc, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function sortBlogs(blogs) {
    return blogs
        .slice()
        .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publihsedAt))
        );
}
