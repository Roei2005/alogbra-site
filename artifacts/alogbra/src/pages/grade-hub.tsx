import { useParams, Link } from "wouter";
import { getGradeWithLibrary as getGrade } from "@/data/tools";
import { Navbar, Footer } from "@/components/layout";
import { ArrowRight, Users, BookOpen } from "lucide-react";

export default function GradeHub() {
  const { gradeId } = useParams();
  const id = Number(gradeId);
  const grade = getGrade(id);

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

  const getCategoryBadge = (color: string) => {
    const map: Record<string, string> = {
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      green:  "bg-green-50 text-green-700 border-green-200",
      blue:   "bg-blue-50 text-blue-700 border-blue-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    };
    return map[color] ?? "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {/* Back + heading */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-5 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            חזרה לדף הבית
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-foreground">
            מאגר כלים — {grade.label}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            לכל כלי שתי אופציות: <span className="font-semibold">גרסת כיתה</span> (מסך גדול, קבוצה) ו-<span className="font-semibold">למידה עצמאית</span> (לבד, בקצב שלך)
          </p>
        </div>

        <div className="space-y-14">
          {grade.categories.map((cat) => {
            const regularTools = cat.tools.filter((t) => !t.isQuiz);
            const quizTools    = cat.tools.filter((t) => t.isQuiz);

            return (
              <section key={cat.id} className="space-y-5">
                {/* Category header */}
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl border ${getCategoryBadge(cat.color)}`}>
                  <span className="text-xl">{cat.emoji}</span>
                  <h2 className="text-lg md:text-xl font-bold">{cat.title}</h2>
                </div>

                {/* Tool cards — 2 column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {regularTools.map((tool) => (
                    <div
                      key={tool.id}
                      className="bg-card border border-border rounded-[1.5rem] p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
                    >
                      {/* Tool info */}
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-2xl shrink-0">
                          {tool.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">{tool.title}</h3>
                          {tool.description && (
                            <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{tool.description}</p>
                          )}
                        </div>
                      </div>

                      {/* Two mode buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/tool/${grade.id}/${tool.id}?mode=class`}
                          className="flex items-center justify-center gap-1.5 bg-primary/8 hover:bg-primary/15 text-primary border border-primary/20 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors"
                        >
                          <Users className="w-3.5 h-3.5 shrink-0" />
                          <span>לכיתה</span>
                        </Link>
                        <Link
                          href={`/tool/${grade.id}/${tool.id}?mode=self`}
                          className="flex items-center justify-center gap-1.5 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-xl px-3 py-2.5 text-sm font-bold transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          <span>ללמידה</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quiz / bochan strip */}
                {quizTools.length > 0 && (
                  <div className="flex flex-col gap-3 mt-2">
                    {quizTools.map((quiz) => (
                      <Link
                        key={quiz.id}
                        href={`/tool/${grade.id}/${quiz.id}`}
                        className="group flex items-center justify-between bg-primary/5 border border-primary/15 rounded-[1.5rem] px-5 py-4 transition-all hover:bg-primary/10 hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-background border shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shrink-0">
                            {quiz.emoji}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-primary">{quiz.title}</h3>
                            {quiz.description && <p className="text-sm text-muted-foreground mt-0.5">{quiz.description}</p>}
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground group-hover:-translate-x-1 transition-transform shrink-0">
                          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          {/* Final exam */}
          {grade.finalExam && (
            <section className="pt-8 border-t border-border">
              <Link
                href={`/tool/${grade.id}/mivhan`}
                className="group flex flex-col sm:flex-row items-center justify-between bg-foreground text-background rounded-[2rem] p-8 md:p-10 transition-all hover:scale-[1.01] hover:shadow-xl w-full"
              >
                <div className="flex items-center gap-6 mb-6 sm:mb-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/10 flex items-center justify-center text-3xl md:text-4xl shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-black mb-1">{grade.finalExam.title}</h3>
                    <p className="text-background/70 text-sm md:text-base">מוכנים למבחן? בואו נראה מה אתם יודעים.</p>
                  </div>
                </div>
                <div className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-center group-hover:bg-primary/90 transition-colors text-sm md:text-base">
                  התחלת המבחן
                </div>
              </Link>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
