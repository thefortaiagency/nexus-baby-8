export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Nexus Baby 8</h1>
        <div className="flex gap-6">
          <a href="/" className="text-white hover:text-purple-300">Home</a>
          <a href="/contact" className="text-white hover:text-purple-300">Contact</a>
          <a href="#chat" className="text-white hover:text-purple-300">Chat</a>
        </div>
      </div>
    </nav>
  )
}