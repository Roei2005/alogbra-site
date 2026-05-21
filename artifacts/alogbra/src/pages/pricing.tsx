import { Navbar, Footer } from "@/components/layout";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-slate-50/50 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">ללמוד מתמטיקה פשוט וחכם</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            פלטפורמה מלאה עם כלים אינטראקטיביים שעוזרים להבין באמת את החומר. בחרו את המסלול המתאים לכם.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-right">
            
            {/* Grade 8 */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">כיתה ח׳</h3>
              <div className="text-muted-foreground mb-6">מנוי שנתי לחומרי כיתה ח׳</div>
              <div className="text-4xl font-black mb-8 flex items-end gap-2">
                <span>₪149</span>
                <span className="text-lg text-muted-foreground font-normal pb-1">/ לשנה</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>גישה מלאה לכל הכלים האינטראקטיביים של כיתה ח׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>הכנה למבחנים עם בחנים מסכמים</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>אלגברה, גאומטריה ופונקציה קווית</span>
                </li>
              </ul>
              <Button size="lg" className="w-full rounded-full font-bold text-md">הצטרפו עכשיו</Button>
            </div>

            {/* Bundle */}
            <div className="bg-primary text-primary-foreground border border-primary rounded-[2rem] p-8 flex flex-col relative scale-100 md:scale-105 shadow-xl z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                המשתלם ביותר
              </div>
              <h3 className="text-2xl font-bold mb-2">המשולב ח׳ + ט׳</h3>
              <div className="text-primary-foreground/80 mb-6">למידה רציפה לחטיבת הביניים</div>
              <div className="text-4xl font-black mb-8 flex items-end gap-2">
                <span>₪249</span>
                <span className="text-lg text-primary-foreground/80 font-normal pb-1">/ לשנתיים</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>כל התוכן של כיתה ח׳ וכיתה ט׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>מעולה לתלמידי כיתה ח׳ שרוצים להמשיך ברצף</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>הכנה מלאה לתיכון</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="w-full rounded-full font-bold text-md text-primary">הצטרפו עכשיו</Button>
            </div>

            {/* Grade 9 */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">כיתה ט׳</h3>
              <div className="text-muted-foreground mb-6">מנוי שנתי לחומרי כיתה ט׳</div>
              <div className="text-4xl font-black mb-8 flex items-end gap-2">
                <span>₪149</span>
                <span className="text-lg text-muted-foreground font-normal pb-1">/ לשנה</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>גישה מלאה לכל הכלים האינטראקטיביים של כיתה ט׳</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>הכנה מלאה למבחני מעבר לתיכון</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>פרבולות, אלגברה מתקדמת וגאומטריה</span>
                </li>
              </ul>
              <Button size="lg" className="w-full rounded-full font-bold text-md">הצטרפו עכשיו</Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
