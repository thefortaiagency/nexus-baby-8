export default function Features() {
  const features = [
    '✅ GitHub Repository Created',
    '✅ Vercel Deployment Live',
    '✅ Custom DNS Connected',
    '✅ AI Images Generated',
    '✅ Contact Form Working',
    '✅ AI Chatbot Integrated',
  ]
  
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Automated Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="text-white text-lg">{feature}</div>
          ))}
        </div>
      </div>
    </section>
  )
}