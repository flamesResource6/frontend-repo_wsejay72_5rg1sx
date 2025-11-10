import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const [splineOk, setSplineOk] = useState(true)

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0F172A] text-white">
      {/* 3D background layer */}
      <div className="absolute inset-0">
        {splineOk ? (
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setSplineOk(true)}
            onError={() => setSplineOk(false)}
          />
        ) : (
          // Graceful fallback if Spline is blocked or fails to load
          <div className="h-full w-full bg-[radial-gradient(1200px_800px_at_70%_20%,#2563EB22,transparent)]" />
        )}
      </div>

      {/* soft overlay tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563EB33] via-[#00B4FF22] to-transparent" />

      {/* content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2563EB66] bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#00FFFF] shadow-[0_0_12px_#00FFFF]" /> Premium Growth Consulting
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              We Navigate. You Scale.
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Structured growth for modern businesses. Systems, speed, and clarity—built in Kerala, delivered globally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[#2563EB] text-white shadow-[0_0_24px_#2563EB] hover:shadow-[0_0_40px_#2563EB] transition-shadow">
                Book a Demo
              </a>
              <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 transition-colors">
                Chat on WhatsApp
              </a>
            </div>

            {/* If 3D failed, hint to the user */}
            {!splineOk && (
              <p className="mt-6 text-xs text-slate-400">
                Note: 3D background is using Spline and may be blocked by network or extensions. Showing a static gradient instead.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
