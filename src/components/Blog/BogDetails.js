import { format, parseISO } from "date-fns";
import Link from "next/link";
import { FC } from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: slugText }) => {
    return (
        <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
            <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
            <span>
                <ViewCounter slug={slugText} />
            </span>
            <div>{blog.readingTime.text}</div>
            <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
                #{blog.tags[0]}
            </Link>
        </div>
    );
};

export default BlogDetails;
