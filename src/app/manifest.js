import { MetadataRoute } from "next";

export default function manifest() {
    return {
        name: "Rishabh Anand",
        short_name: "Rishabh Anand's blog",
        description:
            "This is Rishabh Anand's blog related to tech and other fun stuff. Do checkout my social links on the website.",
        start_url: "/",
        display: "standalone",
        // background_color: "#fff",
        // theme_color: "#fff",
        icons: [
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x52.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
