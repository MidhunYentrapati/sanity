"use client"

import { NextStudio } from "next-sanity/studio"
import config from "../../../sanity.config"

export default function StudioPage() {
  // For static export, we need to ensure the studio is properly configured
  return <NextStudio config={config} unstable_noAuthBoundary unstable_globalStyles />
}
