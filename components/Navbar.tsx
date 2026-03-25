"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
            N
          </div>
          <span className="font-bold text-xl tracking-tight">Agency</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 font-medium text-sm">
            <Link href="#layanan" className="hover:text-brand-teal transition-colors">Layanan</Link>
            <Link href="#portfolio" className="hover:text-brand-teal transition-colors">Portofolio</Link>
            <Link href="#blog" className="hover:text-brand-teal transition-colors">Blog</Link>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={20} className="text-brand-gold" /> : <Moon size={20} />
            ) : (
              <div className="w-5 h-5" /> 
            )}
          </button>

          <Link href="#kontak" className="hidden md:block px-6 py-2.5 bg-brand-gold hover:bg-yellow-500 text-white font-medium rounded-full transition-all shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5">
            Mulai Proyek
          </Link>
        </div>
      </div>
    </nav>
  );
}