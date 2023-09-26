import { sortBlogs } from "@/utils";
import Image from "next/image";
import { FC } from "react";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    console.log("🚀HomeCoverSection blog:", blog.image);
    return (
        <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh] w-full">
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                alt={blog.titile}
                blurDataURL={blog.image.blurhashDataUrl}
                fill
                className="w-full h-full object-center object-cover rounded-3xl"
            />
        </article>
    );
};

export default HomeCoverSection;
