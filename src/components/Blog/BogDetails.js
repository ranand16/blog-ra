"use client";

import { format, parseISO } from "date-fns";
import Link from "next/link";
import { FC } from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: slugText }) => {
    return (
        <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark  py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
            <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
            {/* <span>
                <ViewCounter slug={slugText} />
            </span> */}
            <div>{blog.readingTime.text}</div>
            <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
                #{blog.tags[0]}
            </Link>
        </div>
    );
};

export default BlogDetails;
