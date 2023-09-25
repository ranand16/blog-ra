import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const LINKED_IN = "https://www.linkedin.com/in/rishabh-anand-8b3b8197/";
export const GITHUB = "https://github.com/ranand16";
