/**
 * ==========================================
 *   ספריית הכלים שלך — הוסף כאן הכל
 * ==========================================
 *
 * איך להוסיף כלי HTML חדש (3 שלבים):
 *
 * 1. שמור את קובץ ה-HTML ב:  src/data/html-tools/<שם>.html
 *
 * 2. הוסף שורת import כאן למעלה:
 *    import myTool from './html-tools/<שם>.html?raw';
 *
 * 3. הוסף רשומה למערך htmlLibrary למטה:
 *    {
 *      id: "my-tool",
 *      title: "שם הכלי",
 *      grade: 9,
 *      category: "geometry",
 *      premium: false,
 *      emoji: "📐",
 *      description: "תיאור קצר",
 *      html: myTool,
 *    },
 *
 * קטגוריות אפשריות:
 *   "algebra" | "geometry" | "functions" | "kavit" | "statistics" | "other"
 */

// ── ייבוא קבצי HTML ────────────────────────────────────────────
import trapezoidKite from './html-tools/trapezoids-kite-g9.html?raw';
import parallelogramFamily from './html-tools/parallelogram-family-g9.html?raw';
// הוסף import נוסף כאן לכל כלי חדש ↑

// ── טיפוס ─────────────────────────────────────────────────────
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

// ── רשימת הכלים ───────────────────────────────────────────────
export const htmlLibrary: HtmlTool[] = [

  // ── כיתה ט׳ — גאומטריה ──────────────────────────────────────

  {
    id: "trapezoids-kite-g9",
    title: "הטרפזים והדלתון",
    grade: 9,
    category: "geometry",
    premium: false,
    emoji: "📐",
    description: "חקירה אינטראקטיבית של תכונות הטרפז והדלתון עם חידון זמן",
    html: trapezoidKite,
  },

  {
    id: "parallelogram-family-g9",
    title: "משפחת המקביליות",
    grade: 9,
    category: "geometry",
    premium: true,
    emoji: "🔷",
    description: "מסע אינטראקטיבי: מקבילית, מלבן, מעויין וריבוע — עץ משפחה, טבלת השוואה ומבחן זמן",
    html: parallelogramFamily,
  },

  // הוסף כלים נוספים כאן ↓

];
