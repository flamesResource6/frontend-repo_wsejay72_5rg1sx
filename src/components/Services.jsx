import { motion } from 'framer-motion'
import { LineChart, Rocket, Cog, Users, Palette, Wallet } from 'lucide-react'

const services = [
  { icon: LineChart, title: 'Sales Training', desc: 'Build repeatable pipelines and high-performance teams.' },
  { icon: Rocket, title: 'Fractional Growth Partner', desc: 'Senior growth leadership without full-time overhead.' },
  { icon: Cog, title: 'Systemization', desc: 'Operational clarity with SOPs, dashboards, and automations.' },
  { icon: Users, title: 'HR & Hiring', desc: 'Hire right, onboard fast, and reduce churn.' },
  { icon: Palette, title: 'Branding', desc: 'Sharp positioning, identity, and go-to-market narratives.' },
  { icon: Wallet, title: 'Virtual CFO', desc: 'Cash flow control, metrics, and strategic finance.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0F172A] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold">
          Systems that scale
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_-12px_rgba(37,99,235,0.55)] transition-all">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-3 bg-[#0B1222] border border-white/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
