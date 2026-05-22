import { useParams, Link } from "wouter";
import { getGradeWithLibrary as getGrade } from "@/data/tools";
import { Navbar, Footer } from "@/components/layout";
import { ArrowRight, Users, BookOpen } from "lucide-react";

// Color configs per category color
const CAT_STYLES: Record<string, { header: string; badge: string; border: string }> = {
  orange: {
    header: "from-orange-50 to-orange-100/60 border-orange-200",
    badge:  "bg-orange-100 text-orange-700 border-orange-300",
    border: "border-orange-200/60",
  },
  green: {
    header: "from-green-50 to-green-100/60 border-green-200",
    badge:  "bg-green-100 text-green-700 border-green-300",
    border: "border-green-200/60",
  },
  blue: {
    header: "from-blue-50 to-blue-100/60 border-blue-200",
    badge:  "bg-blue-100 text-blue-700 border-blue-300",
    border: "border-blue-200/60",
  },
  purple: {
    header: "from-purple-50 to-purple-100/60 border-purple-200",
    badge:  "bg-purple-100 text-purple-700 border-purple-300",
    border: "border-purple-200/60",
  },
  indigo: {
    header: "from-indigo-50 to-indigo-100/60 border-indigo-200",
    badge:  "bg-indigo-100 text-indigo-700 border-indigo-300",
    border: "border-indigo-200/60",
  },
};

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

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-10 max-w-5xl">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors text-sm">
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            חזרה לדף הבית
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            מאגר כלים
            <span className="text-primary"> — {grade.label}</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl">
            לכל כלי שתי אופציות: <span className="font-semibold text-foreground">לכיתה</span> (הצגה על מסך גדול) ו-<span className="font-semibold text-foreground">ללמידה</span> (בקצב שלך)
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {grade.categories.map((cat) => {
            const regularTools = cat.tools.filter((t) => !t.isQuiz);
            const quizTools    = cat.tools.filter((t) => t.isQuiz);
            const styles       = CAT_STYLES[cat.color] ?? CAT_STYLES.purple;

            return (
              <section key={cat.id}>

                {/* Category header banner */}
                <div className={`flex items-center gap-4 bg-gradient-to-l ${styles.header} border rounded-2xl px-6 py-4 mb-6`}>
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {regularTools.length} {regularTools.length === 1 ? "כלי" : "כלים"}
                      {quizTools.length > 0 && ` + ${quizTools.length} בוחן`}
                    </p>
                  </div>
                </div>

                {/* Tool cards — 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {regularTools.map((tool) => (
                    <div
                      key={tool.id}
                      className={`bg-card border-2 ${styles.border} rounded-[1.75rem] p-6 flex flex-col gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5`}
                    >
                      {/* Tool header */}
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl shrink-0 shadow-sm">
                          {tool.emoji}
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">{tool.title}</h3>
                          {tool.description && (
                            <p className="text-sm text-muted-foreground mt-1 leading-snug">{tool.description}</p>
                          )}
                        </div>
                      </div>

                      {/* Two mode buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={`/tool/${grade.id}/${tool.id}?mode=class`}
                          className="flex items-center justify-center gap-2 bg-primary/8 hover:bg-primary/16 text-primary border border-primary/25 rounded-2xl px-4 py-3 text-sm font-bold transition-colors"
                        >
                          <Users className="w-4 h-4 shrink-0" />
                          <span>לכיתה</span>
                        </Link>
                        <Link
                          href={`/tool/${grade.id}/${tool.id}?mode=self`}
                          className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/70 text-foreground border border-border rounded-2xl px-4 py-3 text-sm font-bold transition-colors"
                        >
                          <BookOpen className="w-4 h-4 shrink-0" />
                          <span>ללמידה</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quiz strip */}
                {quizTools.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {quizTools.map((quiz) => (
                      <Link
                        key={quiz.id}
                        href={`/tool/${grade.id}/${quiz.id}`}
                        className={`group flex items-center justify-between bg-gradient-to-l ${styles.header} border ${styles.border} rounded-[1.5rem] px-6 py-5 transition-all hover:shadow-md hover:-translate-y-0.5`}
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-full bg-background border-2 border-current/10 shadow flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shrink-0">
                            {quiz.emoji}
                          </div>
                          <div>
                            <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${styles.badge} border`}>בוחן</div>
                            <h3 className="text-base md:text-lg font-bold text-foreground">{quiz.title}</h3>
                            {quiz.description && <p className="text-sm text-muted-foreground mt-0.5">{quiz.description}</p>}
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background group-hover:-translate-x-1 transition-transform shrink-0">
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
            <section className="pt-10 border-t-2 border-dashed border-border">
              <Link
                href={`/tool/${grade.id}/mivhan`}
                className="group flex flex-col sm:flex-row items-center justify-between bg-foreground text-background rounded-[2rem] p-8 md:p-12 transition-all hover:scale-[1.01] hover:shadow-2xl w-full gap-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-18 h-18 md:w-24 md:h-24 rounded-full bg-background/10 flex items-center justify-center text-4xl md:text-5xl shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-black mb-2">{grade.finalExam.title}</h3>
                    <p className="text-background/70 text-base md:text-lg">מוכנים למבחן? בואו נראה מה אתם יודעים.</p>
                  </div>
                </div>
                <div className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-center group-hover:bg-primary/90 transition-colors text-base md:text-lg whitespace-nowrap">
                  התחלת המבחן ←
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
