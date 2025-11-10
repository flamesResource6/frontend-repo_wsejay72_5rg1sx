import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="contact" className="relative bg-[#0F172A] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
            <h3 className="text-2xl font-semibold">Let’s plan your growth</h3>
            <p className="text-slate-300 text-sm mt-1">Tell us where you are. We’ll plot the course.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-[#0B1222] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Name" />
              <input className="rounded-xl bg-[#0B1222] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Email" type="email" />
              <input className="sm:col-span-2 rounded-xl bg-[#0B1222] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Company" />
              <textarea className="sm:col-span-2 rounded-xl bg-[#0B1222] border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]" rows="4" placeholder="What are you trying to achieve?" />
              <button className="sm:col-span-2 rounded-xl bg-[#2563EB] px-6 py-3 shadow-[0_0_24px_#2563EB] hover:shadow-[0_0_40px_#2563EB] transition-shadow">Submit</button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-2 min-h-[520px]">
            {mounted && (
              <iframe title="Calendly" src="https://calendly.com/" className="w-full h-[500px] rounded-2xl" />
            )}
          </div>
        </div>
      </div>

      <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#2563EB] text-white shadow-[0_0_30px_#2563EB] hover:shadow-[0_0_44px_#2563EB] transition-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-white"><path d="M380.9 97.1C339-1.7 230.2-30.8 141.1 30.3 52 91.4 23 200.2 84.1 289.3L76 408l116.5-30.6c86.3 47.9 194.9 18.9 255.9-70.2 61.1-89.1 32-197.9-67.5-260.1zM224 392c-29.5 0-57.9-8-82.7-23.1l-5.9-3.6-69.1 18.1 7.5-67.5-3.9-6.3C49.4 279 40 251 40 222.1 40 140.7 106.6 74 188 74s148 66.7 148 148.1S305.4 370 224 370z"/></svg>
      </a>
    </section>
  )
}
