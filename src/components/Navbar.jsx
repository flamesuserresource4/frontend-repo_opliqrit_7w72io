import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#pain", label: "Pain Points" },
    { href: "#solutions", label: "Solutions" },
    { href: "#benefits", label: "Benefits" },
    { href: "#process", label: "Process" },
    { href: "#social-proof", label: "Clients" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-2">
          <a href="#hero" className="text-white font-semibold tracking-wide">OceanWorks</a>
          <nav className="hidden md:flex items-center gap-6 text-blue-200/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition text-sm">{l.label}</a>
            ))}
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#contact" className="ml-2 px-3 py-1.5 rounded-lg bg-blue-500 text-white text-sm">Get Quote</motion.a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-slate-900 border-l border-white/10 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-semibold">Menu</span>
                <button className="text-blue-200" onClick={() => setOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="space-y-3 text-blue-200/90">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="block py-2 hover:text-white">{l.label}</a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-500 text-white">Get Quote</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
