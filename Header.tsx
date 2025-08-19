import { useState } from "react"

export default function Header() {
  const [dark, setDark] = useState(false)

  return (
    <header className="flex items-center justify-between p-4 shadow bg-gray-100">
      <h1 className="text-xl font-bold">📜 My Timeline</h1>
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 border rounded"
      >
        {dark ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  )
}
