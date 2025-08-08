'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  const [buildTime, setBuildTime] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setBuildTime(prev => prev < 60 ? prev + 1 : 60)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen gradient-bg">
      <Hero buildTime={buildTime} />
      <Features />
      <div className="text-center py-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Built by GPT-5 in {buildTime} seconds</h2>
        <p className="text-xl">GitHub → Vercel → DNS → Live Website</p>
        <p className="text-lg mt-2 opacity-80">Complete automation with AI</p>
      </div>
      <Chatbot />
    </main>
  )
}