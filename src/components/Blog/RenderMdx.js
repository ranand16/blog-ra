"use client";

import { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
const mdxComponents = {
    Image,
};

const RenderMdx = ({ blog, showTOC }) => {
    const MDXContent = useMDXComponent(blog.body.code);

    // return <div className="">Blog details</div>;
    return (
        <div
            className={`${
                showTOC ? "col-span-10" : "col-span-12"
            } font-inter prose prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent`}
        >
            <MDXContent components={mdxComponents} />
        </div>
    );
};

export default RenderMdx;
