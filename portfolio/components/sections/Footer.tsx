export default function Footer() {
  return (
    <footer className="py-7 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-zinc-600 text-sm font-mono">
          © 2026 Mritunjay Sharma. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-zinc-700 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 inline-block" />
          Open to opportunities
        </div>
      </div>
    </footer>
  );
}
