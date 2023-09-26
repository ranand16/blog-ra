import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const BlogDoc = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "**/**/*.mdx",
    fields: {
        title: {
            type: "string",
        },
        description: {
            type: "string",
            required: true,
        },
        image: {
            type: "image",
        },
        publishedAt: {
            type: "date",
            required: true,
        },
        updatedAt: {
            type: "date",
            required: true,
        },

        author: {
            type: "string",
            required: true,
        },
        isPublished: {
            type: "boolean",
            default: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
    },
}));
export default makeSource({
    contentDirPath: "content",
    documentTypes: [BlogDoc],
});
