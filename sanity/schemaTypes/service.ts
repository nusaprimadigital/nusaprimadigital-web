import { defineField, defineType } from 'sanity'

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
        name: "category",
        title: "Category",
        type: "string",
        options: {
            list: [
                {title: "WordPress", value: "wordpress"},
                {title: "Blogger", value: "blogger"},
                {title: "Custom", value: "custom"},
                {title: "Other", value: "other"},
            ],
        }
    }),
    defineField({
        name: "price",
        title: "Starting Price",
        type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "icon",
      title: "Icon Name (Lucide)",
      type: "string",
      description: "Name of the Lucide icon to use (e.g. 'Globe', 'Code', 'Smartphone')",
    }),
  ],
});
