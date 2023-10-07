import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
// import ProfileImage from "@pub/public/profile-img.png";
import ProfileImage from "@pub/public/fa.png";

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="flex items-center text-dark dark:text-light"
        >
            <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light md:mr-4 mr-2">
                <Image
                    src={ProfileImage}
                    alt={"Rishabh Anand"}
                    className="w-full h-auto rounded-full "
                />
            </div>
            <span className="font-bold text-lg md:text-xl dark:font-semibold">
                Rishabh Anand
            </span>
        </Link>
    );
};

export default Logo;
