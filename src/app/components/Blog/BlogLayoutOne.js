import { FC } from "react";
import { Overlay } from "../Elements/Overlay";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { format } from "date-fns";

const BlogLayoutOne = ({ blog }) => {
    console.log("🚀 BlogLayoutOne", blog);
    return (
        <div className="group inline-block overflow-hidden rounded-xl">
            <Overlay />
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                alt={blog.titile}
                blurDataURL={blog.image.blurhashDataUrl}
                height={blog.image.height}
                width={blog.image.width}
                className="w-full h-full object-center object-cover rounded-3xl group-hover:scale-105 transition-all ease duration-300"
            />
            <div className="absolute bottom-0 p-10 z-20 w-full ">
                <Tag
                    name={blog.tags[0]}
                    link={`/categories/${blog.tags[0]}`}
                    className={"px-6 text-sm py-2 !border"}
                />
                <Link href={blog.url} className="mt-6">
                    <h2 className="font-bold capitalize text-2xl text-light mt-4 ">
                        <span className={"titleunderlineanim"}>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span className="capitalize text-dark/50 font-semibold text-base">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutOne;
