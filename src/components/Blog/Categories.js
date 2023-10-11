"use client";

import { FC } from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ allCategories, curSlug }) => {
    return (
        <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
            {allCategories.map((cat) => (
                <Category
                    key={cat}
                    link={`/categories/${cat}`}
                    name={cat}
                    active={curSlug === slug(cat)}
                />
            ))}
        </div>
    );
};

export default Categories;
