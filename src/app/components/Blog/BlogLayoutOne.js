import { FC } from "react";
import { Overlay } from "../Elements/Overlay";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";

const BlogLayoutOne = ({ blog }) => {
    console.log("🚀 BlogLayoutOne", blog);
    return (
        <div className="inline-block overflow-hidden rounded-xl">
            <Overlay />
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                alt={blog.titile}
                blurDataURL={blog.image.blurhashDataUrl}
                height={blog.image.height}
                width={blog.image.width}
                className="w-full h-full object-center object-cover rounded-3xl"
            />
            <div className="absolute bottom-0 p-10 z-20 w-full ">
                <Tag
                    name={blog.tags[0]}
                    link={`/categories/${blog.tags[0]}`}
                    className={"px-6 text-sm py-2 !border"}
                />
                <Link href={blog.url} className="mt-6 hover:">
                    <h2 className="font-bold capitalize text-2xl text-light mt-4 ">
                        <span className={"titleunderlineanim"}>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default BlogLayoutOne;
