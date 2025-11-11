export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-12 text-center text-xs text-white/40">
      <p>© {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
      <p className="mt-2">Created for concept demonstration purposes.</p>
    </footer>
  );
}
