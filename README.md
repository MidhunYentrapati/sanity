# Sanity Studio Connection

This project connects to Sanity Studio, allowing you to manage your content directly from this workspace.

## Getting Started

### Authentication

To use Sanity Studio, you need to be authenticated:

1. Open the application and click on "Open Sanity Studio" or "Login to Sanity Studio"
2. If you're not already logged in, you'll be prompted to log in with your Sanity account
3. After logging in, you should see your profile in the top-right corner of the studio

If you're experiencing authentication issues:

- Make sure you're logged in to the correct Sanity account
- Check that your project ID and dataset are correctly set in the environment variables
- Ensure you have the necessary permissions for the project

### Creating and Managing Content

Once authenticated, you can:

1. Create new documents by clicking on the "+" button next to a document type
2. Edit existing documents by clicking on them
3. Delete documents by opening them and clicking the "Delete" button

## Working with Schemas

### Understanding Schemas

Schemas define the structure of your content in Sanity. Each schema represents a document type with fields.

### Existing Schemas

This project includes the following schemas:

- **Post**: Blog posts with title, slug, author, image, categories, and body content
- **Author**: Information about content creators
- **Category**: Categories for organizing posts
- **Block Content**: Rich text editor configuration

### Creating a New Schema

To create a new schema:

1. Create a new file in the `schemas` directory (e.g., `product.ts`)
2. Define your schema using Sanity's schema definition syntax
3. Import and add your schema to the `schemaTypes` array in `schemas/index.ts`

Here's an example of a new schema:

\`\`\`typescript
// schemas/product.ts
import { defineField, defineType } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(selection) {
      const { price } = selection
      return { 
        ...selection, 
        subtitle: price ? \`$\${price}\` : "" 
      }
    },
  },
})
\`\`\`

Then add it to your schema index:

\`\`\`typescript
// schemas/index.ts
import blockContent from "./blockContent"
import category from "./category"
import post from "./post"
import author from "./author"
import product from "./product" // Import your new schema

export const schemaTypes = [
  post, 
  author, 
  category, 
  blockContent,
  product, // Add it to the array
]
\`\`\`

### Field Types

Sanity supports many field types:

- **String**: For text (title, name, etc.)
- **Number**: For numerical values
- **Boolean**: For true/false values
- **Date**: For dates
- **Datetime**: For dates with time
- **Text**: For longer text content
- **Array**: For lists of items
- **Object**: For nested structures
- **Reference**: For relationships between documents
- **Image**: For image uploads
- **File**: For file uploads
- **Slug**: For URL-friendly strings
- **Geopoint**: For geographical locations

### Custom Validation

You can add validation to your fields:

\`\`\`typescript
defineField({
  name: "title",
  title: "Title",
  type: "string",
  validation: (Rule) => 
    Rule.required()
        .min(5)
        .max(100)
        .warning("Shorter titles are usually better"),
})
\`\`\`

## Troubleshooting

If you encounter issues:

1. **Can't create or edit documents**: Make sure you're properly authenticated and have the correct permissions
2. **Studio doesn't load**: Check your environment variables and network connection
3. **Changes not saving**: Verify your internet connection and permissions

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Schema Types Reference](https://www.sanity.io/docs/schema-types)
- [Customizing the Studio](https://www.sanity.io/docs/studio-customization)
\`\`\`
