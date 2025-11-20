import { motion } from "framer-motion";
import { Ship, Clock, ShieldCheck } from "lucide-react";

export default function Benefits() {
  const benefits = [
    { icon: Ship, title: "Faster Turnaround", desc: "Optimized scheduling keeps you back at sea sooner." },
    { icon: Clock, title: "Predictable Budgets", desc: "Transparent pricing and change-order control." },
    { icon: ShieldCheck, title: "Certified Quality", desc: "Class-approved materials and inspections." },
  ];

  return (
    <section id="benefits" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Why Owners Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur"
            >
              <Icon className="w-6 h-6 text-cyan-300" />
              <h3 className="text-white font-semibold mt-3">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
