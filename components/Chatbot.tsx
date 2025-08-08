'use client'

import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I was built by GPT-5. How can I help?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return
    
    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'You asked: "' + input + '". This chatbot was created autonomously by GPT-5!'
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">AI Assistant (GPT-5 Built)</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={'mb-3 ' + (msg.role === 'user' ? 'text-right' : 'text-left')}>
                <span className={'inline-block px-3 py-2 rounded-lg ' + (
                  msg.role === 'user' ? 'bg-purple-100' : 'bg-gray-100'
                )}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}