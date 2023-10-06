import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { allBlogs } from "@pub/.contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import { FC } from "react";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{ slug: "all" }];
    allBlogs.map((b) => {
        if (b.isPublished) {
            b.tags.map((tag) => {
                let sluggified = slugger.slug(tag);
                if (!categories.includes(sluggified)) {
                    categories.push(sluggified);
                    paths.push({ slug: sluggified });
                }
            });
        }
    });
    return paths;
}

export async function generateMetadata({ params }) {
    return {
        title: `${params.slug.replaceAll("-", " ")} Blogs`,
        description: `Learn more about ${
            params.slug == "all" ? "Web development" : params.slug
        } through our collection of expert blogs and tutorials.`,
    };
}

const CategoryPage = ({ params }) => {
    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const sluggified = slug(tag);
            if (!allCategories.includes(sluggified)) {
                allCategories.push(sluggified);
            }
            if (params.slug === "all") return true;
            return sluggified === params.slug;
        });
    });
    return (
        <article className="mt-12 flex flex-col text-dark">
            <div className="px-32 flex flex-col">
                <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
                <span className="mt-2 inline-block">
                    Discover more categories and expand your knowledge!
                </span>
            </div>
            <Categories allCategories={allCategories} curSlug={params.slug} />
            <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
                {blogs.map((b) => (
                    <article
                        className="col-span-1 row-span-1 relative"
                        key={b._id}
                    >
                        <BlogLayoutThree blog={b} />
                    </article>
                ))}
            </div>
        </article>
    );
};

export default CategoryPage;
