import { motion } from "framer-motion";
import { ShipWheel, Waves } from "lucide-react";

const bgGradient = "bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950";

export default function Hero() {
  return (
    <section id="hero" className={`${bgGradient} relative overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[48rem] h-[48rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[48rem] h-[48rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-200/90 text-sm mb-6 backdrop-blur">
            <Waves className="w-4 h-4" /> Trusted by marinas & shipowners
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Precision Shipyard Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Built for Open Water Performance
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-200/90 max-w-3xl mx-auto">
            Refits, repairs, and new builds delivered with naval-grade standards. Transparent timelines, live progress, and uncompromising quality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#solutions"
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition"
            >
              Explore Solutions
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#process"
              className="px-6 py-3 rounded-xl border border-white/10 text-blue-100 hover:bg-white/10 transition"
            >
              How We Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {["Dry Docking", "Composite & Steel", "Electrics & Avionics"].map((title, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 transition" />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-300">
                  <ShipWheel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{title}</h4>
                  <p className="text-blue-200/80 text-sm">Naval architects on staff for certified results</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
