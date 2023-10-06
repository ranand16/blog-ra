"use client";

import { useEffect, useState } from "react";

export default function useThemeSwitch() {
    const preffredDarkQuery = "(prefers-color-schema:dark)";
    const storageKey = "theme";
    const toggelTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        window.localStorage.setItem(storageKey, theme);
    };

    const getUserpreference = () => {
        const userPref = window.localStorage.getItem(storageKey);
        if (userPref) return userPref;
        return window.matchMedia(preffredDarkQuery).matches ? "dark" : "light";
    };

    const [mode, setMode] = useState("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preffredDarkQuery);
        const handleChange = () => {
            const newMode = getUserpreference();
            setMode(newMode);
            toggelTheme(newMode);
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        toggelTheme(mode);
    }, [mode]);

    return [mode, setMode];
}
