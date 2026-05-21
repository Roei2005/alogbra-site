/**
 * ==========================================
 *   ספריית הכלים שלך — הוסף כאן הכל
 * ==========================================
 *
 * כדי להוסיף כלי חדש:
 * 1. העתק את הבלוק שמתחיל ב-  {  ומסתיים ב-  },
 * 2. מלא את הפרטים
 * 3. הדבק את קוד ה-HTML בין הסימנים `  `
 *
 * שדות חובה:
 *   id        — מזהה ייחודי באנגלית, ללא רווחים (לדוגמה: "ezor-keshet-1")
 *   title     — שם הכלי בעברית
 *   grade     — כיתה: 8 או 9 (או 7, 10 לעתיד)
 *   category  — נושא: "algebra" | "geometry" | "functions" | "kavit" | "statistics" | "other"
 *   premium   — true = נעול למנויים, false = חינמי
 *   html      — קוד ה-HTML המלא (הדבק בין ה-backticks)
 *
 * שדות אופציונליים:
 *   description — תיאור קצר שמופיע מתחת לכותרת
 *   emoji       — אייקון (ברירת מחדל: 📄)
 *   isQuiz      — true אם זה בוחן/מבחן
 */

export interface HtmlTool {
  id: string;
  title: string;
  grade: number;
  category: string;
  premium: boolean;
  html: string;
  description?: string;
  emoji?: string;
  isQuiz?: boolean;
}

export const htmlLibrary: HtmlTool[] = [

  // ============================================================
  // דוגמה — אפשר למחוק אותה
  // ============================================================
  {
    id: "example-demo",
    title: "דוגמה — כלי לדוגמה",
    grade: 8,
    category: "algebra",
    premium: false,
    emoji: "📄",
    description: "כלי לדוגמה — מחק אותו כשתוסיף כלים אמיתיים",
    html: `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>דוגמה</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Rubik', sans-serif; }</style>
</head>
<body class="min-h-screen flex items-center justify-center bg-slate-50 p-8">
  <div class="bg-white rounded-2xl shadow p-8 text-center max-w-md">
    <h1 class="text-3xl font-bold text-blue-700 mb-4">שלום! 👋</h1>
    <p class="text-slate-600 text-lg">זו דוגמה לכלי. החלף את ה-HTML הזה בקוד שלך.</p>
  </div>
</body>
</html>`,
  },

  // ============================================================
  // הוסף את הכלים שלך כאן למטה
  // העתק את הבלוק הזה בכל פעם שרוצים להוסיף כלי:
  // ============================================================

  // {
  //   id: "",           // <-- מזהה ייחודי באנגלית
  //   title: "",        // <-- שם הכלי בעברית
  //   grade: 8,         // <-- 8 או 9
  //   category: "algebra",  // <-- algebra | geometry | functions | kavit | other
  //   premium: false,   // <-- true = נעול, false = חינמי
  //   emoji: "🧮",      // <-- אייקון
  //   description: "",  // <-- תיאור קצר (אופציונלי)
  //   html: `
  // <!DOCTYPE html>
  // ...הדבק כאן את קוד ה-HTML שלך...
  //   `,
  // },

];
