import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "דף הבית" },
    { href: "/pricing", label: "מה אנחנו מציעים" },
    { href: "/#contact", label: "יצירת קשר" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.startsWith("/#")) return false;
    return location.startsWith(href);
  };

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — right side in RTL */}
        <Link href="/" className="text-xl font-black text-primary hover:opacity-80 transition-opacity cursor-pointer select-none shrink-0">
          אלוגברה.
        </Link>

        {/* Desktop nav — left side in RTL */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                isActive(href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="תפריט"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                isActive(href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="w-full py-12 border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right mb-8">
          <div>
            <Link href="/" className="text-2xl font-black text-primary hover:opacity-80 transition-opacity cursor-pointer">
              אלוגברה.
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">פלטפורמת לימוד מתמטיקה לחטיבת הביניים</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-3">ניווט</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">דף הבית</Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">מה אנחנו מציעים</Link>
              <Link href="/grade/8" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">כיתה ח׳</Link>
              <Link href="/grade/9" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">כיתה ט׳</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-3">יצירת קשר</h4>
            <p className="text-sm text-muted-foreground mb-2">שאלות? נשמח לשמוע מכם.</p>
            <a
              href="mailto:info@alogbra.co.il"
              className="text-sm font-semibold text-primary hover:underline"
            >
              info@alogbra.co.il
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} אלוגברה. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
