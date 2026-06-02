export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-7 border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            D
          </div>
          <span className="text-sm text-[#64748B]" style={{ fontFamily: "'Inter',sans-serif" }}>
            Dewi Wulansari · Software Engineering Technology, IPB University
          </span>
        </div>
        <p className="text-xs text-[#94A3B8]" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
          © {year} · Dewi's Portofolio
        </p>
      </div>
    </footer>
  );
}
