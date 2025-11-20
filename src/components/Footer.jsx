export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} OceanWorks Shipyard. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-blue-200/80 text-sm">
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
