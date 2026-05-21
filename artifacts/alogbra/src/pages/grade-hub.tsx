import { useParams, Link } from "wouter";
import { getGrade } from "@/data/tools";
import { Navbar, Footer } from "@/components/layout";
import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function GradeHub() {
  const { gradeId } = useParams();
  const id = Number(gradeId);
  const grade = getGrade(id);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  if (!grade) {
    return (
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4">הכיתה לא נמצאה</h1>
          <Link href="/" className="text-primary hover:underline">חזרה לדף הבית</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleToolClick = (e: React.MouseEvent, premium: boolean) => {
    if (premium) {
      e.preventDefault();
      setShowPremiumModal(true);
    }
  };

  const getCategoryColor = (color: string) => {
    switch (color) {
      case 'orange': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'green': return 'bg-green-50 text-green-600 border-green-100';
      case 'blue': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'indigo': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50/50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            חזרה לדף הבית
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-foreground">מאגר כלים — {grade.label}</h1>
        </div>

        <div className="space-y-16">
          {grade.categories.map((cat) => {
            const regularTools = cat.tools.filter(t => !t.isQuiz);
            const quizTools = cat.tools.filter(t => t.isQuiz);

            return (
              <section key={cat.id} className="space-y-6">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl border ${getCategoryColor(cat.color)}`}>
                  <span className="text-xl">{cat.emoji}</span>
                  <h2 className="text-xl font-bold">{cat.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {regularTools.map(tool => (
                    <Link 
                      key={tool.id} 
                      href={`/tool/${grade.id}/${tool.id}`}
                      onClick={(e) => handleToolClick(e, tool.premium)}
                      className={`group relative bg-card border border-border rounded-[1.5rem] p-5 transition-all hover:shadow-md hover:border-primary/30 flex flex-col gap-3 ${tool.premium ? 'opacity-90' : ''}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {tool.emoji}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                          {tool.title}
                          {tool.premium && <Lock className="w-4 h-4 text-muted-foreground" />}
                        </h3>
                        {tool.description && (
                          <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>

                {quizTools.length > 0 && (
                  <div className="mt-4">
                    {quizTools.map(quiz => (
                      <Link 
                        key={quiz.id} 
                        href={`/tool/${grade.id}/${quiz.id}`}
                        onClick={(e) => handleToolClick(e, quiz.premium)}
                        className="group flex items-center justify-between bg-primary/5 border border-primary/10 rounded-[1.5rem] p-6 transition-all hover:bg-primary/10 hover:shadow-md w-full"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-background border shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {quiz.emoji}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                              {quiz.title}
                              {quiz.premium && <Lock className="w-4 h-4" />}
                            </h3>
                            {quiz.description && <p className="text-muted-foreground mt-1">{quiz.description}</p>}
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground group-hover:-translate-x-1 transition-transform">
                          <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          {grade.finalExam && (
            <section className="pt-8 border-t border-border">
              <Link 
                href={`/tool/${grade.id}/mivhan`}
                className="group flex flex-col sm:flex-row items-center justify-between bg-foreground text-background rounded-[2rem] p-8 md:p-10 transition-all hover:scale-[1.01] hover:shadow-xl w-full"
              >
                <div className="flex items-center gap-6 mb-6 sm:mb-0">
                  <div className="w-20 h-20 rounded-full bg-background/10 flex items-center justify-center text-4xl">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-2">{grade.finalExam.title}</h3>
                    <p className="text-background/80">מוכנים למבחן? בואו נראה מה אתם יודעים.</p>
                  </div>
                </div>
                <div className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-center group-hover:bg-primary/90 transition-colors">
                  התחלת המבחן
                </div>
              </Link>
            </section>
          )}
        </div>
      </main>

      <Footer />

      <Dialog open={showPremiumModal} onOpenChange={setShowPremiumModal}>
        <DialogContent className="sm:max-w-md text-center" dir="rtl">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">כלי פרימיום</DialogTitle>
            <DialogDescription className="text-base text-center pt-2">
              כדי לפתוח את הכלים הפרימיום, יש להירשם למנוי לאלוגברה.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-6">
            <Button variant="outline" onClick={() => setShowPremiumModal(false)}>ביטול</Button>
            <Button asChild>
              <Link href="/pricing" onClick={() => setShowPremiumModal(false)}>למעבר לתמחור</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
