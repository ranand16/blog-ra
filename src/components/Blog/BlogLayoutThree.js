"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogLayoutThree = ({ blog }) => {
    return (
        <div className="group flex flex-col items-center  text-dark dark:text-light">
            <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    alt={blog.title}
                    blurDataURL={blog.image.blurhashDataUrl}
                    height={blog.image.height}
                    width={blog.image.width}
                    className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                    size="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </Link>
            <div className="flex flex-col mt-4 w-full">
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                    {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                    <h2 className="font-semibold capitalize text-base sm:text-lg">
                        <span className={"titleunderlineanim"}>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span className="inline-block w-full capitalize text-dark/50 dark:text-light/50 font-semibold  text-sm sm:text-base">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutThree;
