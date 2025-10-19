import { Parallax } from 'react-scroll-parallax'
import { Battery, Waves, Bluetooth, Shield, Gauge, Cpu } from 'lucide-react'

export function Features() {
  const items = [
    { icon: Waves, title: 'Adaptive ANC', desc: 'Smartly counters noise in any environment with triple-mic arrays.' },
    { icon: Battery, title: '40h Battery', desc: 'Fast-charge to 60% in 15 minutes. USB‑C everywhere.' },
    { icon: Bluetooth, title: 'Seamless Pairing', desc: 'Instant multi‑point across your devices with BT 5.4.' },
    { icon: Shield, title: 'Comfort Fit', desc: 'Featherweight build, memory foam, and breathable mesh.' },
    { icon: Gauge, title: 'Studio Drivers', desc: '40mm neodymium drivers tuned for clarity and warmth.' },
    { icon: Cpu, title: 'Aurora Engine', desc: 'On‑device DSP adapts sound to your hearing in real‑time.' },
  ]

  return (
    <section id="features" className="parallax-section relative py-24 md:py-32">
      <Parallax speed={-8} className="absolute inset-0 -z-10 opacity-40">
        <div className="mx-auto max-w-7xl h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </Parallax>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Engineered for focus.</h2>
          <p className="mt-4 text-white/70">Every detail refined for comfort, performance, and effortless everyday use.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Parallax key={title} speed={Math.random() * 6 + 2} className="h-full">
              <div className="group h-full rounded-2xl glass p-6 hover:shadow-glow transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-600/80 shadow-glow">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-white/70 text-sm">{desc}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}
