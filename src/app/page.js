import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPost";

export default function Home() {
    console.log("🚀 ~ file: page.js:3 ~ allBlogs:", allBlogs);
    return (
        <main className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
            <RecentPosts blogs={allBlogs} />
        </main>
    );
}
