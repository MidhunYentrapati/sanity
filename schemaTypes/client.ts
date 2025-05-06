// schemas/client.ts
export const client = {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
  ],
}
