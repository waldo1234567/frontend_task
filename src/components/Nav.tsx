import { Headphones, Sparkles } from 'lucide-react'
import { QRButton } from './QRButton'

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl glass px-4 py-3">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-600 shadow-glow">
              <Headphones className="w-5 h-5" />
            </span>
            <span className="font-display font-semibold tracking-tight">Aurora</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white focus-ring px-2 py-1 rounded-md">Features</a>
            <a href="#showcase" className="hover:text-white focus-ring px-2 py-1 rounded-md">Design</a>
            <a href="#cta" className="hover:text-white focus-ring px-2 py-1 rounded-md">Buy</a>
          </nav>
          <div className="flex items-center gap-2">
            <QRButton />
            <a href="#cta" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 transition-colors px-4 py-2 text-sm font-medium shadow-glow focus-ring">
              <Sparkles className="w-4 h-4" />
              Preorder
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
