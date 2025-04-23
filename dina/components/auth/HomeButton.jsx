'use client'
import { useRouter } from 'next/navigation'

export default function HomeButton() {
  const router = useRouter()
  
  return (
    <button 
      onClick={() => router.push('/')} 
      className="home-button"
      aria-label="Return to homepage"
    >
      ← Back to Home
      <style jsx>{`
        .home-button {
          background: none;
          border: none;
          cursor: pointer;
          /* ... rest of the styles ... */
        }
      `}</style>
    </button>
  )
}