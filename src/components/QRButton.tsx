import { useEffect, useMemo, useState } from 'react'
import { QrCode, X } from 'lucide-react'

type Props = {
  url?: string
}

export function QRButton({ url }: Props) {
  const [open, setOpen] = useState(false)
  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    if (!url) {
      try {
        setCurrentUrl(window.location.href)
      } catch {
        setCurrentUrl('')
      }
    }
  }, [url])

  const target = url ?? currentUrl
  const qrSrc = useMemo(() => {
    if (!target) return ''
    const encoded = encodeURIComponent(target)
    // Using a free placeholder QR API; no key required
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`
  }, [target])

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 transition-colors px-3 py-2 text-sm font-medium focus-ring"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <QrCode className="w-4 h-4" />
        Share
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="QR code to open this page"
          className="absolute right-0 mt-3 w-80 rounded-2xl glass p-4 border border-white/10 shadow-glow z-50"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-white/70 truncate" title={target}>Scan to open</div>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-white/10 focus-ring"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {qrSrc ? (
            <img
              src={qrSrc}
              alt="QR code for this page"
              className="w-full h-auto rounded-xl bg-white/5"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-sm text-white/60">QR unavailable</div>
          )}
          <div className="mt-3 text-[11px] text-white/50">Point your camera at the code to open this page.</div>
        </div>
      )}
    </div>
  )
}
