import { TableOfContents } from "./../../../components/Blog/TableOfContents";
import BlogDetails from "@/components/Blog/BogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import siteMetadata from "@/utils/siteMetaData";
import { allBlogs } from "@pub/.contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
// import { useState } from "react";

export async function generateStaticParams() {
    return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath === params.slug
    );
    if (!blog) return;
    const pubAt = new Date(blog.publishedAt).toISOString();
    const modAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
    let imgList = [siteMetadata.socialBanner];
    if (blog.image)
        imgList =
            typeof blog.image.filePath === "string"
                ? [
                      siteMetadata.siteUrl +
                          blog.image.filePath.replace("../public", ""),
                  ]
                : blog.image;
    const ogImages = imgList.map((img) => {
        return {
            url: img.includes("http") ? img : siteMetadata.siteUrl + img,
        };
    });
    const authors = blog.author ? [blog.author] : siteMetadata.author;
    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.title,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            pusblishedTime: pubAt,
            modifiedTime: modAt,
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: ogImages,
        },
    };
}

export default function BlogPage({ params }) {
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath == params.slug
    );
    // const [showTOC, setShowTOC] = useState(true);
    return (
        <article>
            <div className="mb-8 text-center relative h-[70vh] bg-dark w-full">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Tag
                        name={blog.tags[0]}
                        link={`/categories/${slug(blog.tags[0])}`}
                        className="px-6 text-sm py-2"
                    />
                    <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal w-5/6 relative">
                        {blog.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 " />
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    alt={blog.titile}
                    blurDataURL={blog.image.blurhashDataUrl}
                    height={blog.image.height}
                    width={blog.image.width}
                    className="aspect-square w-full h-full object-cover object-center"
                />
            </div>
            <BlogDetails blog={blog} slug={params.slug} />
            <div className="grid grid-cols-12 gap-16 mt-8 px-10 ">
                <TableOfContents blog={blog} showTOC={true} />
                <RenderMdx blog={blog} showTOC={true} />
            </div>
        </article>
    );
}
