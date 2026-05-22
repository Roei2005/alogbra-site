import { useParams, Link } from "wouter";
import { getGradeWithLibrary } from "@/data/tools";
import { htmlLibrary } from "@/data/html-library";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ToolViewer() {
  const { gradeId, toolId } = useParams();

  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const [iframeSrcdoc, setIframeSrcdoc] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  // Resolve grade for rendering — called in component body so it's available in JSX.
  // getGradeWithLibrary returns a new object each call; we intentionally don't put it
  // in a useEffect dep array to avoid infinite re-renders.
  const grade = gradeId ? getGradeWithLibrary(Number(gradeId)) : undefined;

  useEffect(() => {
    if (!gradeId || !toolId) return;

    const g = getGradeWithLibrary(Number(gradeId));
    if (!g) return;

    setIframeSrc(null);
    setIframeSrcdoc(null);

    // Final exam shortcut
    if (toolId === "mivhan" && g.finalExam) {
      setIframeSrc(g.finalExam.file);
      setTitle(g.finalExam.title);
      return;
    }

    // Find the tool across all categories
    for (const cat of g.categories) {
      const tool = cat.tools.find((t) => t.id === toolId);
      if (tool) {
        setTitle(tool.title);
        if (tool.file.startsWith("__html__")) {
          const entry = htmlLibrary.find((t) => t.id === toolId);
          if (entry) setIframeSrcdoc(entry.html);
        } else {
          setIframeSrc(tool.file);
        }
        return;
      }
    }
  }, [gradeId, toolId]);

  if (!grade || (!iframeSrc && !iframeSrcdoc)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">הכלי לא נמצא</h1>
        <Link href={grade ? `/grade/${grade.id}` : "/"} className="text-primary hover:underline">
          חזרה
        </Link>
      </div>
    );
  }

  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden bg-background">
      <div className="h-14 shrink-0 bg-background border-b border-border flex items-center px-4 justify-between">
        <Link
          href={`/grade/${grade.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold hover:bg-secondary px-3 py-1.5 rounded-lg transition-colors"
        >
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          חזרה לכיתה {grade.id === 8 ? "ח׳" : "ט׳"}
        </Link>
        <div className="font-bold text-foreground truncate max-w-[50%] text-center">{title}</div>
        <div className="w-28" />
      </div>
      <div className="flex-1 bg-white relative">
        {iframeSrcdoc ? (
          <iframe
            key={iframeSrcdoc.slice(0, 60)}
            srcDoc={iframeSrcdoc}
            className="w-full h-full border-none absolute inset-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title={title}
          />
        ) : (
          <iframe
            key={iframeSrc!}
            src={iframeSrc!}
            className="w-full h-full border-none absolute inset-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title={title}
          />
        )}
      </div>
    </div>
  );
}
