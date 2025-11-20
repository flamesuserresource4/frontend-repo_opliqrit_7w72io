import { motion } from "framer-motion";
import { CalendarCheck, FileCheck, HardHat, Hammer } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: CalendarCheck, title: "Scope & Schedule", desc: "We define work packages and set milestones together." },
    { icon: FileCheck, title: "Design & Approval", desc: "Drawings, class approvals, and procurement prepared upfront." },
    { icon: HardHat, title: "Execution", desc: "Certified technicians with daily QA and safety checks." },
    { icon: Hammer, title: "Sea Trials", desc: "Verifications under load and handover with documentation." },
  ];

  return (
    <section id="process" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Our Proven Process
        </motion.h2>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold mt-4">{title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
