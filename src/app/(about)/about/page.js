import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";
import { FC } from "react";

export const metadata = {
    title: "About Me",
    description: `Here are some details about myself`,
};
export default function About() {
    return (
        <>
            <AboutCoverSection />
            <Skills />
            <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark ">
                Have a project in mind? Reach out to me 📞 from{" "}
                <Link
                    className={"!underline !underline-offset-2"}
                    href="/contact"
                >
                    here
                </Link>{" "}
                and let's make it happen.
            </h2>
        </>
    );
}
