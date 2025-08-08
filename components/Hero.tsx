export default function Hero({ buildTime }: { buildTime: number }) {
  return (
    <section className="pt-24 pb-12 px-4 text-center text-white">
      <h1 className="text-6xl font-bold mb-4">
        GPT-5 Full Stack Automation
      </h1>
      <p className="text-2xl mb-8">Watch as AI builds everything autonomously</p>
      <div className="text-4xl font-mono">{buildTime}s</div>
      <p className="text-lg opacity-80">Time to deploy</p>
    </section>
  )
}