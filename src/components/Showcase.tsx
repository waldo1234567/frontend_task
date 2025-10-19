import { Parallax } from 'react-scroll-parallax'

export function Showcase() {
  return (
    <section id="showcase" className="parallax-section relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">A seamless silhouette.</h2>
            <p className="text-white/70">Minimal seams. Hidden pivots. Balanced geometry. Aurora disappears when you wear it, leaving only the music.</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-xl glass p-4"><span className="text-white font-semibold">240g</span><br/>ultra‑light</div>
              <div className="rounded-xl glass p-4"><span className="text-white font-semibold">Protein</span><br/>leather cups</div>
              <div className="rounded-xl glass p-4"><span className="text-white font-semibold">Mesh</span><br/>vented band</div>
              <div className="rounded-xl glass p-4"><span className="text-white font-semibold">Tilt</span><br/>ergonomic fit</div>
            </div>
          </div>

          <div className="relative h-[28rem] md:h-[34rem]">
            <Parallax speed={8} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-white/10 to-white/[0.06] border border-white/10" />
            </Parallax>
            <Parallax speed={-6} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] aspect-[4/5] rounded-[1.8rem] glass" />
            </Parallax>
            <Parallax speed={-14} className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[60%] aspect-[4/5] rounded-[1.6rem] overflow-hidden border border-white/10 shadow-glow" style={{ background: 'linear-gradient(180deg, rgba(125,155,255,.35), rgba(16,185,129,.15))' }}>
                <div className="absolute inset-0 mix-blend-screen opacity-80" style={{ background: 'radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,.7), transparent 60%)' }} />
                <img
                  src="https://picsum.photos/id/1060/1200/1500"
                  alt="Abstract photo from Picsum"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
