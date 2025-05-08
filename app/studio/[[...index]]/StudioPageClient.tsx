"use client"

import { NextStudio } from "next-sanity/studio"
import config from "../../../sanity.config"

export default function StudioPageClient() {
  return (
    <NextStudio
      config={config}
      // Remove these props as they might interfere with authentication
      // unstable_noAuthBoundary
      // unstable_globalStyles
    />
  )
}
