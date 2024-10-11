"use client";
// added environment vars
import { cn } from "@/utils";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { GithubIco, LinkedInIco, NPMIco } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const onSubmit = (data) => console.log(data);
    // console.log(errors);

    return (
        <footer
            className={cn(
                "mt-16 rounded-2xl m-2 sm:m-10 bg-dark dark:bg-accentDark flex flex-col items-center text-light dark:text-dark "
            )}
        >
            {/* <h3 className="mt-16 font-medium dark:font-bold text-center text-2xl sm:text-3xl lg:text-4xl px-4 capitalize">
                Interesting Stories | Updates | Guides
            </h3> */}
            {/* <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base dark:font-medium">
                Subscribe to learn about new technology and updates. Join over
                5000+ members community to stay up to date with latest news. ©
                2023 Rishabh Anand. All rights reserved.
            </p> */}
            {/* <form
                className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="tel"
                    className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-bottom mr-2 pb-1 pl-2 sm:pl-0 "
                    placeholder="Enter your email"
                    {...register("email", {})}
                />

                <input
                    type="submit"
                    className=" bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
                />
            </form> */}
            <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base dark:font-medium">
                Below are my social links.
            </p>
            <div className="flex items-center mt-8">
                <a
                    href={siteMetadata.linkedin}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <LinkedInIco
                        className={
                            "hover:scale-125 transition-all ease duration-100"
                        }
                    />
                </a>
                <a
                    href={siteMetadata.github}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <GithubIco className="hover:scale-125 transition-all ease duration-100 fill-light dark:fill-dark" />
                </a>
                <a
                    href={siteMetadata.npm}
                    className="inline-block w-12 h-10 mr-4"
                >
                    <NPMIco className="hover:scale-125 transition-all ease duration-100 fill-light dark:fill-dark" />
                </a>
            </div>
            <div className="w-full mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
                <span className="text-center ">
                    &copy;2024 Rishabh Anand. All rights reserved.
                </span>
                <Link
                    href="/sitemap.xml"
                    className="text-center underline my-4 md:my-0"
                >
                    sitemap.xml
                </Link>
                <div className="text-center ">
                    Made with ❤ by{" "}
                    <a
                        href="https://www.github.com/ranand16"
                        className="underline"
                    >
                        Rishabh Anand
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
