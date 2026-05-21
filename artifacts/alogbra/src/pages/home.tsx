import { Navbar, Footer } from "@/components/layout";
import TriangleShowcase from "@/components/TriangleShowcase";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6">
              להבין מתמטיקה, <br className="md:hidden" />
              <span className="text-primary">באמת.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              ככה לומדים אצלנו. לבד — אבל באמת מבינים. כלים אינטראקטיביים שעושים סדר בראש.
            </p>
            
            <div className="mb-24">
              <TriangleShowcase />
            </div>

            {/* Grade Selector */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">לאיזו כיתה אתם?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/grade/8" className="group block relative overflow-hidden rounded-[2rem] bg-card border-2 border-border hover:border-primary p-10 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                  <div className="text-5xl font-black text-primary mb-4">ח׳</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">כיתה ח׳</h3>
                  <p className="text-muted-foreground flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> כניסה למאגר
                  </p>
                </Link>

                <Link href="/grade/9" className="group block relative overflow-hidden rounded-[2rem] bg-card border-2 border-border hover:border-accent p-10 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                  <div className="text-5xl font-black text-accent mb-4">ט׳</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">כיתה ט׳</h3>
                  <p className="text-muted-foreground flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> כניסה למאגר
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-secondary/50 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">איך זה עובד?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl font-black mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold mb-3">רואים דוגמאות חיות</h3>
                <p className="text-muted-foreground leading-relaxed">משחקים עם משולשים, מזיזים פרבולות ומבינים את ההיגיון מאחורי הנוסחאות.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-3xl font-black mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold mb-3">בוחרים כיתה</h3>
                <p className="text-muted-foreground leading-relaxed">כל החומר של כיתות ח׳ ו-ט׳ מסודר ומאורגן לפי נושאים, בדיוק כמו בבית הספר.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center text-3xl font-black mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold mb-3">לומדים בקצב שלכם</h3>
                <p className="text-muted-foreground leading-relaxed">פותחים כלים, פותרים תרגילים ועושים מבדקים כדי לראות שהבנתם הכל.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-black mb-6">מוכנים להתחיל להבין?</h2>
            <p className="text-xl text-muted-foreground mb-10">הצטרפו עכשיו לאלוגברה וקבלו גישה לכל הכלים האינטראקטיביים.</p>
            <Link href="/pricing" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25">
              הצטרפו עכשיו <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
