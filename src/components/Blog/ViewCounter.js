"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC, useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrememtnView = async () => {
            try {
                let { data, error } = await supabase.rpc("increment", {
                    slug_text: slug,
                });

                if (error)
                    console.error(
                        "Error incrememnting indide try block.",
                        error
                    );
                else console.log(data);
            } catch (e) {
                console.error(
                    "An error has occured while incrementing the view count.",
                    e
                );
            }
        };
        if (!noCount) {
            incrememtnView();
        }
    }, [slug, noCount]);

    if (showCount) return <div className="">{views} views</div>;
    return null;
};

export default ViewCounter;
