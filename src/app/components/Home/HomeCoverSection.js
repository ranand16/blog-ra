import { Overlay } from "./../Elements/Overlay";
import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[4];
    console.log("🚀HomeCoverSection blog:", blog.image);
    return (
        <div className="w-full inline-block">
            <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh] ">
                <Overlay />
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    alt={blog.titile}
                    blurDataURL={blog.image.blurhashDataUrl}
                    fill
                    className="w-full h-full object-center object-cover rounded-3xl"
                />
                <div className="w-3/4 p-16 flex flex-col items-start justify-center z-[11] text-light">
                    <Tag
                        name={blog.tags[0]}
                        link={`/categories/${blog.tags[0]}`}
                    />
                    <Link href={blog.url} className="mt-6 hover:">
                        <h1 className="font-bold capitalize text-4xl ">
                            <span className={"titleunderlineanim"}>
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className="inline-block mt-4 text-xl font-in ">
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HomeCoverSection;
