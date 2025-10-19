import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { Volume2, Zap, Waves } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="parallax-section relative isolate pt-32 md:pt-40">
      {/* Background aurora layers */}
      <Parallax speed={-20} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle at 30% 40%, #5d7dff, transparent 60%)'
        }} />
      </Parallax>
      <Parallax speed={-10} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-24 -right-24 h-[45rem] w-[45rem] rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle at 70% 60%, #10b981, transparent 60%)'
        }} />
      </Parallax>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              Sound reinvented.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-white to-accent">Meet Aurora.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-5 text-white/70 text-lg md:text-xl max-w-xl"
            >
              Next‑gen adaptive noise cancelation. Studio‑grade drivers. Featherweight comfort.
              Designed for deep focus and pure joy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl bg-white text-ink px-6 py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow focus-ring">
                <Zap className="w-4 h-4" />
                Preorder now
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors focus-ring">
                <Waves className="w-4 h-4" />
                See the design
              </a>
            </motion.div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2"><Volume2 className="w-4 h-4 text-white/50"/> Spatial audio</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"/> 40h battery</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-500"/> Bluetooth 5.4</div>
            </div>
          </div>

          {/* Product visual with parallax layers */}
          <div className="relative h-[28rem] md:h-[34rem]">
            <Parallax speed={12} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] aspect-[1/1] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 shadow-soft border border-white/10" />
            </Parallax>
            <Parallax speed={6} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[75%] aspect-[1/1] rounded-[2.25rem] glass" />
            </Parallax>
            <Parallax speed={-4} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[65%] aspect-[1/1] rounded-[2rem] bg-gradient-to-b from-brand-500/60 to-brand-700/40 blur-[1px]" />
            </Parallax>
            <Parallax speed={-10} className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[60%] aspect-[1/1.1] rounded-[2rem] bg-gradient-to-br from-[#0f142b] to-[#121833] border border-white/10 shadow-glow overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(50% 60% at 50% 20%, rgba(125,155,255,.25) 0%, transparent 60%)' }} />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  {/* Placeholder vector representing the product silhouette */}
                  <svg width="72%" viewBox="0 0 400 400" className="drop-shadow-[0_20px_50px_rgba(16,185,129,0.35)]">
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#7d9bff" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#g)" d="M120 160c0-44 36-80 80-80s80 36 80 80v60a20 20 0 0 1-40 0v-60a40 40 0 1 0-80 0v60a20 20 0 0 1-40 0v-60Z"/>
                    <rect x="110" y="220" width="180" height="22" rx="11" fill="#0b1020" opacity=".85"/>
                    <circle cx="140" cy="250" r="30" fill="#0b1020" opacity=".85"/>
                    <circle cx="260" cy="250" r="30" fill="#0b1020" opacity=".85"/>
                  </svg>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
