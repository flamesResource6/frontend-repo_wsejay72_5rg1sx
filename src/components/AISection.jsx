import { motion } from 'framer-motion'

export default function AISection() {
  return (
    <section id="ai" className="relative bg-[#0A1020] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#2563EB33] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#00B4FF22] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">GrowCaptain AI</h2>
            <p className="text-slate-300 mt-3 max-w-lg">AI-powered insights that turn your data into direction. From pipeline forecasts to hiring velocity and cash flow health—clarity in one glance.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• KPI dashboards with predictive signals</li>
              <li>• Alerts on anomalies, churn risk, and burn</li>
              <li>• Natural language queries over your ops data</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1222] to-[#0E1A36] p-4 shadow-[0_0_40px_-16px_rgba(37,99,235,0.5)]">
              <div className="h-64 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl grid grid-cols-3 gap-3 p-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-xl bg-[#0B1222] border border-white/10" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
