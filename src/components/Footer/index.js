"use client";

import { GITHUB, LINKED_IN, cn } from "@/utils";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { GithubIco, LinkedInIco } from "../Icons";
import Link from "next/link";

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <footer
            className={cn(
                "mt-16 rounded-2xl m-10 bg-dark dark:bg-accentDark flex flex-col items-center text-light dark:text-dark "
            )}
        >
            <h3 className="mt-16 font-medium dark:font-bold text-center text-2xl sm:text-3xl lg:text-4xl px-4 capitalize">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
                Subscribe to learn about new technology and updates. Join over
                5000+ members community to stay up to date with latest news. ©
                2023 Rishabh Anand. All rights reserved.
            </p>
            <form
                className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="tel"
                    className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-bottom mr-2 pb-1  pl-0"
                    placeholder="Enter your email"
                    {...register("email", {})}
                />

                <input
                    type="submit"
                    className=" bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
                />
            </form>
            <div className="flex items-center mt-8">
                <a href={LINKED_IN} className="inline-block w-6 h-6 mr-4">
                    <LinkedInIco
                        className={
                            "hover:scale-125 transition-all ease duration-100"
                        }
                    />
                </a>
                <a href={GITHUB} className="inline-block w-6 h-6 mr-4">
                    <GithubIco
                        className={
                            "hover:scale-125 transition-all ease duration-100 fill-light"
                        }
                    />
                </a>
            </div>
            <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
                <span className="text-center ">
                    &copy;2023 Rishabh Anand. All rights reserved.
                </span>
                <Link href="/sitemap.xml" className="text-center underline">
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
