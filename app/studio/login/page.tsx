"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to studio, which will show the login screen if not authenticated
    router.push("/studio")
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-4">Redirecting to Sanity Studio Login...</h1>
      <p>Please wait while we redirect you to the login page.</p>
    </div>
  )
}
