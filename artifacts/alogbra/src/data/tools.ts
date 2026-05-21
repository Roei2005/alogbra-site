export interface Tool {
  id: string;
  title: string;
  description?: string;
  file: string;
  emoji: string;
  premium: boolean;
  isQuiz?: boolean;
  isFinalExam?: boolean;
}

export interface Category {
  id: string;
  title: string;
  emoji: string;
  color: "orange" | "green" | "blue" | "purple" | "indigo";
  tools: Tool[];
}

export interface Grade {
  id: 8 | 9;
  label: string;
  password: string;
  storageKey: string;
  categories: Category[];
  finalExam?: { file: string; title: string };
}

export const grades: Grade[] = [
  {
    id: 8,
    label: "כיתה ח'",
    password: "2468",
    storageKey: "math_access_grade8",
    finalExam: { file: "/tools/grade8/mivhan8.html", title: "מבחן מסכם - כיתה ח'" },
    categories: [
      {
        id: "algebra8",
        title: "אלגברה (משוואות וטכניקה)",
        emoji: "🧮",
        color: "orange",
        tools: [
          { id: "misvaot1", title: "משוואות - הבסיס", description: "סיכום ותרגול (ללא מכנה)", file: "/tools/grade8/algebra/misvaot1.html", emoji: "1️⃣", premium: false },
          { id: "misvaot2", title: "משוואות עם מכנה", description: "כולל תחום הגדרה", file: "/tools/grade8/algebra/misvaot2.html", emoji: "2️⃣", premium: true },
          { id: "marhetmisvaot", title: "מערכת משוואות", description: "שני נעלמים", file: "/tools/grade8/algebra/marhetmisvaot.html", emoji: "🔄", premium: true },
          { id: "algebrageometrit", title: "בעיות מילוליות", description: "בשילוב גאומטריה", file: "/tools/grade8/algebra/algebrageometrit.html", emoji: "📐", premium: true },
          { id: "ahozim", title: "אחוזים", description: "תרגול והבנה", file: "/tools/grade8/algebra/ahozim.html", emoji: "%", premium: true },
          { id: "mivdak8-algebra", title: "בוחן מסכם - אלגברה", file: "/tools/grade8/algebra/mivdak1.html", emoji: "📝", premium: false, isQuiz: true },
        ],
      },
      {
        id: "geometry8",
        title: "גאומטריה",
        emoji: "📐",
        color: "green",
        tools: [
          { id: "zaviot1", title: "סוגי זוויות (הסבר מפורט)", file: "/tools/grade8/geometry/zaviot1.html", emoji: "📏", premium: false },
          { id: "zaviot2", title: "תרגול זוויות", file: "/tools/grade8/geometry/zaviot2.html", emoji: "✏️", premium: false },
          { id: "masash", title: "משולש שווה שוקיים", file: "/tools/grade8/geometry/masash.html", emoji: "⛺", premium: true },
          { id: "pythgoras", title: "משפט פיתגורס", file: "/tools/grade8/geometry/pythgoras.html", emoji: "📐", premium: true },
          { id: "hafifa", title: "חפיפת משולשים", file: "/tools/grade8/geometry/hafifa.html", emoji: "🔼", premium: true },
          { id: "mivdak8-geo", title: "בוחן מסכם - גאומטריה", file: "/tools/grade8/geometry/mivdakgeo.html", emoji: "📝", premium: false, isQuiz: true },
        ],
      },
      {
        id: "kavit8",
        title: "פונקציה קווית",
        emoji: "📈",
        color: "blue",
        tools: [
          { id: "mandb", title: "מהם m ו-b?", description: "הסבר על הפרמטרים", file: "/tools/grade8/kavit/mandb.html", emoji: "🧠", premium: false },
          { id: "kavit2", title: "משוואת הישר", description: "דוגמאות והסבר", file: "/tools/grade8/kavit/kavit2.html", emoji: "📉", premium: true },
          { id: "kavithesber", title: "הסבר מפורט", description: "סיכום מלא של הנושא", file: "/tools/grade8/kavit/kavithesber.html", emoji: "1️⃣", premium: true },
          { id: "mivdak8-kavit", title: "בוחן מסכם - פונקציות", file: "/tools/grade8/kavit/mivdak2.html", emoji: "📊", premium: false, isQuiz: true },
        ],
      },
    ],
  },
  {
    id: 9,
    label: "כיתה ט'",
    password: "1357",
    storageKey: "math_access_grade9",
    finalExam: { file: "/tools/grade9/mivhan.html", title: "מבחן מסכם - כיתה ט'" },
    categories: [
      {
        id: "algebra9",
        title: "אלגברה (משוואות וטכניקה)",
        emoji: "🧮",
        color: "orange",
        tools: [
          { id: "algebra1", title: "חוק הפילוג המורחב", file: "/tools/grade9/algebra/algebra1.html", emoji: "1️⃣", premium: false },
          { id: "algebra2", title: "נוסחאות כפל מקוצר", file: "/tools/grade9/algebra/algebra2.html", emoji: "2️⃣", premium: false },
          { id: "algebra3", title: "פירוק לגורמים", file: "/tools/grade9/algebra/algebra3.html", emoji: "3️⃣", premium: true },
          { id: "algebra4", title: "טרינום", file: "/tools/grade9/algebra/algebra4.html", emoji: "4️⃣", premium: true },
          { id: "algebra5", title: "כפל, חילוק וצמצום שברים", description: "כולל סיכום מקיף", file: "/tools/grade9/algebra/algebra5.html", emoji: "5️⃣", premium: true },
          { id: "mivdak9-algebra", title: "בוחן מסכם - אלגברה", file: "/tools/grade9/algebra/mivdak.html", emoji: "📝", premium: false, isQuiz: true },
        ],
      },
      {
        id: "geometry9",
        title: "גאומטריה",
        emoji: "📐",
        color: "purple",
        tools: [
          { id: "makbilit", title: "מקבילית", file: "/tools/grade9/geometry/makbilit.html", emoji: "▱", premium: false },
          { id: "malben", title: "מלבן", file: "/tools/grade9/geometry/malben.html", emoji: "▭", premium: false },
          { id: "dalton", title: "דלתון", file: "/tools/grade9/geometry/dalton.html", emoji: "🪁", premium: true },
          { id: "trapez", title: "טרפז", file: "/tools/grade9/geometry/trapez.html", emoji: "⏢", premium: true },
          { id: "meoian", title: "מעוין", file: "/tools/grade9/geometry/meoian.html", emoji: "🔷", premium: true },
          { id: "riboa", title: "ריבוע", file: "/tools/grade9/geometry/riboa.html", emoji: "⬜", premium: true },
          { id: "teana", title: "איך כותבים טענה ונימוק?", file: "/tools/grade9/geometry/teana.html", emoji: "📝", premium: false },
          { id: "mivdak9-geo", title: "בוחן מסכם - גאומטריה", file: "/tools/grade9/geometry/mivdak2.html", emoji: "📐", premium: false, isQuiz: true },
        ],
      },
      {
        id: "functions9",
        title: "פונקציות",
        emoji: "📈",
        color: "indigo",
        tools: [
          { id: "abckp", title: "מה זה פרבולה? (הקדמה)", file: "/tools/grade9/functions/a,b,c,k,p.html", emoji: "P", premium: false },
          { id: "parabola", title: "הסבר מקיף לפרבולה", file: "/tools/grade9/functions/parabola.html", emoji: "∪", premium: true },
          { id: "parabola2", title: "הסבר נוסף לפרבולה", description: "חיזוק והעמקה", file: "/tools/grade9/functions/parabola2.html", emoji: "💡", premium: true },
          { id: "mivdak9-func", title: "בוחן מסכם - פרבולות", file: "/tools/grade9/functions/mivdak3.html", emoji: "📊", premium: false, isQuiz: true },
        ],
      },
    ],
  },
];

export function getGrade(id: number): Grade | undefined {
  return grades.find((g) => g.id === id);
}
