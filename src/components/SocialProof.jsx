import { motion } from "framer-motion";

export default function SocialProof() {
  const logos = ["Neptune", "BlueLine", "Oceanic", "Mariner", "AquaWorks", "Stellar Hulls"];
  return (
    <section id="social-proof" className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-blue-200/70 mb-8"
        >
          Trusted by fleets worldwide
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="text-center text-white/80 bg-white/5 border border-white/10 rounded-xl py-4 px-3 backdrop-blur"
            >
              <span className="tracking-wide text-sm">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
