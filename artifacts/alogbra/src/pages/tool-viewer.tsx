import { useParams, Link } from "wouter";
import { getGradeWithLibrary } from "@/data/tools";
import { htmlLibrary } from "@/data/html-library";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ToolViewer() {
  const { gradeId, toolId } = useParams();
  const grade = getGradeWithLibrary(Number(gradeId));

  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const blobUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!grade || !toolId) return;

    // Revoke previous blob URL to avoid memory leaks
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    // Final exam shortcut
    if (toolId === "mivhan" && grade.finalExam) {
      setIframeSrc(grade.finalExam.file);
      setTitle(grade.finalExam.title);
      return;
    }

    // Find the tool across all categories
    for (const cat of grade.categories) {
      const tool = cat.tools.find((t) => t.id === toolId);
      if (tool) {
        setTitle(tool.title);

        if (tool.file.startsWith("__html__")) {
          // Inline HTML from html-library.ts — render via blob URL
          const libraryEntry = htmlLibrary.find((t) => t.id === toolId);
          if (libraryEntry) {
            const blob = new Blob([libraryEntry.html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            blobUrlRef.current = url;
            setIframeSrc(url);
          }
        } else {
          // Static file from public/tools/
          setIframeSrc(tool.file);
        }
        return;
      }
    }
  }, [grade, toolId]);

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  if (!grade || !iframeSrc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">הכלי לא נמצא</h1>
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
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold hover:bg-secondary px-3 py-1.5 rounded-lg transition-colors"
        >
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          חזרה לכיתה {grade.id === 8 ? "ח׳" : "ט׳"}
        </Link>
        <div className="font-bold text-foreground">{title}</div>
        <div className="w-20" />
      </div>
      <div className="flex-1 bg-white relative">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          className="w-full h-full border-none absolute inset-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          title={title}
        />
      </div>
    </div>
  );
}
