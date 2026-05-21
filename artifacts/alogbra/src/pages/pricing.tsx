import { Navbar, Footer } from "@/components/layout";
import { CheckCircle2, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />

      <main className="flex-1 bg-slate-50/50 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            חסכו עד 40% במנוי שנתי
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">מחיר שמשתלם באמת</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            פלטפורמה מלאה עם כלים אינטראקטיביים — פעם אחת, שנה שלמה.
          </p>
          <p className="text-base text-muted-foreground/70 mb-16 max-w-xl mx-auto">
            ללא חיובים חוזרים, ללא הפתעות. רק גישה מלאה לכל הכלים.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-right mb-12">

            {/* Grade 8 — Annual */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="text-sm font-bold text-muted-foreground mb-1">כיתה ח׳</div>
              <h3 className="text-2xl font-bold mb-1">מנוי שנתי</h3>
              <div className="text-muted-foreground text-sm mb-6">גישה מלאה לכל השנה</div>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-muted-foreground line-through text-lg">₪249</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">חסכון 40%</span>
              </div>
              <div className="text-5xl font-black mb-1 text-foreground">₪149</div>
              <div className="text-muted-foreground text-sm mb-8">לשנה שלמה</div>

              <ul className="space-y-3 mb-8 flex-1 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>כל הכלים האינטראקטיביים של כיתה ח׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>אלגברה, גאומטריה ופונקציה קווית</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>בחנים מסכמים להכנה למבחנים</span>
                </li>
              </ul>
              <Button size="lg" className="w-full rounded-full font-bold">הצטרפו עכשיו</Button>
            </div>

            {/* Bundle — 2 years — FEATURED */}
            <div className="bg-primary text-primary-foreground border-2 border-primary rounded-[2rem] p-8 flex flex-col relative shadow-2xl md:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-sm font-black px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-yellow-900" />
                הכי משתלם — שנתיים
              </div>

              <div className="text-sm font-bold text-primary-foreground/70 mb-1 mt-2">ח׳ + ט׳ ביחד</div>
              <h3 className="text-2xl font-bold mb-1">מנוי לשנתיים</h3>
              <div className="text-primary-foreground/70 text-sm mb-6">חטיבת הביניים המלאה</div>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-primary-foreground/50 line-through text-lg">₪498</span>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded-full">חסכון 60%</span>
              </div>
              <div className="text-5xl font-black mb-1">₪199</div>
              <div className="text-primary-foreground/70 text-sm mb-8">לשנתיים שלמות · ₪8.30 לחודש</div>

              <ul className="space-y-3 mb-8 flex-1 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>כל התוכן של כיתה ח׳ <b>וכיתה ט׳</b></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>ממשיך ללא הפרעה מח׳ לט׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>הכנה מלאה לתיכון</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>כלים חדשים שמתווספים כל הזמן</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="w-full rounded-full font-black text-primary">
                הצטרפו עכשיו — ₪199
              </Button>
            </div>

            {/* Grade 9 — Annual */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="text-sm font-bold text-muted-foreground mb-1">כיתה ט׳</div>
              <h3 className="text-2xl font-bold mb-1">מנוי שנתי</h3>
              <div className="text-muted-foreground text-sm mb-6">גישה מלאה לכל השנה</div>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-muted-foreground line-through text-lg">₪249</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">חסכון 40%</span>
              </div>
              <div className="text-5xl font-black mb-1 text-foreground">₪149</div>
              <div className="text-muted-foreground text-sm mb-8">לשנה שלמה</div>

              <ul className="space-y-3 mb-8 flex-1 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>כל הכלים האינטראקטיביים של כיתה ט׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>פרבולות, אלגברה מתקדמת וגאומטריה</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>הכנה מלאה למבחני מעבר לתיכון</span>
                </li>
              </ul>
              <Button size="lg" className="w-full rounded-full font-bold">הצטרפו עכשיו</Button>
            </div>

          </div>

          {/* Reassurance row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ ללא חיוב חוזר אוטומטי</span>
            <span>✓ גישה מיידית לאחר רכישה</span>
            <span>✓ עובד מכל מכשיר</span>
            <span>✓ תמיכה בעברית</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
