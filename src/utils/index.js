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

export const LINKED_IN = "https://www.linkedin.com/in/rishabh-anand-8b3b8197/";
export const GITHUB = "https://github.com/ranand16";
