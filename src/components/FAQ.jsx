import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What vessel sizes do you handle?",
    a: "From small commercial craft to 120m vessels. Dry dock and travel lift capacity available on request.",
  },
  {
    q: "Do you support urgent repairs?",
    a: "Yes. We maintain rapid-response teams and can prioritize emergency dockings.",
  },
  {
    q: "How do you ensure quality?",
    a: "ISO 9001-aligned workflows, class-approved materials, and third-party inspections.",
  },
  {
    q: "Where are you located?",
    a: "Strategic harbor access with deep-water berths and customs support.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="bg-slate-950 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <ul className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li key={item.q} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-200 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-blue-200/90 text-sm">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
