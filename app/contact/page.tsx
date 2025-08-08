'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('Message sent! (Built by GPT-5)')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <main className="min-h-screen gradient-bg pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <div className="mb-6">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 h-32"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
          
          {status && (
            <p className="mt-4 text-white text-center">{status}</p>
          )}
        </form>
      </div>
    </main>
  )
}