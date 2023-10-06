import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const BlogLayoutTwo = ({ blog }) => {
    return (
        <div className="group grid grid-cols-12 gap-4 items-center text-dark">
            <Link
                href={blog.url}
                className="col-span-4 h-full rounded-xl overflow-hidden"
            >
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    alt={blog.titile}
                    blurDataURL={blog.image.blurhashDataUrl}
                    height={blog.image.height}
                    width={blog.image.width}
                    className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                />
            </Link>
            <div className="col-span-8 w-full">
                <span className="uppercase text-accent font-semibold text-sm ">
                    {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                    <h2 className="font-semibold capitalize text-lg">
                        <span className={"titleunderlineanim"}>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default BlogLayoutTwo;
