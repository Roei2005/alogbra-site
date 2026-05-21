import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="w-full h-16 border-b border-border bg-background flex items-center justify-between px-6 shrink-0 sticky top-0 z-50">
      <Link href="/" className="text-2xl font-black text-primary hover:opacity-80 transition-opacity">
        אלוגברה.
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          תמחור
        </Link>
        <Link href="/pricing" className="text-sm font-bold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
          כניסה
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} אלוגברה. כל הזכויות שמורות.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">מנוי פרימיום</Link>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">תנאי שימוש</a>
        </div>
      </div>
    </footer>
  );
}
