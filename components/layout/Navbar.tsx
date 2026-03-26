"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const servicesLinks = [
    { name: "Jasa Pembuatan Website", href: "/services" },
    { name: "Jasa WordPress", href: "/services/wordpress" },
    { name: "Jasa Blogger", href: "/services/blogger" },
    { name: "Custom Web", href: "/services/custom" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800 ${isMenuOpen ? 'bg-white dark:bg-slate-900' : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image 
            src="/logo.png" 
            alt="Nusaprima Digital Logo" 
            width={180} 
            height={40} 
            className="w-auto h-10 object-contain"
            priority 
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-brand-teal ${isActive('/') ? 'text-brand-teal' : 'text-slate-600 dark:text-slate-300'}`}>Home</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-teal ${pathname.startsWith('/services') ? 'text-brand-teal' : 'text-slate-600 dark:text-slate-300'}`}>
              Layanan <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-0 w-56 pt-4 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden p-1">
                {servicesLinks.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href}
                    className="block px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-brand-teal dark:hover:text-brand-teal rounded-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className={`text-sm font-medium transition-colors hover:text-brand-teal ${isActive('/portfolio') ? 'text-brand-teal' : 'text-slate-600 dark:text-slate-300'}`}>Portofolio</Link>
          <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-brand-teal ${isActive('/blog') ? 'text-brand-teal' : 'text-slate-600 dark:text-slate-300'}`}>Blog</Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-brand-teal ${isActive('/about') ? 'text-brand-teal' : 'text-slate-600 dark:text-slate-300'}`}>About Us</Link>
        </div>

        <div className="flex items-center gap-4 z-50">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun size={20} className="text-brand-gold" /> : <Moon size={20} />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <Link href="/contact" className="hidden md:block px-6 py-2.5 bg-brand-gold hover:bg-yellow-500 text-white font-medium rounded-full transition-all shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5 text-sm">
            Hubungi Kami
          </Link>

          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-slate-900 flex flex-col py-8 px-6 gap-6 transition-all duration-300 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
        <div className="flex flex-col gap-2">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 py-3">Home</Link>
          
          <div className="flex flex-col gap-3 py-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Layanan</span>
            {servicesLinks.map((service) => (
              <Link 
                key={service.href} 
                href={service.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base text-slate-600 dark:text-slate-400 hover:text-brand-teal pl-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full"
              >
                {service.name}
              </Link>
            ))}
          </div>
          
          <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 py-3">Portofolio</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 py-3">Blog</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 py-3">About Us</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-gold py-4">Hubungi Kami</Link>
        </div>
      </div>
    </nav>
  );
}