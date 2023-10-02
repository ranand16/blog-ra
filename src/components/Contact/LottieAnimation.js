"use client";

import { Controls, DotLottiePlayer } from "@dotlottie/react-player";
import { FC } from "react";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
    return (
        <DotLottiePlayer
            src="/animation_llqd7ey4.lottie"
            autoplay
            loop
        ></DotLottiePlayer>
    );
};

export default LottieAnimation;
