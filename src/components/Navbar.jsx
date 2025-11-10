import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('navbar')
      if (!nav) return
      if (window.scrollY > 10) nav.classList.add('backdrop-blur-md/0')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#ai', label: 'GrowCaptain AI' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header id="navbar" className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1222]/70 backdrop-blur-xl px-4 py-3 shadow-[0_0_40px_-12px_rgba(37,99,235,0.35)]">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#00B4FF] to-[#0EA5E9] shadow-[0_0_30px_#2563EB]" />
            <span className="font-semibold tracking-tight text-white">GrowCaptain</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] text-white px-4 py-2 shadow-[0_0_20px_#2563EB] hover:shadow-[0_0_34px_#2563EB] transition-shadow">
              <Sparkles size={16} /> Book a Demo
            </a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#0B1222]/70 backdrop-blur-xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-white px-4 py-2 shadow-[0_0_20px_#2563EB]">
                <Sparkles size={16} /> Book a Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
