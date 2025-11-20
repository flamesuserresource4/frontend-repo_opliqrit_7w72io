import { motion } from "framer-motion";
import { AlertTriangle, Timer, DollarSign } from "lucide-react";

export default function PainPoints() {
  const items = [
    {
      icon: AlertTriangle,
      title: "Uncertain Timelines",
      desc: "Projects drift without clear milestones or live updates.",
    },
    {
      icon: Timer,
      title: "Downtime Costs",
      desc: "Every idle day at port drains revenue and schedules.",
    },
    {
      icon: DollarSign,
      title: "Unexpected Overruns",
      desc: "Opaque quotes become expensive surprises later.",
    },
  ];

  return (
    <section id="pain" className="relative bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          The Problems Holding Fleets Back
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <Icon className="w-6 h-6 text-amber-300" />
              <h3 className="text-white font-semibold mt-3">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
