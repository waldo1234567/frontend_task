import { Parallax } from 'react-scroll-parallax'
import { ShieldCheck, Truck, Zap } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="parallax-section relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Parallax speed={-6} className="absolute inset-0 -z-10">
          <div className="mx-auto max-w-5xl h-full bg-white/[0.03] rounded-[2rem]" />
        </Parallax>

        <div className="rounded-[2rem] glass p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Preorder Aurora</h2>
          <p className="mt-3 text-white/70">Ships in November. Limited launch edition with matte midnight finish.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 hover:bg-brand-700 transition-colors px-7 py-3 font-semibold shadow-glow">
              <Zap className="w-4 h-4" />
              Reserve for $20
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors px-7 py-3">
              Learn more
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/60">
            <div className="inline-flex items-center gap-2"><Truck className="w-4 h-4"/> Free shipping</div>
            <div className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> 2‑year warranty</div>
          </div>
        </div>
      </div>
    </section>
  )
}
