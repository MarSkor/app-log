import { defineField, defineType } from "sanity";

export const appSchema = defineType({
  name: "app",
  title: "App",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "App Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "icon",
      title: "App Icon",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Android", value: "Android" },
          { title: "iOS", value: "iOS" },
          { title: "Productivity", value: "Productivity" },
          { title: "Utilities", value: "Utilities" },
          { title: "Health", value: "Health" },
          { title: "Finance", value: "Finance" },
          { title: "Games", value: "Games" },
          { title: "Education", value: "Education" },
        ],
        layout: "tags",
      },
    }),
    defineField({
      name: "playstoreUrl",
      title: "Google Play URL",
      type: "url",
      description: "Link to the app on Google Play Store",
    }),
    defineField({
      name: "appstoreUrl",
      title: "App Store URL",
      type: "url",
      description: "Link to the app on Apple App Store",
    }),
    defineField({
      name: "landingPageUrl",
      title: "Landing Page URL",
      type: "url",
      description: "Optional: link to the app's own website or landing page",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (optional)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "icon",
    },
  },
});
