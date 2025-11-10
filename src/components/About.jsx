import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Clients', value: '120+' },
    { label: 'Years', value: '8+' },
    { label: 'Verticals', value: '15+' },
  ]

  return (
    <section id="about" className="relative bg-[#0A1020] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-[#2563EB11] to-[#0A1020]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <p className="text-slate-300 text-lg">
            Built in Kerala with one belief — growth isn’t luck, it’s a system.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-[#0B1222]/60 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="text-3xl font-semibold text-white drop-shadow-[0_0_20px_#2563EB]">{s.value}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
