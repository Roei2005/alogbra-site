import { useParams, Link } from "wouter";
import { getGrade } from "@/data/tools";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ToolViewer() {
  const { gradeId, toolId } = useParams();
  const grade = getGrade(Number(gradeId));
  
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (!grade) return;
    
    if (toolId === 'mivhan' && grade.finalExam) {
      setFileUrl(grade.finalExam.file);
      setTitle(grade.finalExam.title);
      return;
    }

    for (const cat of grade.categories) {
      const tool = cat.tools.find(t => t.id === toolId);
      if (tool) {
        setFileUrl(tool.file);
        setTitle(tool.title);
        return;
      }
    }
  }, [grade, toolId]);

  if (!grade || !fileUrl) {
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
        <div className="w-20" /> {/* Spacer for centering */}
      </div>
      <div className="flex-1 bg-white relative">
        <iframe 
          src={fileUrl}
          className="w-full h-full border-none absolute inset-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
          title={title}
        />
      </div>
    </div>
  );
}
