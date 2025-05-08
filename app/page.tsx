import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Sanity Studio Connection</h1>
      <p className="mb-8 text-xl">Your Sanity Studio is now connected and ready to use.</p>
      <div className="flex flex-col gap-4 items-center">
        <Link href="/studio" className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
          Open Sanity Studio
        </Link>
        <Link href="/studio/login" className="text-blue-600 hover:underline">
          Login to Sanity Studio
        </Link>
      </div>
    </main>
  )
}
