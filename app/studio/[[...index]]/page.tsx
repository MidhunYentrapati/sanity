"use client"

import { NextStudio } from "next-sanity/studio"
import config from "../../../sanity.config"

export default function StudioPage() {
  return (
    <NextStudio
      config={config}
      // Add these props to help with the error
      unstable_noAuthBoundary
      unstable_globalStyles
    />
  )
}
