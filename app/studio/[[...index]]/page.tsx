import StudioPageClient from "./StudioPageClient"

// This function tells Next.js which paths to pre-render for static export
export function generateStaticParams() {
  return [
    { index: [] }, // /studio
    { index: ["desk"] }, // /studio/desk
    { index: ["vision"] }, // /studio/vision
    { index: ["structure"] }, // /studio/structure
    { index: ["schema"] }, // /studio/schema
    { index: ["settings"] }, // /studio/settings
    { index: ["desk", "post"] }, // /studio/desk/post
    { index: ["desk", "author"] }, // /studio/desk/author
    { index: ["desk", "category"] }, // /studio/desk/category
  ]
}

export default function StudioPage() {
  return <StudioPageClient />
}
