"use client";

import Script from "next/script";
import { FC } from "react";

const ThemeScript = () => {
    return (
        <div className="">
            <Script id="" strategy="beforeInteractive">
                {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    } else {
                    document.documentElement.classList.remove('dark')
                    }`}
            </Script>
        </div>
    );
};

export default ThemeScript;
