import { Overlay } from "../Elements/Overlay";
import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <div className="w-full inline-block">
            <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh] ">
                <Overlay />
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    alt={blog.titile}
                    blurDataURL={blog.image.blurhashDataUrl}
                    fill
                    className="w-full h-full object-center object-cover rounded-3xl"
                />
                <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-[11] text-light">
                    <Tag
                        name={blog.tags[0]}
                        link={`/categories/${slug(blog.tags[0])}`}
                    />
                    <Link href={blog.url} className="mt-6 hover:">
                        <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl ">
                            <span className={"titleunderlineanim"}>
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in ">
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HomeCoverSection;
