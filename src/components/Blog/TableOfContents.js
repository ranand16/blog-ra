"use client";

export function TableOfContents({ blog, showTOC }) {
    return (
        <div className={`${showTOC ? "col-span-2" : "hidden"}`}>
            <details open>
                <summary>Table Of Contents</summary>
                <ul>
                    {blog.toc.map((heading) => {
                        return (
                            <li key={heading.slug} className="py-1">
                                <a
                                    href={`#${heading.slug}`}
                                    data-level={heading.level}
                                    className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-6 flex items-center justify-start"
                                >
                                    {heading.level === "three" ? (
                                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                                            &nbsp;{" "}
                                        </span>
                                    ) : null}
                                    <span className="hover:underline">
                                        {heading.text}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </details>
        </div>
    );
}