import { motion } from "framer-motion";
import { Satellite, Camera, ClipboardList, Shield } from "lucide-react";

export default function Features() {
  const features = [
    { icon: Satellite, title: "Satellite Comms", desc: "Remote diagnostics and coordination offshore." },
    { icon: Camera, title: "Progress Photos", desc: "Daily visual updates from the yard floor." },
    { icon: ClipboardList, title: "Digital Work Orders", desc: "End-to-end traceability and sign-offs." },
    { icon: Shield, title: "Class Compliance", desc: "ABS, DNV, and Lloyd's compliant workflows." },
  ];
  return (
    <section id="features" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Operational Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-indigo-300">
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
