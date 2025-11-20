import { motion } from "framer-motion";
import { BadgeCheck, Radar, Gauge, Wrench } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: BadgeCheck,
      title: "ISO-Certified Workflows",
      desc: "Documented procedures and QA gates for every phase.",
    },
    { icon: Radar, title: "Live Project Tracking", desc: "See progress, photos, and next steps in real-time." },
    { icon: Gauge, title: "Performance Tuning", desc: "Hydrodynamics, propulsion, and weight optimization." },
    { icon: Wrench, title: "Full-Service Yard", desc: "From hull to avionics with senior naval engineers on-site." },
  ];

  return (
    <section id="solutions" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Solutions Built For Open Seas
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mt-4">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
