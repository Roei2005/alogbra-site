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
    {
      id: "masash-white-g8",
      title: "זיהוי צלע וזווית ומשולש שווה שוקיים",
      grade: 8,
      category: "geometry",
      premium: false,
      emoji: "🔷",
      description: "הצגה עדינה ושילוב של הבסיס",
      html: `<!DOCTYPE html>
  <html lang="he" dir="rtl">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>מאסטר המשולשים - גרסה יציבה ונקייה</title>

    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Hebrew Font (Rubik) -->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Rubik', sans-serif;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            -webkit-font-smoothing: antialiased;
        }

        /* Glassmorphism Card */
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
        }

        /* 3D Button Effect */
        .btn-3d {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            top: 0;
        }
        .btn-3d:active {
            top: 4px;
            box-shadow: none !important;
        }

        /* Custom Animations */
        .fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
        .slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(30px); }
        .scale-in { animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; transform: scale(0.8); }

        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { to { opacity: 1; transform: scale(1); } }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        .ltr-text { direction: ltr; display: inline-block; }
    </style>
</head>
<body class="text-slate-800 h-screen overflow-hidden flex flex-col">

    <div id="root" class="h-full flex flex-col"></div>

    <script type="text/babel">
        const { useState, useEffect, useRef } = React;

        // --- Icon Components ---
        const IconBase = ({ children, size = 24, className = "", ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                {children}
            </svg>
        );

        const Ruler = (props) => <IconBase {...props}><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></IconBase>;
        const Eye = (props) => <IconBase {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></IconBase>;
        const ArrowRight = (props) => <IconBase {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconBase>;
        const RotateCcw = (props) => <IconBase {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></IconBase>;
        const Trophy = (props) => <IconBase {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></IconBase>;
        const Check = (props) => <IconBase {...props}><path d="M20 6 9 17l-5-5"/></IconBase>;
        const X = (props) => <IconBase {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconBase>;
        const Calculator = (props) => <IconBase {...props}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></IconBase>;

        // --- פונקציית עזר לחישוב קשת זווית מושלמת ---
        const getAnglePath = (center, p1, p2, radius) => {
            const dx1 = p1.x - center.x;
            const dy1 = p1.y - center.y;
            const len1 = Math.sqrt(dx1*dx1 + dy1*dy1);
            const ux1 = dx1/len1;
            const uy1 = dy1/len1;

            const dx2 = p2.x - center.x;
            const dy2 = p2.y - center.y;
            const len2 = Math.sqrt(dx2*dx2 + dy2*dy2);
            const ux2 = dx2/len2;
            const uy2 = dy2/len2;

            const x1 = center.x + ux1 * radius;
            const y1 = center.y + uy1 * radius;
            const x2 = center.x + ux2 * radius;
            const y2 = center.y + uy2 * radius;

            const bisectorX = ux1 + ux2;
            const bisectorY = uy1 + uy2;
            const bisectorLen = Math.sqrt(bisectorX*bisectorX + bisectorY*bisectorY);

            const controlRadius = radius * 1.35; 
            const cx = center.x + (bisectorX / bisectorLen) * controlRadius;
            const cy = center.y + (bisectorY / bisectorLen) * controlRadius;

       return "M " + x1 + " " + y1 + " Q " + cx + " " + cy + " " + x2 + " " + y2;
        };


        // --- רכיב ויזואליזציה (SVG) ---
        const TriangleVisual = ({ mode, drillTarget, step, inputValue }) => {
            const top = { x: 150, y: 40 };   // A
            const left = { x: 50, y: 260 };  // B
            const right = { x: 250, y: 260 }; // C
            const midBase = { x: 150, y: 260 }; // D

            const isTarget = (id) => drillTarget?.id === id;

            // נתיבים דינמיים לקשתות הזוויות
            const angleA = getAnglePath(top, left, right, 35);
            const angleA_Left = getAnglePath(top, left, midBase, 30);
            const angleA_Right = getAnglePath(top, right, midBase, 30);

            const angleB = getAnglePath(left, right, top, 30);
            const angleC = getAnglePath(right, top, left, 30);

            const angleD_Left = getAnglePath(midBase, top, left, 25);
            const angleD_Right = getAnglePath(midBase, top, right, 25);

            // פונקציה שמציירת את ההדגשה האדומה בצורה מפורשת ונפרדת מכל שאר הציור
            // זה מבטיח שהקו האדום תמיד יהיה למעלה ושום דבר לא יסתיר אותו
            const renderHighlight = () => {
                // מציגים הדגשה רק אם אנחנו במצב אימון או שאלה פעילה
                if (!drillTarget || (mode !== 'intro_drill' && !mode.includes('solve'))) return null;

                const { id } = drillTarget;

                // הגדרות עיצוב לקווים (ללא פילטרים שעלולים להיעלם)
                const lineProps = {
                    stroke: "#ef4444", // אדום
                    strokeWidth: "8",  // עבה מאוד
                    strokeLinecap: "round",
                    fill: "none"
                };

                // הגדרות עיצוב לזוויות
                const angleProps = {
                    stroke: "#ef4444",
                    strokeWidth: "4",
                    strokeLinecap: "round",
                    fill: "rgba(239, 68, 68, 0.5)" // אדום חצי שקוף
                };

                switch(id) {
                    // צלעות
                    case 'AB': return <line x1={top.x} y1={top.y} x2={left.x} y2={left.y} {...lineProps} />;
                    case 'AC': return <line x1={top.x} y1={top.y} x2={right.x} y2={right.y} {...lineProps} />;
                    case 'BC': return <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} {...lineProps} />;
                    case 'AD': return <line x1={top.x} y1={top.y} x2={midBase.x} y2={midBase.y} {...lineProps} />;
                    case 'BD': return <line x1={left.x} y1={left.y} x2={midBase.x} y2={midBase.y} {...lineProps} />;
                    case 'DC': return <line x1={midBase.x} y1={midBase.y} x2={right.x} y2={right.y} {...lineProps} />;

                    // זוויות
                    case 'BAC': return (
                        <g>
                            <path d={angleA} {...angleProps} />
                            <circle cx={top.x} cy={top.y + 25} r="4" fill="#ef4444" />
                        </g>
                    );
                    case 'ABC': return <path d={angleB} {...angleProps} />;
                    case 'ACB': return <path d={angleC} {...angleProps} />;
                    case 'BAD': return <path d={angleA_Left} {...angleProps} />;
                    case 'CAD': return <path d={angleA_Right} {...angleProps} />;
                    case 'ADB': return <path d={angleD_Left} {...angleProps} />;
                    case 'ADC': return <path d={angleD_Right} {...angleProps} />;
                    default: return null;
                }
            };

            return (
                <svg viewBox="0 0 300 320" className="w-full h-full drop-shadow-2xl">
                    <defs>
                        <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="#f1f5f9" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* 1. גוף המשולש - שכבת בסיס */}
                    <path 
                        d={"M" + top.x + "," + top.y + " L" + right.x + "," + right.y + " L" + left.x + "," + left.y + " Z"}
                        fill="url(#triangleGradient)" 
                        stroke="#334155" 
                        strokeWidth="3"
                        strokeLinejoin="round"
                    />

                    {/* 2. קו עזר AD (קבוע, רקע אפור) - מופיע תמיד במצב אימון */}
                    {mode === 'intro_drill' && (
                        <line 
                            x1={top.x} y1={top.y} x2={midBase.x} y2={midBase.y} 
                            stroke="#cbd5e1" 
                            strokeWidth="2" 
                            strokeDasharray="6,4"
                            strokeLinecap="round"
                        />
                    )}

                    {/* 3. אלמנטים קבועים (שאינם השאלה הנוכחית) */}

                    {/* זווית A (רק בשלב הפתרון) */}
                    {mode.includes('solve') && (
                        <g>
                            <path d={angleA} fill="rgba(139, 92, 246, 0.1)" stroke={'#8b5cf6'} strokeWidth="3" strokeLinecap="round" />
                        </g>
                    )}

                    {/* זווית B ו-C (בשלב התכונות או הפתרון) */}
                    {(mode.includes('solve') || mode === 'properties') && (
                        <g>
                            <path d={angleB} fill="rgba(245, 158, 11, 0.15)" stroke={'#f59e0b'} strokeWidth="3" strokeLinecap="round" />
                            <path d={angleC} fill="rgba(245, 158, 11, 0.15)" stroke={'#f59e0b'} strokeWidth="3" strokeLinecap="round" />
                        </g>
                    )}

                    {/* 4. שכבת טקסט - אותיות */}
                    <g className="font-sans font-black select-none pointer-events-none" fill="#1e293b" fontSize="20" style={{textShadow: "0px 2px 4px rgba(255,255,255,0.8)"}}>
                        <text x={top.x} y={top.y - 20} textAnchor="middle">A</text>
                        <text x={left.x - 25} y={left.y + 5} textAnchor="middle">B</text>
                        <text x={right.x + 25} y={right.y + 5} textAnchor="middle">C</text>
                        {mode === 'intro_drill' && <text x={midBase.x} y={midBase.y + 30} textAnchor="middle" fill="#64748b" fontSize="16">D</text>}
                    </g>

                    {/* 5. סימוני שוויון צלעות (בשלב התכונות) */}
                    {(mode === 'properties' || mode.includes('solve')) && (
                        <g stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" filter="url(#glow)">
                            <line x1="90" y1="145" x2="110" y2="155" />
                            <line x1="190" y1="155" x2="210" y2="145" />
                        </g>
                    )}

                    {/* 6. ערכים מספריים (בשלב הפתרון) */}
                    {mode.includes('solve') && (
                        <g className="font-mono font-bold select-none" style={{direction: 'ltr'}}>
                            <rect x={top.x - 15} y={top.y + 60} width="30" height="20" rx="4" fill="white" opacity="0.8" />
                            <text x={top.x} y={top.y + 75} textAnchor="middle" fill="#7c3aed" fontSize="16">
                                {mode === 'solve_basic' ? '40°' : '20°'}
                            </text>
                            <text x={left.x + 50} y={left.y - 10} textAnchor="middle" fill="#15803d" fontSize="18" fontWeight="900">
                                {step === 4 ? (mode === 'solve_basic' ? '70°' : '80°') : (mode === 'solve_basic' ? 'x' : '2x')}
                            </text>
                            <text x={right.x - 50} y={right.y - 10} textAnchor="middle" fill="#15803d" fontSize="18" fontWeight="900">
                                {step === 4 ? (mode === 'solve_basic' ? '70°' : '80°') : (mode === 'solve_basic' ? 'x' : '2x')}
                            </text>
                        </g>
                    )}

                    {/* 7. שכבת הדגשה (הכי חשוב! תמיד בסוף) */}
                    {renderHighlight()}

                </svg>
            );
        };

        const App = () => {
            const [mode, setMode] = useState('intro_expl'); 
            const [step, setStep] = useState(0);

            const [drillTarget, setDrillTarget] = useState(null); 
            const [options, setOptions] = useState([]);
            const [streak, setStreak] = useState(0);
            const [feedback, setFeedback] = useState('');
            const [feedbackType, setFeedbackType] = useState('neutral'); 
            const targetStreak = 10;

            const [inputValue, setInputValue] = useState('');

            // --- לוגיקה ---
            const generateDrill = () => {
                const isSide = Math.random() > 0.5;
                const sides = ['AB', 'AC', 'BC', 'AD', 'BD', 'DC'];
                const angles = ['ABC', 'ACB', 'BAC', 'BAD', 'CAD', 'ADB', 'ADC'];

                let targetId, type;
                if (isSide) {
                    targetId = sides[Math.floor(Math.random() * sides.length)];
                    type = 'side';
                } else {
                    targetId = angles[Math.floor(Math.random() * angles.length)];
                    type = 'angle';
                }

                const correctOption = { id: targetId, type: type, correct: true };

                let dist1Id, dist1Type;
                if (type === 'side') {
                    dist1Type = 'angle';
                    dist1Id = angles[Math.floor(Math.random() * angles.length)];
                } else {
                    dist1Type = 'side';
                    dist1Id = sides[Math.floor(Math.random() * sides.length)];
                }
                const distractor1 = { id: dist1Id, type: dist1Type, correct: false };

                let dist2Id;
                if (type === 'side') {
                    do { dist2Id = sides[Math.floor(Math.random() * sides.length)]; } while (dist2Id === targetId);
                } else {
                    do { dist2Id = angles[Math.floor(Math.random() * angles.length)]; } while (dist2Id === targetId);
                }
                const distractor2 = { id: dist2Id, type: type, correct: false };

                const currentOptions = [correctOption, distractor1, distractor2].sort(() => Math.random() - 0.5);

                setDrillTarget({ id: targetId, type });
                setOptions(currentOptions);
                setFeedback('');
                setFeedbackType('neutral');
            };

            const checkDrillAnswer = (selectedOption) => {
                if (selectedOption.correct) {
                    const newStreak = streak + 1;
                    setStreak(newStreak);
                    if (newStreak >= targetStreak) {
                        setFeedback('מושלם! סיימת בהצלחה!');
                        setFeedbackType('success');
                        setTimeout(() => {
                            setFeedback('');
                            setDrillTarget(null); // Clear previous highlighting
                            setMode('properties');
                        }, 2000);
                    } else {
                        setFeedback('כל הכבוד!');
                        setFeedbackType('success');
                        setTimeout(generateDrill, 1000);
                    }
                } else {
                    setStreak(0);
                    setFeedbackType('error');

                    if (selectedOption.type !== drillTarget.type) {
                        if (drillTarget.type === 'side') {
                            setFeedback('שים לב: סימנתי קו (צלע - 2 אותיות), אבל בחרת זווית.');
                        } else {
                            setFeedback('שים לב: סימנתי פינה (זווית - 3 אותיות), אבל בחרת צלע.');
                        }
                    } else {
                        setFeedback('בחרת שם לא נכון. תסתכל שוב על האותיות.');
                    }
                }
            };

            const handleBasicEquation = () => {
                if (parseInt(inputValue) === 70) {
                    setFeedback('בול! x שווה 70.');
                    setFeedbackType('success');
                    setTimeout(() => { setStep(4); setFeedback(''); }, 1500);
                } else {
                    setFeedback('לא מדויק. 140 לחלק ל-2 זה...');
                    setFeedbackType('error');
                }
            };

            const handleAdvancedEquation = () => {
                if (parseInt(inputValue) === 40) {
                    setFeedback('אלופה! x שווה 40.');
                    setFeedbackType('success');
                    setTimeout(() => { setStep(4); setFeedback(''); }, 1500);
                } else {
                    setFeedback('נסי שוב. 160 לחלק ל-4...');
                    setFeedbackType('error');
                }
            };

            useEffect(() => {
                if (mode === 'intro_drill') generateDrill();
            }, [mode]);

            const renderOptionText = (opt) => {
                if (opt.type === 'angle') {
                    return (
                        <span className="flex items-center justify-center gap-2 ltr-text" style={{direction: 'ltr'}}>
                            <span className="text-blue-500 text-3xl">∢</span>
                            {opt.id}
                        </span>
                    );
                }
                return <span className="ltr-text" style={{direction: 'ltr'}}>{opt.id}</span>;
            };

            return (
                <div className="h-full w-full flex flex-col relative overflow-hidden">

                    {/* Header Strip */}
                    <div className="glass-card mb-4 p-4 flex justify-between items-center z-10 mx-4 mt-4 rounded-2xl">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-tr from-blue-500 to-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
                                {mode.includes('intro') ? <Ruler size={24} /> : (mode === 'properties' ? <Trophy size={24} /> : <Calculator size={24} />)}
                            </div>
                            <h1 className="text-2xl font-black text-slate-800 tracking-tight hidden md:block">
                                {mode.includes('intro') && 'אימון זיהוי: צלע או זווית?'}
                                {mode === 'properties' && 'חלק 2: הכרת המשולש'}
                                {mode.includes('solve') && 'חלק 3: פתרון תרגילים'}
                            </h1>
                        </div>
                        {mode !== 'intro_expl' && (
                            <button 
                                onClick={() => {setMode('intro_expl'); setStep(0); setStreak(0);}} 
                                className="btn-3d flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 shadow-sm px-4 py-3 rounded-xl"
                            >
                                <RotateCcw size={18} />
                                <span className="hidden md:inline">התחלה מחדש</span>
                            </button>
                        )}
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6">
                        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 min-h-[600px]">

                            {/* Left Panel: Interaction */}
                            <div className="flex-1 glass-card rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden">

                                {/* 1. Intro Explanation */}
                                {mode === 'intro_expl' && (
                                    <div className="flex flex-col h-full justify-between fade-in">
                                        <div className="text-center space-y-2 mb-8">
                                            <h2 className="text-4xl font-black text-slate-800 tracking-tight">איך מבדילים?</h2>
                                            <p className="text-slate-500 text-lg font-medium">בגיאומטריה חשוב לדעת מה אנחנו רואים</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 md:gap-8 flex-1">
                                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform cursor-default">
                                                <div className="bg-blue-50 p-5 rounded-2xl mb-4">
                                                    <Ruler size={40} className="text-blue-600" />
                                                </div>
                                                <h3 className="text-2xl font-black text-slate-800 mb-2">צלע</h3>
                                                <p className="text-center text-slate-500 font-medium leading-relaxed">
                                                    קו ישר בין שתי נקודות.
                                                    <br/>
                                                    מסומן ב-2 אותיות.
                                                </p>
                                                <div className="mt-6 bg-slate-50 px-6 py-3 rounded-xl font-mono font-bold text-xl text-blue-600 border border-slate-200">AB</div>
                                            </div>

                                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100 flex flex-col items-center justify-center hover:scale-[1.02] transition-transform cursor-default">
                                                <div className="bg-purple-50 p-5 rounded-2xl mb-4">
                                                    <Eye size={40} className="text-purple-600" />
                                                </div>
                                                <h3 className="text-2xl font-black text-slate-800 mb-2">זווית</h3>
                                                <p className="text-center text-slate-500 font-medium leading-relaxed">
                                                    הפינה שבין שני קווים.
                                                    <br/>
                                                    מסומנת ב-3 אותיות.
                                                </p>
                                                <div className="mt-6 bg-slate-50 px-6 py-3 rounded-xl font-mono font-bold text-xl text-purple-600 border border-slate-200" style={{direction:'ltr'}}>∢ABC</div>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={() => setMode('intro_drill')} 
                                            className="btn-3d w-full bg-slate-800 text-white text-2xl font-bold py-6 rounded-2xl shadow-xl shadow-slate-300 mt-8 flex items-center justify-center gap-3 group"
                                        >
                                            מתחילים אימון (10 רצוף) 
                                            <ArrowRight className="group-hover:-translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                )}

                                {/* 2. Drill Mode */}
                                {mode === 'intro_drill' && (
                                    <div className="flex flex-col h-full fade-in">
                                        <div className="mb-8">
                                            <div className="flex justify-between items-end mb-3">
                                                <span className="text-slate-400 font-bold tracking-wider text-sm uppercase">התקדמות</span>
                                                <span className="text-3xl font-black text-blue-600">{streak}/{targetStreak}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner">
                                                <div 
                                                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-500 ease-out shadow-lg"
                                                    style={{ width: ((streak / targetStreak) * 100) + "%" }}
                                                ></div>
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-black text-center mb-8 text-slate-800">מה מסומן באדום בציור?</h2>

                                        <div className="flex flex-col gap-4 flex-1 justify-center max-w-md mx-auto w-full">
                                            {options.map((option, idx) => (
                                                <button 
                                                    key={idx}
                                                    onClick={() => checkDrillAnswer(option)} 
                                                    className="btn-3d group relative bg-white border border-slate-200 shadow-md p-6 rounded-2xl transition-all hover:border-blue-400"
                                                >
                                                    <div className="text-4xl font-mono font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                                                        {renderOptionText(option)}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 3. Properties Transition */}
                                {mode === 'properties' && (
                                    <div className="flex flex-col h-full items-center justify-center text-center space-y-8 fade-in">
                                        <div className="bg-green-50 p-8 rounded-full shadow-2xl shadow-green-100 animate-bounce">
                                            <Trophy size={80} className="text-green-500" />
                                        </div>
                                        <h2 className="text-4xl font-black text-slate-800">מעולה! עברת לחלק המתקדם</h2>

                                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl text-right w-full max-w-lg">
                                            <h3 className="text-2xl font-black text-slate-800 mb-6 border-b border-slate-100 pb-4">תזכורת: משולש שווה שוקיים</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-4 text-xl font-medium text-slate-600 bg-slate-50 p-4 rounded-xl">
                                                    <div className="bg-green-100 p-1 rounded-full"><Check size={20} className="text-green-600" /></div>
                                                    השוקיים שוות באורך (מסומנות בקו)
                                                </li>
                                                <li className="flex items-center gap-4 text-xl font-medium text-slate-600 bg-slate-50 p-4 rounded-xl">
                                                    <div className="bg-green-100 p-1 rounded-full"><Check size={20} className="text-green-600" /></div>
                                                    זוויות הבסיס שוות זו לזו בדיוק
                                                </li>
                                            </ul>
                                        </div>

                                        <button 
                                            onClick={() => setMode('solve_basic')} 
                                            className="btn-3d bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold py-5 px-16 rounded-2xl shadow-xl shadow-orange-200 mt-4"
                                        >
                                            בוא נפתור תרגיל!
                                        </button>
                                    </div>
                                )}

                                {/* 4. Solver Mode */}
                                {(mode === 'solve_basic' || mode === 'solve_advanced') && (
                                    <div className="flex flex-col h-full fade-in relative">
                                        {/* Step 0: Setup */}
                                        {step === 0 && (
                                            <div className="flex flex-col justify-center h-full space-y-8">
                                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
                                                    <h3 className="font-black text-slate-400 text-sm uppercase tracking-widest mb-4">הנתונים שלנו</h3>
                                                    <div className="space-y-4">
                                                        <p className="text-2xl font-medium text-slate-700 flex items-center gap-3">
                                                            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</span>
                                                            זווית הראש היא <span className="font-mono font-bold text-purple-600 text-3xl mx-2" style={{direction: 'ltr'}}>{mode === 'solve_basic' ? '40°' : '20°'}</span>
                                                        </p>
                                                        <p className="text-2xl font-medium text-slate-700 flex items-center gap-3">
                                                            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</span>
                                                            זוויות הבסיס שוות ומסומנות ב-<span className="font-mono font-bold text-green-600 text-3xl mx-2">x</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <div className="text-3xl font-black text-slate-800 mb-8">כמה שווה זווית הבסיס?</div>
                                                    <button onClick={() => setStep(1)} className="btn-3d bg-blue-600 text-white w-full py-5 rounded-2xl text-2xl font-bold shadow-xl shadow-blue-200">
                                                        בניית משוואה
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 1: Combine X */}
                                        {step === 1 && (
                                            <div className="flex flex-col justify-center h-full space-y-8 slide-up">
                                                <div className="text-center">
                                                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide">שלב 1</span>
                                                    <h3 className="text-3xl font-black mt-3 text-slate-800">איך מחברים את ה-Xים?</h3>
                                                </div>

                                                <div className="bg-slate-800 text-white p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                                    <div className="text-3xl font-mono tracking-wider" style={{direction: 'ltr'}}>
                                                        <span className="text-green-400 font-bold border-b-4 border-green-500/30 pb-1">{mode === 'solve_basic' ? 'x + x' : '2x + 2x'}</span>
                                                        <span> + {mode === 'solve_basic' ? '40' : '20'} = 180</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-6">
                                                    <button onClick={() => {setFeedback('נכון מאוד! מחברים מקדמים.'); setFeedbackType('success'); setTimeout(() => {setStep(2); setFeedback('')}, 1000);}} className="btn-3d bg-white border-2 border-slate-100 hover:border-green-500 p-6 rounded-2xl text-3xl font-bold font-mono transition-colors shadow-lg">
                                                        {mode === 'solve_basic' ? '2x' : '4x'}
                                                    </button>
                                                    <button onClick={() => {setFeedback('טעות. כשמחברים איקסים לא מקבלים חזקה.'); setFeedbackType('error')}} className="btn-3d bg-white border-2 border-slate-100 hover:border-red-500 p-6 rounded-2xl text-3xl font-bold font-mono transition-colors shadow-lg text-slate-400">
                                                        {mode === 'solve_basic' ? 'x²' : '2x²'}
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2: Move Number */}
                                        {step === 2 && (
                                            <div className="flex flex-col justify-center h-full space-y-8 slide-up">
                                                <div className="text-center">
                                                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide">שלב 2</span>
                                                    <h3 className="text-3xl font-black mt-3 text-slate-800">מעבירים אגפים</h3>
                                                </div>

                                                <div className="bg-slate-800 text-white p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                                    <div className="text-3xl font-mono mb-4 tracking-wider" style={{direction: 'ltr'}}>
                                                        {mode === 'solve_basic' ? '2x' : '4x'} = 180 - <span className="text-yellow-400 font-bold">{mode === 'solve_basic' ? '40' : '20'}</span>
                                                    </div>
                                                    <div className="text-base font-bold text-slate-400 uppercase tracking-widest">כמה זה יוצא?</div>
                                                </div>

                                                <button onClick={() => setStep(3)} className="btn-3d bg-yellow-500 text-white py-5 rounded-2xl text-4xl font-bold font-mono shadow-xl shadow-yellow-200">
                                                    {mode === 'solve_basic' ? '140' : '160'}
                                                </button>
                                            </div>
                                        )}

                                        {/* Step 3: Division */}
                                        {step === 3 && (
                                            <div className="flex flex-col justify-center h-full space-y-8 slide-up">
                                                <div className="text-center">
                                                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide">שלב 3</span>
                                                    <h3 className="text-3xl font-black mt-3 text-slate-800">מחלקים ומסיימים</h3>
                                                </div>

                                                <div className="bg-slate-800 text-white p-6 rounded-2xl text-center shadow-inner">
                                                    <div className="text-3xl font-mono tracking-wider" style={{direction: 'ltr'}}>
                                                        {mode === 'solve_basic' ? '2x = 140' : '4x = 160'}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center gap-4 bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                                                    <span className="text-3xl font-bold text-slate-400 font-mono">x =</span>
                                                    <input 
                                                        type="number" 
                                                        value={inputValue}
                                                        onChange={(e) => setInputValue(e.target.value)}
                                                        className="w-32 text-center text-4xl font-bold p-2 border-b-4 border-blue-500 bg-transparent outline-none font-mono text-slate-800 placeholder-slate-200"
                                                        placeholder="?"
                                                    />
                                                </div>

                                                <button 
                                                    onClick={mode === 'solve_basic' ? handleBasicEquation : handleAdvancedEquation}
                                                    className="btn-3d bg-green-500 text-white w-full py-5 rounded-2xl text-2xl font-bold shadow-xl shadow-green-200"
                                                >
                                                    בדיקת תשובה
                                                </button>
                                            </div>
                                        )}

                                        {/* Step 4: Success */}
                                        {step === 4 && (
                                            <div className="flex flex-col justify-center h-full items-center text-center space-y-8 scale-in">
                                                <div className="bg-green-100 p-8 rounded-full shadow-2xl shadow-green-100">
                                                    <Check size={80} className="text-green-600" />
                                                </div>
                                                <div>
                                                    <h2 className="text-5xl font-black text-slate-800 mb-4">כל הכבוד!</h2>
                                                    <p className="text-2xl text-slate-500 font-medium">
                                                        {mode === 'solve_basic' ? 'מצאת שכל זווית בסיס היא 70 מעלות.' : 'מצאת ש-x הוא 40, ולכן הזווית היא 80 מעלות.'}
                                                    </p>
                                                </div>
                                                <button 
                                                    onClick={() => {
                                                        setInputValue('');
                                                        setStep(0);
                                                        setMode(mode === 'solve_basic' ? 'solve_advanced' : 'intro_expl');
                                                        if(mode === 'solve_advanced') setStreak(0);
                                                    }} 
                                                    className="btn-3d bg-slate-800 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl flex items-center gap-4 group"
                                                >
                                                    {mode === 'solve_basic' ? 'לתרגיל הבא (מתקדם)' : 'סיימנו! חזרה להתחלה'} 
                                                    <ArrowRight className="group-hover:-translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Feedback Toast Area */}
                                {feedback && (
                                    <div className="absolute top-20 left-0 right-0 flex justify-center pointer-events-none z-50">
                                        <div className={
                                            "px-8 py-4 rounded-2xl shadow-2xl font-bold text-xl flex items-center gap-3 animate-bounce backdrop-blur-md " +
                                            (feedbackType === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white')
                                        }>
                                            {feedbackType === 'error' ? <X size={24} /> : <Check size={24} />}
                                            {feedback}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Panel: Visuals */}
                            <div className="w-full md:w-[420px] bg-white rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-slate-100 p-6 flex items-center justify-center relative bg-gradient-to-b from-white to-slate-50">
                                <TriangleVisual mode={mode} drillTarget={drillTarget} step={step} inputValue={inputValue} />
                            </div>

                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>


    {
    id: "masash-class-g8"
    title: "משולש שווה שוקיים הצגה בכיתה",
    grade: 8,
    category: "geometry",
    premium: true,
    emoji: "🔷",
    description: "הצגה אינטראקטיבית לכיתה עם שאלות וזמן",
    html: import React, { useState, useEffect } from 'react';
import { Trophy, Clock, CheckCircle, XCircle, ChevronRight, ChevronLeft, Calculator, Ruler, Target, Home, RefreshCw, Brain, Lightbulb } from 'lucide-react';

const IsoscelesTriangleGame = () => {
  const [gameState, setGameState] = useState('welcome'); // welcome, learn, quiz, summary
  const [currentLevel, setCurrentLevel] = useState(0);
  const [learnStep, setLearnStep] = useState(0); 
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState('bg-slate-900');
  const [showTip, setShowTip] = useState(true); // Default to true for better visibility as requested

  // --- CONTENT DATA ---
  const levels = [
    // --- PART 0: THE 180 RULE (WARM UP) ---
    {
      type: 'learn',
      title: 'חימום: סכום זוויות במשולש',
      steps: [
        {
          text: 'לפני שנתחיל עם משולש שווה שוקיים, נזכור כלל ברזל.',
          highlight: 'none'
        },
        {
          text: 'סכום הזוויות בכל משולש בעולם הוא תמיד 180 מעלות.',
          highlight: 'sum-rule-text'
        },
        {
          text: 'לדוגמה: אם זווית אחת היא 50°...',
          highlight: 'angle-50'
        },
        {
          text: 'והזווית השנייה היא 60°...',
          highlight: 'angle-60'
        },
        {
          text: 'אז הזווית השלישית חייבת להיות 70°, כי 50 + 60 + 70 = 180.',
          highlight: 'angle-70'
        }
      ],
      diagram: 'general-triangle',
      tip: 'טיפ: אם יש לכם שתי זוויות, תמיד אפשר למצוא את השלישית על ידי חיסור מ-180.'
    },

    // --- PART 1: DEFINITIONS ---
    {
      type: 'learn',
      title: 'מהו משולש שווה שוקיים?',
      steps: [
        {
          text: 'משולש שבו שתי צלעות שוות נקרא משולש שווה שוקיים (מש"ש).',
          highlight: 'legs-concept'
        },
        {
          text: 'הצלעות השוות נקראות "שוקיים".',
          highlight: 'legs-label'
        },
        {
          text: 'הצלע השלישית (למטה) נקראת "בסיס".',
          highlight: 'base-label'
        },
        {
          text: 'הזווית בין השוקיים היא "זווית הראש".',
          highlight: 'angle-head'
        },
        {
          text: 'הזוויות שליד הבסיס נקראות "זוויות הבסיס".',
          highlight: 'angles-base'
        }
      ],
      diagram: 'isosceles-def',
      tip: 'טיפ: חפשו תמיד את הסימון של הקווים הקטנים על הצלעות!'
    },

    // --- PART 2: BASE ANGLES RULE (ENHANCED) ---
    {
      type: 'learn',
      title: 'החוק החשוב ביותר!',
      steps: [
        {
          text: 'במשולש שווה שוקיים, זוויות הבסיס שוות זו לזו בדיוק.',
          highlight: 'angles-base-equal' // Will trigger pulse animation
        },
        {
          text: 'אם זווית בסיס אחת היא 65 מעלות...',
          highlight: 'angle-b-65'
        },
        {
          text: 'אז גם השנייה חייבת להיות 65 מעלות!',
          highlight: 'angle-c-65'
        },
        {
          text: 'שאלה: האם אפשר למצוא את זווית הראש?',
          highlight: 'angle-head-question'
        },
        {
          text: 'כן! זה בדיוק מה שאמרנו מקודם! סכום זוויות בכל משולש בעולם הוא 180.',
          highlight: 'sum-rule-recall'
        },
        {
          text: 'חישוב: 65 ועוד 65 זה 130. נחסר מ-180 ונקבל 50 מעלות.',
          highlight: 'angle-a-50'
        }
      ],
      diagram: 'isosceles-angles',
      tip: 'רואים זווית בסיס אחת? מיד תרשמו את אותו המספר גם בשנייה.'
    },

    // --- QUIZ BATCH 1: BASIC ANGLES ---
    {
      type: 'quiz',
      question: 'נתון משולש שווה שוקיים. אחת מזוויות הבסיס היא 70°. מה גודלה של זווית הבסיס השנייה?',
      options: ['110°', '70°', '40°', '20°'],
      correct: 1,
      explanation: 'זוויות הבסיס שוות זו לזו! אם אחת 70, גם השנייה 70.',
      diagramType: 'base-angles',
      angleB: '70°',
      angleC: '?',
      time: 15
    },
    {
      type: 'quiz',
      question: 'זווית הראש היא 40°. מה הגודל של כל אחת מזוויות הבסיס?',
      options: ['40° ו-40°', '140° ו-140°', '70° ו-70°', '60° ו-80°'],
      correct: 2,
      explanation: 'נחסר את הראש מ-180: 180 − 40 = 140. את התוצאה נחלק ב-2 כי זוויות הבסיס שוות.',
      diagramType: 'head-angle',
      angleA: '40°',
      angleB: '?',
      angleC: '?',
      time: 25
    },
    {
      type: 'quiz',
      question: 'האם משולש עם זוויות 50°, 60°, 70° יכול להיות משולש שווה שוקיים?',
      options: ['כן, בטח', 'לא, כי אין שתי זוויות שוות', 'רק אם הצלעות שוות', 'תלוי בגובה'],
      correct: 1,
      explanation: 'במשולש שווה שוקיים חייבות להיות שתי זוויות שוות (זוויות הבסיס). כאן כל הזוויות שונות.',
      diagramType: 'general-triangle-quiz',
      time: 20
    },

    // --- PART 3: THE SPECIAL LINE ---
    {
      type: 'learn',
      title: 'הקו המיוחד',
      steps: [
        {
          text: 'במשולש שווה שוקיים יש קו אחד שיוצא מהראש אל הבסיס.',
          highlight: 'altitude-line-only'
        },
        {
          text: 'במשולש שווה שוקיים, הקו הזה הוא כולם ביחד. הוא גם גובה, גם תיכון וגם חוצה זווית.',
          highlight: 'combo-all'
        },
        {
          text: 'גובה: יוצר 90 מעלות עם הבסיס.',
          highlight: 'altitude-focus'
        },
        {
          text: 'תיכון: חוצה את הבסיס לשני חלקים שווים בדיוק.',
          highlight: 'median-focus'
        },
        {
          text: 'חוצה זווית: חוצה את זווית הראש לשתי זוויות שוות.',
          highlight: 'bisector-focus'
        }
      ],
      diagram: 'altitude',
      tip: 'זכרו: במש"ש - הכל כלול! קו אחד שעושה את כל העבודה.'
    },

    // --- QUIZ BATCH 2: THE LINE PROPERTIES ---
    {
      type: 'quiz',
      question: 'נתון ש-AD הוא גובה לבסיס במשולש שווה שוקיים. אורך כל הבסיס BC הוא 12 ס"מ. מה האורך של BD?',
      options: ['12 ס"מ', '6 ס"מ', '3 ס"מ', '4 ס"מ'],
      correct: 1,
      explanation: 'הגובה הוא גם תיכון! הוא חוצה את הבסיס בדיוק לחצי. 12 לחלק ל-2 זה 6.',
      diagramType: 'median',
      labelBase: '12',
      labelHalf: '?',
      time: 20
    },
    {
      type: 'quiz',
      question: 'נתון ש-AD הוא חוצה זווית הראש. זווית הראש כולה היא 80°. מה גודלה של זווית DAC?',
      options: ['80°', '40°', '100°', '20°'],
      correct: 1,
      explanation: 'במש"ש חוצה הזווית מחלק את זווית הראש בדיוק לשניים. 80 לחלק ל-2 שווה 40.',
      diagramType: 'bisector',
      angleA: '80°',
      angleHalf: '?',
      time: 15
    },

    // --- QUIZ BATCH 3: ADVANCED QUESTIONS (HIGH LEVEL) ---
    {
      type: 'quiz',
      question: 'שאלה למתקדמים: זווית הראש היא 30°. מהי הזווית בין הגובה לשוק (זווית BAD)?',
      options: ['15°', '30°', '75°', '90°'],
      correct: 0,
      explanation: 'הגובה הוא גם חוצה זווית! הוא לוקח את ה-30° ומחלק אותה ל-2. לכן נקבל 15°.',
      diagramType: 'bisector-calc',
      angleA: '30°',
      angleHalf: '?',
      time: 30
    },
    {
      type: 'quiz',
      question: 'אתגר חשיבה: זווית הבסיס היא 70°. AD הוא גובה לבסיס. חשבו את זווית DAC (חצי זווית הראש).',
      options: ['20°', '35°', '70°', '10°'],
      correct: 0,
      explanation: 'דרך א: זווית בסיס 70, לכן הבסיס השני גם 70, לכן הראש 40, לכן חצי ראש הוא 20. דרך ב: במשולש ישר: 180 − 90 − 70 = 20.',
      diagramType: 'combo-calc',
      angleB: '70°',
      angleHalf: '?',
      time: 40
    },
    {
      type: 'quiz',
      question: 'נתון: משולש שווה שוקיים. זווית הראש גדולה ב-30° מזווית הבסיס. נסמן זווית בסיס ב-x. מה המשוואה המתאימה?',
      options: ['x + x + x = 180', 'x + x + (x+30) = 180', '2x + 30 = 90', 'x + 30 = 180'],
      correct: 1,
      explanation: 'יש שתי זוויות בסיס שכל אחת מהן x, וזווית ראש שהיא x+30. סכום כולן יחד הוא 180.',
      diagramType: 'algebra',
      angleB: 'x',
      angleC: 'x',
      angleA: 'x+30',
      time: 45
    },
    {
      type: 'quiz',
      question: 'שאלת בונוס: היקף משולש שווה שוקיים הוא 40 ס"מ. אורך הבסיס 10 ס"מ. מה אורך כל שוק?',
      options: ['10 ס"מ', '15 ס"מ', '20 ס"מ', '30 ס"מ'],
      correct: 1,
      explanation: 'נוריד את הבסיס מההיקף: 40-10=30. המספר 30 מתחלק שווה בשווה בין שתי השוקיים. 30 לחלק ל-2 זה 15.',
      diagramType: 'perimeter',
      labelBase: '10',
      labelLeg: '?',
      time: 40
    }
  ];

  // --- ENGINE LOGIC ---
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0 && gameState === 'quiz' && !isAnswered) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isAnswered) {
      handleTimeUp();
    }
    return () => clearInterval(interval);
  }, [timer, timerActive, gameState, isAnswered]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setFeedbackColor('bg-red-900');
    setStreak(0);
  };

  const resetColors = () => {
    setFeedbackColor('bg-slate-900');
  };

  const startGame = () => {
    setGameState('learn');
    setCurrentLevel(0);
    setLearnStep(0);
    setScore(0);
    setStreak(0);
    resetColors();
    setShowTip(true); // Ensure tip is shown
  };

  const goHome = () => {
    setGameState('welcome');
    resetColors();
    setShowTip(true);
  };

  const nextStep = () => {
    const currentLvl = levels[currentLevel];

    // Step logic for Learn mode
    if (gameState === 'learn') {
      if (learnStep < currentLvl.steps.length - 1) {
        setLearnStep(prev => prev + 1);
        return;
      }
    }

    // Level Logic
    if (currentLevel + 1 < levels.length) {
      setCurrentLevel(prev => prev + 1);
      setLearnStep(0);
      setShowTip(true); // Reset tip

      const nextLvl = levels[currentLevel + 1];

      setIsAnswered(false);
      setSelectedAnswer(null);
      resetColors();

      if (nextLvl.type === 'quiz') {
        setGameState('quiz');
        setTimer(nextLvl.time || 20);
        setTimerActive(true);
      } else {
        setGameState('learn');
        setTimerActive(false);
      }
    } else {
      setGameState('summary');
    }
  };

  const prevStep = () => {
    if (gameState === 'learn' && learnStep > 0) {
      setLearnStep(prev => prev - 1);
    }
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    setTimerActive(false);

    const currentQ = levels[currentLevel];
    if (index === currentQ.correct) {
      setScore(prev => prev + 100 + (timer * 2));
      setStreak(prev => prev + 1);
      setFeedbackColor('bg-green-900');
    } else {
      setStreak(0);
      setFeedbackColor('bg-red-900');
    }
  };

  // --- GEOMETRY VISUAL COMPONENT (UPDATED WITH PRECISE ARCS) ---
  const TriangleVisual = ({ type, data, highlight }) => {
    // Canvas config
    const W = 300;
    const H = 260;

    // Vertices for Isosceles
    const A = { x: 150, y: 30 };
    const B = { x: 50, y: 230 };
    const C = { x: 250, y: 230 };
    const D = { x: 150, y: 230 }; // Midpoint

    // Vertices for General Triangle (50-60-70 example)
    const G_A = { x: 180, y: 30 };
    const G_B = { x: 50, y: 230 };
    const G_C = { x: 280, y: 230 };

    const isGeneral = type === 'general-triangle' || type === 'general-triangle-quiz';
    const top = isGeneral ? G_A : A;
    const left = isGeneral ? G_B : B;
    const right = isGeneral ? G_C : C;
    const mid = isGeneral ? {x: (left.x + right.x)/2, y: (left.y + right.y)/2} : D;

    // Helper: Calculate point on a line segment at a specific distance from start
    const getPointOnLine = (p1, p2, dist) => {
      const len = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      const ratio = dist / len;
      return {
        x: p1.x + (p2.x - p1.x) * ratio,
        y: p1.y + (p2.y - p1.y) * ratio
      };
    };

    // Helper: Create an Arc Path between two legs from a corner
    // corner: vertex point
    // p1: end point on leg 1 (must be calculated via getPointOnLine)
    // p2: end point on leg 2 (must be calculated via getPointOnLine)
    // sweep: 0 or 1 (direction)
    const getArcPath = (corner, leg1Node, leg2Node, radius, sweep) => {
      const start = getPointOnLine(corner, leg1Node, radius);
      const end = getPointOnLine(corner, leg2Node, radius);
    return "M " + start.x + " " + start.y + " A " + radius + " " + radius + " 0 0 " + sweep + " " + end.x + " " + end.y;
    };

    // Colors
    const colorStroke = "white";
    const colorHighlight = "#FACC15"; // Yellow
    const colorDim = "rgba(255,255,255,0.3)";

    // --- VISIBILITY LOGIC ---

    // Legs & Base Labels
    const showLegLabels = highlight === 'legs-label' || highlight === 'legs-concept';
    const showBaseLabel = highlight === 'base-label';
    const showLegs = highlight === 'legs' || highlight === 'legs-ticks' || showLegLabels;

    const isAdvancedType = type.includes('altitude') || type.includes('median') || type.includes('bisector') || type.includes('combo') || type.includes('algebra') || type.includes('perimeter');
    const isAdvancedHighlight = highlight === 'combo-all' || highlight === 'combo-calc' || highlight === 'altitude-line-only' || highlight === 'altitude-focus' || highlight === 'median-focus' || highlight === 'bisector-focus';

    const showAltitude = isAdvancedHighlight || isAdvancedType;

    const show90Deg = (highlight === 'combo-all' || highlight === 'altitude-focus' || type.includes('altitude') || type.includes('combo') || type.includes('calc') || type === 'algebra');
    const showMedianTicks = (highlight === 'combo-all' || highlight === 'median-focus' || type.includes('median') || type.includes('combo') || type.includes('perimeter'));
    const showBisectorArcs = (highlight === 'combo-all' || highlight === 'bisector-focus' || highlight === 'bisector-angles' || type.includes('bisector') || type.includes('calc') || type === 'algebra');

    const showAngleA = highlight === 'angle-head' || data.angleA || highlight === 'angle-70' || highlight === 'angle-a-50' || highlight === 'angle-head-question';
    const showAngleB = highlight === 'angles-base' || highlight === 'angles-base-equal' || data.angleB || highlight === 'angle-50' || highlight === 'angle-b-65' || highlight === 'angle-head-question' || highlight === 'sum-rule-recall';
    const showAngleC = highlight === 'angles-base' || highlight === 'angles-base-equal' || data.angleC || highlight === 'angle-60' || highlight === 'angle-c-65' || highlight === 'angle-head-question' || highlight === 'sum-rule-recall';

    const showLetters = !isGeneral; 

    // Animation trigger
    const isBaseAnglesHighlight = highlight === 'angles-base-equal' || highlight === 'angle-head-question';

    return (
      <div className="relative flex justify-center items-center my-4 h-80 w-full select-none" dir="ltr">
        <svg viewBox="0 0 300 280" className="w-full h-full max-w-md overflow-visible drop-shadow-2xl">

          {/* Main Triangle */}
          <path 
            d={"M" + top.x + " " + top.y + " L" + left.x + " " + left.y + " L" + right.x + " " + right.y + " Z"}
            fill="none" 
            stroke={highlight === 'none' ? colorStroke : ((showLegs || showBaseLabel || highlight === 'sum-rule-text') ? colorDim : colorStroke)} 
            strokeWidth="3" 
            strokeLinejoin="round"
          />

          {/* HIGHLIGHT: Legs */}
          {showLegs && !isGeneral && (
            <>
              <line x1={top.x} y1={top.y} x2={left.x} y2={left.y} stroke={colorHighlight} strokeWidth="6" strokeLinecap="round" />
              <line x1={top.x} y1={top.y} x2={right.x} y2={right.y} stroke={colorHighlight} strokeWidth="6" strokeLinecap="round" />
            </>
          )}

          {/* TEXT LABEL: "שוק" on legs */}
          {showLegLabels && !isGeneral && (
            <>
              <g transform={`translate(85, 130) rotate(-63)`}>
                 <text textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0px 2px 4px black'}}>שוק</text>
              </g>
              <g transform={`translate(215, 130) rotate(63)`}>
                 <text textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0px 2px 4px black'}}>שוק</text>
              </g>
            </>
          )}

          {/* HIGHLIGHT: Base */}
          {showBaseLabel && !isGeneral && (
            <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} stroke={colorHighlight} strokeWidth="6" strokeLinecap="round" />
          )}

          {/* TEXT LABEL: "בסיס" on base */}
          {showBaseLabel && !isGeneral && (
             <text x="150" y="220" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0px 2px 4px black'}}>בסיס</text>
          )}

          {/* Standard Isosceles Ticks */}
          {!isGeneral && (
            <>
              <line x1="95" y1="120" x2="105" y2="140" stroke={showLegs ? colorHighlight : "white"} strokeWidth="3" />
              <line x1="195" y1="140" x2="205" y2="120" stroke={showLegs ? colorHighlight : "white"} strokeWidth="3" />
            </>
          )}

          {/* THE SPECIAL LINE (Altitude AD) */}
          {showAltitude && (
            <line x1={top.x} y1={top.y} x2={mid.x} y2={mid.y} stroke="#EF4444" strokeWidth="3" strokeDasharray={highlight === 'combo-all' ? "0" : "6,4"} />
          )}

          {/* 90 DEGREE SYMBOL */}
          {show90Deg && !isGeneral && (
            <path d="M150 230 L150 215 L165 215 L165 230" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" strokeWidth="2" />
          )}

          {/* MEDIAN SYMBOLS (Correctly placed ON the segments) */}
          {showMedianTicks && !isGeneral && (
             <>
               <line x1="100" y1="222" x2="100" y2="238" stroke="#EF4444" strokeWidth="3" />
               <line x1="105" y1="222" x2="105" y2="238" stroke="#EF4444" strokeWidth="3" />
               <line x1="200" y1="222" x2="200" y2="238" stroke="#EF4444" strokeWidth="3" />
               <line x1="205" y1="222" x2="205" y2="238" stroke="#EF4444" strokeWidth="3" />
             </>
          )}

          {/* BISECTOR SYMBOLS (Precise Arcs) */}
          {showBisectorArcs && !isGeneral && (
            <>
               {/* Left Half Arc */}
               <path 
                 d={getArcPath(top, left, mid, 35, 0)} 
                 fill="none" 
                 stroke="#EF4444" 
                 strokeWidth="2" 
               />
               {/* Right Half Arc */}
               <path 
                 d={getArcPath(top, mid, right, 35, 0)} 
                 fill="none" 
                 stroke="#EF4444" 
                 strokeWidth="2" 
               />
               {/* Dots */}
               <circle cx="142" cy="60" r="3" fill="#EF4444" />
               <circle cx="158" cy="60" r="3" fill="#EF4444" />
            </>
          )}

          {/* LETTERS A, B, C, D */}
          {showLetters && (
            <>
              <text x={top.x} y={top.y - 15} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">A</text>
              <text x={left.x - 25} y={left.y + 10} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">B</text>
              <text x={right.x + 25} y={right.y + 10} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">C</text>
              {showAltitude && <text x={mid.x} y={mid.y + 30} textAnchor="middle" fill="#EF4444" fontSize="20" fontWeight="bold">D</text>}
            </>
          )}

          {/* --- PRECISE ANGLES & ARCS --- */}

          {/* Head Angle Arc (Dynamic) */}
          {showAngleA && (
            <>
               <path 
                 d={getArcPath(top, left, right, 40, 0)} 
                 fill="none" 
                 stroke={highlight === 'angle-head' ? colorHighlight : "#FACC15"} 
                 strokeWidth={highlight === 'angle-head-question' ? "4" : "3"}
                 className={highlight === 'angle-head-question' ? "animate-pulse" : ""}
                 opacity="0.9" 
               />
               <text x={top.x} y={top.y + 60} textAnchor="middle" fill={highlight === 'angle-head-question' ? "#ffffff" : "#FACC15"} fontSize="20" fontWeight="bold">
                 {data.angleA || (highlight === 'angle-70' ? '70°' : (highlight === 'angle-a-50' ? '50°' : (highlight === 'angle-head-question' ? '?' : '')))}
               </text>
            </>
          )}

          {/* Bisected Angle Values */}
          {data.angleHalf && (
            <>
              <text x={top.x - 25} y={top.y + 80} textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold">{data.angleHalf}</text>
              <text x={top.x + 25} y={top.y + 80} textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold">{data.angleHalf}</text>
            </>
          )}

          {/* Left Angle Arc (Dynamic) */}
          {showAngleB && (
            <>
              <path 
                 d={getArcPath(left, right, top, 30, 0)} 
                 fill="none" 
                 stroke={highlight === 'angles-base' || highlight === 'angles-base-equal' ? colorHighlight : "#FACC15"} 
                 strokeWidth={isBaseAnglesHighlight ? "4" : "3"}
                 className={isBaseAnglesHighlight ? "animate-pulse" : ""}
              />
              <text x={left.x + 45} y={left.y - 15} textAnchor="middle" fill="#FACC15" fontSize="20" fontWeight="bold">
                {data.angleB || (highlight === 'angle-50' ? '50°' : (highlight === 'angle-b-65' || highlight === 'angle-c-65' || highlight === 'angle-head-question' || highlight === 'sum-rule-recall' || highlight === 'angle-a-50' ? '65°' : ''))}
              </text>
            </>
          )}

          {/* Right Angle Arc (Dynamic) - FIXED ORIENTATION */}
          {showAngleC && (
            <>
              {/* FIXED: Using symmetric logic to Angle B. From Leg to Base with Sweep 0 ensures internal corner arc */}
              <path 
                 d={getArcPath(right, top, left, 30, 0)} 
                 fill="none" 
                 stroke={highlight === 'angles-base' || highlight === 'angles-base-equal' ? colorHighlight : "#FACC15"} 
                 strokeWidth={isBaseAnglesHighlight ? "4" : "3"}
                 className={isBaseAnglesHighlight ? "animate-pulse" : ""}
              />
              <text x={right.x - 45} y={right.y - 15} textAnchor="middle" fill="#FACC15" fontSize="20" fontWeight="bold">
                {data.angleC || (highlight === 'angle-60' ? '60°' : (highlight === 'angle-c-65' || highlight === 'angle-head-question' || highlight === 'sum-rule-recall' || highlight === 'angle-a-50' ? '65°' : ''))}
              </text>
            </>
          )}

          {/* Labels for Quiz Data */}
          {data.labelBase && (
            <text x="150" y="260" textAnchor="middle" fill="#38BDF8" fontSize="22" fontWeight="bold">{data.labelBase}</text>
          )}
          {data.labelHalf && (
            <text x="100" y="210" textAnchor="middle" fill="#EF4444" fontSize="22" fontWeight="bold">{data.labelHalf}</text>
          )}
          {data.labelLeg && (
             <text x="80" y="120" textAnchor="middle" fill="#FACC15" fontSize="22" fontWeight="bold">{data.labelLeg}</text>
          )}

        </svg>
      </div>
    );
  };

  return (
    <div dir="rtl" className={`min-h-screen transition-colors duration-500 ${feedbackColor} text-white font-sans flex flex-col items-center p-4 overflow-hidden relative`}>

      {/* HOME BUTTON */}
      <button 
        onClick={goHome} 
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full z-50 transition-all shadow-lg border border-white/20"
        title="חזור להתחלה (איפוס)"
      >
        <Home className="w-6 h-6 text-white" />
      </button>

      {/* HEADER / SCOREBOARD */}
      {gameState !== 'welcome' && (
        <div className="w-full max-w-5xl flex justify-between items-center bg-white/10 p-3 md:p-4 rounded-2xl backdrop-blur-sm mb-4 shadow-lg border border-white/20 mt-12 md:mt-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl">
              <Trophy className="text-yellow-400 w-6 h-6" />
              <span className="text-2xl font-bold font-mono" dir="ltr">{score}</span>
            </div>
            {gameState === 'quiz' && (
              <div className={`flex items-center gap-2 text-2xl font-bold px-4 py-2 rounded-xl border-2 ${timer < 10 ? 'bg-red-500/50 border-red-500 animate-pulse' : 'bg-blue-500/30 border-blue-400'}`}>
                <Clock className="w-5 h-5" />
                <span dir="ltr">{timer}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">רצף תשובות</span>
            <div className="flex gap-1 h-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i < streak ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-gray-600'}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WELCOME SCREEN */}
      {gameState === 'welcome' && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-in fade-in zoom-in duration-500 text-center">
          <div className="bg-gradient-to-tr from-blue-600 to-purple-600 p-8 rounded-full mb-8 shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-bounce-slow">
             <Ruler className="w-24 h-24 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 mb-6 leading-tight drop-shadow-sm">
            משולשים ונהנים
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-2xl leading-relaxed font-light">
            מוכנים? נתחיל מהבסיס ונגיע עד לשאלות המכשילות ביותר!
          </p>
          <button 
            onClick={startGame}
            className="group relative px-16 py-6 bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-3xl md:text-4xl font-black rounded-3xl shadow-[0_10px_0_rgb(161,98,7)] active:shadow-[0_4px_0_rgb(161,98,7)] active:translate-y-2 transition-all"
          >
            5 דקות ומסיימים
          </button>
        </div>
      )}

      {/* LEARNING SLIDE */}
      {gameState === 'learn' && (
        <div className="flex flex-col items-center max-w-6xl w-full h-full flex-1">
          <div className="bg-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-3xl w-full border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 items-stretch h-full">

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-600/20">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">{levels[currentLevel].title}</h2>
              </div>

              <div className="flex-1 space-y-4 relative">
                {levels[currentLevel].steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`transform transition-all duration-500 p-4 rounded-xl border-r-4 ${
                      idx === learnStep 
                        ? 'bg-white/10 border-yellow-400 translate-x-0 opacity-100 scale-100' 
                        : idx < learnStep 
                          ? 'bg-black/20 border-green-500/50 opacity-60 scale-95'
                          : 'opacity-0 translate-y-4 absolute top-0 w-full pointer-events-none'
                    }`}
                  >
                    <div className="flex gap-3">
                      <Target className={`w-6 h-6 mt-1 flex-shrink-0 ${idx === learnStep ? 'text-yellow-400' : 'text-green-500'}`} />
                      <p className={`text-2xl leading-relaxed ${idx === learnStep ? 'font-bold text-white' : 'font-normal text-gray-300'}`}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 pt-4 border-t border-white/10">
                <button 
                  onClick={prevStep}
                  disabled={learnStep === 0}
                  className={`p-4 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-2 ${learnStep === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white/5 hover:bg-white/10'}`}
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                  חזור
                </button>

                <button 
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-l from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-2xl font-bold py-4 rounded-xl shadow-xl shadow-blue-900/30 transition-all flex justify-center items-center gap-3 transform active:scale-95"
                >
                  {learnStep < levels[currentLevel].steps.length - 1 ? 'המשך הסבר' : 'הבנתי, לתרגול!'}
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-black/20 rounded-3xl p-4 border border-white/5 shadow-inner">
               <TriangleVisual 
                 type={levels[currentLevel].diagram} 
                 data={{}} 
                 highlight={levels[currentLevel].steps[learnStep]?.highlight}
               />

               {/* NEW TOGGLEABLE TIP - STYLED BOLD AND READABLE */}
               <div className="mt-6 w-full max-w-sm">
                 <button 
                   onClick={() => setShowTip(!showTip)}
                   className="flex items-center justify-center gap-2 w-full py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200 rounded-xl transition-all"
                 >
                   <Lightbulb className="w-5 h-5" />
                   {showTip ? 'הסתר טיפ' : 'קבל טיפ'}
                 </button>
                 {showTip && (
                   <div className="mt-2 p-4 bg-black/60 rounded-xl border-2 border-yellow-500/50 animate-in fade-in slide-in-from-top-2 shadow-2xl">
                     <p className="font-serif text-2xl font-bold text-yellow-100 text-center tracking-wide leading-relaxed" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                       {levels[currentLevel].tip}
                     </p>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ SLIDE */}
      {gameState === 'quiz' && (
        <div className="flex flex-col items-center max-w-5xl w-full animate-in zoom-in-95 duration-300 flex-1 justify-center">
          <div className="bg-slate-800/80 p-6 md:p-10 rounded-3xl w-full border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-2 bg-gradient-to-l from-blue-400 to-purple-500 transition-all duration-1000 ease-linear" style={{width: `${(timer / levels[currentLevel].time) * 100}%`}}></div>

            {/* DIFFICULTY BADGE */}
            {levels[currentLevel].diagramType === 'algebra' || levels[currentLevel].diagramType === 'combo-calc' || levels[currentLevel].diagramType === 'perimeter' ? (
              <div className="absolute top-4 left-4 bg-purple-500/20 border border-purple-500 text-purple-200 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <Brain className="w-4 h-4" />
                רמה גבוהה
              </div>
            ) : null}

            <div className="flex flex-col md:flex-row gap-12 mt-6">
              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-right text-blue-100">
                  {levels[currentLevel].question}
                </h3>
                <div className="bg-black/20 rounded-2xl p-4 flex-1 flex items-center justify-center border border-white/5 min-h-[300px]">
                  <TriangleVisual 
                    type={levels[currentLevel].diagramType} 
                    data={{
                      angleA: levels[currentLevel].angleA,
                      angleB: levels[currentLevel].angleB,
                      angleC: levels[currentLevel].angleC,
                      labelBase: levels[currentLevel].labelBase,
                      labelHalf: levels[currentLevel].labelHalf,
                      labelLeg: levels[currentLevel].labelLeg,
                      angleHalf: levels[currentLevel].angleHalf,
                    }}
                    highlight={selectedAnswer === levels[currentLevel].correct ? 'success' : null}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4 justify-center">
                {levels[currentLevel].options.map((option, idx) => {
                  let btnClass = "p-6 rounded-2xl text-2xl font-bold transition-all transform hover:scale-105 shadow-lg border-2 relative overflow-hidden group ";

                  if (!isAnswered) {
                    btnClass += "bg-white/5 hover:bg-white/10 border-white/10 cursor-pointer";
                  } else {
                    if (idx === levels[currentLevel].correct) {
                      btnClass += "bg-green-600 border-green-400 text-white scale-105 shadow-[0_0_20px_rgba(74,222,128,0.4)]";
                    } else if (idx === selectedAnswer) {
                      btnClass += "bg-red-600 border-red-400 opacity-90";
                    } else {
                      btnClass += "bg-gray-800/50 opacity-40 border-transparent grayscale";
                    }
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={isAnswered}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        {/* FONT CHANGE FOR ANSWERS - Mono/Display */}
                        <span dir="ltr" className="font-mono text-3xl tracking-wider font-black">{option}</span>
                        {isAnswered && idx === levels[currentLevel].correct && <CheckCircle className="w-8 h-8 text-white animate-bounce" />}
                        {isAnswered && idx === selectedAnswer && idx !== levels[currentLevel].correct && <XCircle className="w-8 h-8 text-white animate-pulse" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {isAnswered && (
              <div className="mt-8 pt-6 border-t border-white/10 animate-in slide-in-from-bottom fade-in duration-500">
                <div className={`p-6 rounded-2xl mb-6 flex gap-4 items-start ${selectedAnswer === levels[currentLevel].correct ? 'bg-green-900/40 border border-green-500/30' : 'bg-red-900/40 border border-red-500/30'}`}>
                  {selectedAnswer === levels[currentLevel].correct 
                    ? <div className="bg-green-500 p-2 rounded-full mt-1"><CheckCircle className="text-white w-6 h-6" /></div>
                    : <div className="bg-red-500 p-2 rounded-full mt-1"><XCircle className="text-white w-6 h-6" /></div>
                  }
                  <div>
                    <span className="font-black text-2xl block mb-2">{selectedAnswer === levels[currentLevel].correct ? 'תשובה נכונה!' : 'טעות...'}</span>
                    <p className="text-2xl leading-relaxed opacity-90">{levels[currentLevel].explanation}</p>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full py-5 bg-white text-blue-900 font-black text-3xl rounded-2xl hover:bg-blue-50 shadow-[0_8px_0_rgb(203,213,225)] active:shadow-[0_4px_0_rgb(203,213,225)] active:translate-y-1 transition-all flex justify-center items-center gap-3"
                >
                  לשאלה הבאה
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUMMARY SCREEN */}
      {gameState === 'summary' && (
        <div className="flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 p-10 max-w-3xl bg-slate-800/90 backdrop-blur-md rounded-[3rem] shadow-2xl border border-white/20 mt-10">
          <div className="relative">
            <Trophy className="w-40 h-40 text-yellow-400 mb-6 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)] animate-bounce-slow" />
          </div>

          <h2 className="text-6xl font-black mb-6 text-white">סיימתם את האתגר!</h2>

          <div className="bg-white/10 p-8 rounded-3xl w-full mb-8 border border-white/10">
            <p className="text-2xl mb-4 text-blue-200">הניקוד הסופי של הכיתה</p>
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 font-mono tracking-tight" dir="ltr">
              {score}
            </div>
          </div>

          <button 
            onClick={startGame}
            className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-2 border border-white/10"
          >
            <RefreshCw className="w-6 h-6" />
            התחל משחק חדש
          </button>
        </div>
      )}

    </div>
  );
};

export default IsoscelesTriangleGame;
  },
];
  {
    id: "mashash-practice-g8",
    title: "תרגול לאחר הצגה בכיתה משולש שווה שוקיים",
    grade: 8,
    category: "geometry",
    premium: true,
    emoji: "📐",
    description: "תרגול משותף מתאים להקרנה בכיתה לאחר ההצגה",
    html:import React, { useState, useEffect } from 'react';
import { Heart, Trophy, Star, RefreshCw, Check, X, AlertCircle, Award } from 'lucide-react';

const StudentTriangleApp = () => {
  const [gameStatus, setGameStatus] = useState('start'); // start, playing, feedback, gameover, win
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(4);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // --- CONTENT: LEVELS & QUESTIONS (20 Questions total) ---
  const questions = [
    // --- Level 1: Basics ---
    {
      id: 1,
      text: 'במשולש שלפניך, איך נקראות הצלעות AB ו-AC המסומנות בצהוב?',
      options: ['בסיסים', 'שוקיים', 'גבהים', 'תיכונים'],
      correct: 1,
      explanation: 'הצלעות השוות במשולש שווה שוקיים נקראות "שוקיים".',
      diagram: 'isosceles-def',
      setupHighlight: 'legs-lines-only', 
      answerHighlight: 'legs-label' 
    },
    {
      id: 2,
      text: 'אם זווית הבסיס B היא 50°, כמה שווה זווית הבסיס C?',
      options: ['50°', '60°', '80°', '130°'],
      correct: 0,
      explanation: 'במשולש שווה שוקיים, זוויות הבסיס שוות זו לזו בדיוק.',
      diagram: 'isosceles-angles',
      angleB: '50°',
      angleC: '?',
      answerValues: { angleC: '50°' },
      setupHighlight: 'angle-b-val', 
      answerHighlight: 'angles-base-equal' 
    },
    {
      id: 3,
      text: 'איזה זוג זוויות תמיד שווה במשולש שווה שוקיים?',
      options: ['זווית הראש וזווית הבסיס', 'שתי זוויות הבסיס', 'זווית הראש והזווית החיצונית', 'אף תשובה לא נכונה'],
      correct: 1,
      explanation: 'התכונה המרכזית היא ששתי זוויות הבסיס (שליד הצלע השונה) שוות זו לזו.',
      diagram: 'base-angles',
      setupHighlight: 'none', 
      answerHighlight: 'angles-base-equal' 
    },
    // --- Level 2: Simple Calculation ---
    {
      id: 4,
      text: 'זווית הראש היא 40°. חשבו את גודל זווית הבסיס B.',
      options: ['40°', '140°', '70°', '100°'],
      correct: 2,
      explanation: 'נחשב: 180 פחות 40 זה 140. נחלק ב-2 (כי זוויות הבסיס שוות) ונקבל 70.',
      diagram: 'head-angle',
      angleA: '40°',
      angleB: '?',
      answerValues: { angleB: '70°', angleC: '70°' },
      setupHighlight: 'angle-head-val',
      answerHighlight: 'angles-base' 
    },
    {
      id: 5,
      text: 'זווית הבסיס היא 70°. מה גודל זווית הראש A?',
      options: ['70°', '40°', '20°', '110°'],
      correct: 1,
      explanation: 'אם זווית אחת 70, גם השנייה 70. ביחד הן 140. נשאר לראש: 180 פחות 140 שווה 40.',
      diagram: 'base-angles',
      angleB: '70°',
      angleA: '?',
      answerValues: { angleA: '40°' },
      setupHighlight: 'angle-b-val',
      answerHighlight: 'angle-head'
    },
    // --- Level 3: Intermediate Logic ---
    {
      id: 6,
      text: 'במשולש שווה שוקיים, זווית הראש שווה בדיוק לסכום שתי זוויות הבסיס יחד. מהו גודל זווית הראש?',
      options: ['90°', '45°', '60°', '120°'],
      correct: 0,
      explanation: 'נסמן זווית בסיס ב-x. לכן שתי זוויות בסיס הן x+x שזה 2x. זווית הראש שווה להן, כלומר גם 2x. סך הכל 4x = 180, לכן x = 45. זווית הראש היא פעמיים 45, כלומר 90 מעלות!',
      diagram: 'head-angle',
      angleB: 'x',
      angleC: 'x',
      angleA: '2x',
      answerValues: { angleB: '45°', angleA: '90°', angleC: '45°' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'angle-head'
    },
    {
      id: 7,
      text: 'היקף המשולש הוא 34 ס"מ. אורך שוק אחת הוא 10 ס"מ. מה אורך הבסיס?',
      options: ['14 ס"מ', '24 ס"מ', '12 ס"מ', '10 ס"מ'],
      correct: 0,
      explanation: 'במשולש שווה שוקיים שתי השוקיים שוות. לכן סכום השוקיים הוא 20. נוריד מההיקף (34 פחות 20) ונקבל בסיס 14.',
      diagram: 'isosceles-def',
      labelLeg: '10',
      labelBase: '?',
      answerValues: { labelBase: '14' },
      setupHighlight: 'legs-concept',
      answerHighlight: 'base-label-only'
    },
    // --- Level 4: The Special Line ---
    {
      id: 8,
      text: 'הקו AD הוא גובה לבסיס. מה עוד אנחנו יודעים עליו בוודאות?',
      options: ['הוא רק גובה', 'הוא גם תיכון וחוצה זווית', 'הוא מקביל לשוק', 'הוא שווה לבסיס'],
      correct: 1,
      explanation: 'במשולש שווה שוקיים הקו המיוחד שיורד מהראש אל הבסיס הוא הכל ביחד: גובה, תיכון וחוצה זווית.',
      diagram: 'altitude',
      setupHighlight: 'altitude-line-only', 
      answerHighlight: 'combo-all' 
    },
    {
      id: 9,
      text: 'הקו AD הוא גובה. נתון שחצי הבסיס BD שווה 6 ס"מ. מה אורכו של כל הבסיס BC?',
      options: ['12 ס"מ', '6 ס"מ', '3 ס"מ', '24 ס"מ'],
      correct: 0,
      explanation: 'הגובה הוא גם תיכון, ולכן הוא מחלק את הבסיס לשני חצאים שווים. אם חצי אחד הוא 6, כל הבסיס הוא 12.',
      diagram: 'median',
      labelHalf: '6',
      labelBase: '?',
      answerValues: { labelBase: '12' },
      setupHighlight: 'median-focus',
      answerHighlight: 'base-label-only'
    },
    {
      id: 10,
      text: 'נתון ש-BD הוא 4 ס"מ ו-DC הוא 4 ס"מ. איזה תפקיד ממלא הקו AD?',
      options: ['רק חוצה זווית', 'רק גובה', 'תיכון (וגם גובה וחוצה זווית)', 'סתם קו'],
      correct: 2,
      explanation: 'מכיוון שהקו חצה את הבסיס לשני חלקים שווים הוא תיכון. וכמו שאנחנו יודעים, תיכון הוא גם גובה וחוצה זווית.',
      diagram: 'median',
      labelHalf: '4',
      setupHighlight: 'median-text-only',
      answerHighlight: 'combo-all'
    },
    // --- Level 5: Advanced Calculations ---
    {
      id: 11,
      text: 'זווית BAD (בין הגובה לשוק) היא 25°. מה גודל זווית הבסיס B?',
      options: ['65°', '50°', '25°', '90°'],
      correct: 0,
      explanation: 'נסתכל על המשולש הקטן ABD: יש בו זווית של 90° (גובה) וזווית של 25°. 180 פחות 90 פחות 25 שווה 65.',
      diagram: 'bisector-calc',
      angleHalf: '25°',
      angleB: '?',
      answerValues: { angleB: '65°' },
      setupHighlight: 'bisector-focus',
      answerHighlight: 'angles-base'
    },
    {
      id: 12,
      text: 'זווית הבסיס היא 50°. הגובה AD הוא גם חוצה זווית. מה גודל זווית DAC (חצי מזווית הראש)?',
      options: ['50°', '40°', '80°', '25°'],
      correct: 1,
      explanation: 'אם בסיס אחד 50, גם השני 50. זווית הראש היא 80 (180 פחות 100). חצי מזווית הראש הוא 40.',
      diagram: 'bisector-calc',
      angleB: '50°',
      angleHalf: '?',
      answerValues: { angleHalf: '40°' },
      setupHighlight: 'angle-b-val',
      answerHighlight: 'bisector-focus'
    },
    {
      id: 13,
      text: 'נסמן את זווית הבסיס ב-x. זווית הראש גדולה פי 2 (2x). מה גודל זווית הבסיס במעלות?',
      options: ['36°', '72°', '45°', '90°'],
      correct: 2,
      explanation: 'המשוואה היא: x + x + 2x = 180. כלומר 4x = 180. אם נחלק ב-4 נקבל ש-x (זווית הבסיס) שווה ל-45 מעלות.',
      diagram: 'head-angle',
      angleB: 'x',
      angleA: '2x',
      answerValues: { angleB: '45°', angleA: '90°' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'angles-base'
    },
    {
      id: 14,
      text: 'אם זווית הראש במשולש שווה שוקיים היא 60°, איזה סוג משולש מתקבל?',
      options: ['שווה צלעות', 'ישר זווית', 'קהה זווית', 'שונה צלעות'],
      correct: 0,
      explanation: 'אם הראש 60, נשאר 120 לשתי זוויות הבסיס. נחלק ב-2 ונקבל 60 לכל זווית. משולש שכל זוויותיו 60° הוא משולש שווה צלעות!',
      diagram: 'isosceles-angles',
      angleA: '60°',
      angleB: '?',
      answerValues: { angleB: '60°', angleC: '60°' },
      setupHighlight: 'angle-head-val',
      answerHighlight: 'angles-base-equal'
    },
    {
      id: 15,
      text: 'הגובה AD חוצה את זווית הראש ל-2 זוויות של 20° כל אחת. מה גודל זווית הבסיס B?',
      options: ['70°', '40°', '20°', '50°'],
      correct: 0,
      explanation: 'אם חצי מזווית הראש הוא 20°, הראש כולו הוא 40°. נשארו 140° לשתי זוויות הבסיס, לכן כל אחת מהן היא 70°.',
      diagram: 'bisector-calc',
      angleHalf: '20°',
      angleB: '?',
      answerValues: { angleB: '70°' },
      setupHighlight: 'bisector-focus',
      answerHighlight: 'angles-base'
    },
    {
      id: 16,
      text: 'כל אחת מזוויות הבסיס היא x. זווית הראש A היא x + 30. מה גודל זווית הראש במעלות?',
      options: ['80°', '50°', '70°', '100°'],
      correct: 0,
      explanation: 'נחבר הכל: x + x + x + 30 = 180. כלומר 3x = 150. לכן x = 50. זווית הראש היא 50 ועוד 30, שזה 80.',
      diagram: 'head-angle',
      angleB: 'x',
      angleA: 'x + 30',
      answerValues: { angleB: '50°', angleA: '80°' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'angle-head'
    },
    {
      id: 16,
      text: 'כל אחת מזוויות הבסיס היא x. זווית הראש A היא x + 30. מה גודל זווית הראש במעלות?',
      options: ['80°', '50°', '70°', '100°'],
      correct: 0,
      explanation: 'נחבר הכל: x + x + x + 30 = 180. כלומר 3x = 150. לכן x = 50. זווית הראש היא 50 ועוד 30, שזה 80.',
      diagram: 'head-angle',
      angleB: 'x',
      angleA: 'x + 30',
      answerValues: { angleB: '50°', angleA: '80°' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'angle-head'
    },
    {
      id: 17,
      text: 'שתי שוקיים שוות באורכן ל-8 ס"מ כל אחת. היקף המשולש כולו הוא 22 ס"מ. AD הוא גובה לבסיס. מה אורך הקטע BD?',
      options: ['3 ס"מ', '6 ס"מ', '4 ס"מ', '8 ס"מ'],
      correct: 0,
      explanation: 'שתי שוקיים יחד הן 16. נוריד מההיקף 22 ונמצא שהבסיס כולו הוא 6. הגובה הוא גם תיכון ולכן חוצה את הבסיס בדיוק לחצי, לכן אורכו 3.',
      diagram: 'median',
      labelLeg: '8',
      labelBase: '?',
      labelHalf: '?',
      answerValues: { labelBase: '6', labelHalf: '3' },
      setupHighlight: 'legs-concept',
      answerHighlight: 'median-focus'
    },
    {
      id: 18,
      text: 'היקף המשולש הוא 40 ס"מ. כל שוק ארוכה ב-5 ס"מ מהבסיס. מה אורך הבסיס?',
      options: ['10 ס"מ', '15 ס"מ', '20 ס"מ', '5 ס"מ'],
      correct: 0,
      explanation: 'נסמן בסיס ב-x. השוקיים הן x+5 ו-x+5. נחבר: 3x + 10 = 40. כלומר 3x = 30, ואז x = 10.',
      diagram: 'isosceles-def',
      labelBase: 'x',
      labelLeg: 'x + 5',
      answerValues: { labelBase: '10' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'base-label-only'
    },
    {
      id: 19,
      text: 'אתגר המאסטר: הקו AD הוא תיכון (באורך 8 ס"מ). היקף המשולש הקטן ABD הוא 24 ס"מ. מה היקף המשולש הגדול ABC?',
      options: ['32 ס"מ', '16 ס"מ', '48 ס"מ', '40 ס"מ'],
      correct: 0,
      explanation: 'היקף ABD מורכב משוק, חצי בסיס, והתיכון (8). אם נוריד את התיכון, שוק + חצי בסיס = 16. היקף ABC כולל בדיוק פעמיים שוק ופעמיים חצי בסיס, לכן 16 כפול 2 שווה 32.',
      diagram: 'median',
      labelHalf: '?',
      answerValues: {}, // Focus is on the logic, keep visual simple
      setupHighlight: 'median-focus',
      answerHighlight: 'combo-all'
    },
    {
      id: 20,
      text: 'לסיום: זווית הבסיס קטנה ב-15° מזווית הראש. מה גודל זווית הבסיס במעלות?',
      options: ['50°', '65°', '80°', '55°'],
      correct: 3,
      explanation: 'זווית ראש x, זוויות בסיס x-15 ו-x-15. נחבר: 3x - 30 = 180. כלומר 3x = 210 ולכן הראש x=70. הבסיס קטן ב-15 ולכן הוא 55.',
      diagram: 'base-angles',
      angleA: 'x',
      angleB: 'x - 15',
      answerValues: { angleA: '70°', angleB: '55°', angleC: '55°' },
      setupHighlight: 'algebra-setup',
      answerHighlight: 'angles-base-equal'
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === questions[currentLevel].correct;
    setIsCorrect(correct);

    if (correct) {
      setScore(s => s + 100);
    } else {
      setLives(l => l - 1);
    }
    setGameStatus('feedback');
  };

  const nextQuestion = () => {
    if (lives === 0) {
      setGameStatus('gameover');
    } else if (currentLevel + 1 < questions.length) {
      setCurrentLevel(prev => prev + 1);
      setGameStatus('playing');
      setSelectedAnswer(null);
    } else {
      setGameStatus('win');
    }
  };

  const restartGame = () => {
    setGameStatus('start');
    setCurrentLevel(0);
    setScore(0);
    setLives(4);
    setSelectedAnswer(null);
  };

  // --- EXACT GEOMETRY ENGINE ---
  const TriangleVisual = ({ type, data, highlight, isFeedback }) => {
    // Canvas dimensions increased to allow generous spacing for texts
    const top = { x: 150, y: 40 };
    const left = { x: 50, y: 220 };
    const right = { x: 250, y: 220 };
    const mid = { x: 150, y: 220 };

    const getPointOnLine = (p1, p2, dist) => {
      const len = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      const ratio = dist / len;
      return { x: p1.x + (p2.x - p1.x) * ratio, y: p1.y + (p2.y - p1.y) * ratio };
    };

    const getArcPath = (corner, leg1Node, leg2Node, radius, sweep) => {
      const start = getPointOnLine(corner, leg1Node, radius);
      const end = getPointOnLine(corner, leg2Node, radius);
      return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 ${sweep} ${end.x} ${end.y}`;
    };

    // Style logic
    const showLegsLines = highlight === 'legs-lines-only' || highlight === 'legs-label' || highlight === 'legs-concept';
    const showLegsText = highlight === 'legs-label' || highlight === 'legs-concept';
    const showBaseLine = highlight === 'base-label' || highlight === 'base-label-only' || highlight === 'algebra-setup';
    const showBaseText = highlight === 'base-label';

    const showAltitudeLine = highlight === 'altitude-line-only' || highlight === 'combo-all' || highlight === 'altitude-focus' || highlight === 'median-focus' || highlight === 'bisector-focus' || type.includes('altitude') || type.includes('median') || type.includes('bisector') || type.includes('calc');
    const show90Deg = highlight === 'altitude-focus' || highlight === 'combo-all' || type.includes('altitude') || type.includes('calc');
    const showMedianTicks = highlight === 'median-focus' || highlight === 'combo-all' || highlight === 'median-text-only' || type.includes('median');
    const showBisector = highlight === 'bisector-focus' || highlight === 'combo-all';

    const showA = data.angleA || highlight === 'angle-head' || highlight === 'angle-head-val' || highlight === 'algebra-setup';
    const showB = data.angleB || highlight === 'angles-base' || highlight === 'angles-base-equal' || highlight === 'angle-b-val' || highlight === 'algebra-setup';
    const showC = data.angleC || highlight === 'angles-base' || highlight === 'angles-base-equal';
    const showExtA = data.extAngleA || highlight === 'ext-angle';
    const showExtB = data.extAngleB || highlight === 'ext-angle';

    const colorHighlight = "#FACC15";

    // Smooth pulse animation wrapper
    const feedbackAnimClass = isFeedback ? "animate-pulse drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" : "";
    const feedbackTransformStyle = isFeedback ? { transformBox: 'fill-box', transformOrigin: 'center' } : {};

    return (
      <svg viewBox="0 0 300 310" className={`w-full h-full drop-shadow-xl ${isFeedback ? 'transition-all duration-700' : ''}`} dir="ltr">
        {/* Main Shape */}
        <path d={`M${top.x} ${top.y} L${left.x} ${left.y} L${right.x} ${right.y} Z`} fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round" />

        {/* Ext Angle A (Top) */}
        {showExtA && (
          <g className={isFeedback && highlight.includes('ext') ? feedbackAnimClass : ""} style={feedbackTransformStyle}>
            <line x1={top.x} y1={top.y} x2={top.x} y2={top.y - 30} stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="4,4"/>
            <path d={getArcPath(top, left, {x: top.x, y: top.y-30}, 25, 1)} fill="none" stroke="#38BDF8" strokeWidth="3" />
            <text x={top.x - 30} y={top.y - 15} textAnchor="middle" fill="#38BDF8" fontSize="18" fontWeight="bold" style={{textShadow: '0 2px 4px black'}}>{data.extAngleA}</text>
          </g>
        )}

        {/* Ext Angle B (Bottom Left) */}
        {showExtB && (
          <g className={isFeedback && highlight.includes('ext') ? feedbackAnimClass : ""} style={feedbackTransformStyle}>
            <line x1={left.x} y1={left.y} x2={left.x - 35} y2={left.y} stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="4,4"/>
            <path d={getArcPath(left, {x: left.x-35, y: left.y}, top, 20, 1)} fill="none" stroke="#38BDF8" strokeWidth="3" />
            <text x={left.x - 30} y={left.y - 15} textAnchor="middle" fill="#38BDF8" fontSize="18" fontWeight="bold" style={{textShadow: '0 2px 4px black'}}>{data.extAngleB}</text>
          </g>
        )}

        {/* Legs Highlights */}
        {showLegsLines && (
          <g className={feedbackAnimClass} style={feedbackTransformStyle}>
            <line x1={top.x} y1={top.y} x2={left.x} y2={left.y} stroke={colorHighlight} strokeWidth="5" strokeLinecap="round" />
            <line x1={top.x} y1={top.y} x2={right.x} y2={right.y} stroke={colorHighlight} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {/* Legs Text */}
        {showLegsText && (
          <>
            <g transform={`translate(80, 130) rotate(-60)`} className="animate-in zoom-in duration-500">
               <text textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0 2px 4px black'}}>שוק</text>
            </g>
            <g transform={`translate(220, 130) rotate(60)`} className="animate-in zoom-in duration-500">
               <text textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0 2px 4px black'}}>שוק</text>
            </g>
          </>
        )}

        {/* Custom Leg Label (Algebraic) */}
        {data.labelLeg && (
          <g transform={`translate(75, 125)`} className={isFeedback && highlight.includes('base') ? feedbackAnimClass : ""}>
             <text textAnchor="middle" fill={colorHighlight} fontSize="20" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} dir="ltr">{data.labelLeg}</text>
          </g>
        )}

        {/* Base Highlight */}
        {showBaseLine && (
            <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} stroke={colorHighlight} strokeWidth="5" strokeLinecap="round" className={feedbackAnimClass} />
        )}
        {showBaseText && (
            <text x="150" y="215" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} className="animate-in zoom-in duration-500">בסיס</text>
        )}

        {/* Altitude Line */}
        {showAltitudeLine && (
          <line x1={top.x} y1={top.y} x2={mid.x} y2={mid.y} stroke="#EF4444" strokeWidth="3" strokeDasharray="6,4" className={isFeedback && highlight.includes('altitude') ? feedbackAnimClass : ""} />
        )}

        {/* 90 DEG SYMBOL */}
        {show90Deg && (
           <path d="M150 220 L150 205 L165 205 L165 220" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" strokeWidth="2" className="animate-in fade-in duration-700" />
        )}

        {/* Median Ticks (Sits perfectly on the line y=220) */}
        {showMedianTicks && (
          <g className={isFeedback ? "animate-in zoom-in duration-500" : ""}>
            <line x1="100" y1="212" x2="100" y2="228" stroke="#EF4444" strokeWidth="3" />
            <line x1="105" y1="212" x2="105" y2="228" stroke="#EF4444" strokeWidth="3" />
            <line x1="195" y1="212" x2="195" y2="228" stroke="#EF4444" strokeWidth="3" />
            <line x1="200" y1="212" x2="200" y2="228" stroke="#EF4444" strokeWidth="3" />
          </g>
        )}

        {/* Bisector Dots */}
        {showBisector && (
          <g className="animate-in zoom-in duration-500">
             <circle cx="142" cy="70" r="4" fill="#EF4444" />
             <circle cx="158" cy="70" r="4" fill="#EF4444" />
          </g>
        )}

        {/* Angle A */}
        {showA && (
           <g className={isFeedback && highlight.includes('head') ? feedbackAnimClass : ""} style={feedbackTransformStyle}>
             <path d={getArcPath(top, left, right, 45, 0)} fill="none" stroke={colorHighlight} strokeWidth="3" />
             <text x={top.x} y={top.y + 70} textAnchor="middle" fill={colorHighlight} fontSize="22" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} dir="ltr">{data.angleA || ''}</text>
           </g>
        )}
        {/* Half Angles A */}
        {data.angleHalf && (
           <g className={`animate-in zoom-in duration-500 ${isFeedback ? feedbackAnimClass : ""}`} style={feedbackTransformStyle}>
             <text x={top.x - 22} y={top.y + 85} textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold" dir="ltr">{data.angleHalf}</text>
             <text x={top.x + 22} y={top.y + 85} textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold" dir="ltr">{data.angleHalf}</text>
           </g>
        )}

        {/* Angle B */}
        {showB && (
           <g className={isFeedback && highlight.includes('base') ? feedbackAnimClass : ""} style={feedbackTransformStyle}>
             <path d={getArcPath(left, right, top, 35, 0)} fill="none" stroke={colorHighlight} strokeWidth="3" />
             <text x={left.x + 50} y={left.y - 15} textAnchor="middle" fill={colorHighlight} fontSize="22" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} dir="ltr">{data.angleB || ''}</text>
           </g>
        )}

        {/* Angle C */}
        {showC && (
           <g className={isFeedback && highlight.includes('base') ? feedbackAnimClass : ""} style={feedbackTransformStyle}>
             <path d={getArcPath(right, top, left, 35, 0)} fill="none" stroke={colorHighlight} strokeWidth="3" />
             <text x={right.x - 50} y={right.y - 15} textAnchor="middle" fill={colorHighlight} fontSize="22" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} dir="ltr">{data.angleC || ''}</text>
           </g>
        )}

        {/* PERFECTLY SPACED LABELS AT BOTTOM */}
        {/* Point D (y=245) */}
        {showAltitudeLine && <text x={mid.x} y={mid.y + 25} textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold">D</text>}

        {/* Half Base Label (y=245, x=100) -> aligned with D horizontally */}
        {data.labelHalf && (
          <text x="100" y={mid.y + 25} textAnchor="middle" fill="#EF4444" fontSize="22" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} className={isFeedback ? feedbackAnimClass : ""} dir="ltr">{data.labelHalf}</text>
        )}

        {/* Full Base Label (y=275) -> completely below D and Half labels */}
        {data.labelBase && (
          <text x="150" y={mid.y + 55} textAnchor="middle" fill="#38BDF8" fontSize="24" fontWeight="bold" style={{textShadow: '0 2px 4px black'}} className={isFeedback ? feedbackAnimClass : ""} dir="ltr">{data.labelBase}</text>
        )}

        {/* Letters A, B, C */}
        <text x={top.x} y={top.y - 15} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">A</text>
        <text x={left.x - 20} y={left.y + 10} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">B</text>
        <text x={right.x + 20} y={right.y + 10} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">C</text>
      </svg>
    );
  };

  // --- SCREENS ---

  const StartScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-in zoom-in duration-500 pb-20">
      <div className="bg-white/10 p-6 rounded-full mb-6 ring-4 ring-yellow-400/30">
        <Trophy className="w-20 h-20 text-yellow-400" />
      </div>
      <h1 className="text-5xl font-black text-white mb-2">מאסטר המשולשים</h1>
      <p className="text-xl text-blue-200 mb-8">אתגר 20 השלבים הגדול!</p>
      <div className="flex gap-2 mb-8 bg-black/20 p-4 rounded-xl">
        {[...Array(4)].map((_, i) => (
          <Heart key={i} className="text-red-500 fill-red-500" />
        ))}
        <span className="text-white mr-2 font-bold">4 הזדמנויות</span>
      </div>
      <button 
        onClick={() => setGameStatus('playing')}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-2xl font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
      >
        התחל תרגול
      </button>
    </div>
  );

  const GameScreen = () => {
    const q = questions[currentLevel];
    return (
      <div className="flex flex-col min-h-screen animate-in slide-in-from-right duration-300">
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 p-4 flex justify-between items-center shadow-lg">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <Heart key={i} className={`w-6 h-6 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
            ))}
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg border border-white/10">
            <span className="text-yellow-400 font-bold text-xl" dir="ltr">{score}</span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
        </div>

        {/* Question Area */}
        <div className="p-4 pb-20 flex-1 flex flex-col">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-blue-200 mb-1 font-bold">
              <span>שאלה {currentLevel + 1}</span>
              <span>מתוך {questions.length}</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-l from-blue-400 to-blue-600 transition-all duration-500"
                style={{ width: `${((currentLevel) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white text-right mb-6 leading-snug">
            {q.text}
          </h2>

          <div className="bg-white/5 rounded-3xl p-4 mb-6 h-[280px] flex items-center justify-center border border-white/10 shadow-inner">
            <TriangleVisual 
              type={q.diagram} 
              highlight={q.setupHighlight}
              data={{
                angleA: q.angleA,
                angleB: q.angleB,
                angleC: q.angleC,
                labelBase: q.labelBase,
                labelHalf: q.labelHalf,
                labelLeg: q.labelLeg,
                angleHalf: q.angleHalf,
                extAngleA: q.extAngleA,
                extAngleB: q.extAngleB
              }} 
              isFeedback={false}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="bg-white hover:bg-blue-50 text-blue-900 font-bold text-xl py-5 rounded-2xl shadow-md border-b-4 border-blue-200 active:border-b-0 active:translate-y-1 transition-all text-center"
              >
                <span dir="ltr">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const FeedbackOverlay = () => {
    const q = questions[currentLevel];
    // Merge answerValues into the data passed to TriangleVisual to replace '?' with real values
    const finalData = {
      angleA: q.angleA,
      angleB: q.angleB,
      angleC: q.angleC,
      labelBase: q.labelBase,
      labelHalf: q.labelHalf,
      labelLeg: q.labelLeg,
      angleHalf: q.angleHalf,
      extAngleA: q.extAngleA,
      extAngleB: q.extAngleB,
      ...(q.answerValues || {}) 
    };

    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
        <div className="flex-1 flex flex-col p-6 min-h-screen">
            {/* Visual Feedback Area */}
            <div className="w-full aspect-square max-h-[45vh] bg-white/5 rounded-3xl p-4 border border-white/10 shadow-2xl relative mx-auto mb-8 mt-8">
                <div className="absolute -top-6 -right-6 z-10">
                {isCorrect ? (
                    <div className="bg-green-500 p-4 rounded-full shadow-lg animate-bounce">
                    <Check className="w-8 h-8 text-white" />
                    </div>
                ) : (
                    <div className="bg-red-500 p-4 rounded-full shadow-lg animate-pulse">
                    <X className="w-8 h-8 text-white" />
                    </div>
                )}
                </div>
                <TriangleVisual 
                    type={q.diagram} 
                    highlight={q.answerHighlight}
                    data={finalData} 
                    isFeedback={true}
                />
            </div>

            {/* Text Feedback */}
            <div className={`p-6 rounded-3xl shadow-2xl ${isCorrect ? 'bg-green-100' : 'bg-red-50'} mb-8`}>
                <h3 className={`text-3xl font-black mb-2 text-center ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'מעולה!' : 'לא נורא...'}
                </h3>
                {!isCorrect && (
                  <p className="text-red-600 font-bold text-center mb-4">
                    התשובה הנכונה היא: <span dir="ltr">{q.options[q.correct]}</span>
                  </p>
                )}

                <div className="bg-white/50 p-4 rounded-2xl">
                    <p className="text-gray-800 text-lg leading-relaxed text-right font-medium">
                        {q.explanation}
                    </p>
                </div>
            </div>

            <button 
                onClick={nextQuestion}
                className={`w-full py-5 text-2xl font-bold text-white rounded-2xl shadow-xl transition-transform active:scale-95 mb-8 ${isCorrect ? 'bg-green-600' : 'bg-red-600'}`}
            >
                {lives === 0 ? 'סיכום משחק' : (currentLevel + 1 === questions.length && isCorrect ? 'סיכום' : 'המשך')}
            </button>
        </div>
      </div>
    );
  };

  const GameOverScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-in zoom-in">
      <AlertCircle className="w-24 h-24 text-red-500 mb-4" />
      <h2 className="text-4xl font-black text-white mb-2">נגמרו הלבבות</h2>
      <p className="text-xl text-gray-300 mb-2">אל תתייאשו, נסו שוב!</p>
      <p className="text-lg text-emerald-300 mb-8 px-4 font-medium leading-relaxed bg-emerald-900/30 py-3 rounded-2xl border border-emerald-500/20">
        כל הכבוד על המאמץ והלמידה עד עכשיו! טעויות הן הדרך הכי טובה להשתפר. אנחנו מאמינים בכם!
      </p>
      <div className="bg-white/10 p-6 rounded-2xl w-full mb-8">
        <p className="text-gray-400 mb-1">הניקוד שלך</p>
        <p className="text-5xl font-bold text-white" dir="ltr">{score}</p>
      </div>
      <button 
        onClick={restartGame}
        className="w-full bg-white text-blue-900 text-2xl font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-6 h-6" />
        נסה שוב
      </button>
    </div>
  );

  const WinScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-in zoom-in">
      <Award className="w-24 h-24 text-yellow-400 mb-4 animate-bounce" />
      <h2 className="text-4xl font-black text-white mb-2">כל הכבוד!</h2>
      <p className="text-xl text-gray-300 mb-2">סיימת את כל 20 השאלות בהצלחה!</p>
      <p className="text-lg text-yellow-200 mb-8 px-4 font-medium leading-relaxed bg-yellow-900/30 py-3 rounded-2xl border border-yellow-500/20">
        אתם פשוט אלופים! הפגנתם ידע מדהים, חשיבה חדה והבנה מעולה. גאים בכם מאוד!
      </p>
      <div className="bg-white/10 p-6 rounded-2xl w-full mb-8 border border-yellow-400/30">
        <p className="text-yellow-200 mb-1">הניקוד הסופי</p>
        <p className="text-6xl font-black text-white" dir="ltr">{score}</p>
      </div>
      <button 
        onClick={restartGame}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-2xl font-bold py-4 rounded-2xl shadow-lg"
      >
        שחק שוב
      </button>
    </div>
  );

  return (
    <div className="max-w-[1000px] md:max-w-md mx-auto min-h-screen bg-slate-900 font-sans shadow-2xl relative" dir="rtl">
        {gameStatus === 'start' && <StartScreen />}
        {(gameStatus === 'playing') && <GameScreen />}
        {gameStatus === 'feedback' && <FeedbackOverlay />}
        {gameStatus === 'gameover' && <GameOverScreen />}
        {gameStatus === 'win' && <WinScreen />}
    </div>
  );
};

export default StudentTriangleApp;


  {
    id: "hafifa-class-g8",
    title: "חפיפת משולשים כלי מקיף",
    #הערה - צריך להחליף את הכלי הזה בכלי הקיים
    grade: 8,
    category: "geometry",
    premium: false,
    emoji: "📐",
    description: "כלי מקיף על חפיפת משולשים",
    html:import React, { useState } from 'react';
import { Ruler, BookOpen, Brain, CheckCircle, XCircle, ChevronLeft, Award, ArrowRightLeft, AlignJustify, MousePointerClick, AlertTriangle, Eye, Calculator, Ban } from 'lucide-react';

// --- רכיב עזר לטקסט מתמטי (LTR) ---
const MathText = ({ children, className = "" }) => (
  <span dir="ltr" className={`font-mono font-bold inline-block unicode-bidi-isolate mx-1 text-lg ${className}`}>
    {children}
  </span>
);

// --- רכיבי עזר גרפיים ---

const AngleArc = ({ cx, cy, startAngle, endAngle, radius, label, color = "orange", fontSize="16", labelOffset = 20 }) => {
  const toRad = (deg) => (deg * Math.PI) / 180;

  // חישוב נקודות הקשת
  const x1 = cx + radius * Math.cos(toRad(startAngle));
  const y1 = cy + radius * Math.sin(toRad(startAngle));
  const x2 = cx + radius * Math.cos(toRad(endAngle));
  const y2 = cy + radius * Math.sin(toRad(endAngle));

  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

  // יצירת הנתיב (Path) של הקשת
  const d = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;

  // חישוב מיקום הטקסט
  const midAngle = (startAngle + endAngle) / 2;
  const labelR = radius + labelOffset; 
  const lx = cx + labelR * Math.cos(toRad(midAngle));
  const ly = cy + labelR * Math.sin(toRad(midAngle));

  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {label && (
        <text 
          x={lx} 
          y={ly} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          className="font-bold font-mono" 
          fill={color}
          fontSize={fontSize}
          style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white" }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const TickMark = ({ p1, p2, count = 1, color = "#059669" }) => {
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);

  // וקטור נורמל (ניצב)
  const nx = -dy / len;
  const ny = dx / len;

  const size = 8;
  const gap = 5;
  const startOffset = -((count - 1) * gap) / 2;

  const lines = [];
  for (let i = 0; i < count; i++) {
    const off = startOffset + i * gap;
    const cx = midX + (dx / len) * off * 0.5; 
    const cy = midY + (dy / len) * off * 0.5;

    lines.push(
      <line 
        key={i} 
        x1={cx - nx * size} 
        y1={cy - ny * size} 
        x2={cx + nx * size} 
        y2={cy + ny * size} 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    );
  }
  return <g>{lines}</g>;
};

// --- רכיב עזר: ציור משולש דינמי ---
const TriangleVisual = ({ 
  highlightSides = [], 
  highlightAngles = [], 
  label = "",
  labels = ["", "", ""], 
  color = "blue",
  scale = 1,
  rotation = 0,
  customAngles = null
}) => {
  const p0 = { x: 100, y: 20 };  
  const p1 = { x: 180, y: 160 }; 
  const p2 = { x: 20, y: 160 };  

  const strokeColor = color === "blue" ? "#3b82f6" : "#ef4444";
  const angleColor = "#f59e0b"; 

  return (
    <div className="relative inline-block m-2 transition-all duration-500 select-none" style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}>
      <svg width="200" height="180" viewBox="0 0 200 180">
        <path 
          d={`M${p0.x},${p0.y} L${p1.x},${p1.y} L${p2.x},${p2.y} Z`} 
          fill="white" 
          stroke={highlightSides.length === 0 && highlightAngles.length === 0 ? "#cbd5e1" : "#e2e8f0"} 
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {highlightAngles.includes(0) && <AngleArc cx={p0.x} cy={p0.y} startAngle={60} endAngle={120} radius={25} color={angleColor} label={customAngles ? customAngles[0] : ""} />}
        {highlightAngles.includes(1) && <AngleArc cx={p1.x} cy={p1.y} startAngle={180} endAngle={240} radius={25} color={angleColor} label={customAngles ? customAngles[1] : ""} />}
        {highlightAngles.includes(2) && <AngleArc cx={p2.x} cy={p2.y} startAngle={300} endAngle={360} radius={25} color={angleColor} label={customAngles ? customAngles[2] : ""} />}

        {highlightSides.includes(0) && <line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />}
        {highlightSides.includes(1) && <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />}
        {highlightSides.includes(2) && <line x1={p2.x} y1={p2.y} x2={p0.x} y2={p0.y} stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />}

        {highlightSides.includes(0) && <TickMark p1={p0} p2={p1} count={1} color="black" />}
        {highlightSides.includes(1) && <TickMark p1={p1} p2={p2} count={2} color="black" />}
        {highlightSides.includes(2) && <TickMark p1={p2} p2={p0} count={3} color="black" />}

        {labels[0] && <text x={p0.x} y={p0.y - 10} textAnchor="middle" className="font-bold font-mono text-sm fill-slate-700">{labels[0]}</text>}
        {labels[1] && <text x={p1.x + 10} y={p1.y + 10} textAnchor="middle" className="font-bold font-mono text-sm fill-slate-700">{labels[1]}</text>}
        {labels[2] && <text x={p2.x - 10} y={p2.y + 10} textAnchor="middle" className="font-bold font-mono text-sm fill-slate-700">{labels[2]}</text>}

      </svg>
      {label && <div className="text-center font-bold mt-2 text-xl" dir="ltr">{label}</div>}
    </div>
  );
};

// --- רכיב שעון חול ---
const HourglassVisual = ({ showAngles }) => {
  const pA = { x: 40, y: 30 };
  const pB = { x: 160, y: 30 };
  const pC = { x: 40, y: 170 };
  const pD = { x: 160, y: 170 };
  const pCenter = { x: 100, y: 100 }; 

  return (
    <div className="relative inline-block m-4 select-none">
      <svg width="250" height="200" viewBox="0 0 200 200">
        <path d={`M${pA.x},${pA.y} L${pB.x},${pB.y} L${pCenter.x},${pCenter.y} Z`} fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round"/>
        <path d={`M${pC.x},${pC.y} L${pD.x},${pD.y} L${pCenter.x},${pCenter.y} Z`} fill="#fef2f2" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round"/>

        <TickMark p1={pA} p2={pCenter} count={1} color="black" />
        <TickMark p1={pD} p2={pCenter} count={1} color="black" />
        <TickMark p1={pB} p2={pCenter} count={2} color="black" />
        <TickMark p1={pC} p2={pCenter} count={2} color="black" />

        {showAngles && (
          <>
            <AngleArc cx={pCenter.x} cy={pCenter.y} startAngle={220} endAngle={320} radius={25} color="#8b5cf6" />
            <AngleArc cx={pCenter.x} cy={pCenter.y} startAngle={40} endAngle={140} radius={25} color="#8b5cf6" />
            <text x={pCenter.x + 35} y={pCenter.y} className="font-bold fill-purple-700 text-sm">ז.קודקודיות</text>
          </>
        )}

        <text x={pA.x} y={pA.y - 10} textAnchor="middle" className="font-bold font-mono fill-slate-600">A</text>
        <text x={pB.x} y={pB.y - 10} textAnchor="middle" className="font-bold font-mono fill-slate-600">B</text>
        <text x={pC.x} y={pC.y + 20} textAnchor="middle" className="font-bold font-mono fill-slate-600">C</text>
        <text x={pD.x} y={pD.y + 20} textAnchor="middle" className="font-bold font-mono fill-slate-600">D</text>
        <text x={pCenter.x + 20} y={pCenter.y + 5} textAnchor="start" className="font-bold font-mono fill-slate-800">M</text>
      </svg>
    </div>
  );
};

// --- האפליקציה הראשית ---

export default function TriangleCongruenceApp() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 font-sans" dir="rtl">
      {/* כותרת */}
      <header className="bg-blue-600 text-white p-6 shadow-xl sticky top-0 z-20 border-b-4 border-blue-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-black tracking-wide flex items-center gap-3">
            <Ruler className="w-10 h-10" />
            חפיפת משולשים
          </h1>
          <span className="bg-blue-800 px-4 py-1 rounded-full text-lg font-bold">כיתה ח'</span>
        </div>
      </header>

      {/* תפריט ניווט */}
      <nav className="bg-white shadow-md sticky top-24 z-10 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex min-w-[750px]">
          <button onClick={() => setActiveTab('intro')} className={`flex-1 py-4 px-2 text-lg md:text-xl font-bold transition-colors border-b-4 ${activeTab === 'intro' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>מה זה חופף?</button>
          <button onClick={() => setActiveTab('theorems')} className={`flex-1 py-4 px-2 text-lg md:text-xl font-bold transition-colors border-b-4 ${activeTab === 'theorems' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>3 המשפטים</button>
          <button onClick={() => setActiveTab('correspondence')} className={`flex-1 py-4 px-2 text-lg md:text-xl font-bold transition-colors border-b-4 ${activeTab === 'correspondence' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>התאמת קודקודים</button>
          <button onClick={() => setActiveTab('special_cases')} className={`flex-1 py-4 px-2 text-lg md:text-xl font-bold transition-colors border-b-4 ${activeTab === 'special_cases' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>מקרים מיוחדים</button>
          <button onClick={() => setActiveTab('practice')} className={`flex-1 py-4 px-2 text-lg md:text-xl font-bold transition-colors border-b-4 ${activeTab === 'practice' ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>בחן את עצמך</button>
        </div>
      </nav>

      {/* תוכן ראשי */}
      <main className="max-w-4xl mx-auto p-6 min-h-[60vh]">
        {activeTab === 'intro' && <IntroSection />}
        {activeTab === 'theorems' && <TheoremsSection />}
        {activeTab === 'correspondence' && <CorrespondenceSection />}
        {activeTab === 'special_cases' && <SpecialCasesSection />}
        {activeTab === 'practice' && <PracticeSection />}
      </main>
    </div>
  );
}

// ... IntroSection, TheoremsSection, CorrespondenceSection ...
function IntroSection() {
  const [isOverlapped, setIsOverlapped] = useState(false);
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-blue-100 max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">מה זה משולשים חופפים?</h2>
        <p className="text-2xl leading-relaxed text-slate-700 mb-8">
          משולשים חופפים הם כמו <span className="font-black text-blue-600">תאומים זהים</span>.
          <br/>
          יש להם בדיוק את אותן הצלעות ואותן הזוויות.
        </p>
        <div className="h-64 relative flex justify-center items-center my-10 bg-slate-50 rounded-2xl border border-slate-200">
          <div className={`transition-all duration-1000 absolute ${isOverlapped ? 'translate-x-0 opacity-50' : 'translate-x-32'}`}>
             <TriangleVisual color="blue" label={isOverlapped ? "" : "משולש א'"} />
          </div>
          <div className={`transition-all duration-1000 absolute ${isOverlapped ? 'translate-x-0' : '-translate-x-32'}`}>
             <TriangleVisual color="red" label={isOverlapped ? "" : "משולש ב'"} />
          </div>
          {isOverlapped && <div className="absolute text-3xl font-black text-purple-700 bg-white/80 px-4 py-2 rounded-xl shadow-sm border border-purple-200 backdrop-blur-sm">בול אותו דבר! ✅</div>}
        </div>
        <button onClick={() => setIsOverlapped(!isOverlapped)} className="bg-blue-600 text-white text-2xl font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto">
          {isOverlapped ? "הפרד משולשים" : "בדוק חפיפה (הנח אחד על השני)"}
          <BookOpen className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
function TheoremsSection() {
    return (
      <div className="space-y-12 animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">איך מוכיחים שהם תאומים?</h2>
          <p className="text-xl text-slate-600 mt-2">אנחנו לא צריכים לבדוק הכל. מספיק לבדוק 3 דברים לפי "מתכון" מיוחד:</p>
        </div>
        <TheoremCard title="משפט 1: צ.ז.צ" subTitle="(צלע - זווית - צלע)" desc="אם שתי צלעות והזווית שביניהן שוות..." visual1={<TriangleVisual highlightSides={[0, 1]} highlightAngles={[1]} color="blue"/>} visual2={<TriangleVisual highlightSides={[0, 1]} highlightAngles={[1]} color="red"/>} important="חשוב מאוד! הזווית חייבת להיות *בין* שתי הצלעות." color="bg-orange-50 border-orange-200" badge="orange"/>
        <TheoremCard title="משפט 2: ז.צ.ז" subTitle="(זווית - צלע - זווית)" desc="אם שתי זוויות והצלע שביניהן שוות..." visual1={<TriangleVisual highlightSides={[1]} highlightAngles={[1, 2]} color="blue"/>} visual2={<TriangleVisual highlightSides={[1]} highlightAngles={[1, 2]} color="red"/>} important="הצלע חייבת להיות *בין* שתי הזוויות (הצלע המשותפת)." color="bg-green-50 border-green-200" badge="green"/>
        <TheoremCard title="משפט 3: צ.צ.צ" subTitle="(צלע - צלע - צלע)" desc="אם כל שלוש הצלעות שוות בהתאמה..." visual1={<TriangleVisual highlightSides={[0, 1, 2]} highlightAngles={[]} color="blue"/>} visual2={<TriangleVisual highlightSides={[0, 1, 2]} highlightAngles={[]} color="red"/>} important="כאן לא צריך לבדוק זוויות בכלל! אם הצלעות זהות - המשולשים חופפים." color="bg-purple-50 border-purple-200" badge="purple"/>
      </div>
    );
  }
  function TheoremCard({ title, subTitle, desc, visual1, visual2, important, color, badge }) {
    return (
      <div className={`rounded-3xl border-4 ${color} p-6 shadow-md transition hover:shadow-xl`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-right">
            <div className={`inline-block px-4 py-1 rounded-full text-white font-bold mb-3 bg-${badge}-500`}>{title}</div>
            <h3 className="text-4xl font-black text-slate-800 mb-2">{subTitle}</h3>
            <p className="text-2xl text-slate-700 mb-4">{desc}</p>
            <div className="bg-white/60 p-4 rounded-xl border border-slate-200 inline-block"><span className="font-bold text-red-600 text-lg">💡 דגש: </span><span className="text-lg font-medium">{important}</span></div>
          </div>
          <div className="flex bg-white rounded-2xl p-4 shadow-inner border border-slate-100 justify-center">{visual1}{visual2}</div>
        </div>
      </div>
    );
  }
  function CorrespondenceSection() {
    const [highlightKey, setHighlightKey] = useState(null);
    const getVisualProps = () => {
       if (highlightKey === 'A') return { highlightAngles: [0], highlightSides: [] };
       if (highlightKey === 'B') return { highlightAngles: [1], highlightSides: [] };
       if (highlightKey === 'C') return { highlightAngles: [2], highlightSides: [] };
       if (highlightKey === 'AB') return { highlightSides: [0], highlightAngles: [] };
       if (highlightKey === 'BC') return { highlightSides: [1], highlightAngles: [] };
       if (highlightKey === 'AC') return { highlightSides: [2], highlightAngles: [] };
       return { highlightSides: [], highlightAngles: [] };
    };
    const visualProps = getVisualProps();
    const t1Labels = ["A", "B", "C"];
    const t2Labels = ["D", "E", "F"];
    return (
      <div className="space-y-8 animate-fade-in">
         <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-indigo-100">
           <h2 className="text-4xl font-bold text-indigo-800 mb-6 flex items-center gap-3"><ArrowRightLeft className="w-10 h-10" />סדר האותיות קובע!</h2>
           <p className="text-2xl leading-relaxed text-slate-700 mb-6">כשכותבים שמשולשים חופפים, למשל <MathText>∆ABC ≅ ∆DEF</MathText>, הסדר אומר לנו מי מתאים למי. לחצו על הכפתורים למטה כדי לראות את ההתאמה:</p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-200" dir="ltr">
              <TriangleVisual {...visualProps} labels={t1Labels} color="blue" label="∆ABC" />
              <div className="text-5xl font-mono font-bold text-slate-300">≅</div>
              <TriangleVisual {...visualProps} labels={t2Labels} color="red" label="∆DEF" />
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-600 mb-4 flex items-center gap-2"><MousePointerClick className="w-5 h-5" />התאמת זוויות (אות מול אות)</h3>
                  <div className="flex gap-4 justify-center">
                      <button onClick={() => setHighlightKey('A')} className={`px-6 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'A' ? 'bg-indigo-100 border-indigo-500 text-indigo-700 shadow-md scale-110' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>A ↔ D</button>
                      <button onClick={() => setHighlightKey('B')} className={`px-6 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'B' ? 'bg-indigo-100 border-indigo-500 text-indigo-700 shadow-md scale-110' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>B ↔ E</button>
                      <button onClick={() => setHighlightKey('C')} className={`px-6 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'C' ? 'bg-indigo-100 border-indigo-500 text-indigo-700 shadow-md scale-110' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>C ↔ F</button>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-600 mb-4 flex items-center gap-2"><MousePointerClick className="w-5 h-5" />התאמת צלעות (זוגות לפי הסדר)</h3>
                  <div className="flex gap-4 justify-center flex-wrap">
                      <button onClick={() => setHighlightKey('AB')} className={`px-4 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'AB' ? 'bg-green-100 border-green-500 text-green-700 shadow-md scale-105' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>AB ↔ DE</button>
                      <button onClick={() => setHighlightKey('BC')} className={`px-4 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'BC' ? 'bg-green-100 border-green-500 text-green-700 shadow-md scale-105' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>BC ↔ EF</button>
                      <button onClick={() => setHighlightKey('AC')} className={`px-4 py-3 rounded-xl font-mono text-xl font-bold transition-all border-2 ${highlightKey === 'AC' ? 'bg-green-100 border-green-500 text-green-700 shadow-md scale-105' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>AC ↔ DF</button>
                  </div>
              </div>
           </div>
         </div>
      </div>
    );
  }

// --- לשונית 4 המעודכנת: מקרים מיוחדים (עם שיפורי גרפיקה) ---
function SpecialCasesSection() {
  const [showHourglassAngles, setShowHourglassAngles] = useState(false);
  const [revealedAngle, setRevealedAngle] = useState(false);

  return (
    <div className="space-y-16 animate-fade-in">

      {/* כותרת ראשית */}
      <div className="text-center">
        <h2 className="text-4xl font-black text-slate-800 flex items-center justify-center gap-3">
          <Eye className="w-10 h-10 text-purple-600" />
          דברים שלא תמיד מגלים לנו...
        </h2>
        <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
          לפעמים הנתונים "מתחבאים" בתוך השרטוט, ואנחנו צריכים להיות בלשים ולמצוא אותם בעצמנו.
        </p>
      </div>

      {/* מקרה 1: שעון חול */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-purple-100">
        <div className="bg-purple-600 p-4 text-white text-center">
          <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Brain className="w-6 h-6" />
            מקרה 1: החפיפה הנסתרת (שעון חול)
          </h3>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-slate-800">לפעמים נותנים רק 2 צלעות...</h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              נתון לנו בשרטוט:
            </p>
            <div className="bg-slate-100 p-4 rounded-xl font-mono text-lg border border-slate-200" dir="ltr">
               <ul className="list-none space-y-2">
                   <li>1. AM = DM <span className="text-sm text-slate-500 font-sans">(נתון, מסומן בקו אחד)</span></li>
                   <li>2. BM = CM <span className="text-sm text-slate-500 font-sans">(נתון, מסומן בשני קווים)</span></li>
               </ul>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mt-2">
              חסרה לנו זווית לחפיפה לפי צ.ז.צ.
              <br/>
              <span className="font-bold text-purple-700">הסוד:</span> בנקודה M יש <span className="font-bold underline">זוויות קודקודיות</span> שוות!
            </p>

            <button 
              onClick={() => setShowHourglassAngles(!showHourglassAngles)}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-bold shadow hover:bg-purple-700 transition flex items-center gap-2"
            >
              {showHourglassAngles ? "הסתר זוויות נסתרות" : "גלה את הזוויות הנסתרות! 👁️"}
            </button>
            {showHourglassAngles && (
                <div className="animate-fade-in text-purple-700 font-bold font-mono text-lg mt-2" dir="ltr">
                    ∠AMC = ∠DMB
                </div>
            )}
          </div>

          <div className="flex justify-center bg-slate-50 rounded-2xl border border-slate-200 p-4">
             <HourglassVisual showAngles={showHourglassAngles} />
          </div>
        </div>
      </div>

      {/* מקרה 2: השלמה ל-180 - תיקון גרפי */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-indigo-100">
        <div className="bg-indigo-600 p-4 text-white text-center">
          <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Calculator className="w-6 h-6" />
            מקרה 2: כשהזווית "בורחת" (השלמה ל-180)
          </h3>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
                {/* משולשים אחד ליד השני - ללא גלילה */}
                <div className="flex justify-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex-wrap">
                    {/* משולש 1 - צלעות רגילות */}
                    <div className="relative transform scale-90">
                        <svg width="180" height="150" viewBox="0 0 200 180">
                             {/* צלע שמאל - רגיל */}
                            <line x1="100" y1="20" x2="20" y2="160" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                             {/* צלע ימין - רגיל */}
                            <line x1="100" y1="20" x2="180" y2="160" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                             {/* צלע למטה - כתום מודגש */}
                            <line x1="20" y1="160" x2="180" y2="160" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />

                            {/* אותיות */}
                            <text x="100" y="15" textAnchor="middle" className="font-bold text-sm fill-slate-700">A</text>
                            <text x="15" y="170" textAnchor="middle" className="font-bold text-sm fill-slate-700">B</text>
                            <text x="185" y="170" textAnchor="middle" className="font-bold text-sm fill-slate-700">C</text>

                            {/* זוויות */}
                            <text x="100" y="60" textAnchor="middle" className="font-bold text-xl fill-slate-700">80°</text>
                            <text x="50" y="150" textAnchor="middle" className="font-bold text-xl fill-slate-700">60°</text>

                             {/* זווית ימין נעלמת */}
                             {revealedAngle ? (
                                <text x="150" y="150" textAnchor="middle" className="font-bold text-xl fill-green-600 animate-bounce-in">40°</text>
                            ) : (
                                <text x="150" y="150" textAnchor="middle" className="font-bold text-xl fill-slate-400">?</text>
                            )}
                        </svg>
                        <div className="text-center font-bold">משולש א' (ABC)</div>
                    </div>
                    {/* משולש 2 - צלעות רגילות */}
                    <div className="relative transform scale-90">
                        <svg width="180" height="150" viewBox="0 0 200 180">
                             {/* צלע שמאל - רגיל */}
                            <line x1="100" y1="20" x2="20" y2="160" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                             {/* צלע ימין - רגיל */}
                            <line x1="100" y1="20" x2="180" y2="160" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                             {/* צלע למטה - כתום מודגש */}
                            <line x1="20" y1="160" x2="180" y2="160" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />

                            {/* אותיות */}
                            <text x="100" y="15" textAnchor="middle" className="font-bold text-sm fill-slate-700">D</text>
                            <text x="15" y="170" textAnchor="middle" className="font-bold text-sm fill-slate-700">E</text>
                            <text x="185" y="170" textAnchor="middle" className="font-bold text-sm fill-slate-700">F</text>

                            {/* זוויות */}
                            <text x="100" y="60" textAnchor="middle" className="font-bold text-xl fill-slate-700">80°</text>
                            {/* הוספת זווית שמאל 60 קבועה כבקשה */}
                            <text x="50" y="150" textAnchor="middle" className="font-bold text-xl fill-slate-700">60°</text>

                            {/* זווית ימין נעלמת */}
                            {revealedAngle ? (
                                <text x="150" y="150" textAnchor="middle" className="font-bold text-xl fill-green-600 animate-bounce-in">40°</text>
                            ) : (
                                <text x="150" y="150" textAnchor="middle" className="font-bold text-xl fill-slate-400">?</text>
                            )}
                        </svg>
                         <div className="text-center font-bold">משולש ב' (DEF)</div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
               <p className="text-lg text-slate-600">
                 שימו לב לנתונים:
                 <br/>
                 יש לנו שתי זוויות וצלע. אבל הצלע הנתונה (הכתומה) <strong>לא נמצאת בין הזוויות</strong> הנתונות (80 ו-60).
                 <br/>
                 במבט ראשון, זה לא מתאים למשפט ז.צ.ז.
                 <br/>
                 <span className="font-bold text-red-600">אין משפט כזה "זווית-זווית-צלע"!</span>
               </p>
               <p className="text-lg font-bold text-indigo-700">
                 אבל תמיד אפשר לחשב את הזווית השלישית!
               </p>
               <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 font-mono text-lg space-y-2" dir="ltr">
                  <div>180° - 80° - 60° = 40° (ABC)</div>
                  <div>180° - 80° - 60° = 40° (DEF)</div>
               </div>
               <button 
                 onClick={() => setRevealedAngle(!revealedAngle)}
                 className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow hover:bg-indigo-700 transition"
               >
                 {revealedAngle ? "אפס חישוב" : "חשב את הזווית החסרה"}
               </button>
               {revealedAngle && (
                 <div className="animate-fade-in p-3 bg-green-50 rounded-lg border border-green-200">
                   <p className="text-slate-700">
                       כעת כשיש לנו את כל הזוויות, אפשר לראות שהצלע הכתומה נמצאת בין ה-60° ל-40°.
                       <br/>
                       <span className="font-bold underline">יש חפיפה לפי ז.צ.ז!</span>
                   </p>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>

      {/* מקרים אסורים - חפיפה לא נכונה - תיקונים גרפיים ומתמטיים */}
      <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
        <h3 className="text-3xl font-black text-red-700 mb-6 flex items-center gap-3">
          <Ban className="w-10 h-10" />
          זהירות! כאן לא חופפים 🚫
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
           {/* כרטיס אזהרה 1: AAA - תיקון זוויות ונתונים */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col">
              <h4 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                אין משפט "זווית-זווית-זווית" (ז.ז.ז)
              </h4>
              <p className="text-slate-600 mb-6">
                אם כל הזוויות שוות, המשולשים <strong>דומים</strong>, אבל לא בהכרח חופפים!
              </p>

              <div className="flex-1 flex items-end justify-around gap-4 bg-slate-50 rounded-xl p-4 min-h-[220px]">
                 {/* משולש קטן - ABC - מוגדל */}
                 <div className="text-center relative">
                    <svg width="120" height="120" viewBox="0 0 100 100">
                        <path d="M50,15 L90,85 L10,85 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="3"/>

                        {/* זוויות 60 */}
                        <AngleArc cx={50} cy={15} startAngle={60} endAngle={120} radius={15} color="#b91c1c" fontSize="12" label="60"/>
                        <AngleArc cx={90} cy={85} startAngle={180} endAngle={240} radius={15} color="#b91c1c" fontSize="12" label="60"/>
                        <AngleArc cx={10} cy={85} startAngle={300} endAngle={360} radius={15} color="#b91c1c" fontSize="12" label="60"/>

                        {/* אותיות */}
                        <text x="50" y="10" textAnchor="middle" fontSize="14" fontWeight="bold">A</text>
                        <text x="5" y="90" textAnchor="middle" fontSize="14" fontWeight="bold">B</text>
                        <text x="95" y="90" textAnchor="middle" fontSize="14" fontWeight="bold">C</text>
                    </svg>
                 </div>

                 {/* משולש גדול - DEF - מוגדל */}
                 <div className="text-center relative">
                    <svg width="180" height="180" viewBox="0 0 140 140">
                        <path d="M70,15 L130,125 L10,125 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="3"/>

                        {/* זוויות 60 */}
                        <AngleArc cx={70} cy={15} startAngle={60} endAngle={120} radius={20} color="#b91c1c" fontSize="14" label="60"/>
                        <AngleArc cx={130} cy={125} startAngle={180} endAngle={240} radius={20} color="#b91c1c" fontSize="14" label="60"/>
                        <AngleArc cx={10} cy={125} startAngle={300} endAngle={360} radius={20} color="#b91c1c" fontSize="14" label="60"/>

                         {/* אותיות */}
                        <text x="70" y="10" textAnchor="middle" fontSize="14" fontWeight="bold">D</text>
                        <text x="5" y="135" textAnchor="middle" fontSize="14" fontWeight="bold">E</text>
                        <text x="135" y="135" textAnchor="middle" fontSize="14" fontWeight="bold">F</text>
                    </svg>
                 </div>
              </div>

              {/* רשימת נתונים מעוצבת AAA */}
              <div className="mt-4 space-y-2">
                 <div className="flex justify-between border-b border-red-100 pb-1">
                    <span className="font-bold text-red-800">זוויות זהות:</span>
                    <span className="font-mono text-slate-700" dir="ltr">∠A=∠D=60°, ...</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="font-bold text-red-800">צלעות שונות:</span>
                    <span className="font-mono text-red-600 font-bold" dir="ltr">BC=2 ≠ EF=5</span>
                 </div>
              </div>
           </div>

           {/* כרטיס אזהרה 2: SSA - תיקון נתונים ומיקום */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex flex-col">
              <h4 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                הזווית חייבת להיות באמצע! (צ.צ.ז ❌)
              </h4>
              <p className="text-slate-600 mb-6">
                 אם יש שתי צלעות וזווית שאינה ביניהן, ייתכנו שני משולשים שונים!
              </p>

              <div className="flex-1 flex flex-col justify-center items-center gap-6 bg-slate-50 rounded-xl p-4">

                 <div className="flex justify-center items-end gap-12">
                    {/* משולש 1 - קהה זווית ABC - מוגדל */}
                    <div className="relative">
                        <svg width="180" height="150" viewBox="-10 0 160 130">
                            {/* אותיות */}
                            <text x="100" y="30" fontSize="14" fontWeight="bold">A</text>
                            <text x="5" y="110" fontSize="14" fontWeight="bold">B</text>
                            <text x="80" y="110" fontSize="14" fontWeight="bold">C</text>

                            {/* צלע AB=10 */}
                            <line x1="20" y1="100" x2="100" y2="40" stroke="black" strokeWidth="2" />
                            {/* תווית AB */}
                            <text x="45" y="65" fontSize="16" fontWeight="bold" fill="black">10</text>

                            {/* זווית B - שימוש ב-AngleArc כמו במשולשים למעלה */}
                            <AngleArc cx={20} cy={100} startAngle={323} endAngle={360} radius={30} color="#b91c1c" fontSize="14" label="30" labelOffset={15} />

                            {/* צלע AC=6 */}
                            <line x1="100" y1="40" x2="80" y2="100" stroke="#ef4444" strokeWidth="3" />
                            {/* תווית AC */}
                            <text x="105" y="75" fontSize="16" fontWeight="bold" fill="#ef4444">6</text>

                            {/* בסיס */}
                            <line x1="20" y1="100" x2="80" y2="100" stroke="black" strokeWidth="2" />
                        </svg>
                        <div className="text-center text-sm font-bold text-slate-500 mt-2">משולש ב' (קהה)</div>
                    </div>

                    {/* משולש 2 - חד זווית DEF - מוגדל */}
                    <div className="relative">
                        <svg width="180" height="150" viewBox="-10 0 160 130">
                             {/* אותיות */}
                            <text x="100" y="30" fontSize="14" fontWeight="bold">D</text>
                            <text x="5" y="110" fontSize="14" fontWeight="bold">E</text>
                            <text x="135" y="110" fontSize="14" fontWeight="bold">F</text>

                             {/* צלע DE=10 */}
                            <line x1="20" y1="100" x2="100" y2="40" stroke="black" strokeWidth="2" />
                            {/* תווית DE */}
                            <text x="45" y="65" fontSize="16" fontWeight="bold" fill="black">10</text>

                            {/* זווית E - שימוש ב-AngleArc */}
                            <AngleArc cx={20} cy={100} startAngle={323} endAngle={360} radius={30} color="#b91c1c" fontSize="14" label="30" labelOffset={15} />

                            {/* צלע DF=6 */}
                            <line x1="100" y1="40" x2="130" y2="100" stroke="#ef4444" strokeWidth="3" />
                            {/* תווית DF */}
                            <text x="125" y="75" fontSize="16" fontWeight="bold" fill="#ef4444">6</text>

                             {/* בסיס */}
                             <line x1="20" y1="100" x2="130" y2="100" stroke="black" strokeWidth="2" />
                        </svg>
                        <div className="text-center text-sm font-bold text-slate-500 mt-2">משולש א' (חד)</div>
                    </div>
                 </div>

                 {/* רשימת נתונים מעוצבת SSA */}
                 <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="font-bold text-red-800 text-center mb-2">אותם נתונים בדיוק:</p>
                    <div className="space-y-1 font-mono text-lg text-slate-700 text-center" dir="ltr">
                        <div>AB = DE = 10</div>
                        <div>AC = DF = 6</div>
                        <div>∠B = ∠E = 30°</div>
                    </div>
                    <p className="text-center text-sm text-red-600 font-bold mt-2">אבל המשולשים שונים!</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
}
function PracticeSection() {
    const [qIndex, setQIndex] = useState(0);
    const [feedback, setFeedback] = useState(null); 
    const [score, setScore] = useState(0);

    const questions = [
      {
        id: 1,
        type: "Visual",
        text: <>נתונים שני משולשים. בשניהם הצלע הימנית שווה, הצלע התחתונה שווה, והזווית שביניהן שווה. האם הם חופפים? ואם כן, לפי איזה משפט?</>,
        visualProps: { highlightSides: [0, 1], highlightAngles: [1] },
        options: [
          "חופפים לפי צ.ז.צ (צלע-זווית-צלע)",
          "חופפים לפי ז.צ.ז (זווית-צלע-זווית)",
          "חופפים לפי צ.צ.צ (צלע-צלע-צלע)",
          "אי אפשר לדעת אם הם חופפים"
        ],
        correct: 0,
        explanation: "במשפט צ.ז.צ (צלע-זווית-צלע), הזווית חייבת להיות 'כלואה' בין שתי הצלעות השוות. כאן זה בדיוק המצב!"
      },
      {
        id: 2,
        type: "Visual",
        text: "מדדנו את כל הצלעות בשני המשולשים וגילינו שכל הזוגות שווים. לא בדקנו זוויות. האם זה מספיק?",
        visualProps: { highlightSides: [0, 1, 2], highlightAngles: [] },
        options: [
          "לא, חייבים זווית אחת לפחות",
          "כן, חופפים לפי ז.צ.ז",
          "כן, חופפים לפי צ.צ.צ",
          "לא, צריך לפחות שתי זוויות"
        ],
        correct: 2,
        explanation: "משפט צ.צ.צ קובע שאם כל שלוש הצלעות שוות בהתאמה, המשולשים חופפים. אין צורך למדוד גם את הזוויות."
      },
      {
        id: 3,
        type: "Visual",
        text: "נתון שצלע אחת שווה, ועוד צלע שווה... והזווית העליונה (שלא ביניהן) שווה. האם אפשר להשתמש ב-צ.ז.צ?",
        visualProps: { highlightSides: [0, 1], highlightAngles: [0] }, 
        options: [
          "כן, זה צ.ז.צ",
          "כן, זה צ.צ.צ",
          "לא! במשפט צ.ז.צ הזווית חייבת להיות הכלואה (באמצע)",
          "כן, לפי ז.צ.ז"
        ],
        correct: 2,
        explanation: "כדי להשתמש במשפט צ.ז.צ, הזווית חייבת להיות בין שתי הצלעות השוות. כאן הזווית לא ביניהן, ולכן אי אפשר לקבוע חפיפה לפי משפט זה."
      },
      {
        id: 4,
        type: "Visual",
        text: "יש לנו שתי זוויות שוות (הימנית והשמאלית) והצלע התחתונה שמחברת ביניהן שווה. מה המסקנה?",
        visualProps: { highlightSides: [1], highlightAngles: [1, 2] },
        options: [
          "חופפים לפי צ.צ.צ",
          "חופפים לפי צ.ז.צ",
          "לא חופפים",
          "חופפים לפי ז.צ.ז"
        ],
        correct: 3,
        explanation: "במשפט ז.צ.ז (זווית-צלע-זווית), הצלע חייבת להיות בין שתי הזוויות השוות. כאן הצלע התחתונה אכן מחברת בין הזווית הימנית לשמאלית."
      },
      {
        id: 5,
        type: "Logic",
        text: <>נתון: <MathText>∆ABC ≅ ∆KMR</MathText>. איזו צלע במשולש השני שווה לצלע <MathText>AC</MathText>?</>,
        visualProps: null, 
        options: [
          <>צלע <MathText>KM</MathText></>,
          <>צלע <MathText>MR</MathText></>,
          <>צלע <MathText>KR</MathText></>,
          <>צלע <MathText>AK</MathText></>
        ],
        correct: 2,
        explanation: <>לפי הסדר: <MathText>AC</MathText> הן האות הראשונה והשלישית. לכן הצלע המתאימה היא האות הראשונה והשלישית במשולש השני: <MathText>KR</MathText>.</>
      },
      {
        id: 6,
        type: "Logic",
        text: <>נתון שמשולש <MathText>DOG</MathText> חופף למשולש <MathText>CAT</MathText>. הזווית <MathText>D</MathText> שווה ל-50 מעלות. למי שווה זווית <MathText>C</MathText>?</>,
        visualProps: null,
        options: [
          "50 מעלות",
          "100 מעלות",
          "אי אפשר לדעת",
          <>שווה לזווית <MathText>O</MathText></>
        ],
        correct: 0,
        explanation: <>האות <MathText>D</MathText> היא הראשונה ב-<MathText>DOG</MathText>, והאות <MathText>C</MathText> היא הראשונה ב-<MathText>CAT</MathText>. לכן הן זוויות מתאימות ושוות זו לזו.</>
      },
      {
        id: 7,
        type: "Logic",
        text: <>נתון: <MathText>∆XYZ ≅ ∆PQR</MathText>. זווית <MathText>Y</MathText> שווה 80 מעלות, זווית <MathText>R</MathText> שווה 40 מעלות. כמה שווה זווית <MathText>P</MathText>?</>,
        visualProps: null,
        options: [
          "40 מעלות",
          "60 מעלות",
          "80 מעלות",
          "100 מעלות"
        ],
        correct: 1,
        explanation: <>אם <MathText>Y=80</MathText> אז גם <MathText>Q=80</MathText> (האות השנייה). נתון ש-<MathText>R=40</MathText>. סכום הזוויות במשולש <MathText>PQR</MathText> הוא 180. לכן <MathText>P = 180 - 80 - 40 = 60</MathText>.</>
      }
    ];

    const question = questions[qIndex];

    const handleAnswer = (index) => {
      if (feedback !== null) return; 

      if (index === question.correct) {
        setFeedback('correct');
        setScore(score + 1);
      } else {
        setFeedback('wrong');
      }
    };

    const nextQ = () => {
      setFeedback(null);
      if (qIndex < questions.length - 1) {
        setQIndex(qIndex + 1);
      } else {
        setQIndex('done');
      }
    };

    if (qIndex === 'done') {
      return (
        <div className="text-center py-20 bg-white rounded-3xl shadow-xl border-4 border-yellow-300 animate-fade-in">
          <Award className="w-24 h-24 mx-auto text-yellow-500 mb-6" />
          <h2 className="text-5xl font-black text-slate-800 mb-6">כל הכבוד!</h2>
          <p className="text-3xl text-slate-600 mb-8">
            סיימת את התרגול בהצלחה.
            <br/>
            הציון שלך: <span className="font-bold text-blue-600">{score}</span> מתוך <span className="font-bold">{questions.length}</span>
          </p>
          <button 
            onClick={() => { setQIndex(0); setScore(0); }}
            className="bg-blue-600 text-white text-xl px-8 py-3 rounded-full font-bold hover:bg-blue-700 shadow-lg"
          >
            נסה שוב
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-slate-500">שאלה {qIndex + 1} מתוך {questions.length}</h2>
          <div className="text-xl font-bold bg-white px-4 py-1 rounded-lg border border-slate-200">נקודות: {score}</div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-blue-500">

          {question.visualProps ? (
              <div className="flex justify-center mb-6">
              <TriangleVisual {...question.visualProps} color="blue" scale={0.8} />
              <TriangleVisual {...question.visualProps} color="red" scale={0.8} />
              </div>
          ) : (
              <div className="flex justify-center mb-6 py-8">
                  <AlignJustify className="w-20 h-20 text-slate-200" />
              </div>
          )}

          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center leading-snug">
            {question.text}
          </h3>

          <div className="grid gap-4">
            {question.options.map((option, idx) => {
              let btnColor = "bg-slate-50 hover:bg-slate-100 border-slate-200";
              if (feedback === 'correct' && idx === question.correct) btnColor = "bg-green-100 border-green-500 text-green-800 font-bold";
              if (feedback === 'wrong' && idx !== question.correct) btnColor = "bg-red-100"; 

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`p-5 rounded-2xl text-xl text-right border-2 transition-all ${btnColor} ${feedback ? 'cursor-default' : 'hover:scale-[1.02]'}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {feedback && (
            <div className={`mt-8 p-6 rounded-2xl text-center animate-bounce-in ${feedback === 'correct' ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
              <div className={`text-3xl mb-2 font-black ${feedback === 'correct' ? 'text-green-700' : 'text-red-700'}`}>
                {feedback === 'correct' ? 'נכון מאוד! 🎉' : 'תשובה לא נכונה'}
              </div>

              <div className="text-xl text-slate-700 mb-6 space-y-4">
                {feedback === 'wrong' && (
                  <p className="font-bold text-lg bg-white/70 p-2 rounded-lg inline-block border border-slate-200">
                    התשובה הנכונה היא: {question.options[question.correct]}
                  </p>
                )}
                <div className="bg-white/50 p-4 rounded-xl border border-slate-200 inline-block leading-relaxed">
                  {question.explanation}
                </div>
              </div>

              <button 
                onClick={nextQ}
                className="bg-slate-800 text-white text-xl px-10 py-3 rounded-full font-bold hover:bg-slate-900 shadow-lg flex items-center gap-2 mx-auto"
              >
                לשאלה הבאה <ChevronLeft />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  },


    {
    id: "hafifa-class-g8",
    title: "חפיפת משולשים הצגה לכיתה ",
    grade: 8,
    category: "geometry",
    premium: true,
    emoji: "📐",
    description: "מותאם להצגה ראשונית בכיתה",
    html:import React, { useState, useEffect, memo } from 'react';
import { Trophy, Clock, CheckCircle, XCircle, ChevronRight, ChevronLeft, Layers, Target, Home, RefreshCw, AlertTriangle, Lightbulb, Move, MousePointerClick } from 'lucide-react';

// --- PERFORMANCE OPTIMIZATIONS ---
// 1. Static Geometry Helpers (Outside Component)
const getPointOnLine = (p1, p2, dist) => {
  const len = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  const ratio = dist / len;
  return {
    x: p1.x + (p2.x - p1.x) * ratio,
    y: p1.y + (p2.y - p1.y) * ratio
  };
};

const getMidPoint = (p1, p2) => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2
});

const getArcPath = (corner, leg1Node, leg2Node, radius) => {
  const start = getPointOnLine(corner, leg1Node, radius);
  const end = getPointOnLine(corner, leg2Node, radius);
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`;
};

// 2. Static Data Constants (Outside Component to prevent recreation on render)
const EMPTY_MARKS = {};

const LEVELS_DATA = [
  // --- PART 1: INTRO & DEFINITIONS ---
  {
    type: 'learn',
    title: 'מהי חפיפת משולשים?',
    steps: [
      {
        text: 'שני משולשים נקראים "חופפים" אם הם זהים בדיוק בגודלם ובצורתם.',
        highlight: 'show-both'
      },
      {
        text: 'לחצו על הכפתור "בדוק חפיפה" כדי לראות איך הם מתמזגים לצורה אחת.',
        highlight: 'animate-overlap-instruction',
        showAction: true
      },
      {
        text: 'כשהמשולשים חופפים, כל הצלעות שוות בהתאמה וכל הזוויות שוות בהתאמה.',
        highlight: 'show-all-marks'
      },
      {
        text: 'הסימן המתמטי לחפיפה הוא:',
        math: '≅', 
        textAfter: 'וסדר האותיות הוא קריטי!',
        highlight: 'show-symbol-and-order'
      },
      {
        text: 'הביטוי',
        math: 'ΔABC ≅ ΔDEF',
        textAfter: 'מחייב ש-A מול D, ו-B מול E.',
        highlight: 'vertex-order-explanation'
      }
    ],
    diagram: 'intro-overlay',
    tip: 'דמיינו שאתם מניחים שקף אחד על השני. אם הכל מתכסה בדיוק - זו חפיפה.'
  },

  // --- PART 2: THEOREM 1 (SSS) ---
  {
    type: 'learn',
    title: 'משפט ראשון: צ.צ.צ',
    steps: [
      {
        text: 'המשפט הראשון (צ.צ.צ) אומר: מספיק ששלוש הצלעות שוות.',
        highlight: 'sss-intro'
      },
      {
        text: 'צלע אחת שווה לצלע אחת (קו אחד)...',
        highlight: 'side-1'
      },
      {
        text: 'צלע שנייה שווה לצלע שנייה (שני קווים)...',
        highlight: 'side-2'
      },
      {
        text: 'וצלע שלישית שווה לצלע שלישית (שלושה קווים).',
        highlight: 'side-3'
      },
      {
        text: 'אם זה מתקיים - המשולשים חופפים! (לחצו לבדיקה)',
        highlight: 'congruent-success',
        showAction: true
      }
    ],
    diagram: 'sss-demo',
    tip: 'צ.צ.צ = צלע, צלע, צלע. שלושה זוגות של צלעות שוות מספיקים לקביעת חפיפה.'
  },

  // --- QUIZ: SSS ---
  {
    type: 'quiz',
    question: 'הביטו בשרטוט. האם ניתן לקבוע שהמשולשים חופפים?',
    options: ['כן, לפי משפט צ.צ.צ', 'כן, לפי משפט צ.ז.צ', 'לא, חסרים נתונים', 'לא, כי הזוויות לא נתונות'],
    correct: 0,
    explanation: 'בשרטוט מסומנים בבירור שלושה זוגות של צלעות שוות (קו אחד, שניים ושלושה). זהו בדיוק התנאי למשפט צ.צ.צ.',
    diagramType: 'quiz-sss',
    marks: { s1: true, s2: true, s3: true },
    time: 40 
  },

  // --- PART 3: THEOREM 2 (SAS) ---
  {
    type: 'learn',
    title: 'משפט שני: צ.ז.צ',
    steps: [
      {
        text: 'משפט שני (צ.ז.צ): צלע, זווית, צלע.',
        highlight: 'sas-intro'
      },
      {
        text: 'כלל ברזל: הזווית חייבת להיות *כלואה* בין הצלעות.',
        highlight: 'angle-between'
      },
      {
        text: 'כאן יש שתי צלעות שוות, והזווית שנמצאת ביניהן שווה.',
        highlight: 'valid-sas'
      },
      {
        text: 'לכן המשולשים חופפים. (לחצו לבדיקה)',
        highlight: 'congruent-success',
        showAction: true
      }
    ],
    diagram: 'sas-demo',
    tip: 'האות ז\' ב-צ.ז.צ נמצאת באמצע - הזווית חייבת להיות באמצע, "חנוקה" בין הצלעות!'
  },

  // --- QUIZ: SAS TRAP (SSA) ---
  {
    type: 'quiz',
    question: 'זהירות מוקש! האם המשולשים בציור חופפים?',
    options: ['כן, לפי צ.ז.צ', 'כן, לפי צ.צ.צ', 'לא ניתן לקבוע חפיפה', 'כן, לפי ז.צ.ז'],
    correct: 2,
    explanation: 'שימו לב! הזווית אינה כלואה בין הצלעות (היא מול אחת הצלעות). אין משפט כזה, ולכן לא ניתן לקבוע חפיפה.',
    diagramType: 'quiz-ssa-trap', 
    marks: { s1: true, s2: true, a_opp: true }, 
    time: 50
  },

  // --- PART 4: THEOREM 3 (ASA) ---
  {
    type: 'learn',
    title: 'משפט שלישי: ז.צ.ז',
    steps: [
      {
        text: 'משפט שלישי (ז.צ.ז): זווית, צלע, זווית.',
        highlight: 'asa-intro'
      },
      {
        text: 'צריכים שתי זוויות שוות...',
        highlight: 'asa-angles-only'
      },
      {
        text: 'והצלע *שביניהן* (המחברת את הקודקודים) חייבת להיות שווה.',
        highlight: 'asa-side-between'
      },
      {
        text: 'אם זה מתקיים - יש חפיפה מושלמת!',
        highlight: 'congruent-success',
        showAction: true
      }
    ],
    diagram: 'asa-demo',
    tip: 'חפשו את "הפרצוף": שתי עיניים (זוויות) ופה (צלע) שמחבר ביניהן.'
  },

  // --- QUIZ BATCH ---
  {
    type: 'quiz',
    question: 'נתון:',
    math: 'ΔABC ≅ ΔKMR',
    textAfter: '. איזו צלע במשולש השני שווה לצלע AC?',
    options: ['צלע KR', 'צלע KM', 'צלע MR', 'לא ניתן לדעת'],
    correct: 0,
    explanation: 'לפי סדר האותיות: A (ראשונה) ו-C (שלישית) מתאימות ל-K (ראשונה) ו-R (שלישית).',
    diagramType: 'letters-only',
    time: 45 
  },
  {
    type: 'quiz',
    question: 'האם משולשים עם אותן זוויות (ז.ז.ז) בהכרח חופפים?',
    options: ['כן, תמיד', 'לא, הם רק דומים', 'כן, אם הם ישרי זווית', 'תלוי בשרטוט'],
    correct: 1,
    explanation: 'ממש לא! אפשר לצייר משולש קטן ומשולש ענק עם אותן זוויות. הם דומים, אבל לא חופפים בגודל.',
    diagramType: 'aaa-fail', 
    time: 40 
  },

  // --- NEW QUESTIONS ---
  {
    type: 'quiz',
    question: 'הביטו בשרטוט: נתונות שתי זוויות שוות והצלע שביניהן שווה. מה המסקנה?',
    options: ['חופפים לפי צ.ז.צ', 'חופפים לפי ז.צ.ז', 'חופפים לפי צ.צ.צ', 'לא ניתן לחפוף'],
    correct: 1,
    explanation: 'יש לנו זווית, צלע שמחברת ביניהן, ועוד זווית. זהו בדיוק המבנה של משפט ז.צ.ז.',
    diagramType: 'quiz-asa-rotated',
    marks: { aLeft: true, aRight: true, s3: true },
    time: 50 
  },
  {
    type: 'quiz',
    question: 'נתונים שני משולשים עם אורכי צלעות כמו בציור. האם הם חופפים?',
    options: ['כן, לפי צ.ז.צ', 'כן, כי הרוב שווה', 'לא, כי הצלעות לא זהות', 'תלוי בזוויות'],
    correct: 2,
    explanation: 'בחפיפה *כל* הצלעות חייבות להיות שוות בהתאמה. כאן צלע אחת שונה (5 מול 6), ולכן הם שונים.',
    diagramType: 'quiz-not-congruent-sides',
    marks: { 
      labelSidesT1: ['3', '4', '5'], 
      labelSidesT2: ['3', '4', '6'] 
    },
    time: 45 
  },
  {
    type: 'quiz',
    question: 'אתגר: נתון',
    math: 'ΔABC ≅ ΔDEF',
    textAfter: '. זווית A היא 50°. למי שווה זווית D?',
    options: ['50°', '100°', '25°', 'לא ניתן לדעת'],
    correct: 0,
    explanation: 'במשולשים חופפים, הקודקודים תואמים לפי הסדר. A ראשונה ו-D ראשונה, לכן הן שוות.',
    diagramType: 'letters-only-angles',
    time: 40
  }
];

// --- VISUAL COMPONENT (Memoized) ---
const TrianglePairVisual = memo(({ type, highlight, marks, overlapAnimation }) => {
  // COORDINATES - Standardized for Screen Fit
  // T1 (Left)
  const T1 = { 
    A: { x: 150, y: 60 }, 
    B: { x: 60, y: 280 }, 
    C: { x: 240, y: 280 } 
  };

  // T2 (Right) - Exactly 350px offset for precise overlap
  const offset = 350;
  const T2 = {
    D: { x: 150 + offset, y: 60 },
    E: { x: 60 + offset, y: 280 },
    F: { x: 240 + offset, y: 280 }
  };

  // AAA Fail (Small vs Big)
  const T1_Small = { A: { x: 150, y: 130 }, B: { x: 110, y: 240 }, C: { x: 190, y: 240 } };
  const T2_Big = { D: { x: 150 + offset, y: 30 }, E: { x: 30 + offset, y: 310 }, F: { x: 270 + offset, y: 310 } };

  // Quiz: Not Congruent Sides (3,4,5 vs 3,4,6)
  const T2_LongBase = {
    D: { x: 150 + offset, y: 60 },
    E: { x: 60 + offset, y: 280 },
    F: { x: 270 + offset, y: 280 } 
  };

  // Quiz: SSA Trap
  const T2_Trap = {
    D: { x: 150 + offset, y: 60 },
    E: { x: 110 + offset, y: 280 }, // Shifted E inwards
    F: { x: 240 + offset, y: 280 }
  };

  let Geom1 = T1;
  let Geom2 = T2;

  if (type === 'aaa-fail') {
    Geom1 = T1_Small;
    Geom2 = T2_Big;
  } else if (type === 'quiz-not-congruent-sides') {
    Geom2 = T2_LongBase;
  } else if (type === 'quiz-ssa-trap') {
     Geom2 = T2_Trap;
  }

  // Colors & Styles
  const strokeColor = "white";
  const tickColor = "#FACC15"; // Yellow
  const angleColor = "#F472B6"; // Pink
  const strokeWidth = "4"; 
  const labelColor = "#38BDF8"; // Light Blue for numbers

  // --- MARK RENDERING ---
  const drawSideTick = (p1, p2, count, isActive) => {
    if (!isActive) return null;
    const mid = getMidPoint(p1, p2);
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.sqrt(dx*dx + dy*dy);
    const nx = -dy / len * 12;
    const ny = dx / len * 12;

    const lines = [];
    for(let i=0; i<count; i++) {
       const shift = (i - (count-1)/2) * 8;
       const sx = dx/len * shift;
       const sy = dy/len * shift;
       lines.push(
         <line 
           key={i} 
           x1={mid.x + sx - nx} y1={mid.y + sy - ny} 
           x2={mid.x + sx + nx} y2={mid.y + sy + ny} 
           stroke={tickColor} strokeWidth="4" strokeLinecap="round"
         />
       );
    }
    return <g>{lines}</g>;
  };

  const drawSideLabel = (p1, p2, text) => {
    const mid = getMidPoint(p1, p2);
    let ox = 0, oy = 0;
    if (Math.abs(p1.y - p2.y) < 10) { // Horizontal-ish (Base)
       oy = 35;
    } else if (mid.x < 150 || (mid.x > 350 && mid.x < 500)) { // Left side
       ox = -35;
    } else { // Right side
       ox = 35;
    }

    return (
      <text 
        x={mid.x + ox} y={mid.y + oy} 
        textAnchor="middle" 
        fill={labelColor} 
        fontSize="36" 
        fontWeight="black"
        style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)', direction: 'ltr', fontFamily: 'monospace' }}
      >
        {text}
      </text>
    );
  };

  const drawAngleArc = (corner, leg1, leg2, count, isActive) => {
    if (!isActive) return null;
    const arcs = [];
    for(let i=0; i<count; i++) {
      const r = 40 + i * 10;
      arcs.push(
        <path 
          key={i}
          d={getArcPath(corner, leg1, leg2, r)}
          fill="none"
          stroke={angleColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
    }
    return <g>{arcs}</g>;
  };

  const s1 = marks?.s1 || highlight === 'side-1' || highlight === 'sss-intro' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'show-both' || highlight === 'valid-sas' || highlight === 'sas-intro' || highlight === 'angle-between';
  const s2 = marks?.s2 || highlight === 'side-2' || highlight === 'sss-intro' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'sas-intro' || highlight === 'valid-sas' || highlight === 'angle-between' || highlight === 'show-both';
  const s3 = marks?.s3 || highlight === 'side-3' || highlight === 'sss-intro' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'asa-side-between' || highlight === 'asa-intro' || highlight === 'show-both';

  const aTop = marks?.aTop || highlight === 'angle-between' || highlight === 'valid-sas' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'aaa-fail' || highlight === 'show-both' || highlight === 'vertex-order-explanation';
  const aLeft = marks?.aLeft || highlight === 'asa-intro' || highlight === 'asa-angles-only' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'aaa-fail' || highlight === 'show-both';
  const aRight = marks?.aRight || highlight === 'asa-intro' || highlight === 'asa-angles-only' || highlight === 'show-all-marks' || highlight === 'congruent-success' || highlight === 'aaa-fail' || marks?.a_opp || highlight === 'show-both';

  // --- ANIMATION STYLE ---
  const animStyle = overlapAnimation 
    ? { 
        transform: `translateX(-${offset}px)`,
        zIndex: 50,
        transition: 'transform 3s ease-in-out',
        willChange: 'transform' // Hardware acceleration hint
      } 
    : { 
        transform: 'translateX(0px)', 
        zIndex: 10,
        transition: 'transform 1s ease-out' 
      };

  const renderLabel = (text, x, y) => (
    <text x={x} y={y} textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" style={{ direction: 'ltr' }}>{text}</text>
  );

  return (
    <div className="relative flex flex-col justify-center items-center w-full select-none mt-4">

      {/* CONGRUENCE STATEMENT */}
      {(highlight === 'show-symbol-and-order' || highlight === 'vertex-order-explanation' || highlight === 'show-all-marks') && (
        <div className="mb-6 bg-slate-900/80 px-8 py-4 rounded-2xl border border-yellow-500/30 flex flex-col items-center animate-in fade-in slide-in-from-top-4 z-20">
          <div className="flex items-center gap-8 text-4xl md:text-6xl font-black text-white mb-2" dir="ltr">
            <span className="text-blue-300">ΔABC</span>
            <span className="text-yellow-400 transform scale-125 mx-2 font-sans inline-block">≅</span>
            <span className="text-green-300">ΔDEF</span>
          </div>
          {(highlight === 'vertex-order-explanation' || highlight === 'show-all-marks') && (
            <div className="flex gap-8 text-xl md:text-2xl mt-2 font-mono text-gray-300 border-t border-gray-600 pt-2 w-full justify-center" dir="ltr">
               <div className="flex flex-col items-center"><span className="text-blue-300 font-bold">A</span><span className="text-xs text-gray-400">↔</span><span className="text-green-300 font-bold">D</span></div>
               <div className="flex flex-col items-center"><span className="text-blue-300 font-bold">B</span><span className="text-xs text-gray-400">↔</span><span className="text-green-300 font-bold">E</span></div>
               <div className="flex flex-col items-center"><span className="text-blue-300 font-bold">C</span><span className="text-xs text-gray-400">↔</span><span className="text-green-300 font-bold">F</span></div>
            </div>
          )}
        </div>
      )}

      <div className="w-full overflow-visible flex justify-center">
      <svg viewBox="0 0 800 380" className="w-full max-w-4xl overflow-visible">

        {type === 'letters-only' || type === 'letters-only-angles' ? (
           <text x="400" y="190" textAnchor="middle" fill="white" fontSize="60" fontFamily="monospace" fontWeight="bold" style={{direction: 'ltr'}}>
              {type === 'letters-only' ? 'ΔABC ≅ ΔKMR' : 'ΔABC ≅ ΔDEF'}
           </text>
        ) : (
          <>
            {/* TRIANGLE 1 (Left, Static) */}
            <g>
              <path d={`M${Geom1.A.x} ${Geom1.A.y} L${Geom1.B.x} ${Geom1.B.y} L${Geom1.C.x} ${Geom1.C.y} Z`} 
                    fill="rgba(59, 130, 246, 0.15)" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />

              {/* MARKS T1 */}
              {s1 && drawSideTick(Geom1.A, Geom1.B, 1, true)}
              {s2 && drawSideTick(Geom1.A, Geom1.C, 2, true)}
              {s3 && drawSideTick(Geom1.B, Geom1.C, 3, true)}

              {/* Labels for T1 */}
              {marks?.labelSidesT1 && (
                <>
                  {drawSideLabel(Geom1.A, Geom1.B, marks.labelSidesT1[0])}
                  {drawSideLabel(Geom1.B, Geom1.C, marks.labelSidesT1[1])}
                  {drawSideLabel(Geom1.C, Geom1.A, marks.labelSidesT1[2])}
                </>
              )}

              {aTop && drawAngleArc(Geom1.A, Geom1.B, Geom1.C, 1, true)}
              {aLeft && drawAngleArc(Geom1.B, Geom1.C, Geom1.A, 2, true)}
              {aRight && drawAngleArc(Geom1.C, Geom1.A, Geom1.B, 3, true)}

              {renderLabel("A", Geom1.A.x, Geom1.A.y - 25)}
              {renderLabel("B", Geom1.B.x - 30, Geom1.B.y + 20)}
              {renderLabel("C", Geom1.C.x + 30, Geom1.C.y + 20)}
            </g>

            {/* TRIANGLE 2 (Right, Animated) */}
            <g style={animStyle}>
              <path d={`M${Geom2.D.x} ${Geom2.D.y} L${Geom2.E.x} ${Geom2.E.y} L${Geom2.F.x} ${Geom2.F.y} Z`} 
                    fill="rgba(34, 197, 94, 0.15)" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />

              {/* MARKS T2 */}
              {s1 && drawSideTick(Geom2.D, Geom2.E, 1, true)}
              {s2 && drawSideTick(Geom2.D, Geom2.F, 2, true)}
              {s3 && drawSideTick(Geom2.E, Geom2.F, 3, true)}

              {/* Labels for T2 */}
              {marks?.labelSidesT2 && (
                <>
                  {drawSideLabel(Geom2.D, Geom2.E, marks.labelSidesT2[0])}
                  {drawSideLabel(Geom2.E, Geom2.F, marks.labelSidesT2[1])}
                  {drawSideLabel(Geom2.F, Geom2.D, marks.labelSidesT2[2])}
                </>
              )}

              {aTop && drawAngleArc(Geom2.D, Geom2.E, Geom2.F, 1, true)}
              {aLeft && drawAngleArc(Geom2.E, Geom2.F, Geom2.D, 2, true)}
              {aRight && drawAngleArc(Geom2.F, Geom2.D, Geom2.E, 3, true)}

              {renderLabel("D", Geom2.D.x, Geom2.D.y - 25)}
              {renderLabel("E", Geom2.E.x - 30, Geom2.E.y + 20)}
              {renderLabel("F", Geom2.F.x + 30, Geom2.F.y + 20)}
            </g>
          </>
        )}
      </svg>
      </div>
    </div>
  );
});

// --- MAIN COMPONENT ---
const CongruenceGame = () => {
  const [gameState, setGameState] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [learnStep, setLearnStep] = useState(0); 
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(60); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState('bg-slate-900');
  const [showTip, setShowTip] = useState(true);
  const [overlapAnimation, setOverlapAnimation] = useState(false);

  // --- ENGINE LOGIC ---
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0 && gameState === 'quiz' && !isAnswered) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isAnswered) {
      handleTimeUp();
    }
    return () => clearInterval(interval);
  }, [timer, timerActive, gameState, isAnswered]);

  useEffect(() => {
    setOverlapAnimation(false);
  }, [learnStep, currentLevel, gameState]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setFeedbackColor('bg-red-900');
    setStreak(0);
  };

  const resetColors = () => {
    setFeedbackColor('bg-slate-900');
  };

  const startGame = () => {
    setGameState('learn');
    setCurrentLevel(0);
    setLearnStep(0);
    setScore(0);
    setStreak(0);
    resetColors();
    setShowTip(true); 
  };

  const goHome = () => {
    setGameState('welcome');
    resetColors();
    setShowTip(true);
  };

  const nextStep = () => {
    const currentLvl = LEVELS_DATA[currentLevel];
    if (gameState === 'learn') {
      if (learnStep < currentLvl.steps.length - 1) {
        setLearnStep(prev => prev + 1);
        setOverlapAnimation(false);
        return;
      }
    }

    if (currentLevel + 1 < LEVELS_DATA.length) {
      setCurrentLevel(prev => prev + 1);
      setLearnStep(0);
      setShowTip(true);

      const nextLvl = LEVELS_DATA[currentLevel + 1];
      setIsAnswered(false);
      setSelectedAnswer(null);
      resetColors();

      if (nextLvl.type === 'quiz') {
        setGameState('quiz');
        setTimer(nextLvl.time || 30);
        setTimerActive(true);
      } else {
        setGameState('learn');
        setTimerActive(false);
      }
    } else {
      setGameState('summary');
    }
  };

  const prevStep = () => {
    if (gameState === 'learn' && learnStep > 0) {
      setLearnStep(prev => prev - 1);
      setOverlapAnimation(false);
    }
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    setTimerActive(false);

    const currentQ = LEVELS_DATA[currentLevel];
    if (index === currentQ.correct) {
      setScore(prev => prev + 100 + (timer * 2));
      setStreak(prev => prev + 1);
      setFeedbackColor('bg-green-900');
    } else {
      setStreak(0);
      setFeedbackColor('bg-red-900');
    }
  };

  return (
    <div dir="rtl" className={`min-h-screen transition-colors duration-500 ${feedbackColor} text-white font-sans flex flex-col items-center p-4 overflow-hidden relative select-none bg-slate-900`}>

      {/* HOME BUTTON */}
      <button 
        onClick={goHome} 
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full z-50 transition-all shadow-lg border border-white/20 active:scale-95"
        title="חזור למסך הבית"
      >
        <Home className="w-8 h-8 text-white" />
      </button>

      {/* HEADER / SCOREBOARD */}
      {gameState !== 'welcome' && (
        <div className="w-full max-w-6xl flex justify-between items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/20 mt-16 md:mt-4 z-10 shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-xl border border-white/10">
              <Trophy className="text-yellow-400 w-8 h-8" />
              <span className="text-3xl font-bold font-mono" dir="ltr">{score}</span>
            </div>
            {gameState === 'quiz' && (
              <div className={`flex items-center gap-3 text-3xl font-bold px-6 py-3 rounded-xl border-2 transition-colors ${timer < 10 ? 'bg-red-500/50 border-red-500 animate-pulse' : 'bg-blue-500/30 border-blue-400'}`}>
                <Clock className="w-7 h-7" />
                <span dir="ltr">{timer}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-300 mb-1 font-bold">רצף תשובות</span>
            <div className="flex gap-2 h-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-4 h-4 rounded-full transition-all duration-300 ${i < streak ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-gray-600'}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WELCOME SCREEN */}
      {gameState === 'welcome' && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-in fade-in zoom-in duration-500 text-center z-10">
          <div className="relative mb-10">
             <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>
             <Layers className="w-40 h-40 text-yellow-400 relative z-10 drop-shadow-2xl" />
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-blue-200 mb-8 leading-tight drop-shadow-sm">
            חפיפת משולשים
          </h1>
          <p className="text-3xl md:text-4xl text-blue-100 mb-16 max-w-3xl leading-relaxed font-light">
            האם המשולשים זהים לחלוטין? בואו נלמד את החוקים, נזהה את המוקשים ונצבור נקודות!
          </p>
          <button 
            onClick={startGame}
            className="group relative px-20 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-4xl md:text-5xl font-black rounded-3xl shadow-[0_12px_0_rgb(30,58,138)] active:shadow-[0_6px_0_rgb(30,58,138)] active:translate-y-2 transition-all"
          >
            בואו נתחיל
          </button>
        </div>
      )}

      {/* LEARNING SLIDE */}
      {gameState === 'learn' && (
        <div className="flex flex-col items-center max-w-7xl w-full h-full flex-1 z-10 min-h-[70vh]">
          <div className="bg-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] w-full border border-white/10 shadow-2xl flex flex-col xl:flex-row gap-10 items-stretch h-full">

            <div className="flex-1 flex flex-col min-w-[400px]">
              <div className="flex items-center gap-5 mb-8 border-b border-white/10 pb-6">
                <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-600/20">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">{LEVELS_DATA[currentLevel].title}</h2>
              </div>

              <div className="flex-1 space-y-6 relative overflow-hidden pr-2">
                {LEVELS_DATA[currentLevel].steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`transform transition-all duration-500 p-6 rounded-2xl border-r-8 shadow-lg ${
                      idx === learnStep 
                        ? 'bg-white/10 border-yellow-400 translate-x-0 opacity-100 scale-100' 
                        : idx < learnStep 
                          ? 'bg-black/30 border-green-500/50 opacity-60 scale-95'
                          : 'opacity-0 translate-y-8 absolute top-0 w-full pointer-events-none'
                    }`}
                  >
                    <div className="flex gap-5 items-start">
                      <div className={`mt-1 p-2 rounded-full ${idx === learnStep ? 'bg-yellow-400/20 text-yellow-400' : 'bg-green-500/20 text-green-500'}`}>
                         <ChevronLeft className={`w-6 h-6 ${idx === learnStep ? 'animate-pulse' : ''}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-2xl md:text-3xl leading-relaxed ${idx === learnStep ? 'font-bold text-white' : 'font-normal text-gray-300'}`}>
                          {step.text}
                          {step.math && <span className="mx-2 font-sans font-bold text-yellow-300 inline-block" dir="ltr">{step.math}</span>}
                          {step.textAfter}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mt-10 pt-6 border-t border-white/10 shrink-0">
                <button 
                  onClick={prevStep}
                  disabled={learnStep === 0}
                  className={`px-8 py-5 rounded-2xl font-bold text-2xl transition-all flex items-center justify-center gap-3 ${learnStep === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white/5 hover:bg-white/10 text-white'}`}
                >
                  <ChevronRight className="w-8 h-8 rotate-180" />
                  חזור
                </button>

                <button 
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-l from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white text-3xl font-black py-5 rounded-2xl shadow-xl shadow-indigo-900/40 transition-all flex justify-center items-center gap-4 transform active:scale-[0.98] active:translate-y-1"
                >
                  {learnStep < LEVELS_DATA[currentLevel].steps.length - 1 ? 'המשך' : 'לשלב הבא'}
                  <ChevronLeft className="w-10 h-10" />
                </button>
              </div>
            </div>

            <div className="flex-[1.5] flex flex-col justify-between bg-black/30 rounded-[2rem] p-4 border-2 border-white/10 shadow-inner relative overflow-hidden group min-h-[400px]">

               {/* INTERACTIVE BUTTONS - BIG AND CENTERED */}
               {LEVELS_DATA[currentLevel].steps[learnStep]?.showAction && (
                 <div className="absolute top-6 right-6 z-30">
                   <button 
                     onClick={() => setOverlapAnimation(!overlapAnimation)}
                     className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-2xl font-black shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 ${overlapAnimation ? 'bg-red-500 hover:bg-red-400 border-red-300 text-white' : 'bg-green-500 hover:bg-green-400 border-green-300 text-white'}`}
                   >
                     <Move className="w-8 h-8" /> 
                     {overlapAnimation ? 'הפרד משולשים' : 'בדוק חפיפה'}
                     <MousePointerClick className="w-6 h-6 animate-bounce" />
                   </button>
                 </div>
               )}

               <div className="flex-1 flex items-center justify-center w-full">
                 <TrianglePairVisual 
                   type={LEVELS_DATA[currentLevel].diagram} 
                   highlight={LEVELS_DATA[currentLevel].steps[learnStep]?.highlight}
                   marks={EMPTY_MARKS}
                   overlapAnimation={overlapAnimation}
                 />
               </div>

               {/* TIP BOX */}
               <div className="mt-4 w-full">
                 <button 
                   onClick={() => setShowTip(!showTip)}
                   className="flex items-center justify-center gap-3 w-full py-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-200 rounded-2xl transition-all border border-yellow-500/20 text-xl font-bold"
                 >
                   <Lightbulb className="w-6 h-6" />
                   {showTip ? 'הסתר טיפ' : 'קבל טיפ'}
                 </button>
                 {showTip && (
                   <div className="mt-3 p-6 bg-black/50 rounded-2xl border-r-8 border-yellow-500 animate-in fade-in slide-in-from-top-2">
                     <p className="font-serif text-2xl text-yellow-50 text-right leading-relaxed font-medium">
                       {LEVELS_DATA[currentLevel].tip}
                     </p>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ SLIDE */}
      {gameState === 'quiz' && (
        <div className="flex flex-col items-center max-w-6xl w-full animate-in zoom-in-95 duration-300 flex-1 justify-center z-10 min-h-[70vh]">
          <div className="bg-slate-800/90 p-8 md:p-12 rounded-[3rem] w-full border border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 h-3 bg-gradient-to-l from-green-400 to-blue-500 transition-all duration-1000 ease-linear" style={{width: `${(timer / LEVELS_DATA[currentLevel].time) * 100}%`}}></div>

            {/* TRAP ALERT BADGE */}
            {LEVELS_DATA[currentLevel].diagramType === 'quiz-ssa-trap' || LEVELS_DATA[currentLevel].diagramType === 'aaa-fail' ? (
              <div className="absolute top-8 left-8 bg-red-500/20 border-2 border-red-500 text-red-100 px-6 py-3 rounded-full text-xl font-black flex items-center gap-3 animate-bounce shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <AlertTriangle className="w-8 h-8" />
                שאלה מכשילה!
              </div>
            ) : null}

            <div className="flex-1 flex flex-col xl:flex-row gap-16 mt-8">
              <div className="flex-1 flex flex-col">
                <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-right text-blue-50">
                  {LEVELS_DATA[currentLevel].question}
                  {LEVELS_DATA[currentLevel].math && <span className="mx-2 font-mono text-yellow-300 inline-block font-bold" dir="ltr">{LEVELS_DATA[currentLevel].math}</span>}
                  {LEVELS_DATA[currentLevel].textAfter}
                </h3>
                <div className="bg-black/30 rounded-[2rem] p-6 flex-1 flex items-center justify-center border-2 border-white/10 min-h-[350px] relative shadow-inner">
                  <TrianglePairVisual 
                    type={LEVELS_DATA[currentLevel].diagramType} 
                    highlight={selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'congruent-success' : (LEVELS_DATA[currentLevel].diagramType === 'quiz-ssa-trap' ? 'invalid-sas' : '')}
                    marks={LEVELS_DATA[currentLevel].marks}
                    overlapAnimation={false} // No animation in quiz mode
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5 justify-center">
                {LEVELS_DATA[currentLevel].options.map((option, idx) => {
                  let btnClass = "p-6 rounded-3xl text-2xl md:text-3xl font-bold transition-all transform hover:scale-[1.02] shadow-lg border-4 relative overflow-hidden group text-right pr-8 ";

                  if (!isAnswered) {
                    btnClass += "bg-white/5 hover:bg-white/10 border-white/10 cursor-pointer text-gray-100";
                  } else {
                    if (idx === LEVELS_DATA[currentLevel].correct) {
                      btnClass += "bg-green-600 border-green-400 text-white scale-105 shadow-[0_0_30px_rgba(74,222,128,0.5)] z-10";
                    } else if (idx === selectedAnswer) {
                      btnClass += "bg-red-600 border-red-400 opacity-90";
                    } else {
                      btnClass += "bg-gray-800/50 opacity-40 border-transparent grayscale";
                    }
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={isAnswered}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <span className="" dir={option.match(/[a-zA-Z]/) ? "ltr" : "rtl"}>{option}</span>
                        {isAnswered && idx === LEVELS_DATA[currentLevel].correct && <CheckCircle className="w-10 h-10 text-white animate-bounce" />}
                        {isAnswered && idx === selectedAnswer && idx !== LEVELS_DATA[currentLevel].correct && <XCircle className="w-10 h-10 text-white animate-pulse" />}
                        {!isAnswered && <div className="w-8 h-8 rounded-full border-4 border-white/20 group-hover:border-white transition-colors"></div>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {isAnswered && (
              <div className="mt-10 pt-8 border-t border-white/10 animate-in slide-in-from-bottom fade-in duration-500">
                <div className={`p-8 rounded-[2rem] mb-8 flex gap-6 items-start ${selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'bg-green-900/40 border-2 border-green-500/30' : 'bg-red-900/40 border-2 border-red-500/30'}`}>
                   {selectedAnswer === LEVELS_DATA[currentLevel].correct 
                    ? <div className="bg-green-500 p-3 rounded-full mt-1 shrink-0 shadow-lg"><CheckCircle className="text-white w-8 h-8" /></div>
                    : <div className="bg-red-500 p-3 rounded-full mt-1 shrink-0 shadow-lg"><XCircle className="text-white w-8 h-8" /></div>
                  }
                  <div>
                    <span className="font-black text-3xl block mb-3 text-white">{selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'כל הכבוד!' : 'לא נורא...'}</span>
                    <p className="text-2xl leading-relaxed opacity-90 font-medium text-gray-100">{LEVELS_DATA[currentLevel].explanation}</p>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full py-6 bg-white text-blue-900 font-black text-4xl rounded-[2rem] hover:bg-blue-50 shadow-[0_10px_0_rgb(203,213,225)] active:shadow-[0_5px_0_rgb(203,213,225)] active:translate-y-1 transition-all flex justify-center items-center gap-4"
                >
                  לשאלה הבאה
                  <ChevronLeft className="w-10 h-10" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUMMARY SCREEN */}
      {gameState === 'summary' && (
        <div className="flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 p-12 max-w-4xl bg-slate-800/90 backdrop-blur-md rounded-[4rem] shadow-2xl border border-white/20 mt-10 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            <Trophy className="w-48 h-48 text-yellow-400 mb-8 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)] animate-bounce-slow relative z-10" />
          </div>

          <h2 className="text-7xl font-black mb-8 text-white">אלופי החפיפה!</h2>

          <div className="bg-white/10 p-10 rounded-[3rem] w-full mb-10 border border-white/10 transform hover:scale-105 transition-transform shadow-2xl">
            <p className="text-3xl mb-4 text-blue-200 font-bold">הניקוד הסופי</p>
            <div className="text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 font-mono tracking-tight filter drop-shadow-lg" dir="ltr">
              {score}
            </div>
          </div>

          <button 
            onClick={startGame}
            className="w-full py-6 bg-white/10 hover:bg-white/20 rounded-3xl font-black text-3xl transition-all flex items-center justify-center gap-4 border-2 border-white/10 hover:border-white/30"
          >
            <RefreshCw className="w-8 h-8" />
            התחל משחק חדש
          </button>
        </div>
      )}

    </div>
  );
};

export default CongruenceGame;

     {
    id: "pilog-class-g8",
    title: "חוק הפילוג הצגה לכיתה ",
    grade: 8,
    category: "algebra",
    premium: true,
    emoji: "📐",
    description: "מותאם להצגה ראשונית בכיתה",
    html:import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Check, X, RefreshCw, Calculator, Star, ChevronDown, Play, RotateCcw, HelpCircle, SkipForward, Sparkles } from 'lucide-react';

// --- רכיבים כלליים ועיצוב ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-4 md:p-10 border border-white/50 ${className}`}>
    {children}
  </div>
);

const Button = ({ onClick, children, variant = "primary", className = "", disabled = false }) => {
  const baseStyle = "font-bold text-lg py-3 px-6 md:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 shadow-md hover:shadow-lg touch-manipulation";

  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700",
    success: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700",
    outline: "bg-white border-2 border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700",
    ghost: "bg-transparent text-slate-500 hover:bg-slate-100/50 hover:text-slate-700 shadow-none hover:shadow-none",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none transform-none",
    info: "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
  };

  return (
    <button 
      onClick={disabled ? null : onClick} 
      className={`${baseStyle} ${disabled ? variants.disabled : variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// --- מסך ראשי ---

export default function App() {
  const [step, setStep] = useState(0); // 0:Intro, 1:Tutorial, 2:Quiz, 3:GuidedPractice, 4:FinalPractice

  // הסרגל מופיע רק בהתחלה (0) ובסוף (4)
  const showNavBar = step === 0 || step === 4;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans text-right ${showNavBar ? 'pb-32' : 'pb-8'}`} dir="rtl">
      {/* אלמנטים דקורטיביים ברקע */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 md:w-96 md:h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-3 md:p-8">
        {/* כותרת עליונה */}
        <header className="text-center mb-6 md:mb-10 pt-2 md:pt-4">
          <div className="inline-block p-1.5 md:p-2 bg-white/50 backdrop-blur-sm rounded-2xl mb-3 border border-white/60 shadow-sm">
             <span className="text-indigo-600 font-bold tracking-wider text-xs md:text-sm px-2">שיעור אינטראקטיבי</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-800 mb-2 md:mb-3 tracking-tight drop-shadow-sm">
            מאסטר המשוואות <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">🎓</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            הדרך הכי כיפית ללמוד אלגברה
          </p>
        </header>

        {/* תוכן משתנה לפי שלב */}
        <div className="transition-all duration-500 ease-in-out">
            {step === 0 && <Intro onStart={() => setStep(1)} />}
            {step === 1 && <Tutorial onComplete={() => setStep(2)} />}
            {step === 2 && <Quiz onComplete={() => setStep(3)} />}
            {step === 3 && <GuidedPractice onComplete={() => setStep(4)} />}
            {step === 4 && <FinalPractice onRestart={() => setStep(0)} />}
        </div>

        {/* זכויות יוצרים */}
        <div className="mt-12 text-center text-slate-400 font-medium text-sm">
          כל הזכויות שמורות לאלוגברה © {new Date().getFullYear()}
        </div>

      </div>

      {/* סרגל התקדמות תחתון - מופיע רק בשלב הראשון והאחרון */}
      {showNavBar && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex justify-center gap-5 md:gap-10 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 w-[90%] md:w-auto max-w-md transition-all animate-fade-in-up">
          {['פתיחה', 'לומדים', 'בוחן', 'תרגול', 'סיכום'].map((label, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 cursor-default relative group flex-1">
              <div 
                className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-500 shadow-sm ${step >= idx ? 'bg-gradient-to-r from-violet-600 to-indigo-600 scale-125' : 'bg-slate-200'}`}
              />
              {step >= idx && step < idx + 1 && (
                  <div className="absolute -top-1 -right-0.5 md:-right-1 w-3 md:w-3.5 h-3 md:h-3.5 bg-violet-400 rounded-full animate-ping opacity-75" />
              )}
              <span className={`text-[10px] md:text-xs font-bold transition-colors duration-300 whitespace-nowrap ${step === idx ? 'text-violet-700' : 'text-slate-400'}`}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- שלב 0: פתיחה ---
const Intro = ({ onStart }) => (
  <Card className="text-center py-12 md:py-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500" />

    <div className="mb-8 md:mb-10 flex justify-center relative">
      <div className="absolute inset-0 bg-indigo-200 rounded-full blur-2xl opacity-30 transform scale-150" />
      <div className="bg-gradient-to-br from-white to-slate-50 p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white relative animate-float">
        <Calculator size={60} md:size={72} className="text-indigo-600 drop-shadow-lg" />
      </div>
    </div>

    <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">מוכנים לפצח את הקוד?</h2>

    <div className="bg-slate-50/80 rounded-2xl p-5 md:p-8 mb-8 md:mb-10 max-w-2xl mx-auto border border-slate-100 shadow-inner">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
          בשיעור הזה נלמד את הטכניקה הסודית לפתרון משוואות:
          <br/><br/>
          <span className="flex items-center gap-2 justify-center mb-2"><Check className="text-green-500" size={20}/> פתיחת סוגריים בזהירות</span>
          <span className="flex items-center gap-2 justify-center mb-2"><Check className="text-green-500" size={20}/> העברת אגפים וסידור החדר</span>
          <span className="flex items-center gap-2 justify-center"><Check className="text-green-500" size={20}/> העלמת ה-X בריבוע וחישוב סופי</span>
        </p>
    </div>

    <Button onClick={onStart} className="mx-auto text-lg md:text-xl px-12 md:px-16 py-4 md:py-5 shadow-violet-200 hover:shadow-violet-300 shadow-xl w-full md:w-auto">
      יאללה, בוא נתחיל! <ArrowLeft className="mr-2" strokeWidth={3} />
    </Button>
  </Card>
);

// --- שלב 1: מדריך מונפש מפורט ---
const Tutorial = ({ onComplete }) => {
  const [tutStep, setTutStep] = useState(0);
  const [animState, setAnimState] = useState('idle'); // idle, highlight, moving, done

  // רכיב עזר להצגת מונח מתמטי בתוך המדריך
  const Term = ({ val, type, id, highlightIds = [], moveId, crossed }) => {
    let colorClass = "text-slate-700";
    if (type === 'x2') colorClass = "text-violet-700 font-black";
    if (type === 'x') colorClass = "text-blue-600 font-black";
    if (type === 'num') colorClass = "text-rose-600 font-black";

    const isHighlighted = highlightIds && highlightIds.includes(id);
    const isMoving = moveId === id && animState === 'moving';

    // רווח מינימלי בטלפון, רגיל במחשב
    const baseStyle = `inline-block mx-[1px] md:mx-1.5 transition-all duration-1000 transform ${colorClass}`;

    let specificStyle = {};
    if (isHighlighted) {
      specificStyle = { backgroundColor: '#fef08a', padding: '0 2px md:0 4px', borderRadius: '6px', transform: 'scale(1.15)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' };
    }
    if (isMoving) {
        specificStyle = { 
            transform: 'translateY(-60px) scale(1.2) rotate(-5deg)', 
            opacity: 0.6,
            color: type === 'num' ? '#e11d48' : '#059669',
            textShadow: '0 10px 20px rgba(0,0,0,0.2)'
        };
    }
    if (crossed) {
        specificStyle = { textDecoration: 'line-through', textDecorationColor: '#ef4444', textDecorationThickness: '3px', opacity: 0.4 };
    }

    return (
      <span className={baseStyle} style={specificStyle}>
        {val}
      </span>
    );
  };

  // כל שלב מרונדר עכשיו עם flex-nowrap ו-whitespace-nowrap כדי למנוע ירידת שורה
  const steps = [
    { 
      title: "המשוואה המקורית",
      text: "זו המשוואה שלנו. נשאיר אותה תמיד למעלה כדי שלא נתבלבל.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-2">(x + 3)(x + 2) = x(x + 1) + 14</div>
    },
    // --- פתיחת סוגריים ---
    {
      title: "פתיחת סוגריים (שמאל)",
      text: "נתחיל בצד שמאל: x כפול x זה x בריבוע.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1"><span className="bg-yellow-200 rounded-md px-1 shadow-sm font-bold text-slate-800">x²</span> + ... = ...</div>
    },
    {
      title: "פתיחת סוגריים (שמאל)",
      text: "ממשיכים: x כפול 2 זה 2x. (פשוט מחברים אותם)",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded-md">2x</span> + ... = ...</div>
    },
    {
      title: "פתיחת סוגריים (שמאל)",
      text: "עכשיו תור ה-3: 3 כפול x זה 3x.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + 2x + <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded-md">3x</span> + ... = ...</div>
    },
    {
      title: "פתיחת סוגריים (שמאל)",
      text: "ולבסוף: 3 כפול 2 זה 6.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + 2x + 3x + <span className="text-rose-600 font-bold bg-rose-50 px-1 rounded-md">6</span> = ...</div>
    },
    {
      title: "פתיחת סוגריים (ימין)",
      text: "עוברים לצד ימין: x כפול x שוב נותן x בריבוע.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + 2x + 3x + 6 = <span className="bg-yellow-200 rounded-md px-1 shadow-sm font-bold text-slate-800">x²</span> + ...</div>
    },
    {
      title: "פתיחת סוגריים (ימין)",
      text: "ו-x כפול 1 זה פשוט 1x (או רק x). ה-14 נשאר בצד ומחכה.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + 2x + 3x + 6 = x² + <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded-md">x</span> + 14</div>
    },
    {
      title: "סיימנו לפתוח סוגריים!",
      text: "עכשיו המשוואה פרוסה לפנינו. שימו לב: לא נחבר כלום בינתיים! קודם כל נסדר את החדר.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">x² + 2x + 3x + 6 = x² + x + 14</div>
    },
    // --- טיפול ב-X בריבוע ---
    {
      title: "שלב קריטי: ה-X בריבוע",
      text: "יש לנו x² בצד ימין. אנחנו חייבים להעביר אותו שמאלה כדי שיהיה יחד עם החבר שלו. נסמן אותו...",
      highlightIds: ['right_x2'],
      render: (hl) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1"><Term val="x²" type="x2" /> + 2x + 3x + 6 = <Term val="x²" type="x2" id="right_x2" highlightIds={hl} /> + x + 14</div>
    },
    {
      title: "העברת X בריבוע",
      text: "מעבירים אותו את הגדר (השווה). כשהוא עובר, הפלוס הופך למינוס!",
      moveId: 'right_x2',
      render: (hl, mv) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1"><Term val="x²" type="x2" /> <Term val="- x²" type="x2" id="right_x2" highlightIds={hl} moveId={mv} /> + 2x + 3x + 6 = x + 14</div>
    },
    {
      title: "ביטול ה-X בריבוע",
      text: "תראו מה קרה בצד שמאל: יש לנו x² פחות x². משהו פחות עצמו זה תמיד אפס! בום! הם מתבטלים.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1"><Term val="x²" type="x2" crossed={true}/> <Term val="- x²" type="x2" crossed={true}/> + 2x + 3x + 6 = x + 14</div>
    },
    {
      title: "מה נשאר?",
      text: "המשוואה נהייתה פשוטה יותר. עכשיו נמשיך לסדר: כל ה-Xים שמאלה, כל המספרים ימינה.",
      render: () => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">2x + 3x + 6 = x + 14</div>
    },
    // --- העברת איקסים ---
    {
      title: "העברת איקסים",
      text: "יש לנו x בצד ימין. הוא לא שייך לשם. הוא צריך לעבור למשפחה שלו בצד שמאל. נסמן אותו...",
      highlightIds: ['right_x'],
      render: (hl) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">2x + 3x + 6 = <Term val="x" type="x" id="right_x" highlightIds={hl} /> + 14</div>
    },
    {
      title: "העברת איקסים (ביצוע)",
      text: "הופ! מעבירים אותו שמאלה. זוכרים? הסימן מתהפך. הוא היה פלוס x, עכשיו הוא מינוס x.",
      moveId: 'right_x',
      render: (hl, mv) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">2x + 3x <Term val="- x" type="x" id="right_x" highlightIds={hl} moveId={mv} /> + 6 = 14</div>
    },
    // --- העברת מספרים ---
    {
      title: "העברת מספרים",
      text: "עכשיו תור המספרים. המספר 6 נמצא בצד שמאל עם האיקסים. הוא צריך לעבור לצד ימין למשפחה שלו.",
      highlightIds: ['left_num'],
      render: (hl) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">2x + 3x - x + <Term val="6" type="num" id="left_num" highlightIds={hl} /> = 14</div>
    },
    {
      title: "העברת מספרים (ביצוע)",
      text: "מעבירים את ה-6 ימינה. הסימן מתהפך מפלוס למינוס.",
      moveId: 'left_num',
      render: (hl, mv) => <div className="flex flex-nowrap items-center justify-center gap-0.5 md:gap-1">2x + 3x - x = 14 <Term val="- 6" type="num" id="left_num" highlightIds={hl} moveId={mv} /></div>
    },
    // --- כינוס איברים ---
    {
      title: "כינוס משפחת האיקסים",
      text: "עכשיו הכל מסודר! בואו נחשב את צד שמאל: 2 ועוד 3 זה 5. פחות ה-x הזה (שזה בעצם 1x) זה 4. סה\"כ 4x.",
      render: () => <div className="flex flex-col items-center">
          <div className="opacity-40 mb-3 font-medium flex flex-nowrap justify-center gap-1 text-[3.5vw] md:text-xl">2x + 3x - 1x = ...</div>
          <div className="text-blue-700 bg-blue-100/50 px-6 py-3 rounded-2xl border-2 border-blue-200 shadow-sm flex flex-nowrap justify-center gap-1 font-bold text-[5vw] md:text-4xl">4x = 14 - 6</div>
      </div>
    },
    {
      title: "כינוס משפחת המספרים",
      text: "עכשיו נחשב את צד ימין: 14 פחות 6.",
      render: () => <div className="flex flex-col items-center">
          <div className="text-slate-800 flex flex-nowrap justify-center gap-1 font-bold text-[5vw] md:text-4xl">4x = <span className="text-rose-600 bg-rose-50 px-2 rounded-lg">8</span></div>
      </div>
    },
    // --- חילוק וסיום ---
    {
      title: "השלב האחרון: חילוק",
      text: "תמיד בסוף: לוקחים את המספר שלבד (8) ומחלקים אותו במספר שצמוד ל-X (שזה 4).",
      render: () => <div className="flex flex-col items-center gap-3">
          <div className="text-slate-700 font-bold text-[5vw] md:text-3xl">4x = 8</div>
          <div className="flex items-center gap-2 text-violet-600 font-medium bg-violet-50 px-3 py-1 rounded-full text-sm">
             <span className="text-lg">÷4</span> מחלקים ב-4
          </div>
          <div className="text-slate-800 border-t-2 border-slate-200 pt-4 mt-2 px-8 font-black text-[6vw] md:text-4xl">x = 8 ÷ 4</div>
      </div>
    },
    {
      title: "התוצאה הסופית",
      text: "8 לחלק ל-4 זה 2. מצאנו את ה-X!",
      render: () => (
          <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-xl opacity-20 rounded-full"></div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 border-4 border-emerald-100 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300 font-black text-[12vw] md:text-6xl">
                x = 2
              </div>
          </div>
      )
    }
  ];

  // ניהול האנימציה האוטומטית
  useEffect(() => {
    setAnimState('idle');
    const current = steps[tutStep];

    if (current.moveId || current.highlightIds) {
        setAnimState('highlight');
        if (current.moveId) {
            const timer1 = setTimeout(() => setAnimState('moving'), 2000); 
            const timer2 = setTimeout(() => setAnimState('done'), 3000); 
            return () => { clearTimeout(timer1); clearTimeout(timer2); };
        }
    }
  }, [tutStep]);

  const currentStep = steps[tutStep];

  return (
    <Card className="relative overflow-visible mt-6 md:mt-2">
      {/* סרגל דביק עם המשוואה המקורית - שורה אחת בלבד */}
      <div className="absolute -top-8 left-0 right-0 flex justify-center z-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-3 py-2 md:px-6 md:py-3 rounded-2xl md:rounded-full shadow-lg border border-slate-600 flex items-center justify-center max-w-[95%] overflow-hidden" dir="ltr">
            <span className="font-mono font-bold tracking-wide text-yellow-300 text-center flex flex-nowrap justify-center gap-x-1 whitespace-nowrap text-[3.5vw] md:text-2xl">
              (x + 3)(x + 2) = x(x + 1) + 14
            </span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 mt-10 md:mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">{currentStep.title}</h2>
        <div className="bg-slate-100 text-slate-600 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-inner whitespace-nowrap">
            {tutStep + 1} / {steps.length}
        </div>
      </div>

      {/* אזור המשוואה המרכזי */}
      {/* text-[4vw] מבטיח שהטקסט יקטן כדי להתאים לרוחב הנייד. whitespace-nowrap מונע ירידת שורה. */}
      <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-2 md:p-8 mb-6 md:mb-8 border border-slate-200 min-h-[120px] md:min-h-[220px] flex flex-col items-center justify-center shadow-inner relative overflow-hidden group">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="font-mono text-center w-full px-1 md:px-4 py-4 relative z-10 leading-normal flex flex-nowrap whitespace-nowrap justify-center items-center gap-x-0.5 md:gap-x-1 text-[4vw] md:text-4xl" dir="ltr">
          {currentStep.render(
              animState !== 'idle' ? currentStep.highlightIds || [] : [],
              animState === 'moving' ? currentStep.moveId : null
          )}
        </div>
      </div>

      {/* הסברים */}
      <div className="bg-indigo-50/80 p-4 md:p-6 rounded-2xl border-l-4 border-r-4 border-indigo-400 mb-6 md:mb-8 shadow-sm">
        <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-white p-1.5 md:p-2 rounded-full shadow-sm mt-0.5 shrink-0 text-indigo-600">
                <Sparkles size={20} md:size={24} fill="currentColor" className="text-indigo-200" stroke="currentColor"/>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-medium">
              {currentStep.text}
            </p>
        </div>
      </div>

      {/* כפתורי ניווט */}
      <div className="flex justify-between items-center gap-3 md:gap-4">
        <Button 
            onClick={() => setTutStep(prev => Math.max(0, prev - 1))} 
            variant="outline"
            disabled={tutStep === 0}
            className="w-1/3 text-base md:text-lg"
        >
            <ArrowRight size={18} md:size={20} /> <span className="hidden md:inline">חזור</span>
        </Button>

        {tutStep < steps.length - 1 ? (
          <Button onClick={() => setTutStep(prev => prev + 1)} className="w-2/3 text-base md:text-lg">
             הבא <ArrowLeft size={20} md:size={22} />
          </Button>
        ) : (
          <Button onClick={onComplete} variant="success" className="w-2/3 text-base md:text-lg">
            הבנתי, לתרגול! <Check size={20} md:size={22} />
          </Button>
        )}
      </div>
    </Card>
  );
};

// --- שלב 2: שאלת הבנה (אמריקאית) ---
const Quiz = ({ onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = (ans) => {
    setSelected(ans);
    if (ans === 'B') setIsCorrect(true);
    else setIsCorrect(false);
  };

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
             <HelpCircle size={24} md:size={28} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">רגע חושבים</h2>
      </div>

      <p className="text-lg md:text-xl mb-8 text-slate-700 leading-relaxed font-medium">
        נתונה המשוואה: 
        <br/>
        <span dir="ltr" className="inline-block mt-3 text-xl md:text-2xl font-mono font-bold bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm text-slate-800">3x + 4 = 10</span>
        <br /><br/>
        אנחנו רוצים להעביר את ה-<span className="text-rose-600 font-bold bg-rose-50 px-1 rounded">+4</span> לצד ימין.
        מה יקרה לו כשהוא יעבור?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
        <button 
          onClick={() => checkAnswer('A')}
          className={`relative p-4 md:p-6 rounded-2xl border-2 text-lg md:text-xl font-medium transition-all text-right group shadow-sm hover:shadow-md ${selected === 'A' ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-rose-400 bg-rose-50 text-rose-800') : 'border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50'}`}
        >
          <div className="flex items-center justify-between">
              <div><span className="font-bold ml-2 bg-slate-200 px-2 py-0.5 rounded text-sm text-slate-600 group-hover:bg-white">א</span> יישאר +4</div>
              {selected === 'A' && !isCorrect && <X className="text-rose-500"/>}
          </div>
        </button>
        <button 
          onClick={() => checkAnswer('B')}
          className={`relative p-4 md:p-6 rounded-2xl border-2 text-lg md:text-xl font-medium transition-all text-right group shadow-sm hover:shadow-md ${selected === 'B' ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-rose-400 bg-rose-50 text-rose-800') : 'border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50'}`}
        >
           <div className="flex items-center justify-between">
              <div><span className="font-bold ml-2 bg-slate-200 px-2 py-0.5 rounded text-sm text-slate-600 group-hover:bg-white">ב</span> יהפוך ל -4</div>
              {selected === 'B' && isCorrect && <Check className="text-emerald-600"/>}
          </div>
        </button>
      </div>

      {selected && (
        <div className={`p-4 md:p-5 rounded-2xl mb-8 text-center text-lg font-bold animate-fade-in ${isCorrect ? 'bg-emerald-100/80 text-emerald-800 border border-emerald-200' : 'bg-rose-100/80 text-rose-800 border border-rose-200'}`}>
          {isCorrect ? "🎯 נכון מאוד! העברת צד = החלפת סימן." : "😅 לא בדיוק. זכור: כשעוברים את הגדר, חייבים לשלם בסימן."}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <Button variant="ghost" onClick={onComplete} className="text-sm text-slate-400 hover:text-slate-600 w-full md:w-auto order-2 md:order-1">
           דלג לשלב הבא <SkipForward size={16} className="mr-1" />
        </Button>
        <Button onClick={onComplete} disabled={!isCorrect} variant={isCorrect ? "success" : "disabled"} className="w-full md:w-auto min-w-[200px] order-1 md:order-2 shadow-lg">
          המשך לתרגול <ArrowLeft />
        </Button>
      </div>
    </Card>
  );
};

// --- שלב 3: תרגול מודרך ---
const GuidedPractice = ({ onComplete }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAns, setUserAns] = useState("");
  const [feedback, setFeedback] = useState(null);

  const check = () => {
    if (userAns.trim() === "-1" || userAns.trim() === "- 1") {
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">תורך לנסות! 💪</h2>
        <Button variant="info" className="text-xs md:text-sm px-3 md:px-4 py-2 h-auto rounded-xl" onClick={() => setShowExplanation(!showExplanation)}>
          {showExplanation ? "הסתר עזרה" : "צריך רמז?"}
        </Button>
      </div>

      <p className="mb-4 text-lg md:text-xl text-slate-600 font-medium">פתור במחברת וכתוב את התשובה:</p>

      {/* תיקון גם כאן: גופן דינמי וביטול שבירת שורות */}
      <div className="bg-slate-800 border-4 border-slate-700 p-4 md:p-8 rounded-2xl text-center mb-8 shadow-2xl transform rotate-1 flex justify-center overflow-hidden">
        <span className="font-mono text-white font-bold tracking-wider flex flex-nowrap whitespace-nowrap justify-center gap-2 text-[4vw] md:text-5xl" dir="ltr">
          (x + 4)(x + 5) = x² + 7x + 18
        </span>
      </div>

      {showExplanation && (
        <div className="bg-yellow-50 p-4 md:p-6 rounded-2xl border-2 border-yellow-200 mb-8 animate-fade-in shadow-sm">
          <h4 className="font-bold mb-3 text-yellow-800 text-lg flex items-center gap-2"><Sparkles size={18}/> השלבים לפתרון:</h4>
          <ul className="space-y-3 list-disc list-inside text-slate-700 font-medium text-sm md:text-base" dir="rtl">
            <li>פתח סוגריים בצד שמאל: <span dir="ltr" className="font-mono bg-white px-2 rounded border border-yellow-100 text-slate-800">x² + 5x + 4x + 20</span></li>
            <li>העבר את ה-x² מימין לשמאל (הם יבטלו זה את זה).</li>
            <li>העבר את ה-7x שמאלה (יהפוך למינוס).</li>
            <li>העבר את ה-20 ימינה (יהפוך למינוס).</li>
            <li>כנס איברים וחלק במקדם של x.</li>
          </ul>
        </div>
      )}

      <div className="flex flex-col items-center gap-8 mb-6 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <div className="flex items-center bg-white rounded-2xl px-6 py-4 border-2 border-indigo-200 shadow-md focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all w-full md:w-auto justify-center">
                <span className="text-2xl font-bold text-slate-400 ml-3 font-mono">x = </span>
                <input 
                    type="number" 
                    value={userAns}
                    onChange={(e) => setUserAns(e.target.value)}
                    className="bg-transparent text-3xl font-bold w-24 outline-none ltr text-center text-indigo-600 placeholder-slate-200"
                    placeholder="?"
                    dir="ltr"
                />
            </div>
            <Button onClick={check} className="w-full md:w-auto px-10 text-xl shadow-lg shadow-indigo-200">בדיקה</Button>
        </div>

        {feedback === 'correct' && (
            <div className="text-center animate-bounce-short w-full">
            <div className="bg-emerald-100 text-emerald-800 p-4 rounded-xl font-bold text-lg mb-4 border border-emerald-200 shadow-sm">
                🎉 כל הכבוד! תשובה נכונה!
            </div>
            <Button variant="success" onClick={onComplete} className="w-full py-4 text-xl shadow-emerald-200 shadow-lg">המשך לשלב הבא <ArrowLeft/></Button>
            </div>
        )}

        {feedback === 'wrong' && (
            <div className="text-center text-rose-600 bg-rose-50 px-6 py-3 rounded-xl font-bold border border-rose-100 animate-shake w-full">
                לא בדיוק... נסה שוב או היעזר ברמז למעלה.
            </div>
        )}

      </div>

      {/* כפתור דילוג */}
      <div className="text-center">
        <Button variant="ghost" onClick={onComplete} className="text-slate-400 text-sm hover:text-slate-600">
                דלג לשלב הבא <SkipForward size={16} className="mr-2" />
        </Button>
      </div>

    </Card>
  );
};

// --- שלב 4: תרגול מסכם (כולל מינוסים) ---
const FinalPractice = ({ onRestart }) => {
  const exercises = [
    {
      id: 1,
      q: "(x + 2)(x + 6) = x(x + 3) + 22",
      hint: "שים לב: ה-x² יתבטל בשני הצדדים.",
      steps: [
        { text: "פתיחת סוגריים:", math: "x² + 6x + 2x + 12 = x² + 3x + 22" },
        { text: "העברת x² שמאלה וביטול:", math: "6x + 2x + 12 = 3x + 22" },
        { text: "העברת איקסים שמאלה (3x הופך למינוס):", math: "6x + 2x - 3x + 12 = 22" },
        { text: "העברת מספרים ימינה (12 הופך למינוס):", math: "6x + 2x - 3x = 22 - 12" },
        { text: "חישוב (6 ועוד 2 זה 8, פחות 3 זה 5):", math: "5x = 10" },
        { text: "חילוק ב-5:", math: "x = 2" }
      ],
      ans: "2"
    },
    {
      id: 2,
      q: "(x - 2)(x + 4) = x(x + 1) + 4",
      hint: "זהירות! מינוס 2 כפול איקס זה מינוס 2 איקס.",
      steps: [
          { text: "פתיחת סוגריים (שים לב למינוס 2):", math: "x² + 4x - 2x - 8 = x² + x + 4" },
          { text: "ביטול x² והעברת ה-x משמאל (הופך למינוס):", math: "4x - 2x - x - 8 = 4" },
          { text: "העברת ה-8 ימינה (הופך לפלוס!):", math: "4x - 2x - x = 4 + 8" },
          { text: "חישוב (4 פחות 2 פחות 1 זה 1x):", math: "1x = 12" },
          { text: "תשובה סופית:", math: "x = 12" }
      ],
      ans: "12"
    },
    {
      id: 3,
      q: "x(x + 5) = (x - 3)(x - 1) + 11",
      hint: "מינוס כפול מינוס זה פלוס! (-3 כפול -1 שווה 3).",
      steps: [],
      ans: "3",
      overrideQ: "x(x + 5) = (x - 3)(x - 1) + 24", 
      overrideSteps: [
          { text: "פתיחת סוגריים (מינוס כפול מינוס שווה פלוס 3):", math: "x² + 5x = x² - x - 3x + 3 + 24" },
          { text: "ביטול x²:", math: "5x = -x - 3x + 27" },
          { text: "העברת איקסים שמאלה (הופכים לפלוס):", math: "5x + x + 3x = 27" },
          { text: "חישוב (5 ועוד 1 ועוד 3 זה 9):", math: "9x = 27" },
          { text: "חילוק ב-9:", math: "x = 3" }
      ]
    }
  ];

  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [showSol, setShowSol] = useState(false);
  const [inp, setInp] = useState("");
  const [status, setStatus] = useState("idle");

  const current = exercises[currentExIndex];
  const displayQ = current.overrideQ || current.q;
  const displaySteps = current.overrideSteps || current.steps;

  const check = () => {
    if (inp.trim() === current.ans) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  const nextExercise = () => {
    if (currentExIndex < exercises.length - 1) {
      setCurrentExIndex(prev => prev + 1);
      setInp("");
      setStatus("idle");
      setShowSol(false);
    } else {
      setStatus("finished");
    }
  };

  if (status === "finished") {
    return (
      <Card className="text-center py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-50 to-white z-0 pointer-events-none"></div>
        <div className="relative z-10">
            <div className="mb-8 inline-block relative">
                <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <Star size={100} className="text-yellow-400 fill-yellow-400 relative drop-shadow-lg transform rotate-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">סיימת את האימון! 🏆</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
                אתה עכשיו מאסטר רשמי במשוואות!
                <br/>
                יודע להתמודד עם סוגריים, מינוסים וכל מה שיזרקו עליך.
            </p>
            <Button onClick={onRestart} variant="outline" className="mx-auto px-10 py-4 text-lg border-slate-300 hover:bg-slate-50">
                התחל מחדש <RotateCcw className="mr-2"/>
            </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">תרגיל מסכם {currentExIndex + 1}</h2>
        <span className="text-xs md:text-sm bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-3 md:px-4 py-1.5 rounded-full font-bold shadow-md whitespace-nowrap">שלב מתקדם</span>
      </div>

      <div className="bg-white border-2 border-indigo-100 p-4 md:p-8 rounded-3xl text-center mb-10 shadow-lg shadow-indigo-50 flex justify-center">
        {/* תיקון גם כאן - גופן דינמי וביטול שבירה */}
        <span className="font-mono text-slate-800 font-bold flex flex-nowrap whitespace-nowrap justify-center gap-1 text-[4vw] md:text-4xl" dir="ltr">
          {displayQ}
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mb-6">
        <div className="flex items-center bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-inner">
             <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-500 font-mono">x = </span>
                <input 
                type="number" 
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                className="bg-transparent text-2xl font-bold w-24 text-center text-indigo-700 outline-none"
                placeholder="?"
                dir="ltr"
                />
            </div>
        </div>

        {status !== 'correct' && (
             <div className="flex flex-col items-center gap-4 w-full max-w-sm mt-2">
                 <div className="flex gap-4 w-full justify-center">
                    <Button onClick={check} className="flex-1 shadow-lg shadow-violet-200 text-base md:text-lg">בדוק תשובה</Button>
                    <Button variant="info" onClick={() => setShowSol(true)} className="flex-1 bg-sky-100 text-sky-700 hover:bg-sky-200 border-sky-200 text-base md:text-lg">
                        <HelpCircle size={18} className="ml-2" /> פתרון מלא
                    </Button>
                 </div>
                 <Button variant="ghost" onClick={nextExercise} className="text-slate-400 text-sm hover:text-slate-600 w-full mt-2">
                    דלג לתרגיל הבא <SkipForward size={16} className="mr-2" />
                 </Button>
             </div>
        )}

        {status === 'correct' && (
            <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 text-center animate-fade-in-up shadow-sm">
                <p className="text-emerald-700 font-bold text-2xl mb-4">✨ תשובה נכונה!</p>
                <Button variant="success" onClick={nextExercise} className="w-full justify-center py-4 text-lg shadow-emerald-200 shadow-lg">
                    לשאלה הבאה <ArrowLeft/>
                </Button>
            </div>
        )}
      </div>

      {status === 'wrong' && !showSol && (
          <p className="text-center text-rose-500 font-bold mb-4 animate-shake bg-rose-50 inline-block px-4 py-2 rounded-lg mx-auto border border-rose-100">
              לא נכון, נסה שוב או צפה בפתרון.
          </p>
      )}

      {/* פתרון מלא */}
      {showSol && (
        <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 mt-6 animate-fade-in text-right shadow-inner">
          <h3 className="font-bold text-xl mb-6 text-slate-800 border-b border-slate-200 pb-3">דרך הפתרון:</h3>
          <div className="space-y-4">
            {displaySteps.map((stepObj, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                <p className="text-slate-600 font-medium">{idx + 1}. {stepObj.text}</p>
                <p className="font-mono text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-lg flex flex-nowrap whitespace-nowrap justify-end text-left sm:text-right text-[3.5vw] md:text-xl" dir="ltr">{stepObj.math}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
              <p className="text-slate-500 mb-3 text-sm font-medium">הבנת את הטריק?</p>
              <Button onClick={nextExercise} variant="outline" className="w-full md:w-auto px-8 bg-white hover:bg-slate-50">
                  כן, אפשר להמשיך <ArrowLeft className="mr-2" />
              </Button>
          </div>
        </div>
      )}

    </Card>
  );
    {
    id: "misvaot-class-g8",
    title: "משוואות עם מכנה מספרי הצגה לכיתה ",
    grade: 8,
    category: "algebra",
    premium: true,
    emoji: "📐",
    description: "מתאים להצגה ראשונית לתלמידים בכיתה ",
    html:/* STREAMING_CHUNK: Imports and Constants */
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
    Anchor, Divide, Plus, Minus, X, Check, Brain, RefreshCw, Play, 
    Trophy, HelpCircle, Lock, Settings, Key, ArrowRight, ArrowLeft, 
    Undo, Redo, Droplets, Layers, Calculator, ThumbsUp, BookOpen, AlertTriangle, SkipForward
} from 'lucide-react';

// --- Utilities ---

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const gcd = (a, b) => !b ? a : gcd(b, a % b);

// Formatter helper with safety check
const formatTerm = (coeff) => {
    if (coeff === undefined || coeff === null) return "";
    if (coeff === 1) return "x";
    if (coeff === -1) return "-x";
    return `${coeff}x`;
};

/* STREAMING_CHUNK: Equation Generator Logic */
// מחולל משוואות שברים - 7 שלבים
const generateEquation = (level) => {
  const createTerm = (coeff, constant, denom, sign = 1) => ({ coeff, constant, denom, sign });

  if (level === 1) {
    let xVal = randomInt(1, 4) * 2; 
    let term2_val = randomInt(1, 3);
    let rhs_val = (xVal / 2) + term2_val;
    return {
        type: 'fraction',
        terms: [createTerm(1, 0, 2), createTerm(0, term2_val, 1)],
        rhs: { val: rhs_val, denom: 1 },
        commonDenom: 2,
        linear: { a: 1, b: term2_val * 2, c: 0, d: rhs_val * 2 },
        xVal
    };
  }

  if (level === 2) {
      let denom = 3;
      let xVal = randomInt(1, 3) * denom - 1; 
      let num_const = 1;
      let rhs_val = (xVal + num_const) / denom;
      return {
          type: 'fraction',
          terms: [createTerm(1, num_const, denom)],
          rhs: { val: rhs_val, denom: 1 },
          commonDenom: 3,
          linear: { a: 1, b: num_const, c: 0, d: rhs_val * 3 },
          xVal
      };
  }

  let denom1, denom2, commonDenom;
  let isLevel4 = level === 4;
  let isLevel6 = level === 6;

  if (level === 3) { denom1 = 2; denom2 = 4; commonDenom = 4; } 
  else if (isLevel4) {
      const pairs = [[2,4], [3,6], [4,8]];
      const p = pairs[randomInt(0, pairs.length-1)];
      denom1 = p[0]; denom2 = p[1]; commonDenom = p[1];
  } else if (level === 5) { denom1 = 2; denom2 = 3; commonDenom = 6; } 
  else if (isLevel6) {
      const pairs = [[2,5], [3,4], [2,7]]; 
      const p = pairs[randomInt(0, pairs.length-1)];
      denom1 = p[0]; denom2 = p[1]; commonDenom = p[0] * p[1];
  } else {
      denom1 = 3; denom2 = 5; commonDenom = 15;
  }

  let attempts = 0;
  while(attempts < 1000) {
      let xVal = randomInt(1, 8);
      let t1_const = randomInt(0, 3); 
      let t2_const = randomInt(1, 4); 
      let t2_sign = randomInt(0, 1) === 0 ? 1 : -1;

      let term1Val = (xVal + t1_const) / denom1;
      let term2Val = (t2_const * t2_sign) / denom2;
      let lhs = term1Val + term2Val;

      let m1 = commonDenom / denom1;
      let m2 = commonDenom / denom2;

      let linearRHS = lhs * commonDenom; 

      if (Math.abs(linearRHS - Math.round(linearRHS)) < 0.0001) {
          let linD = Math.round(linearRHS);
          let linA = m1; 
          let linB = (m1 * t1_const) + (m2 * t2_const * t2_sign); 

          if (linA !== 0 && (linD - linB) / linA === xVal) {
             let finalRHSVal = lhs;
             let finalRHSDenom = 1;

             if (Math.abs(lhs - Math.round(lhs)) > 0.0001) {
                 const commonDivisor = gcd(Math.abs(linD), commonDenom);
                 finalRHSVal = linD / commonDivisor;
                 finalRHSDenom = commonDenom / commonDivisor;
             }

             return {
                type: 'fraction',
                terms: [
                    createTerm(1, t1_const, denom1),
                    createTerm(0, t2_const, denom2, t2_sign)
                ],
                rhs: { val: finalRHSVal, denom: finalRHSDenom }, 
                commonDenom,
                linear: { a: linA, b: linB, c: 0, d: linD },
                xVal
            };
          }
      }
      attempts++;
  }

  return {
      type: 'fraction',
      terms: [createTerm(1, 0, 2), createTerm(0, 1, 2)],
      rhs: { val: 3, denom: 1 }, 
      commonDenom: 2,
      linear: { a: 1, b: 1, c: 0, d: 6 },
      xVal: 5
  };
};

/* STREAMING_CHUNK: Quiz Questions Data */
const QUIZ_QUESTIONS = [
    {
        q: (<span><span className="inline-block text-center mr-2"><span className="border-b-2 border-white block px-1">x</span><span>4</span></span> + <span className="inline-block text-center mx-2"><span className="border-b-2 border-white block px-1">1</span><span>6</span></span> = <span className="inline-block text-center ml-2"><span className="border-b-2 border-white block px-1">5</span><span>12</span></span></span>),
        options: [1, 2, -1, 3],
        correct: 1,
        commonDenom: 12
    },
    {
        q: (<span><span className="inline-block text-center mr-2"><span className="border-b-2 border-white block px-1">x</span><span>6</span></span> - <span className="inline-block text-center mx-2"><span className="border-b-2 border-white block px-1">3</span><span>8</span></span> = <span className="inline-block text-center ml-2"><span className="border-b-2 border-white block px-1">-1</span><span>24</span></span></span>),
        options: [2, 4, -2, 3],
        correct: 2,
        commonDenom: 24
    },
    {
        q: (<span><span className="inline-block text-center mr-2"><span className="border-b-2 border-white block px-1">x</span><span>9</span></span> + <span className="inline-block text-center mx-2"><span className="border-b-2 border-white block px-1">x</span><span>6</span></span> = 5</span>),
        options: [18, 9, 12, 15],
        correct: 18,
        commonDenom: 18
    },
    {
        q: (<span><span className="inline-block text-center mr-2"><span className="border-b-2 border-white block px-1">x+1</span><span>4</span></span> - <span className="inline-block text-center mx-2"><span className="border-b-2 border-white block px-1">x</span><span>5</span></span> = 1</span>),
        options: [15, 10, 20, 5],
        correct: 15,
        commonDenom: 20
    },
    {
        q: (<span><span className="inline-block text-center mr-2"><span className="border-b-2 border-white block px-1">2x</span><span>7</span></span> - <span className="inline-block text-center mx-2"><span className="border-b-2 border-white block px-1">x</span><span>3</span></span> = <span className="inline-block text-center ml-2"><span className="border-b-2 border-white block px-1">-1</span><span>21</span></span></span>),
        options: [1, -1, 3, 7],
        correct: 1,
        commonDenom: 21
    }
];

/* STREAMING_CHUNK: Visual Components (Explosion) */
const CoinExplosion = () => {
    const coins = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        animationDuration: 1 + Math.random() * 2 + 's',
        animationDelay: Math.random() * 0.5 + 's',
        scale: 0.5 + Math.random() * 1,
        rotate: Math.random() * 360 + 'deg'
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {coins.map((coin) => (
                <div 
                    key={coin.id}
                    className="absolute top-[-50px] animate-fall"
                    style={{
                        left: coin.left,
                        animationDuration: coin.animationDuration,
                        animationDelay: coin.animationDelay,
                        transform: `scale(${coin.scale}) rotate(${coin.rotate})`
                    }}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 via-teal-300 to-cyan-400 border-2 border-teal-600 shadow-lg flex items-center justify-center text-teal-900 font-bold text-xs">
                        $
                    </div>
                </div>
            ))}
            <style>{`
                @keyframes fall {
                    0% { top: -50px; opacity: 0; transform: translateY(0) rotate(0deg); }
                    10% { opacity: 1; }
                    100% { top: 100vh; opacity: 0; transform: translateY(100vh) rotate(720deg); }
                }
                .animate-fall {
                    animation-name: fall;
                    animation-timing-function: ease-in;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
};

/* STREAMING_CHUNK: Visual Components (FractionTerm) */
const FractionTerm = ({ 
    numeratorDisplay, 
    denominator, 
    expansionFactor, 
    state, // 'fraction', 'showing_ones', 'expanding', 'expanded', 'resolved', 'striking'
    commonDenom,
    isWholeNumber,
    isCheckingCD
}) => {
    const isComplex = typeof numeratorDisplay === 'string' && (numeratorDisplay.includes('+') || (numeratorDisplay.includes('-') && !numeratorDisplay.startsWith('-')));

    const renderNumerator = () => {
        if ((state === 'expanding' || state === 'expanded') && isComplex) {
            return `(${numeratorDisplay})`;
        }
        return numeratorDisplay;
    };

    const getExplanation = () => {
        if (expansionFactor === 1) return `המכנה הוא כבר ${commonDenom}. נכפול ב-1 (לא משנה כלום).`;
        if (isWholeNumber) return `נוסיף מכנה 1. ${commonDenom} ÷ 1 = ${commonDenom}. נכפול פי ${commonDenom}!`;
        return `${commonDenom} ÷ ${denominator} = ${expansionFactor}. לכן נכפול את המונה פי ${expansionFactor}!`;
    };

    const showYellow = state === 'expanding' || state === 'expanded' || state === 'striking';

    // מתי להראות את המכנה האמיתי - אם הוא שלם, הוא מוסתר עד שלב showing_ones
    const shouldShowDenominator = !isWholeNumber || state !== 'fraction';
    const isShowingOneAnimation = isWholeNumber && state === 'showing_ones';

    return (
        <div className="flex flex-col items-center mx-2 md:mx-4 relative transition-all duration-700 min-w-[50px] md:min-w-[80px]">

            {/* Tooltip positioned strictly above */}
            {state === 'expanding' && (
                <div className="
                    absolute z-50 bottom-[110%] mb-4 left-1/2 -translate-x-1/2 w-48
                    bg-teal-900/95 text-teal-100 text-base p-3 rounded-xl shadow-2xl border-2 border-teal-400 text-center pointer-events-none animate-in slide-in-from-bottom-2 font-bold leading-tight
                ">
                    {getExplanation()}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-900/95 border-b-2 border-r-2 border-teal-400 transform rotate-45 -mt-2"></div>
                </div>
            )}

            {/* Numerator */}
            <div className={`z-10 text-4xl md:text-5xl font-bold transition-all duration-500 flex items-center gap-1 md:gap-2 ${state === 'resolved' ? 'text-teal-300 scale-110' : 'text-white'}`}>
                {showYellow && (
                    <span className="text-yellow-300 animate-in zoom-in fade-in duration-300 flex items-center whitespace-nowrap drop-shadow-md">
                        {expansionFactor} <span className="mx-1 text-2xl">•</span>
                    </span>
                )}
                <span className="whitespace-nowrap">{renderNumerator()}</span>
            </div>

            {/* Denominator Line & Value */}
            <div className={`flex flex-col items-center w-full transition-all duration-700 relative ${state === 'resolved' ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>

                {state === 'striking' && (
                    <div className="absolute top-1/2 left-0 w-full h-1.5 md:h-2 bg-red-500 transform -rotate-12 animate-in zoom-in duration-300 origin-center shadow-sm z-40 rounded-full"></div>
                )}

                {/* The horizontal line */}
                <div className={`w-full border-t-4 my-1 transition-colors duration-500 ${isShowingOneAnimation ? 'border-yellow-400 animate-pulse' : (shouldShowDenominator ? 'border-white/80' : 'border-transparent')}`}></div>

                {/* The number */}
                <span className={`text-3xl md:text-4xl font-bold transition-all duration-500
                    ${state === 'striking' ? 'text-red-300' : 'text-cyan-200'}
                    ${!shouldShowDenominator ? 'opacity-0 select-none' : 'opacity-100'}
                    ${isShowingOneAnimation ? 'text-yellow-400 animate-pulse scale-125' : ''}
                `}>
                    {denominator}
                </span>

                {/* CD Check Tooltip below */}
                {isCheckingCD && (
                    <div className="
                        absolute z-50 top-full mt-4 left-1/2 -translate-x-1/2 min-w-max
                        bg-indigo-900/95 text-indigo-100 text-xl md:text-2xl p-2 md:p-3 rounded-xl shadow-2xl border-2 border-indigo-400 text-center pointer-events-none animate-in slide-in-from-top-2 font-mono font-bold flex items-center gap-2
                    " dir="ltr">
                        {commonDenom} ÷ {denominator} <Check className="text-emerald-400" size={24}/>
                    </div>
                )}
            </div>
        </div>
    );
};

/* STREAMING_CHUNK: Visual Components (LiveEquationBoard) */
const LiveEquationBoard = ({ data, phase, pendingOp, animationState, activeTermIndex }) => {

    const getTermState = (myIndex) => {
        if (phase === 'linear') return 'resolved';
        if (animationState === 'idle') return 'fraction';
        if (animationState === 'showing_hidden_ones') return 'showing_ones';
        if (animationState === 'explaining_cd') return 'showing_ones';

        if (animationState === 'resolving_sequence') {
            if (myIndex < activeTermIndex) return 'expanded'; 
            if (myIndex === activeTermIndex) return 'expanding'; 
            return 'showing_ones'; 
        }

        if (animationState === 'striking_denominators' || animationState === 'intermission' || animationState === 'showing_new_equation') {
            return 'striking';
        }
        return 'fraction';
    };

    const getLinearValueStr = (myIndex) => {
        if (myIndex === 0) {
            const factor1 = data.commonDenom / data.terms[0].denom;
            const valB_from_term1 = factor1 * data.terms[0].constant;
            let s = "";
            if (data.linear.a !== 0) s += formatTerm(data.linear.a);
            if (valB_from_term1 !== 0) {
                if (data.linear.a !== 0) s += valB_from_term1 > 0 ? `+${valB_from_term1}` : `${valB_from_term1}`;
                else s += valB_from_term1;
            }
            if (s==="") s="0";
            return s;
        }
        if (myIndex === 1) {
            if (!data.terms[1]) return "";
            const t2 = data.terms[1];
            const factor = data.commonDenom / t2.denom;
            const val = Math.abs(t2.constant * factor); 
            return val;
        }
        if (myIndex === 2) return data.linear.d; 
        return "?";
    };

    const getFractionNumeratorStr = (term) => {
        let s = "";
        if (term.coeff !== 0) s += formatTerm(term.coeff);
        if (term.constant !== 0) {
            if (term.coeff !== 0) s += term.constant > 0 ? ` + ${term.constant}` : ` - ${Math.abs(term.constant)}`;
            else s += term.constant;
        }
        if (s === "") s = "0";
        return s;
    };

    // --- NORMAL PHASE RENDERER (used both as main and as "results below") ---
    const renderLinearSide = (coeff, constVal) => {
        const parts = [];
        if (coeff !== 0) parts.push(<span key="var" className="mx-1">{formatTerm(coeff)}</span>);

        if (constVal !== 0 || (coeff === 0 && constVal === 0 && !pendingOp)) {
             const sign = constVal >= 0 ? "+" : "-";
             const val = Math.abs(constVal);
             const showSign = coeff !== 0; 
             const isCancelingConst = animationState === 'canceling' && pendingOp?.target === 'const';
             parts.push(
                 <span key="const" className={`mx-1 transition-opacity duration-500 ${isCancelingConst ? 'opacity-0' : 'opacity-100'}`}>
                    {showSign && <span className="mx-1">{sign}</span>}
                    {val}
                 </span>
             );
        } else if (coeff === 0 && constVal === 0) {
             parts.push(<span key="zero">0</span>);
        }

        if (pendingOp && animationState !== 'idle' && phase === 'linear') {
            const isSub = pendingOp.type === 'sub';
            const isAdd = pendingOp.type === 'add';
            const isDiv = pendingOp.type === 'div';

            if (isDiv) {
                return (
                    <div className="flex flex-col items-center animate-in zoom-in duration-500">
                        <div className="flex items-center border-b-4 border-teal-400 pb-1 mb-1 px-2">
                            {parts}
                        </div>
                        <div className="text-teal-400 font-bold text-3xl md:text-5xl">{pendingOp.val}</div>
                    </div>
                );
            }

            return (
                <div className="flex flex-row flex-wrap items-center justify-center gap-x-2">
                    <div className="flex items-center">{parts}</div>
                    <div className={`flex items-center text-teal-400 font-bold transition-all duration-500 text-3xl md:text-5xl drop-shadow-md
                        ${animationState === 'appear' ? 'opacity-100 translate-y-0' : 
                          animationState === 'canceling' ? 'opacity-0 scale-50' : 'opacity-0'}`}>
                        {isSub && <span>- {pendingOp.val}</span>}
                        {isAdd && <span>+ {pendingOp.val}</span>}
                    </div>
                </div>
            );
        }
        return <div className="flex items-center">{parts}</div>;
    };

    // --- FRACTION PHASE (Animations) ---
    if (phase === 'fraction' || animationState === 'showing_new_equation' || animationState === 'intermission' || animationState.includes('explaining') || animationState.includes('showing') || animationState.includes('resolving') || animationState.includes('striking')) {
        const { terms, rhs, commonDenom } = data;
        const hasSecondTerm = terms.length > 1;

        // Show built normal equation below during resolving
        const showResultArea = animationState === 'resolving_sequence' || animationState === 'striking_denominators' || animationState === 'showing_new_equation' || animationState === 'intermission';

        // Show common denom side box
        const showCommonDenomBox = animationState === 'explaining_cd' || animationState === 'resolving_sequence' || animationState === 'striking_denominators';

        // Logic for which parts of equation to show
        const showLinearTerm0 = activeTermIndex > 0 || animationState !== 'resolving_sequence';
        const showLinearTerm1 = activeTermIndex > 1 || animationState !== 'resolving_sequence';
        const showLinearTerm2 = activeTermIndex > 2 || animationState !== 'resolving_sequence';

        return (
            <div className="relative w-full flex flex-col items-center justify-center pt-8 md:pt-16 pb-8 px-2"> 

                {/* Common Denominator Indicator - Positioned Left */}
                {showCommonDenomBox && (
                    <div className="
                        absolute 
                        top-2 right-2 md:top-8 md:right-auto md:left-4 
                        bg-teal-900/90 text-teal-200 border-2 border-teal-500 
                        px-4 py-3 rounded-xl shadow-2xl 
                        flex flex-col items-center animate-in fade-in slide-in-from-left-8 duration-700 z-30 
                    ">
                        <span className="text-xs text-teal-300 font-bold uppercase tracking-wider mb-1">מכנה משותף</span>
                        <span className="text-4xl text-white font-mono font-bold drop-shadow-md">{commonDenom}</span>
                    </div>
                )}

                {/* Check CD Logic Explanation (Hidden Ones text) */}
                {animationState === 'showing_hidden_ones' && (
                    <div className="absolute top-0 w-full max-w-xl bg-blue-900/90 text-blue-100 border-2 border-blue-400 p-4 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-500 z-40 text-center font-bold text-lg md:text-xl">
                        למספרים שאין להם מכנה, נוסיף חלקי 1 כדי שנוכל לעשות מכנה משותף לכולם.
                    </div>
                )}

                {/* The main fraction equation */}
                <div className={`flex items-center justify-center min-h-[160px] text-white relative z-10 dir-ltr select-none px-4 transition-opacity duration-1000 ${animationState === 'showing_new_equation' || animationState === 'intermission' ? 'opacity-30 scale-90' : 'opacity-100'}`} dir="ltr">
                    <FractionTerm 
                        numeratorDisplay={getFractionNumeratorStr(terms[0])}
                        denominator={terms[0].denom}
                        expansionFactor={commonDenom / terms[0].denom}
                        state={getTermState(0)}
                        commonDenom={commonDenom}
                        isWholeNumber={terms[0].denom === 1}
                        isCheckingCD={animationState === 'explaining_cd' && activeTermIndex === 0}
                    />
                    {hasSecondTerm && (
                        <>
                            <span className="mx-2 md:mx-4 text-3xl md:text-5xl font-bold text-teal-500">{terms[1].sign > 0 ? "+" : "-"}</span>
                            <FractionTerm 
                                numeratorDisplay={getFractionNumeratorStr(terms[1])} 
                                denominator={terms[1].denom}
                                expansionFactor={commonDenom / terms[1].denom}
                                state={getTermState(1)}
                                commonDenom={commonDenom}
                                isWholeNumber={terms[1].denom === 1}
                                isCheckingCD={animationState === 'explaining_cd' && activeTermIndex === 1}
                            />
                        </>
                    )}
                    <span className="mx-3 md:mx-6 text-4xl md:text-6xl font-bold text-teal-500">=</span>
                    <FractionTerm 
                        numeratorDisplay={rhs.val} 
                        denominator={rhs.denom}
                        expansionFactor={commonDenom / rhs.denom}
                        state={getTermState(2)}
                        commonDenom={commonDenom}
                        isWholeNumber={rhs.denom === 1}
                        isCheckingCD={animationState === 'explaining_cd' && activeTermIndex === 2}
                    />
                </div>

                {/* The New Equation Builder Below */}
                {showResultArea && (
                    <div className="mt-8 border-t-2 border-slate-600 pt-6 w-full flex flex-col items-center bg-slate-900/50 rounded-2xl p-4 shadow-inner animate-in slide-in-from-top-4 duration-700">
                        <div className="text-yellow-400 font-bold mb-4 text-xl tracking-wider">המשוואה החדשה (ללא מכנים):</div>
                        <div className="flex items-center justify-center text-5xl md:text-6xl font-mono font-bold text-white min-h-[80px]" dir="ltr">
                            <span className={`transition-all duration-500 ${showLinearTerm0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                {getLinearValueStr(0)}
                            </span>

                            {hasSecondTerm && (
                                <span className={`transition-all duration-500 mx-2 ${showLinearTerm1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                    <span className="text-teal-400 mx-2">{terms[1].sign > 0 ? "+" : "-"}</span>
                                    {getLinearValueStr(1)}
                                </span>
                            )}

                            <span className={`transition-all duration-500 mx-4 text-teal-500 ${showLinearTerm1 || (!hasSecondTerm && showLinearTerm0) ? 'opacity-100' : 'opacity-0'}`}>=</span>

                            <span className={`transition-all duration-500 ${showLinearTerm2 ? 'opacity-100 scale-100 text-yellow-300' : 'opacity-0 scale-50'}`}>
                                {getLinearValueStr(2)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // --- NORMAL PHASE ---
    return (
        <div className="flex flex-col items-center">
            <div className="text-slate-400 font-bold mb-6 text-xl uppercase tracking-widest border-b border-slate-600 pb-2">משוואה רגילה</div>
            <div className="flex items-center justify-center min-h-[160px] text-5xl md:text-6xl font-mono font-bold text-white relative z-10 dir-ltr select-none" dir="ltr">
                {renderLinearSide(data.linear.a, data.linear.b)}
                <span className="mx-4 md:mx-8 text-teal-500">=</span>
                {renderLinearSide(data.linear.c, data.linear.d)}
            </div>
        </div>
    );
};

/* STREAMING_CHUNK: Quiz Components */
const QuizBoard = ({ onComplete }) => {
    const [qIndex, setQIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isChecking, setIsChecking] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const question = QUIZ_QUESTIONS[qIndex];

    const handleAnswer = (ans) => {
        if (isChecking) return;
        setSelected(ans);
        setIsChecking(true);

        setTimeout(() => {
            if (ans === question.correct) {
                setScore(s => s + 1);
            }
            setTimeout(() => {
                if (qIndex < QUIZ_QUESTIONS.length - 1) {
                    setQIndex(q => q + 1);
                    setSelected(null);
                    setIsChecking(false);
                } else {
                    setShowResults(true);
                }
            }, 1000);
        }, 1500);
    };

    if (showResults) {
        return (
            <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center p-6 text-center text-white no-scrollbar">
                <Trophy size={80} className="text-yellow-400 mb-6 animate-bounce" />
                <h2 className="text-5xl font-bold text-cyan-400 mb-4">סיימת את המבחן!</h2>
                <p className="text-3xl mb-8">ציון: {score} / {QUIZ_QUESTIONS.length}</p>
                <button onClick={onComplete} className="bg-teal-600 hover:bg-teal-500 px-8 py-4 rounded-xl text-2xl font-bold transition shadow-xl">
                    חזור למסך הראשי
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center p-6 text-white overflow-y-auto no-scrollbar" dir="rtl">
            <div className="w-full max-w-2xl bg-slate-800 p-8 rounded-3xl border-4 border-cyan-700 shadow-2xl mt-10">
                <div className="flex justify-between items-center mb-8 border-b border-slate-600 pb-4">
                    <span className="text-xl font-bold text-cyan-400">שאלה {qIndex + 1} מתוך {QUIZ_QUESTIONS.length}</span>
                    <span className="text-xl font-bold text-slate-400">מבחן מסכם</span>
                </div>

                <div className="bg-slate-900 p-10 rounded-2xl mb-8 flex justify-center text-5xl font-mono dir-ltr" dir="ltr">
                    {question.q}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {question.options.map((opt, i) => {
                        let btnClass = "bg-slate-700 hover:bg-slate-600 border-2 border-slate-500";
                        if (isChecking && selected === opt) {
                            btnClass = opt === question.correct 
                                ? "bg-emerald-600 border-emerald-400 animate-pulse" 
                                : "bg-red-600 border-red-400";
                        } else if (isChecking && opt === question.correct) {
                             btnClass = "bg-emerald-600 border-emerald-400"; 
                        }

                        return (
                            <button 
                                key={i}
                                onClick={() => handleAnswer(opt)}
                                disabled={isChecking}
                                className={`py-6 text-4xl font-bold font-mono rounded-xl transition-all shadow-md ${btnClass}`}
                                dir="ltr"
                            >
                                x = {opt}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

/* STREAMING_CHUNK: Main Game Component */
export default function CommonDenominatorTemple() {
  const [appState, setAppState] = useState('intro'); // intro, tutorial, playing, code, win, quiz
  const [level, setLevel] = useState(1);
  const [eqData, setEqData] = useState(null);
  const [history, setHistory] = useState([]); 

  // Undo/Redo history
  const [linearHistory, setLinearHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [phase, setPhase] = useState('fraction'); 
  const [pendingOp, setPendingOp] = useState(null); 
  const [animationState, setAnimationState] = useState('idle'); 
  const [activeTermIndex, setActiveTermIndex] = useState(-1); 
  const [feedback, setFeedback] = useState(null); 

  const timersRef = useRef([]);

  const TOTAL_LEVELS = 7;

  useEffect(() => {
      return () => {
          timersRef.current.forEach(clearTimeout);
          timersRef.current = [];
      };
  }, [level, appState]);

  useEffect(() => {
      if (appState === 'playing' && !eqData && level === 1) loadLevel(1);
      else if (appState === 'playing' && !eqData && level > 1) loadLevel(level);
  }, [level, appState]);

  const loadLevel = (lvl) => {
      const data = generateEquation(lvl);
      setEqData(data);

      setLinearHistory([data.linear]);
      setHistoryIndex(0);

      setPhase('fraction');
      setPendingOp(null);
      setAnimationState('idle');
      setActiveTermIndex(-1);
      setFeedback(null);
  };

  const restartGame = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      setHistory([]);
      setLevel(1);
      setEqData(null); 
      setAppState('playing');
  };

  const addTimer = (callback, delay) => {
      const id = setTimeout(callback, delay);
      timersRef.current.push(id);
      return id;
  };

  /* STREAMING_CHUNK: Navigation & Skip */
  const handleBack = () => {
      if (phase === 'linear' && historyIndex > 0) {
          // Undo last linear step
          const newIdx = historyIndex - 1;
          setHistoryIndex(newIdx);
          setEqData({ ...eqData, linear: linearHistory[newIdx] });
      } else if (level > 1) {
          // Go back a level
          setHistory(prev => prev.slice(0, -1));
          setLevel(l => l - 1);
          setEqData(null);
      } else {
          // Back to menu
          setAppState('intro');
      }
  };

  const handleSkip = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];

      // Grant key and next level
      setHistory(prev => [...prev, { xVal: eqData.xVal }]);
      nextLevel();
  };

  /* STREAMING_CHUNK: The Complex Animation Sequence */
  const runCommonDenominatorSequence = () => {
      // 1. Show hidden denominators (1) for whole numbers
      setAnimationState('showing_hidden_ones');

      addTimer(() => {
          // 2. Explain CD logic step by step for each term
          setAnimationState('explaining_cd');
          setActiveTermIndex(0);

          const CHECK_DELAY = 2500;
          const TERM_DELAY = 5500; // INCREASED: Allow more time to read the explanation

          const continueToResolving = () => {
              addTimer(() => {
                 // 3. Start expanding terms one by one
                 setAnimationState('resolving_sequence');
                 setActiveTermIndex(0);

                 addTimer(() => {
                     setActiveTermIndex(1);

                     addTimer(() => {
                         setActiveTermIndex(2);

                         addTimer(() => {
                             // 4. Strike out denominators
                             setAnimationState('striking_denominators'); 

                             addTimer(() => {
                                 // 5. Show only the new equation below (fade out fractions)
                                 setAnimationState('showing_new_equation');

                                 addTimer(() => {
                                    // 6. Intermission (ask if understood)
                                    setAnimationState('intermission'); 
                                    setActiveTermIndex(-1);
                                 }, 3000);

                             }, 2500);

                         }, TERM_DELAY); 
                     }, TERM_DELAY);
                 }, TERM_DELAY);
              }, CHECK_DELAY);
          };

          // Step through each term to show division check
          addTimer(() => {
              if (eqData.terms.length > 1) {
                  setActiveTermIndex(1);
                  addTimer(() => {
                      setActiveTermIndex(2);
                      continueToResolving();
                  }, CHECK_DELAY);
              } else {
                  setActiveTermIndex(2);
                  continueToResolving();
              }
          }, CHECK_DELAY);

      }, 4000); // 4s to read the "add 1 to whole numbers" text
  };

  /* STREAMING_CHUNK: Linear Phase Actions */
  const handleAction = (opt) => {
      if (opt.type === 'multiply_cd') {
          runCommonDenominatorSequence();
          return;
      }

      setPendingOp(opt);
      setAnimationState('appear');

      if (!opt.isCorrect) {
          addTimer(() => {
              setFeedback({ title: opt.errorTitle, msg: opt.errorMsg, isError: true });
              setAnimationState('idle');
              setPendingOp(null);
          }, 1500);
          return;
      }

      addTimer(() => {
          setAnimationState('canceling');
      }, 1500);

      addTimer(() => {
          applyMove(opt);
      }, 2500);
  };

  const handleIntermediateChoice = (choice) => {
      if (choice === 'got_it') {
          setPhase('linear');
          setAnimationState('idle');
      } else {
          setAnimationState('explain_overlay'); 
      }
  };

  const handleFinishExplanation = () => {
      setPhase('linear');
      setAnimationState('idle');
  };

  const handleReplayExplanation = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
      runCommonDenominatorSequence();
  };

  const applyMove = (opt) => {
      const newLinear = { ...eqData.linear };
      const { type, val } = opt;

      if (type === 'add') { newLinear.b += val; newLinear.d += val; }
      if (type === 'sub') { newLinear.b -= val; newLinear.d -= val; }
      if (type === 'div') { newLinear.a /= val; newLinear.b /= val; newLinear.c /= val; newLinear.d /= val; }

      const newHistory = linearHistory.slice(0, historyIndex + 1);
      newHistory.push(newLinear);
      setLinearHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);

      setEqData({ ...eqData, linear: newLinear });
      setAnimationState('idle');
      setPendingOp(null);

      if (newLinear.a === 1 && newLinear.b === 0 && newLinear.c === 0 && newLinear.d === eqData.xVal) {
          setFeedback({ 
              title: "מצוין!", 
              msg: `הפתרון הוא ${eqData.xVal}. נוסף מפתח לאוסף.`, 
              isWin: true,
              digit: eqData.xVal
          });
      }
  };

  const nextLevel = () => {
      if (history.length >= TOTAL_LEVELS) {
          setAppState('code');
      } else {
          setLevel(l => l + 1);
          setEqData(null); 
          setFeedback(null);
      }
  };

  /* STREAMING_CHUNK: Options Memoization */
  const options = useMemo(() => {
      if (!eqData) return [];
      const optionsArr = [];

      if (phase === 'fraction') {
          const cd = eqData.commonDenom;
          optionsArr.push({ 
              type: 'multiply_cd', 
              val: cd, 
              labelComp: <span>יוצרים מכנה משותף {cd}</span>, 
              isCorrect: true 
          });

          const wrongVal = cd + 1;
          optionsArr.push({ 
              type: 'multiply_wrong', 
              val: wrongVal, 
              labelComp: <span className="text-red-300">יוצרים מכנה משותף {wrongVal}</span>, 
              isCorrect: false,
              errorTitle: "בחירה שגויה",
              errorMsg: `נסה לבדוק - האם כל המספרים במכנה מתחלקים ב-${wrongVal}? אם לא, זה לא המכנה המשותף.`
          });
      } 
      else {
          const { a, b, c, d } = eqData.linear;

          if (a !== 0 && b !== 0) {
              const val = Math.abs(b);
              const type = b > 0 ? 'sub' : 'add';
              const labelComp = b > 0 ? <span>( -{val} )</span> : <span>( +{val} )</span>;
              optionsArr.push({ type, val, labelComp, isCorrect: true, target: 'const' }); 

              const wrongType = b > 0 ? 'add' : 'sub';
              const wrongLabelComp = b > 0 ? <span>( +{val} )</span> : <span>( -{val} )</span>;
              optionsArr.push({ type: wrongType, val, labelComp: wrongLabelComp, isCorrect: false,
                  errorTitle: "פעולה הפוכה",
                  errorMsg: `כדי לבטל ${b > 0 ? 'פלוס' : 'מינוס'} ${val}, עלינו לבצע את הפעולה ההפוכה.`
              });
          }
          else if (a !== 1 && b === 0 && c === 0) {
              const labelComp = (
                  <div className="flex flex-col items-center">
                      <span className="border-b border-white px-2 mb-0.5 w-4 h-0"></span>
                      <span>{a}</span>
                  </div>
              );
              optionsArr.push({ type: 'div', val: a, labelComp, isCorrect: true, target: 'coeff' });
          }
      }

      return optionsArr.sort(() => 0.5 - Math.random());
  }, [eqData, phase, historyIndex]); 

  /* STREAMING_CHUNK: Screens / Views */
  if (appState === 'intro') {
      return (
          <div className="fixed inset-0 bg-slate-900 text-teal-50 overflow-y-auto no-scrollbar" dir="rtl">
              <style>{`
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
              <div className="min-h-full flex flex-col items-center justify-center p-6 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="bg-slate-800/95 p-10 rounded-3xl border-4 border-teal-600 shadow-2xl max-w-3xl w-full animate-in zoom-in duration-500">
                    <Anchor size={120} className="text-cyan-400 mx-auto mb-8 drop-shadow-lg animate-pulse" />
                    <h1 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-500 tracking-tight">
                        מקדש השברים
                    </h1>

                    <div className="bg-red-900/40 border-2 border-red-500 p-6 rounded-2xl mb-8 flex flex-col items-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
                        <AlertTriangle size={48} className="text-yellow-400 animate-pulse" />
                        <h2 className="text-3xl font-bold text-yellow-300">אזהרה חשובה!</h2>
                        <p className="text-2xl text-red-100 font-bold max-w-lg">
                            זכרו או רישמו את קודי המפתח שאתם מקבלים (התוצאות של המשוואות)! 
                            <br/><span className="text-yellow-400">אם תשכחו, תצטרכו להתחיל הכל מההתחלה כדי לפתוח את הכספת!</span>
                        </p>
                    </div>

                    <button 
                        onClick={() => setAppState('playing')}
                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold py-6 rounded-2xl shadow-xl transition transform hover:scale-105 active:scale-95 text-4xl flex items-center justify-center gap-4"
                    >
                        <Play size={40} fill="currentColor" /> הבנתי, צא לדרך!
                    </button>
                </div>
              </div>
          </div>
      );
  }

  if (appState === 'code') {
      const [input, setInput] = useState("");
      const [error, setError] = useState(false);

      const checkCode = () => {
          const correctCode = history.map(h => h.xVal).join("");
          if (input === correctCode) {
              setAppState('win');
          } else {
              setError(true);
              setTimeout(() => setInput(""), 500);
          }
      };

      return (
          <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center p-6 text-white font-sans no-scrollbar" dir="rtl">
              <style>{`
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
              <div className="w-full max-w-md flex flex-col items-center">
                  <Lock size={80} className="text-teal-500 mb-6" />
                  <h2 className="text-4xl font-bold mb-4 text-center">הכספת הגדולה</h2>
                  <p className="text-xl text-slate-300 mb-10 text-center">הקלידו את קוד הקסם (התשובות שקיבלתם).</p>

                  <div className={`text-5xl font-mono tracking-widest bg-slate-800 px-8 py-6 rounded-2xl border-4 mb-10 min-h-[100px] flex items-center justify-center w-full overflow-hidden ${error ? 'border-red-500 text-red-400 animate-shake' : 'border-teal-700 text-white'}`}>
                      {input.padEnd(history.length, '•')}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-10 w-full">
                      {[1,2,3,4,5,6,7,8,9].map(d => (
                          <button key={d} onClick={() => { if(input.length<7) setInput(p=>p+d); setError(false); }} className="h-20 bg-slate-700 rounded-xl text-4xl font-bold border-b-8 border-slate-800 active:border-b-0 active:translate-y-2 hover:bg-slate-600 transition">
                              {d}
                          </button>
                      ))}
                      <div className="col-span-1"></div>
                      <button onClick={() => { if(input.length<7) setInput(p=>p+0); setError(false); }} className="h-20 bg-slate-700 rounded-xl text-4xl font-bold border-b-8 border-slate-800 active:border-b-0 active:translate-y-2 hover:bg-slate-600 transition">0</button>
                      <button onClick={() => setInput("")} className="bg-red-900/50 text-red-300 rounded-xl font-bold border-b-8 border-red-900 flex items-center justify-center hover:bg-red-900/70">
                          <RefreshCw size={28} />
                      </button>
                  </div>

                  <button onClick={checkCode} disabled={input.length === 0} className="w-full bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white font-bold py-6 rounded-2xl shadow-lg transition text-3xl border-b-8 border-teal-800 active:border-b-0 active:translate-y-2">
                      פתח כספת
                  </button>
              </div>
          </div>
      );
  }

  if (appState === 'win') {
      return (
        <div className="fixed inset-0 bg-slate-900 text-cyan-50 overflow-y-auto no-scrollbar" dir="rtl">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <div className="min-h-full flex flex-col items-center justify-center p-6 text-center">
                <CoinExplosion />
                <div className="relative z-10 bg-slate-800/90 p-10 rounded-3xl border-4 border-teal-500 shadow-2xl backdrop-blur-sm max-w-3xl w-full">
                    <Trophy size={140} className="text-yellow-400 mx-auto mb-8 animate-bounce drop-shadow-2xl" />
                    <h1 className="text-6xl font-black mb-6 text-cyan-400">האוצר נפתח!</h1>
                    <p className="text-3xl text-slate-200 mb-6">אלופים! פתרתם את כל המשוואות וזכרתם את הקוד.</p>

                    <p className="text-xl text-teal-300 italic mb-10 bg-slate-900/50 p-4 rounded-xl border border-teal-800">
                        (סתם סתם... עבדתם מדהים! לא באמת הייתי נותן לכם להתחיל מהתחלה 😉)
                    </p>

                    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                        <button onClick={() => setAppState('quiz')} className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-6 rounded-2xl text-2xl font-bold transition shadow-xl hover:scale-105 border-b-4 border-emerald-800 flex items-center justify-center gap-3">
                            <BookOpen size={28} /> עברו למבחן מסכם (5 תרגילים)
                        </button>
                        <button onClick={restartGame} className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl text-xl font-bold transition shadow-lg">
                            משחק חוזר
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  if (appState === 'quiz') {
      return <QuizBoard onComplete={() => setAppState('intro')} />;
  }

  const showExplainOverlay = animationState === 'explain_overlay';
  const explanationCommonDenom = eqData?.commonDenom;

  /* STREAMING_CHUNK: Main Render Return */
  return (
    <div className="fixed inset-0 bg-slate-900 text-slate-100 font-sans flex flex-col h-[100dvh] overflow-hidden no-scrollbar" dir="rtl">
        <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* Header Rules Banner */}
        <div className="bg-cyan-900/90 text-cyan-100 text-center py-4 px-4 font-bold border-b-2 border-cyan-700 shadow-md z-20 text-lg md:text-xl flex-none relative">
            חוק ברזל: מכנה משותף תמיד פותר אותנו מהשברים!
            <button 
                onClick={handleBack} 
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-cyan-800 hover:bg-cyan-700 p-2 rounded-full transition shadow-lg text-white"
                title="חזור אחורה"
            >
                <ArrowRight size={24} />
            </button>
        </div>

        {/* Progress Info */}
        <div className="flex justify-between items-center p-4 max-w-5xl mx-auto w-full flex-none">
            <div className="bg-slate-800 px-6 py-3 rounded-xl border-2 border-slate-600 font-bold text-teal-400 text-xl shadow-inner">
                משוואה {level} מתוך {TOTAL_LEVELS}
            </div>

            <div className="bg-slate-800 p-3 rounded-full border-2 border-slate-600 flex items-center gap-3 px-6">
               <Key size={24} className="text-yellow-400" />
               <span className="text-yellow-400 font-bold text-2xl">{history.length}</span>
            </div>
        </div>

        {/* Main Board */}
        <main className="flex-1 flex flex-col items-center justify-start pt-2 px-4 w-full max-w-5xl mx-auto relative overflow-y-auto touch-pan-y no-scrollbar">

            {/* The Equation Canvas */}
            <div className="w-full bg-slate-800 p-8 md:p-12 rounded-[2rem] border-4 border-slate-600 shadow-2xl relative mb-6 min-h-[320px] flex items-center justify-center flex-col gap-6 flex-none mt-4">

                {/* Skip Button */}
                <button 
                    onClick={handleSkip} 
                    className="absolute top-4 left-4 bg-slate-700 hover:bg-slate-600 text-slate-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition z-20 shadow-md border border-slate-500"
                >
                    דלג לשלב הבא <SkipForward size={16} />
                </button>

                {eqData && (
                    <LiveEquationBoard 
                        data={eqData}
                        phase={phase}
                        pendingOp={pendingOp} 
                        animationState={animationState}
                        activeTermIndex={activeTermIndex}
                    />
                )}
                <div className="opacity-10 absolute bottom-4 right-4 pointer-events-none select-none text-teal-500">
                    <Droplets size={80} />
                </div>
            </div>

            {/* Actions / Buttons Area */}
            <div className="w-full max-w-2xl relative flex-1 flex flex-col justify-start pb-8">

                {/* Standard Actions */}
                {!feedback && !pendingOp && options.length > 0 && animationState === 'idle' && (
                    <div className="bg-slate-800/80 p-6 rounded-2xl border-2 border-slate-600 animate-in slide-in-from-bottom-4 shadow-xl">
                        <div className="text-center text-slate-300 text-lg mb-6 font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                            <Settings size={20} /> מה עושים עכשיו?
                        </div>
                        <div className="grid grid-cols-2 gap-6 h-40 md:h-48">
                            {options.map((opt, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => handleAction(opt)}
                                    className="flex-1 py-4 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-3 border-2 border-slate-500 bg-slate-700 hover:bg-slate-600 text-cyan-50 h-full w-full group"
                                >
                                    {opt.type.includes('multiply') ? <X size={32} className="text-teal-400 group-hover:text-teal-300" /> : (opt.type === 'div' ? <Divide size={32} className="text-teal-400 group-hover:text-teal-300" /> : (opt.type.includes('sub') ? <Minus size={32} className="text-teal-400 group-hover:text-teal-300" /> : <Plus size={32} className="text-teal-400 group-hover:text-teal-300" />))}
                                    <div className="text-2xl font-bold font-sans dir-ltr flex items-center justify-center text-center leading-tight" dir="ltr">
                                        {opt.labelComp}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Intermission Buttons */}
                {animationState === 'intermission' && (
                    <div className="bg-slate-800/95 p-8 rounded-2xl border-4 border-teal-500 animate-in zoom-in duration-300 flex flex-col items-center gap-6 text-center w-full shadow-2xl">
                        <div className="text-teal-300 font-bold text-3xl mb-2">המכנים נעלמו! האם הבנת למה?</div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                             <button onClick={() => handleIntermediateChoice('got_it')} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-xl font-bold text-2xl flex items-center justify-center gap-3 transition shadow-lg">
                                 <ThumbsUp size={28} /> הבנתי, המשך לפתור
                             </button>
                             <button onClick={() => handleIntermediateChoice('explain')} className="flex-1 bg-slate-700 hover:bg-slate-600 text-teal-200 border-2 border-teal-700 py-5 rounded-xl font-bold text-2xl flex items-center justify-center gap-3 transition">
                                 <BookOpen size={28} /> תסביר לי שוב
                             </button>
                        </div>
                    </div>
                )}

                {/* Detailed Explanation Overlay */}
                {showExplainOverlay && (
                    <div className="fixed inset-0 z-50 bg-slate-950/95 overflow-y-auto no-scrollbar" dir="rtl">
                        <div className="min-h-full flex flex-col items-center justify-center p-6 text-center">
                            <div className="bg-slate-800 p-10 rounded-3xl border-4 border-cyan-500 max-w-2xl w-full shadow-2xl relative">
                                <Calculator size={64} className="mx-auto text-cyan-400 mb-6 animate-bounce" />
                                <h3 className="text-4xl font-bold text-white mb-8">הסוד של המכנה המשותף</h3>

                                <div className="text-slate-200 text-right space-y-6 mb-10 text-2xl leading-relaxed bg-slate-900/60 p-8 rounded-2xl border-2 border-slate-700">
                                    <p className="flex items-center gap-3"><span className="bg-teal-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shrink-0">1</span> בחרנו את המספר <span className="font-bold text-yellow-400 font-mono text-3xl mx-2 bg-black/30 px-2 rounded">{explanationCommonDenom}</span> כי הוא מתחלק בכל המכנים.</p>
                                    <p className="flex items-center gap-3"><span className="bg-teal-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shrink-0">2</span> לכל שבר שאלנו: "כמה זה {explanationCommonDenom} לחלק למכנה שלו?"</p>
                                    <p className="flex items-center gap-3"><span className="bg-teal-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shrink-0">3</span> כפלנו את המונה (המספר שלמעלה) בתוצאה שקיבלנו.</p>
                                    <div className="bg-teal-900/50 p-4 rounded-xl border border-teal-500 mt-4 font-bold text-teal-300 text-center">
                                        ברגע שכולם חולקים את אותו המכנה - אפשר פשוט למחוק אותו!
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <button onClick={handleFinishExplanation} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-5 rounded-2xl shadow-lg transition text-2xl flex items-center justify-center gap-3">
                                        הבנתי עכשיו! נמשיך <ArrowRight size={28} className="rotate-180"/>
                                    </button>
                                    <button onClick={handleReplayExplanation} className="flex-1 bg-slate-700 hover:bg-slate-600 text-teal-200 border-2 border-teal-600 font-bold py-5 rounded-2xl shadow-lg transition text-2xl flex items-center justify-center gap-3">
                                        <RefreshCw size={28}/> תראה לי שוב
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Feedback Modal */}
                {feedback && (
                    <div className="absolute inset-0 z-30 bg-slate-800/95 backdrop-blur-md rounded-3xl border-4 border-slate-500 p-8 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300 shadow-2xl h-full min-h-[300px]">
                        {feedback.isWin ? 
                            <div className="flex flex-col items-center">
                                <Key size={80} className="text-yellow-400 mb-4 animate-pulse" />
                                <h3 className="text-5xl font-bold mb-4 text-emerald-400">{feedback.title}</h3>
                                <div className="text-4xl text-white font-mono bg-slate-900 px-8 py-4 rounded-xl border-2 border-slate-600 my-6 shadow-inner">x = {feedback.digit}</div>
                                <p className="text-2xl text-slate-300 mb-8">{feedback.msg}</p>
                            </div> 
                            : 
                            <div className="flex flex-col items-center">
                                <HelpCircle size={80} className="text-teal-500 mb-6" />
                                <h3 className="text-3xl font-bold mb-4 text-teal-400">{feedback.title}</h3>
                                <p className="text-slate-300 mb-10 text-xl max-w-md">{feedback.msg}</p>
                            </div>
                        }

                        <button 
                            onClick={() => feedback.isWin ? nextLevel() : setFeedback(null)}
                            className={`px-12 py-5 rounded-2xl font-bold text-2xl shadow-2xl transition transform hover:scale-105 flex items-center gap-3 ${feedback.isWin ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-slate-600 hover:bg-slate-500 text-white'}`}
                        >
                            {feedback.isWin ? <>למשוואה הבאה <ArrowRight size={24} className="rotate-180"/></> : 'הבנתי, ננסה שוב'}
                        </button>
                    </div>
                )}

                {/* Action loading text */}
                {(animationState !== 'idle' && animationState !== 'intermission' && animationState !== 'explain_overlay' || pendingOp) && !showExplainOverlay && (
                    <div className="text-center text-teal-400 font-bold text-2xl animate-pulse flex flex-col items-center gap-4 mt-12 bg-slate-800/50 p-6 rounded-2xl border border-teal-900/50">
                        <RefreshCw className="animate-spin" size={32} />
                        {animationState === 'showing_hidden_ones' ? 'מוסיפים מכנה 1 למספרים החופשיים...' :
                         animationState === 'explaining_cd' ? 'מוודאים שהמכנה המשותף מתחלק בכולם...' :
                         animationState === 'resolving_sequence' ? 'מחלקים במכנה וכופלים במונה...' :
                         animationState === 'striking_denominators' ? 'מבטלים את המכנים!' :
                         animationState === 'showing_new_equation' ? 'בונים את המשוואה החדשה...' :
                         pendingOp && !pendingOp.isCorrect ? `בודק האם כל המכנים מתחלקים ב-${pendingOp.val}...` :
                         'מבצע פעולה על שני האגפים...'}
                    </div>
                )}

            </div>
        </main>
    </div>
  );
}

    {
    id: "dimion-class-g8",
    title: "דמיון משולשים הצגה לכיתה ",
    grade: 8,
    category: "algebra",
    premium: true,
    emoji: "📐",
    description: "לימוד של דמיון משולשים בכיתה",
    html:import React, { useState, useEffect, memo, useRef } from 'react';
import { Trophy, Clock, CheckCircle, XCircle, ChevronRight, ChevronLeft, Target, Home, RefreshCw, AlertTriangle, Lightbulb, Move, Scaling } from 'lucide-react';

// --- GEOMETRY HELPERS ---
const getPointOnLine = (p1, p2, dist) => {
  const len = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  const ratio = dist / len;
  return {
    x: p1.x + (p2.x - p1.x) * ratio,
    y: p1.y + (p2.y - p1.y) * ratio
  };
};

const getMidPoint = (p1, p2) => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2
});

const getArcPath = (corner, leg1Node, leg2Node, radius) => {
  const start = getPointOnLine(corner, leg1Node, radius);
  const end = getPointOnLine(corner, leg2Node, radius);
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}`;
};

const EMPTY_MARKS = {};

// --- HELPER FOR FRACTIONS ---
const Fraction = ({ top, bottom }) => (
  <div className="inline-flex flex-col items-center justify-center mx-1 md:mx-2 animate-in zoom-in duration-300 min-w-[2rem] md:min-w-[2.5rem]">
    <span className="border-b-[3px] border-white/80 w-full text-center pb-1 mb-1 leading-none font-black">{top}</span>
    <span className="leading-none font-black pt-1">{bottom}</span>
  </div>
);

// --- GAME CONTENT ---
const LEVELS_DATA = [
  // --- PART 1: INTRO ---
  {
    type: 'learn',
    title: 'מהו דמיון משולשים?',
    steps: [
      {
        text: 'שני משולשים הם "דומים" אם יש להם בדיוק את אותן הזוויות, אבל הגודל שונה.',
        highlight: 'show-both'
      },
      {
        text: 'זה כמו לעשות "זום" בטלפון. הצורה נשמרת, הגודל משתנה.',
        highlight: 'highlight-zoom'
      },
      {
        text: 'לחצו על "בדוק דמיון" כדי לראות איך הקטן משתלב בתוך הגדול (הזוויות מתלכדות!).',
        highlight: 'animate-overlap-instruction',
        showAction: true
      },
      {
        text: 'הסימן המתמטי לדמיון הוא גל:',
        math: '∼', 
        textAfter: 'וסדר האותיות קריטי בדיוק כמו בחפיפה.',
        highlight: 'show-symbol-and-order'
      }
    ],
    diagram: 'intro-similarity',
    tip: 'משולשים דומים נראים כמו אותו משולש, רק שאחד הוא "האבא" והשני הוא "הילד".'
  },

  // --- PART 2: THEOREM 1 (AA) ---
  {
    type: 'learn',
    title: 'משפט ראשון: ז.ז',
    steps: [
      {
        text: 'הדרך הכי קלה להוכיח דמיון: מספיק למצוא שתי זוויות שוות.',
        highlight: 'aa-intro'
      },
      {
        text: 'זווית אחת שווה (למשל 50°)...',
        highlight: 'angle-1',
        marks: { 
             aTop: true, 
             labelAnglesT1: ['50°', '', ''], 
             labelAnglesT2: ['50°', '', ''] 
        }
      },
      {
        text: 'וזווית שנייה שווה (למשל 70°).',
        highlight: 'angle-2',
        marks: { 
             aTop: true, aLeft: true,
             labelAnglesT1: ['50°', '70°', ''], 
             labelAnglesT2: ['50°', '70°', ''] 
        }
      },
      {
        text: 'זהו! אוטומטית הזווית השלישית שווה (משלימה ל-180).',
        highlight: 'similarity-success',
        showAction: true,
        marks: { 
             aTop: true, aLeft: true, aRight: true,
             labelAnglesT1: ['50°', '70°', '60°'], 
             labelAnglesT2: ['50°', '70°', '60°'] 
        }
      }
    ],
    diagram: 'aa-demo',
    tip: 'ז.ז הוא המשפט הכי נפוץ. חפשו זוויות שוות כמו זוויות קודקודיות או מתחלפות.'
  },

  // --- PART 3: THEOREM 2 (SAS) ---
  {
    type: 'learn',
    title: 'משפט שני: צ.ז.צ',
    steps: [
      {
        text: 'כאן אנחנו לא מחפשים צלעות שוות, אלא יחס שווה (אותה הגדלה).',
        highlight: 'sas-intro'
      },
      {
        text: 'נניח שצלע אחת גדלה פי 2 (למשל 3 הפך ל-6)...',
        highlight: 'side-ratio-1',
        marks: { labelSidesT1: ['3', '', ''], labelSidesT2: ['6', '', ''] }
      },
      {
        text: 'וגם הצלע השנייה גדלה פי 2 (4 הפך ל-8)...',
        highlight: 'side-ratio-2',
        marks: { labelSidesT1: ['3', '', '4'], labelSidesT2: ['6', '', '8'] }
      },
      {
        text: 'והזווית שביניהן שווה בדיוק!',
        highlight: 'angle-between',
        marks: { 
            labelSidesT1: ['3', '', '4'], labelSidesT2: ['6', '', '8'],
            aTop: true, labelAnglesT1: ['α', '', ''], labelAnglesT2: ['α', '', '']
        }
      },
      {
        text: 'אז המשולשים דומים.',
        highlight: 'similarity-success',
        showAction: true,
        marks: { 
            labelSidesT1: ['3', '', '4'], labelSidesT2: ['6', '', '8'],
            aTop: true, labelAnglesT1: ['α', '', ''], labelAnglesT2: ['α', '', '']
        }
      }
    ],
    diagram: 'sas-demo-ratio',
    tip: 'חשוב מאוד: הזווית חייבת להיות "כלואה" (באמצע) בין שתי הצלעות שיש ביניהן יחס.'
  },

  // --- PART 4: THEOREM 3 (SSS) ---
  {
    type: 'learn',
    title: 'משפט שלישי: צ.צ.צ',
    steps: [
      {
        text: 'אם היחס בין כל שלושת זוגות הצלעות הוא קבוע (אותו מספר הגדלה).',
        highlight: 'sss-intro'
      },
      {
        text: 'צלע א\' כפולה פי 3, צלע ב\' כפולה פי 3...',
        highlight: 'ratio-check-1-2',
        marks: { labelSidesT1: ['3', '5', ''], labelSidesT2: ['9', '15', ''] }
      },
      {
        text: 'וגם צלע ג\' כפולה פי 3.',
        highlight: 'ratio-check-3',
        marks: { labelSidesT1: ['3', '5', '4'], labelSidesT2: ['9', '15', '12'] }
      },
      {
        text: 'אז המשולשים דומים.',
        highlight: 'similarity-success',
        showAction: true,
        marks: { labelSidesT1: ['3', '5', '4'], labelSidesT2: ['9', '15', '12'] }
      }
    ],
    diagram: 'sss-demo-ratio',
    tip: 'טיפ: חלקו את הצלע הגדולה בגדולה, והקטנה בקטנה. התוצאה חייבת לצאת זהה.'
  },

  // --- TRICK QUESTION (SSA Trap) ---
  {
    type: 'quiz',
    question: 'שאלה מכשילה! האם המשולשים בשרטוט דומים?',
    options: ['כן, לפי צ.ז.צ', 'כן, לפי ז.ז', 'לא, הזווית לא במקום הנכון', 'חסר נתון'],
    correct: 2,
    explanation: 'שימו לב! יש יחס של פי 2 בין הצלעות (3 ו-4 מול 6 ו-8), אבל הזווית (50°) נמצאת מול הצלע ולא ביניהן! לכן אין דמיון.',
    diagramType: 'quiz-bad-sas-trap',
    marks: { 
        labelSidesT1: ['3', '', '4'], labelSidesT2: ['6', '', '8'],
        aLeft: true,
        labelAnglesT1: ['', '50°', ''], labelAnglesT2: ['', '50°', '']
    },
    time: 60
  },

  // --- PART 5: RATIOS & LETTERS EXPLANATION (SLOW BUILD) ---
  {
    type: 'learn',
    title: 'בניית יחס הדמיון',
    steps: [
      {
        text: 'כדי לבנות את היחס נכון, עובדים לאט ומסודר לפי האותיות:',
        math: 'ΔABC ∼ ΔDEF',
        highlight: 'letters-intro'
      },
      {
        text: 'שלב 1: לוקחים את שתי האותיות הראשונות בכל משולש.',
        highlight: 'ratio-step-1',
        customContent: (
          <div className="w-full mt-4">
             <div className="w-fit mx-auto max-w-full flex flex-nowrap items-center gap-2 md:gap-4 text-lg md:text-2xl font-black text-yellow-300 bg-black/40 p-4 md:p-5 rounded-2xl border border-yellow-500/30 overflow-x-auto custom-scrollbar" dir="ltr">
                <Fraction top="AB" bottom="DE" />
             </div>
          </div>
        )
      },
      {
        text: 'שלב 2: מוסיפים את שתי האותיות האחרונות.',
        highlight: 'ratio-step-2',
        customContent: (
          <div className="w-full mt-4">
             <div className="w-fit mx-auto max-w-full flex flex-nowrap items-center gap-2 md:gap-4 text-lg md:text-2xl font-black text-yellow-300 bg-black/40 p-4 md:p-5 rounded-2xl border border-yellow-500/30 overflow-x-auto custom-scrollbar" dir="ltr">
                <Fraction top="AB" bottom="DE" />
                <span>=</span>
                <Fraction top="BC" bottom="EF" />
             </div>
          </div>
        )
      },
      {
        text: 'שלב 3: סוגרים את המעגל עם האות הראשונה והאחרונה.',
        highlight: 'ratio-step-3',
        customContent: (
          <div className="w-full mt-4">
             <div className="w-fit mx-auto max-w-full flex flex-nowrap items-center gap-2 md:gap-4 text-lg md:text-2xl font-black text-yellow-300 bg-black/40 p-4 md:p-5 rounded-2xl border border-yellow-500/30 overflow-x-auto custom-scrollbar" dir="ltr">
                <Fraction top="AB" bottom="DE" />
                <span>=</span>
                <Fraction top="BC" bottom="EF" />
                <span>=</span>
                <Fraction top="AC" bottom="DF" />
             </div>
          </div>
        )
      },
      {
        text: 'כלל ברזל: שומרים על הסדר! התחלנו עם הקטן למעלה? הוא נשאר למעלה עד הסוף.',
        highlight: 'order-warning'
      }
    ],
    diagram: 'letters-ratio-visual',
    tip: 'הסדר קובע! אם המשולש השמאלי למעלה - הוא תמיד למעלה.'
  },

  // --- PART 5.5: PERIMETER RATIO ---
  {
    type: 'learn',
    title: 'יחס ההיקפים',
    steps: [
      {
        text: 'ומה לגבי ההיקף? יחס ההיקפים זהה בדיוק ליחס הדמיון!',
        highlight: 'perimeter-intro'
      },
      {
        text: 'במילים פשוטות: אם לדוגמה הגדלנו את הצלעות פי 2...',
        highlight: 'perimeter-calc',
        marks: { labelSidesT1: ['3', '4', '5'], labelSidesT2: ['6', '8', '10'] }
      },
      {
        text: 'אז גם ההיקף של המשולש יגדל בדיוק פי 2. זה הכל, בלי לסבך!',
        highlight: 'perimeter-success',
        marks: { perimeterT1: 'היקף = 12', perimeterT2: 'היקף = 24' },
        customContent: (
          <div className="flex flex-col items-center gap-4 mt-4 p-6 rounded-3xl w-full justify-center shadow-[0_0_20px_rgba(56,189,248,0.15)] border-2 border-sky-500/40 bg-sky-950/30">
            <div className="text-sky-300 font-bold text-2xl" dir="rtl">יחס ההיקפים = יחס הדמיון</div>
          </div>
        )
      }
    ],
    diagram: 'perimeter-demo',
    tip: 'היקף הוא רק סכום הצלעות, ולכן הוא גדל באותו אופן בדיוק כמו הצלעות.'
  },

  // --- PART 6: AREA RATIO ---
  {
    type: 'learn',
    title: 'יחס השטחים',
    steps: [
      {
        text: 'מה זה אומר בעצם? אם שתי צורות דומות, והגדלנו את הצלעות פי 2, השטח לא יגדל פי 2, אלא פי 4! שטח "מתנפח" הרבה יותר מהר.',
        highlight: 'area-explain'
      },
      {
        text: 'לכן יחס השטחים מתנהג אחרת מיחס הצלעות הרגיל.',
        highlight: 'area-intro'
      },
      {
        text: 'הנוסחה נראית כך:',
        customContent: (
          <div className="flex flex-col items-center gap-4 mt-4 p-5 md:p-6 rounded-3xl w-full justify-center shadow-[0_0_30px_rgba(244,114,182,0.15)] border-4 border-pink-500/40 bg-pink-950/30">
             <div className="text-pink-300 font-bold text-2xl mb-1" dir="rtl">נוסחת יחס השטחים:</div>
             <div className="w-full">
                 <div className="w-fit mx-auto max-w-full flex flex-nowrap items-center gap-3 md:gap-5 text-xl md:text-3xl font-black text-pink-200 whitespace-nowrap overflow-x-auto custom-scrollbar px-2 py-2" dir="ltr">
                     <Fraction top={<span className="text-lg md:text-2xl">S<sub className="text-xs md:text-base pl-1">ΔABC</sub></span>} bottom={<span className="text-lg md:text-2xl">S<sub className="text-xs md:text-base pl-1">ΔDEF</sub></span>} />
                     <span>=</span>
                     <span className="text-lg md:text-2xl">(יחס הדמיון)²</span>
                 </div>
             </div>
          </div>
        )
      },
      {
        text: 'גם כאן חובה לשמור על הסדר! (קטן חלקי גדול או להפך).',
        highlight: 'order-warning-area'
      },
      {
        text: 'דוגמה: אם יחס הדמיון הוא 3, יחס השטחים הוא 9 (כי 3 בריבוע זה 9).',
        highlight: 'area-calc-1'
      }
    ],
    diagram: 'area-ratio-demo',
    marks: { 
        labelSidesT1: ['1', '1', '1'], 
        labelSidesT2: ['3', '3', '3'] 
    },
    tip: 'השטח גדל גם לאורך וגם לרוחב במקביל, ולכן מעלים את יחס הדמיון בחזקה שנייה (בריבוע).'
  },

  {
    type: 'quiz',
    question: 'אתגר השטחים: יחס הדמיון הוא 4. פי כמה גדול שטח המשולש הגדול?',
    options: ['פי 4', 'פי 8', 'פי 12', 'פי 16'],
    correct: 3,
    explanation: 'יחס השטחים שווה לריבוע יחס הדמיון! 4 בריבוע זה 16.',
    hint: 'רמז: זכרו ששטח מתנהג אחרת מצלעות. צריך להעלות את יחס הצלעות בריבוע!',
    diagramType: 'quiz-area-ratio-4',
    time: 45
  },

  // --- GRAND TEST (10 QUESTIONS) ---
  {
    type: 'quiz',
    question: 'נתון דמיון בין המשולשים. צלע AB=4 וצלע DE=8. מהו יחס הדמיון?',
    options: ['1:2 (פי 2)', '1:4 (פי 4)', '1:1 (שווים)', 'לא ניתן לדעת'],
    correct: 0,
    explanation: 'לפי סדר האותיות AB מתאים ל-DE. 8 חלקי 4 שווה 2.',
    diagramType: 'quiz-simple-ratio',
    marks: { labelSidesT1: ['4', '', ''], labelSidesT2: ['8', '', ''] },
    time: 30
  },
  {
    type: 'quiz',
    question: 'זווית A היא 30°, זווית B היא 60°. אילו זוויות נחפש במשולש השני כדי להוכיח דמיון?',
    options: ['30° ו-60°', '30° ו-90°', '60° ו-90°', 'כל התשובות נכונות'],
    correct: 3,
    explanation: 'הזווית השלישית היא 90° (סכום 180). לכן כל זוג מתוך 30, 60, 90 יתאים.',
    hint: 'רמז: מהו סכום הזוויות במשולש? חסכו לעצמכם עבודה וחשבו את הזווית השלישית!',
    diagramType: 'quiz-aa-calc',
    marks: { 
        aTop: true, aLeft: true,
        labelAnglesT1: ['30°', '60°', ''], 
        labelAnglesT2: ['?', '?', '?'] 
    },
    time: 40
  },
  {
    type: 'quiz',
    question: 'יחס השטחים בין שני משולשים דומים הוא 36. מה יחס הדמיון (הצלעות)?',
    options: ['36', '18', '6', '12'],
    correct: 2,
    explanation: 'יחס הצלעות הוא השורש של יחס השטחים. שורש של 36 הוא 6.',
    hint: 'רמז: אם השטח הוא יחס הצלעות בריבוע, סימן שיחס הצלעות הוא השורש של יחס השטחים.',
    diagramType: 'quiz-area-inverse',
    time: 30
  },
  {
    type: 'quiz',
    question: 'האם ניתן להוכיח דמיון אם נתונות רק 3 הצלעות של כל משולש?',
    options: ['כן, לפי צ.צ.צ', 'לא, חייבים זוויות', 'רק אם המשולשים ישרי זווית', 'לא'],
    correct: 0,
    explanation: 'כן! זהו משפט צ.צ.צ. אם היחס בין כל הצלעות שווה - המשולשים דומים.',
    diagramType: 'quiz-sss-simple',
    marks: { labelSidesT1: ['3', '4', '5'], labelSidesT2: ['6', '8', '10'] },
    time: 25
  },
  {
    type: 'quiz',
    question: 'נתון דמיון ויחס של פי 3. אם היקף המשולש הקטן הוא 5, מה היקף הגדול?',
    options: ['15', '25', '9', '8'],
    correct: 0,
    explanation: 'יחס ההיקפים זהה ליחס הדמיון (לא בריבוע!). 5 כפול 3 שווה 15.',
    diagramType: 'quiz-perimeter-simple',
    marks: { perimeterT1: 'היקף = 5', perimeterT2: 'היקף = ?' },
    time: 30
  },
  {
    type: 'quiz',
    question: 'נתון ΔABC ∼ ΔDEF. למי שווה זווית B?',
    options: ['לזווית D', 'לזווית E', 'לזווית F', 'לא ניתן לדעת'],
    correct: 1,
    explanation: 'לפי סדר האותיות: B היא האות השנייה, ו-E היא האות השנייה.',
    diagramType: 'quiz-letters-match',
    time: 25
  },
  {
    type: 'quiz',
    question: 'יחס הדמיון הוא 1. מה זה אומר על המשולשים?',
    options: ['הם חופפים ודומים', 'הם רק דומים', 'הם שונים לגמרי', 'אין דבר כזה'],
    correct: 0,
    explanation: 'יחס 1 אומר שהגודל לא השתנה. משולשים דומים באותו גודל הם משולשים חופפים!',
    diagramType: 'quiz-ratio-1',
    marks: { labelSidesT1: ['5', '', ''], labelSidesT2: ['5', '', ''] },
    time: 30
  },
  {
    type: 'quiz',
    question: 'מצאו את X אם המשולשים דומים (ΔABC ∼ ΔDEF).',
    options: ['10', '12', '15', '20'],
    correct: 0,
    explanation: 'היחס בין 8 ל-4 הוא פי 2. לכן גם X צריך להיות פי 2 מ-5. X=10.',
    hint: 'רמז: בדקו פי כמה גדולה צלע DE מצלע AB, ואז תעשו את אותה פעולה על הצלע שיש בה X.',
    diagramType: 'quiz-find-x',
    marks: { labelSidesT1: ['4', '5', ''], labelSidesT2: ['8', 'X', ''] },
    time: 45
  },
  {
    type: 'quiz',
    question: 'מהו התנאי לדמיון לפי משפט צ.ז.צ?',
    options: ['שתי צלעות שוות וזווית כלואה', 'יחס שווה בשתי צלעות וזווית כלואה שווה', 'שתי זוויות שוות', 'שלוש צלעות שוות'],
    correct: 1,
    explanation: 'בדמיון אנחנו מחפשים יחס שווה (פרופורציה) בין הצלעות, לא שוויון. הזווית ביניהן חייבת להיות שווה.',
    diagramType: 'quiz-sas-def',
    marks: { 
        labelSidesT1: ['a', '', 'b'], labelSidesT2: ['2a', '', '2b'],
        aTop: true
    },
    time: 40
  },
  {
    type: 'quiz',
    question: 'שאלה אחרונה: אם זוויות משולש אחד הן 30, 70, 80. ומשולש שני 30, 80, 70. האם הם דומים?',
    options: ['כן, בטוח', 'לא', 'רק אם הצלעות שוות', 'תלוי בגובה'],
    correct: 0,
    explanation: 'כן! יש להם בדיוק את אותן הזוויות (30, 70, 80). הסדר בתוך המשולש לא משנה, העיקר שהסט זהה.',
    diagramType: 'quiz-aa-final',
    marks: { 
        aTop: true, aLeft: true, aRight: true,
        labelAnglesT1: ['30°', '70°', '80°'], 
        labelAnglesT2: ['30°', '80°', '70°'] 
    },
    time: 30
  }
];

// --- VISUAL COMPONENT ---
const TrianglePairVisual = memo(({ type, highlight, marks, overlapAnimation }) => {

  // Base Triangle (T1)
  let Geom1 = { A: { x: 150, y: 100 }, B: { x: 100, y: 220 }, C: { x: 200, y: 220 } };
  let offsetX = 350;
  let scale = 1.8;

  // Mode specific overrides
  if (type && type.startsWith('quiz')) {
     Geom1 = { A: { x: 150, y: 60 }, B: { x: 30, y: 340 }, C: { x: 270, y: 340 } };
     offsetX = 380;
     scale = 1.25;
  }

  // Equal triangles override
  if (type === 'quiz-ratio-1') {
     scale = 1;
  }

  const width1 = Geom1.C.x - Geom1.B.x;
  const height1 = Geom1.B.y - Geom1.A.y;

  // Calculate T2 dynamically based on scale
  const Geom2 = {
    D: { x: Geom1.A.x + offsetX, y: Geom1.A.y - 40 },
    E: { x: (Geom1.A.x + offsetX) - (width1/2 * scale), y: (Geom1.A.y - 40) + (height1 * scale) },
    F: { x: (Geom1.A.x + offsetX) + (width1/2 * scale), y: (Geom1.A.y - 40) + (height1 * scale) }
  };

  // Bad SAS Trap - Marks will handle the bad angle placement
  if (type === 'quiz-bad-sas-trap') {
      // Handled by marks prop
  }

  // Calculate centroids to push labels intelligently
  const cx1 = (Geom1.A.x + Geom1.B.x + Geom1.C.x) / 3;
  const cy1 = (Geom1.A.y + Geom1.B.y + Geom1.C.y) / 3;
  const cx2 = (Geom2.D.x + Geom2.E.x + Geom2.F.x) / 3;
  const cy2 = (Geom2.D.y + Geom2.E.y + Geom2.F.y) / 3;

  // Colors
  const strokeColor = "white";
  const angleColor = "#F472B6"; 
  const strokeWidth = "4"; 
  const labelColor = "#38BDF8"; 
  const angleLabelColor = "#F9A8D4";

  // --- DRAWING HELPERS ---
  const drawSideLabel = (p1, p2, text, cx, cy) => {
    if (!text) return null;
    const mid = getMidPoint(p1, p2);

    // Direction from center to mid point
    const dx = mid.x - cx;
    const dy = mid.y - cy;
    const len = Math.sqrt(dx*dx + dy*dy);

    // Push outside slightly
    const pushDist = 20; 
    const finalX = mid.x + (dx/len) * pushDist;
    const finalY = mid.y + (dy/len) * pushDist + 8; // +8 for vertical centering baseline

    return (
      <text 
        x={finalX} y={finalY} 
        textAnchor="middle" 
        fill={labelColor} 
        fontSize="24" 
        fontWeight="bold"
        style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)', direction: 'ltr', fontFamily: 'monospace' }}
      >
        {text}
      </text>
    );
  };

  const drawAngleArc = (corner, leg1, leg2, label, cx, cy) => {
    const elements = [];
    const radius = 35;

    elements.push(
        <path 
          key="arc"
          d={getArcPath(corner, leg1, leg2, radius)}
          fill="rgba(244, 114, 182, 0.2)"
          stroke={angleColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
    );

    if (label) {
        // Find direction from corner TOWARDS the center of the triangle
        const dxCenter = cx - corner.x;
        const dyCenter = cy - corner.y;
        const lenCenter = Math.sqrt(dxCenter*dxCenter + dyCenter*dyCenter);

        // Push text INSIDE the triangle
        const pushDist = 45; 
        const textX = corner.x + (dxCenter/lenCenter) * pushDist;
        const textY = corner.y + (dyCenter/lenCenter) * pushDist + 6; // +6 to visually center

        elements.push(
            <text 
                key="label"
                x={textX} 
                y={textY} 
                textAnchor="middle" 
                alignmentBaseline="middle"
                fill={angleLabelColor} 
                fontSize="20"
                fontWeight="black"
                style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.9)', direction: 'ltr' }}
            >
                {label}
            </text>
        );
    }
    return <g>{elements}</g>;
  };

  // --- HIGHLIGHT LOGIC ---
  const showAngleA = marks?.aTop || highlight?.includes('angle') || highlight?.includes('aa') || highlight?.includes('success') || highlight?.includes('show-both');
  const showAngleB = marks?.aLeft || highlight?.includes('success') || highlight?.includes('show-both');
  const showAngleC = marks?.aRight || highlight?.includes('success') || highlight?.includes('show-both');

  // Highlight Sides for Letter Ratio Explanation
  const hSide1 = highlight === 'ratio-step-1' || highlight === 'ratio-step-2' || highlight === 'ratio-step-3'; 
  const hSide2 = highlight === 'ratio-step-2' || highlight === 'ratio-step-3';
  const hSide3 = highlight === 'ratio-step-3';

  // Animation Style
  const animStyle = overlapAnimation 
    ? { 
        transform: `translate(${Geom2.D.x - Geom1.A.x}px, ${Geom2.D.y - Geom1.A.y}px)`, 
        opacity: 0.7,
        zIndex: 50,
        transition: 'transform 2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s'
      } 
    : { 
        transform: 'translate(0px, 0px)', 
        opacity: 1,
        zIndex: 10,
        transition: 'transform 1s ease-out, opacity 0.5s' 
      };

  return (
    <div className="relative flex flex-col justify-center items-center w-full select-none mt-4">

      {/* SIMILARITY STATEMENT */}
      {(highlight === 'show-symbol-and-order' || highlight === 'vertex-order-explanation' || highlight === 'similarity-success' || type === 'letters-ratio-visual' || highlight?.includes('ratio')) && (
        <div className="mb-6 bg-slate-900/80 px-8 py-4 rounded-2xl border border-blue-500/30 flex flex-col items-center animate-in fade-in slide-in-from-top-4 z-20">
          <div className="flex items-center gap-2 md:gap-4 text-4xl md:text-5xl font-black text-white mb-2" dir="ltr">

            {/* FIRST TRIANGLE */}
            <div className="flex items-center">
              <span className="text-blue-300 mr-1">Δ</span>
              <span className={hSide1 || hSide3 ? "text-yellow-300" : "text-blue-300"}>A</span>
              <span className={hSide1 || hSide2 ? "text-yellow-300" : "text-blue-300"}>B</span>
              <span className={hSide2 || hSide3 ? "text-yellow-300" : "text-blue-300"}>C</span>
            </div>

            <span className="text-white transform scale-125 mx-2 font-sans inline-block">~</span>

            {/* SECOND TRIANGLE */}
            <div className="flex items-center">
              <span className="text-green-300 mr-1">Δ</span>
              <span className={hSide1 || hSide3 ? "text-yellow-300" : "text-green-300"}>D</span>
              <span className={hSide1 || hSide2 ? "text-yellow-300" : "text-green-300"}>E</span>
              <span className={hSide2 || hSide3 ? "text-yellow-300" : "text-green-300"}>F</span>
            </div>

          </div>
        </div>
      )}

      <div className="w-full overflow-visible flex justify-center">
      <svg viewBox="0 0 800 450" className="w-full max-w-4xl overflow-visible">

        {/* TRIANGLE 1 */}
        <g style={animStyle}>
           <path d={`M${Geom1.A.x} ${Geom1.A.y} L${Geom1.B.x} ${Geom1.B.y}`} stroke={hSide1 ? "yellow" : strokeColor} strokeWidth={hSide1 ? 6 : strokeWidth} strokeLinecap="round" />
           <path d={`M${Geom1.B.x} ${Geom1.B.y} L${Geom1.C.x} ${Geom1.C.y}`} stroke={hSide2 ? "yellow" : strokeColor} strokeWidth={hSide2 ? 6 : strokeWidth} strokeLinecap="round" />
           <path d={`M${Geom1.C.x} ${Geom1.C.y} L${Geom1.A.x} ${Geom1.A.y}`} stroke={hSide3 ? "yellow" : strokeColor} strokeWidth={hSide3 ? 6 : strokeWidth} strokeLinecap="round" />

           {/* Fill */}
           <path d={`M${Geom1.A.x} ${Geom1.A.y} L${Geom1.B.x} ${Geom1.B.y} L${Geom1.C.x} ${Geom1.C.y} Z`} 
                fill="rgba(59, 130, 246, 0.2)" stroke="none" />

           {/* Perimeter T1 */}
           {marks?.perimeterT1 && (
               <text x={cx1} y={cy1 + 10} textAnchor="middle" fill="#FDE047" fontSize="24" fontWeight="bold" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)', direction: 'rtl' }}>
                   {marks.perimeterT1}
               </text>
           )}

           {/* Labels T1 */}
           {marks?.labelSidesT1 && (
               <>
                 {drawSideLabel(Geom1.A, Geom1.B, marks.labelSidesT1[0], cx1, cy1)}
                 {drawSideLabel(Geom1.B, Geom1.C, marks.labelSidesT1[1], cx1, cy1)}
                 {drawSideLabel(Geom1.C, Geom1.A, marks.labelSidesT1[2], cx1, cy1)}
               </>
           )}
           {/* Angles T1 */}
           {showAngleA && drawAngleArc(Geom1.A, Geom1.B, Geom1.C, marks?.labelAnglesT1?.[0], cx1, cy1)}
           {showAngleB && drawAngleArc(Geom1.B, Geom1.C, Geom1.A, marks?.labelAnglesT1?.[1], cx1, cy1)}
           {showAngleC && drawAngleArc(Geom1.C, Geom1.A, Geom1.B, marks?.labelAnglesT1?.[2], cx1, cy1)}

           <text x={Geom1.A.x} y={Geom1.A.y - 20} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">A</text>
           <text x={Geom1.B.x - 20} y={Geom1.B.y + 25} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">B</text>
           <text x={Geom1.C.x + 20} y={Geom1.C.y + 25} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">C</text>
        </g>

        {/* TRIANGLE 2 */}
        <g>
           <path d={`M${Geom2.D.x} ${Geom2.D.y} L${Geom2.E.x} ${Geom2.E.y}`} stroke={hSide1 ? "yellow" : strokeColor} strokeWidth={hSide1 ? 6 : strokeWidth} strokeLinecap="round" />
           <path d={`M${Geom2.E.x} ${Geom2.E.y} L${Geom2.F.x} ${Geom2.F.y}`} stroke={hSide2 ? "yellow" : strokeColor} strokeWidth={hSide2 ? 6 : strokeWidth} strokeLinecap="round" />
           <path d={`M${Geom2.F.x} ${Geom2.F.y} L${Geom2.D.x} ${Geom2.D.y}`} stroke={hSide3 ? "yellow" : strokeColor} strokeWidth={hSide3 ? 6 : strokeWidth} strokeLinecap="round" />

           {/* Fill */}
           <path d={`M${Geom2.D.x} ${Geom2.D.y} L${Geom2.E.x} ${Geom2.E.y} L${Geom2.F.x} ${Geom2.F.y} Z`} 
                fill="rgba(34, 197, 94, 0.15)" stroke="none" />

           {/* Perimeter T2 */}
           {marks?.perimeterT2 && (
               <text x={cx2} y={cy2 + 10} textAnchor="middle" fill="#FDE047" fontSize="24" fontWeight="bold" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)', direction: 'rtl' }}>
                   {marks.perimeterT2}
               </text>
           )}

           {/* Labels T2 */}
           {marks?.labelSidesT2 && (
               <>
                 {drawSideLabel(Geom2.D, Geom2.E, marks.labelSidesT2[0], cx2, cy2)}
                 {drawSideLabel(Geom2.E, Geom2.F, marks.labelSidesT2[1], cx2, cy2)}
                 {drawSideLabel(Geom2.F, Geom2.D, marks.labelSidesT2[2], cx2, cy2)}
               </>
           )}
           {/* Angles T2 */}
           {showAngleA && drawAngleArc(Geom2.D, Geom2.E, Geom2.F, marks?.labelAnglesT2?.[0], cx2, cy2)}
           {showAngleB && drawAngleArc(Geom2.E, Geom2.F, Geom2.D, marks?.labelAnglesT2?.[1], cx2, cy2)}
           {showAngleC && drawAngleArc(Geom2.F, Geom2.D, Geom2.E, marks?.labelAnglesT2?.[2], cx2, cy2)}

           <text x={Geom2.D.x} y={Geom2.D.y - 20} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">D</text>
           <text x={Geom2.E.x - 20} y={Geom2.E.y + 25} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">E</text>
           <text x={Geom2.F.x + 20} y={Geom2.F.y + 25} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">F</text>
        </g>

        {/* CONNECTION LINES */}
        {overlapAnimation && (
            <g opacity="0.4">
                <line x1={Geom1.A.x} y1={Geom1.A.y} x2={Geom2.D.x} y2={Geom2.D.y} stroke="yellow" strokeDasharray="5,5" strokeWidth="2" />
            </g>
        )}

      </svg>
      </div>
    </div>
  );
});

// --- ENGINE LOGIC ---
const CongruenceGame = () => {
  const [gameState, setGameState] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [learnStep, setLearnStep] = useState(0); 
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(60); 
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState('bg-slate-900');
  const [showTip, setShowTip] = useState(true);
  const [overlapAnimation, setOverlapAnimation] = useState(false);
  const [showQuizHint, setShowQuizHint] = useState(false);

  const stepsContainerRef = useRef(null);

  // Timer Effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0 && gameState === 'quiz' && !isAnswered) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isAnswered) {
      handleTimeUp();
    }
    return () => clearInterval(interval);
  }, [timer, timerActive, gameState, isAnswered]);

  // Hint Effect for difficult questions
  useEffect(() => {
    let hintTimeout;
    if (gameState === 'quiz' && !isAnswered && LEVELS_DATA[currentLevel].hint) {
      hintTimeout = setTimeout(() => {
        setShowQuizHint(true);
      }, 7000); // 7 seconds
    }
    return () => clearTimeout(hintTimeout);
  }, [gameState, currentLevel, isAnswered]);

  useEffect(() => {
    setOverlapAnimation(false);

    // Auto-scroll to the bottom of the steps container when a new step is revealed
    if (stepsContainerRef.current) {
        setTimeout(() => {
            stepsContainerRef.current.scrollTop = stepsContainerRef.current.scrollHeight;
        }, 50);
    }
  }, [learnStep, currentLevel, gameState]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setFeedbackColor('bg-red-900');
    setStreak(0);
  };

  const resetColors = () => {
    setFeedbackColor('bg-slate-900');
  };

  const startGame = () => {
    setGameState('learn');
    setCurrentLevel(0);
    setLearnStep(0);
    setScore(0);
    setStreak(0);
    resetColors();
    setShowTip(true); 
    setShowQuizHint(false);
  };

  const goHome = () => {
    setGameState('welcome');
    resetColors();
    setShowTip(true);
    setShowQuizHint(false);
  };

  const nextStep = () => {
    const currentLvl = LEVELS_DATA[currentLevel];
    if (gameState === 'learn') {
      if (learnStep < currentLvl.steps.length - 1) {
        setLearnStep(prev => prev + 1);
        setOverlapAnimation(false);
        return;
      }
    }

    if (currentLevel + 1 < LEVELS_DATA.length) {
      setCurrentLevel(prev => prev + 1);
      setLearnStep(0);
      setShowTip(true);
      setShowQuizHint(false); // Reset hint for the next level

      const nextLvl = LEVELS_DATA[currentLevel + 1];
      setIsAnswered(false);
      setSelectedAnswer(null);
      resetColors();

      if (nextLvl.type === 'quiz') {
        setGameState('quiz');
        setTimer(nextLvl.time || 30);
        setTimerActive(true);
      } else {
        setGameState('learn');
        setTimerActive(false);
      }
    } else {
      setGameState('summary');
    }
  };

  const prevStep = () => {
    if (gameState === 'learn' && learnStep > 0) {
      setLearnStep(prev => prev - 1);
      setOverlapAnimation(false);
    }
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    setTimerActive(false);

    const currentQ = LEVELS_DATA[currentLevel];
    if (index === currentQ.correct) {
      setScore(prev => prev + 100 + (timer * 2));
      setStreak(prev => prev + 1);
      setFeedbackColor('bg-green-900');
    } else {
      setStreak(0);
      setFeedbackColor('bg-red-900');
    }
  };

  return (
    <div dir="rtl" className={`min-h-screen transition-colors duration-500 ${feedbackColor} text-white font-sans flex flex-col items-center p-4 overflow-hidden relative select-none bg-slate-900`}>
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* HOME BUTTON */}
      <button 
        onClick={goHome} 
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full z-50 transition-all shadow-lg border border-white/20 active:scale-95"
        title="חזור למסך הבית"
      >
        <Home className="w-8 h-8 text-white" />
      </button>

      {/* HEADER / SCOREBOARD */}
      {gameState !== 'welcome' && (
        <div className="w-full max-w-6xl flex justify-between items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/20 mt-16 md:mt-4 z-10 shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-xl border border-white/10">
              <Trophy className="text-yellow-400 w-8 h-8" />
              <span className="text-3xl font-bold font-mono" dir="ltr">{score}</span>
            </div>
            {gameState === 'quiz' && (
              <div className={`flex items-center gap-3 text-3xl font-bold px-6 py-3 rounded-xl border-2 transition-colors ${timer < 10 ? 'bg-red-500/50 border-red-500 animate-pulse' : 'bg-blue-500/30 border-blue-400'}`}>
                <Clock className="w-7 h-7" />
                <span dir="ltr">{timer}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-300 mb-1 font-bold">רצף תשובות</span>
            <div className="flex gap-2 h-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-4 h-4 rounded-full transition-all duration-300 ${i < streak ? 'bg-green-400 shadow-[0_0_10px_#4ade80]' : 'bg-gray-600'}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WELCOME SCREEN */}
      {gameState === 'welcome' && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-in fade-in zoom-in duration-500 text-center z-10">
          <div className="relative mb-10">
             <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
             <Scaling className="w-40 h-40 text-blue-400 relative z-10 drop-shadow-2xl" />
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-indigo-200 mb-8 leading-tight drop-shadow-sm">
            דמיון משולשים
          </h1>
          <p className="text-3xl md:text-4xl text-blue-100 mb-16 max-w-3xl leading-relaxed font-light">
            הם נראים אותו דבר, אבל הגודל שונה... בואו נלמד לזהות אותם, להוכיח דמיון ולשלוט ביחסים!
          </p>
          <button 
            onClick={startGame}
            className="group relative px-20 py-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-4xl md:text-5xl font-black rounded-3xl shadow-[0_12px_0_rgb(30,58,138)] active:shadow-[0_6px_0_rgb(30,58,138)] active:translate-y-2 transition-all"
          >
            בואו נתחיל
          </button>
        </div>
      )}

      {/* LEARNING SLIDE */}
      {gameState === 'learn' && (
        <div className="flex flex-col items-center max-w-7xl w-full h-full flex-1 z-10 min-h-[70vh]">
          <div className="bg-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] w-full border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-10 items-stretch h-full">

            <div className="flex-1 flex flex-col min-w-[350px]">
              <div className="flex items-center gap-5 mb-8 border-b border-white/10 pb-6">
                <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-600/20">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">{LEVELS_DATA[currentLevel].title}</h2>
              </div>

              <div ref={stepsContainerRef} className="flex-1 space-y-6 relative overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
                {LEVELS_DATA[currentLevel].steps.map((step, idx) => {
                  if (idx > learnStep) return null;

                  const isCurrent = idx === learnStep;
                  const visibilityClass = isCurrent 
                    ? 'bg-white/10 border-yellow-400 opacity-100 scale-100' 
                    : 'bg-black/30 border-green-500/50 opacity-60 scale-95';

                  return (
                    <div 
                      key={idx}
                      className={`transform transition-all duration-500 p-6 rounded-2xl border-r-8 shadow-lg ${visibilityClass} origin-top`}
                    >
                      <div className="flex gap-5 items-start">
                        <div className={`mt-1 p-2 rounded-full ${isCurrent ? 'bg-yellow-400/20 text-yellow-400' : 'bg-green-500/20 text-green-500'}`}>
                            <ChevronLeft className={`w-6 h-6 ${isCurrent ? 'animate-pulse' : ''}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-2xl md:text-3xl leading-relaxed ${isCurrent ? 'font-bold text-white' : 'font-normal text-gray-300'}`}>
                            {step.text}
                            {step.math && <span className="mx-2 font-sans font-bold text-yellow-300 inline-block" dir="ltr">{step.math}</span>}
                            {step.textAfter}
                          </p>
                          {step.customContent && step.customContent}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-6 mt-10 pt-6 border-t border-white/10 shrink-0">
                <button 
                  onClick={prevStep}
                  disabled={learnStep === 0}
                  className={`px-8 py-5 rounded-2xl font-bold text-2xl transition-all flex items-center justify-center gap-3 ${learnStep === 0 ? 'opacity-30 cursor-not-allowed' : 'bg-white/5 hover:bg-white/10 text-white'}`}
                >
                  <ChevronRight className="w-8 h-8 rotate-180" />
                  חזור
                </button>

                <button 
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-l from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white text-3xl font-black py-5 rounded-2xl shadow-xl shadow-indigo-900/40 transition-all flex justify-center items-center gap-4 transform active:scale-[0.98] active:translate-y-1"
                >
                  {learnStep < LEVELS_DATA[currentLevel].steps.length - 1 ? 'המשך' : 'לשלב הבא'}
                  <ChevronLeft className="w-10 h-10" />
                </button>
              </div>
            </div>

            <div className="flex-[1.5] flex flex-col justify-between bg-black/30 rounded-[2rem] p-4 border-2 border-white/10 shadow-inner relative overflow-hidden group min-h-[400px]">

               <div className="flex-1 flex items-center justify-center w-full">
                 <TrianglePairVisual 
                   type={LEVELS_DATA[currentLevel].diagram} 
                   highlight={LEVELS_DATA[currentLevel].steps[learnStep]?.highlight}
                   marks={LEVELS_DATA[currentLevel].steps[learnStep]?.marks || LEVELS_DATA[currentLevel].marks || EMPTY_MARKS}
                   overlapAnimation={overlapAnimation}
                 />
               </div>

               {/* INTERACTIVE BUTTONS & TIP */}
               <div className="flex flex-col w-full mt-auto relative z-30 pt-4">
                 <div className="flex justify-between items-end w-full">
                   <div className="w-full relative">
                     <button 
                       onClick={() => setShowTip(!showTip)}
                       className="flex items-center justify-center gap-3 w-full py-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-200 rounded-2xl transition-all border border-yellow-500/20 text-xl font-bold"
                     >
                       <Lightbulb className="w-6 h-6" />
                       {showTip ? 'הסתר טיפ' : 'קבל טיפ'}
                     </button>
                   </div>

                   {LEVELS_DATA[currentLevel].steps[learnStep]?.showAction && (
                     <div className="ml-4 shrink-0">
                       <button 
                         onClick={() => setOverlapAnimation(!overlapAnimation)}
                         className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-xl font-black shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 ${overlapAnimation ? 'bg-red-500 hover:bg-red-400 border-red-300 text-white' : 'bg-green-500 hover:bg-green-400 border-green-300 text-white'}`}
                       >
                         <Move className="w-6 h-6" /> 
                         {overlapAnimation ? 'אפס' : 'בדוק'}
                       </button>
                     </div>
                   )}
                 </div>

                 {showTip && (
                   <div className="mt-4 p-6 bg-slate-800 rounded-2xl border-r-8 border-yellow-500 animate-in fade-in slide-in-from-top-2 w-full shadow-lg">
                     <p className="font-serif text-2xl text-yellow-50 text-right leading-relaxed font-medium">
                       {LEVELS_DATA[currentLevel].tip}
                     </p>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ SLIDE */}
      {gameState === 'quiz' && (
        <div className="flex flex-col items-center max-w-6xl w-full animate-in zoom-in-95 duration-300 flex-1 justify-center z-10 min-h-[70vh]">
          <div className="bg-slate-800/90 p-8 md:p-12 rounded-[3rem] w-full border border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 h-3 bg-gradient-to-l from-green-400 to-blue-500 transition-all duration-1000 ease-linear" style={{width: `${(timer / LEVELS_DATA[currentLevel].time) * 100}%`}}></div>

            {/* TRAP ALERT BADGE */}
            {LEVELS_DATA[currentLevel].diagramType === 'quiz-bad-sas-trap' ? (
              <div className="absolute top-8 left-8 bg-red-500/20 border-2 border-red-500 text-red-100 px-6 py-3 rounded-full text-xl font-black flex items-center gap-3 animate-bounce shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <AlertTriangle className="w-8 h-8" />
                זהירות, מוקש!
              </div>
            ) : null}

            <div className="flex-1 flex flex-col lg:flex-row gap-16 mt-8">
              <div className="flex-1 flex flex-col">

                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-right text-blue-50">
                  {LEVELS_DATA[currentLevel].question}
                  {LEVELS_DATA[currentLevel].math && <span className="mx-2 font-mono text-yellow-300 inline-block font-bold" dir="ltr">{LEVELS_DATA[currentLevel].math}</span>}
                  {LEVELS_DATA[currentLevel].textAfter}
                </h3>

                {/* DYNAMIC HINT */}
                {showQuizHint && !isAnswered && (
                  <div className="mb-6 bg-yellow-500/20 border-2 border-yellow-500/50 text-yellow-300 px-6 py-4 rounded-2xl text-2xl font-bold flex items-center gap-4 animate-in fade-in zoom-in duration-300 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                     <Lightbulb className="w-8 h-8 text-yellow-400 shrink-0" />
                     {LEVELS_DATA[currentLevel].hint}
                  </div>
                )}

                <div className="bg-black/30 rounded-[2rem] p-6 flex-1 flex items-center justify-center border-2 border-white/10 min-h-[350px] relative shadow-inner mt-4">
                  <TrianglePairVisual 
                    type={LEVELS_DATA[currentLevel].diagramType} 
                    highlight={selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'similarity-success' : ''}
                    marks={LEVELS_DATA[currentLevel].marks}
                    overlapAnimation={false} 
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5 justify-center">
                {LEVELS_DATA[currentLevel].options.map((option, idx) => {
                  let btnClass = "p-6 rounded-3xl text-2xl md:text-3xl font-bold transition-all transform hover:scale-[1.02] shadow-lg border-4 relative overflow-hidden group text-right pr-8 ";

                  if (!isAnswered) {
                    btnClass += "bg-white/5 hover:bg-white/10 border-white/10 cursor-pointer text-gray-100";
                  } else {
                    if (idx === LEVELS_DATA[currentLevel].correct) {
                      btnClass += "bg-green-600 border-green-400 text-white scale-105 shadow-[0_0_30px_rgba(74,222,128,0.5)] z-10";
                    } else if (idx === selectedAnswer) {
                      btnClass += "bg-red-600 border-red-400 opacity-90";
                    } else {
                      btnClass += "bg-gray-800/50 opacity-40 border-transparent grayscale";
                    }
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={isAnswered}
                      className={btnClass}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <span className="" dir={option.match(/[a-zA-Z]/) ? "ltr" : "rtl"}>{option}</span>
                        {isAnswered && idx === LEVELS_DATA[currentLevel].correct && <CheckCircle className="w-10 h-10 text-white animate-bounce" />}
                        {isAnswered && idx === selectedAnswer && idx !== LEVELS_DATA[currentLevel].correct && <XCircle className="w-10 h-10 text-white animate-pulse" />}
                        {!isAnswered && <div className="w-8 h-8 rounded-full border-4 border-white/20 group-hover:border-white transition-colors"></div>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {isAnswered && (
              <div className="mt-10 pt-8 border-t border-white/10 animate-in slide-in-from-bottom fade-in duration-500">
                <div className={`p-8 rounded-[2rem] mb-8 flex gap-6 items-start ${selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'bg-green-900/40 border-2 border-green-500/30' : 'bg-red-900/40 border-2 border-red-500/30'}`}>
                    {selectedAnswer === LEVELS_DATA[currentLevel].correct 
                    ? <div className="bg-green-500 p-3 rounded-full mt-1 shrink-0 shadow-lg"><CheckCircle className="text-white w-8 h-8" /></div>
                    : <div className="bg-red-500 p-3 rounded-full mt-1 shrink-0 shadow-lg"><XCircle className="text-white w-8 h-8" /></div>
                  }
                  <div>
                    <span className="font-black text-3xl block mb-3 text-white">{selectedAnswer === LEVELS_DATA[currentLevel].correct ? 'כל הכבוד!' : 'לא נורא...'}</span>
                    <p className="text-2xl leading-relaxed opacity-90 font-medium text-gray-100">{LEVELS_DATA[currentLevel].explanation}</p>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full py-6 bg-white text-blue-900 font-black text-4xl rounded-[2rem] hover:bg-blue-50 shadow-[0_10px_0_rgb(203,213,225)] active:shadow-[0_5px_0_rgb(203,213,225)] active:translate-y-1 transition-all flex justify-center items-center gap-4"
                >
                  לשאלה הבאה
                  <ChevronLeft className="w-10 h-10" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUMMARY SCREEN */}
      {gameState === 'summary' && (
        <div className="flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 p-12 max-w-4xl bg-slate-800/90 backdrop-blur-md rounded-[4rem] shadow-2xl border border-white/20 mt-10 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            <Trophy className="w-48 h-48 text-yellow-400 mb-8 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)] animate-bounce-slow relative z-10" />
          </div>

          <h2 className="text-7xl font-black mb-8 text-white">מאסטרים בדמיון!</h2>

          <div className="bg-white/10 p-10 rounded-[3rem] w-full mb-10 border border-white/10 transform hover:scale-105 transition-transform shadow-2xl">
            <p className="text-3xl mb-4 text-blue-200 font-bold">הניקוד הסופי</p>
            <div className="text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 font-mono tracking-tight filter drop-shadow-lg" dir="ltr">
              {score}
            </div>
          </div>

          <button 
            onClick={startGame}
            className="w-full py-6 bg-white/10 hover:bg-white/20 rounded-3xl font-black text-3xl transition-all flex items-center justify-center gap-4 border-2 border-white/10 hover:border-white/30"
          >
            <RefreshCw className="w-8 h-8" />
            התחל משחק חדש
          </button>
        </div>
      )}

    </div>
  );
};

export default CongruenceGame;


    {
    id: "misvaot-white-g8",
    title: "משוואות עם מכנה מספרי כלי נוסף ",
    grade: 8,
    category: "algebra",
    premium: false,
    emoji: "📐",
    description: "מומלץ כתזכורת לשיעורים מתקדמים",
    html:import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Check, RefreshCw, Star, Play, Settings, Home, X, BookOpen, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';

// --- רקע מתמטי עדין ---
const MathBackground = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-10">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="math-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <text x="10" y="20" fontFamily="sans-serif" fontSize="16" fill="#4a5568">x</text>
          <text x="30" y="40" fontFamily="sans-serif" fontSize="16" fill="#4a5568">y</text>
          <text x="50" y="20" fontFamily="sans-serif" fontSize="16" fill="#4a5568">+</text>
          <text x="70" y="40" fontFamily="sans-serif" fontSize="16" fill="#4a5568">-</text>
          <text x="90" y="20" fontFamily="sans-serif" fontSize="16" fill="#4a5568">=</text>
          <text x="10" y="70" fontFamily="sans-serif" fontSize="16" fill="#4a5568">∫</text>
          <text x="30" y="90" fontFamily="sans-serif" fontSize="16" fill="#4a5568">∑</text>
          <text x="50" y="70" fontFamily="sans-serif" fontSize="16" fill="#4a5568">π</text>
          <text x="70" y="90" fontFamily="sans-serif" fontSize="16" fill="#4a5568">∞</text>
          <text x="90" y="70" fontFamily="sans-serif" fontSize="16" fill="#4a5568">√</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#math-pattern)" />
    </svg>
  </div>
);

// --- רכיבי בסיס ---

const Fraction = ({ num, den, multiplier, isResultRow = false, denominatorStatus = 'visible', isWholeConverted = false, size = 'large' }) => {
  const isSmall = size === 'small';

  return (
    <div className={`inline-flex flex-col items-center ${isSmall ? 'mx-1 align-middle' : 'mx-2'} transition-all relative`} style={{ verticalAlign: 'middle' }}>

      {/* המכפיל (המספר הקטן למעלה) */}
      {multiplier && (
        <div className={`absolute ${isSmall ? '-top-8' : '-top-16'} flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-700 z-50`}>
          <div className={`${isSmall ? 'w-6 h-6 text-sm border' : 'w-12 h-12 text-3xl border-2'} bg-red-100 border-red-500 text-red-600 font-bold rounded-full flex items-center justify-center shadow-sm`}>
            {multiplier}
          </div>
          <div className={`w-0.5 ${isSmall ? 'h-2' : 'h-6'} bg-red-300`}></div>
        </div>
      )}

      {/* המונה */}
      <span className={`px-2 leading-tight mb-1 font-bold transition-all duration-1000 ${isSmall ? 'text-lg md:text-xl' : 'text-5xl md:text-6xl'} ${isResultRow ? 'text-7xl text-blue-800' : ''}`}>
        {isResultRow && multiplier ? (
          <span className="flex items-center gap-2">
            <span className="text-red-600">{multiplier}</span>
            <span>•</span>
            <span>{String(num).includes('+') || String(num).includes('-') ? `(${num})` : num}</span>
          </span>
        ) : num}
      </span>

      {/* המכנה וקו השבר */}
      {!isResultRow && (
        <div className={`w-full text-center transition-opacity duration-1000 ${denominatorStatus === 'hidden' ? 'opacity-0' : 'opacity-100'}`}>
          <div className={`w-full border-b-4 border-gray-900 ${isSmall ? 'h-[1px] mb-0.5' : 'h-1 mb-1'} transition-all duration-[2000ms] ${isWholeConverted ? 'opacity-100' : 'opacity-100'}`}></div>

          <div className="relative inline-block">
            <span className={`leading-tight font-bold ${isSmall ? 'text-base md:text-lg text-gray-600' : 'text-4xl'} transition-all duration-[2000ms] ${isWholeConverted ? 'text-blue-600 animate-pulse' : 'text-gray-600'}`}>
              {den}
            </span>
            {denominatorStatus === 'struck' && (
               <div className="absolute top-1/2 left-0 w-full h-1.5 bg-red-600 transform -translate-y-1/2 rotate-12 animate-in zoom-in duration-500"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const MathSymbol = ({ char, size = 'large' }) => (
  <span className={`mx-2 font-bold text-gray-700 font-mono ${size === 'small' ? 'text-xl align-middle' : 'text-6xl'}`}>{char}</span>
);

// --- מנוע רינדור טקסט חכם (מתוקן) ---
const SolutionTextRenderer = ({ text }) => {
  // 1. פיצול הטקסט למילים
  const rawParts = text.split(' ');

  // 2. זיהוי וסיווג כל חלק (טקסט רגיל או ביטוי מתמטי)
  const classifiedParts = rawParts.map(part => {
    // זיהוי שברים (למשל x/3 או (x+1)/2)
    const fracMatch = part.match(/^([a-zA-Z0-9+()-]+)\/([a-zA-Z0-9]+)([,.:;]?)?$/);
    // זיהוי אופרטורים מתמטיים ומספרים שכוללים נעלמים או סימנים (כמו 3x, =, +, -)
    const isMathSymbol = ['=', '+', '-', '•', ':', '->'].includes(part) || /^[a-zA-Z0-9()+-]+$/.test(part) && !/^[א-ת]+$/.test(part);

    if (fracMatch) {
      return { type: 'fraction', data: fracMatch, original: part };
    } else if (isMathSymbol) {
      return { type: 'math', data: part, original: part };
    } else {
      return { type: 'text', data: part, original: part };
    }
  });

  // 3. קיבוץ רצפים מתמטיים
  const groupedParts = [];
  let currentMathGroup = [];

  classifiedParts.forEach((item, index) => {
    if (item.type === 'fraction' || item.type === 'math') {
      currentMathGroup.push(item);
    } else {
      // אם היה לנו רצף מתמטי, נסגור אותו ונחליף לקבוצה
      if (currentMathGroup.length > 0) {
        groupedParts.push({ type: 'math-group', items: [...currentMathGroup] });
        currentMathGroup = [];
      }
      groupedParts.push(item);
    }
  });
  // סגירת קבוצה אחרונה אם נשארה
  if (currentMathGroup.length > 0) {
    groupedParts.push({ type: 'math-group', items: [...currentMathGroup] });
  }

  // 4. רינדור הסופי
  return (
    <div className="inline leading-loose">
      {groupedParts.map((group, i) => {
        if (group.type === 'text') {
          return <span key={i} className="ml-1">{group.data} </span>;
        } 

        if (group.type === 'math-group') {
          return (
            <span key={i} dir="ltr" className="inline-flex flex-wrap items-center gap-1 mx-1 px-1 bg-blue-50/50 rounded align-middle">
              {group.items.map((item, j) => {
                if (item.type === 'fraction') {
                  const [_, num, den, punctuation] = item.data;
                  return (
                    <React.Fragment key={j}>
                      <Fraction num={num} den={den} size="small" />
                      {punctuation && <span className="text-gray-800">{punctuation}</span>}
                    </React.Fragment>
                  );
                } else {
                  // אופרטורים או סתם מספרים/משתנים
                  return <MathSymbol key={j} char={item.data} size="small" />;
                }
              })}
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};

// --- מאגר תרגילים ללמידה ---

const LEARNING_EXERCISES = [
  {
    id: 'level1',
    name: 'שלב 1: הבסיס',
    difficulty: 'קל',
    initialEquation: [
      { type: 'frac', num: 'x', den: 2 },
      { type: 'op', char: '+' },
      { type: 'num', val: 3 }, 
      { type: 'op', char: '=' },
      { type: 'frac', num: 'x', den: 5 },
      { type: 'op', char: '+' },
      { type: 'num', val: 6 } 
    ],
    commonDenom: 10,
    linearSteps: [
      { eq: "5x + 30 = 2x + 60", desc: "המשוואה אחרי שהעפנו מכנים" },
      { eq: "5x - 2x = 60 - 30", desc: "העברת אגפים: 2x עובר שמאלה (נהיה מינוס), 30 עובר ימינה (נהיה מינוס)." },
      { eq: "3x = 30", desc: "כינוס איברים: 5 פחות 2 זה 3, ו-60 פחות 30 זה 30" },
      { eq: "x = 10", desc: "חילוק במקדם של x (מחלקים ב-3)" }
    ],
    steps: [
      { type: 'intro', text: 'ברוכים הבאים! המטרה: להעיף את המספרים שלמטה.' },
      { type: 'magic_one', text: 'חוק ברזל: למספרים בודדים מוסיפים מכנה 1. שימו לב איך זה קורה לאט...' },
      { type: 'find_cd', text: 'המכנים הם: 2, 1, 5. מי המספר שמתחלק בכולם?', 
        options: [
          { val: 7, feedback: 'לא. 7 הוא סכום המכנים (2+5), אנחנו צריכים כפל.' }, 
          { val: 10, feedback: 'מצוין! 10 מתחלק בכולם.', correct: true },
          { val: 5, feedback: '5 מתחלק ב-5 אבל לא ב-2.' }
        ] 
      },
      { type: 'multipliers', text: 'נבדוק "מה חסר" לכל מכנה כדי להגיע ל-10.', subSteps: [
          { text: 'מכנה 2: בכמה נכפול כדי להגיע ל-10?', ans: 5, targetIdx: 0 },
          { text: 'מכנה 1: בכמה נכפול כדי להגיע ל-10?', ans: 10, targetIdx: 2 },
          { text: 'מכנה 5: בכמה נכפול כדי להגיע ל-10?', ans: 2, targetIdx: 4 },
          { text: 'מכנה 1: בכמה נכפול כדי להגיע ל-10?', ans: 10, targetIdx: 6 },
        ] 
      },
      { type: 'eliminate', text: 'הקסם! קודם נמחק את המכנים, ונישאר רק עם הכפל למעלה.' },
      { type: 'solve_linear', text: 'עכשיו נפתור את המשוואה הרגילה בפירוט מלא.' }
    ]
  },
  {
    id: 'level2',
    name: 'שלב 2: חוק הפילוג',
    difficulty: 'בינוני',
    initialEquation: [
      { type: 'frac', num: 'x+4', den: 2 },
      { type: 'op', char: '=' },
      { type: 'frac', num: '2x+1', den: 3 }
    ],
    commonDenom: 6,
    linearSteps: [
      { eq: "3(x+4) = 2(2x+1)", desc: "המשוואה עם סוגריים (חובה לשים סוגריים!)" },
      { eq: "3x + 12 = 4x + 2", desc: "פתיחת סוגריים (חוק הפילוג): כופלים את המספר בחוץ בכל אחד בפנים" },
      { eq: "3x - 4x = 2 - 12", desc: "העברת אגפים: 4x עבר שמאלה, 12 עבר ימינה. הסימנים התהפכו!" },
      { eq: "-1x = -10", desc: "כינוס איברים: 3 פחות 4 זה -1, 2 פחות 12 זה -10" },
      { eq: "x = 10", desc: "חילוק במקדם (-1)" }
    ],
    steps: [
      { type: 'intro', text: 'שימו לב! יש במונה ביטויים ארוכים.' },
      { type: 'find_cd', text: 'מכנים 2 ו-3. מה המכנה המשותף?', 
        options: [
          { val: 5, feedback: 'לא. 5 זה חיבור (2+3), אנחנו צריכים מכנה משותף.' },
          { val: 6, feedback: 'מעולה! 6 הוא המכנה המשותף הקטן ביותר.', correct: true },
          { val: 12, feedback: '12 הוא מכנה משותף, אבל יש אחד קטן יותר.' }
        ] 
      },
      { type: 'multipliers', text: 'בכמה נכפול כל מכנה כדי להגיע ל-6?', subSteps: [
          { text: 'מכנה 2: נכפול ב-3', ans: 3, targetIdx: 0 },
          { text: 'מכנה 3: נכפול ב-2', ans: 2, targetIdx: 2 },
        ] 
      },
      { type: 'eliminate', text: 'המכנים ימחקו. שימו לב לסוגריים שנוספו!' },
      { type: 'solve_linear', text: 'פתרון המשוואה שלב אחר שלב.' }
    ]
  }
];

// --- מאגר תרגילים לתרגול עצמי (מעודכן עם רווחים כדי שהמנוע יזהה את השברים) ---
const PRACTICE_EXERCISES = [
  {
    equationParts: [
        { type: 'frac', num: 'x', den: 3 },
        { type: 'op', char: '+' },
        { type: 'frac', num: 'x', den: 4 },
        { type: 'op', char: '=' },
        { type: 'num', val: 7 }
    ],
    solution: [
      "1. שלב ראשון - הכנה: נוסיף מכנה 1 למספר השלם 7, כדי שכל האיברים יהיו שברים. המשוואה כעת:",
      "x/3 + x/4 = 7/1",
      "2. מציאת מכנה משותף: נחפש מספר שמתחלק ב-3, ב-4 וב-1. המספר הקטן ביותר הוא 12.",
      "3. כפל במכנה המשותף: נכפול כל מונה ב'מה שחסר' למכנה שלו כדי להגיע ל-12:",
      "- את x/3 נכפול ב-4 (כי 12 לחלק ל-3 זה 4)",
      "- את x/4 נכפול ב-3 (כי 12 לחלק ל-4 זה 3)",
      "- את 7/1 נכפול ב-12 (כי 12 לחלק ל-1 זה 12)",
      "4. כתיבת המשוואה ללא מכנים: 4x + 3x = 84",
      "5. כינוס איברים דומים: נחבר את האיקסים בצד שמאל. 4 ועוד 3 זה 7. נקבל: 7x = 84",
      "6. בידוד ה-X: נחלק את שני האגפים ב-7 (המקדם של x). התוצאה: x = 12"
    ]
  },
  {
    equationParts: [
        { type: 'frac', num: 'x', den: 5 },
        { type: 'op', char: '=' },
        { type: 'frac', num: 'x', den: 2 },
        { type: 'op', char: '-' },
        { type: 'num', val: 3 }
    ],
    solution: [
      "1. שלב ראשון - הכנה: נוסיף מכנה 1 למספר השלם 3. המשוואה כעת:",
      "x/5 = x/2 - 3/1",
      "2. מציאת מכנה משותף: המכנים הם 5 ו-2. המספר המשותף הקטן ביותר הוא 10.",
      "3. כפל במכנה המשותף: נבדוק כמה פעמים כל מכנה נכנס ב-10:",
      "- המכנה 5 נכנס ב-10 בדיוק 2 פעמים. נכפול את המונה ב-2.",
      "- המכנה 2 נכנס ב-10 בדיוק 5 פעמים. נכפול את המונה ב-5.",
      "- המכנה 1 נכנס ב-10 בדיוק 10 פעמים. נכפול את המונה ב-10.",
      "4. כתיבת המשוואה החדשה: 2x = 5x - 30",
      "5. העברת אגפים: נעביר את ה-5x לצד שמאל (הוא יהפוך למינוס) כדי שכל האיקסים יהיו ביחד.",
      "2x - 5x = -30",
      "6. כינוס איברים: 2 פחות 5 זה מינוס 3. קיבלנו: -3x = -30",
      "7. בידוד ה-X: נחלק ב מינוס 3 (שים לב למינוס!). מינוס חלקי מינוס נותן פלוס. x = 10"
    ]
  },
  {
    equationParts: [
        { type: 'frac', num: 'x+1', den: 2 },
        { type: 'op', char: '=' },
        { type: 'frac', num: 'x+2', den: 3 }
    ],
    solution: [
      "1. זיהוי המכנה המשותף: המכנים הם 2 ו-3. המספר שמתחלק בשניהם הוא 6.",
      "2. הכנה לכפל: נכפול את השבר השמאלי ב-3 (כי 6 לחלק ל-2 זה 3) ואת השבר הימני ב-2 (כי 6 לחלק ל-3 זה 2).",
      "3. כתיבת המשוואה עם סוגריים: מכיוון שיש לנו ביטוי במונה (x+1), חובה לשים אותו בסוגריים!",
      "3(x+1) = 2(x+2)",
      "4. פתיחת סוגריים (חוק הפילוג): נכפול את המספר שבחוץ בכל איבר שבפנים.",
      "- צד שמאל: 3 כפול x זה 3x, ו-3 כפול 1 זה 3. קיבלנו 3x + 3",
      "- צד ימין: 2 כפול x זה 2x, ו-2 כפול 2 זה 4. קיבלנו 2x + 4",
      "המשוואה כעת: 3x + 3 = 2x + 4",
      "5. העברת אגפים: איקסים שמאלה, מספרים ימינה. ה-2x עובר במינוס, ה-3 עובר במינוס.",
      "3x - 2x = 4 - 3",
      "6. פתרון סופי: x = 1"
    ]
  },
  {
    equationParts: [
        { type: 'frac', num: '2x', den: 5 },
        { type: 'op', char: '+' },
        { type: 'num', val: 2 },
        { type: 'op', char: '=' },
        { type: 'frac', num: 'x', den: 2 },
        { type: 'op', char: '+' },
        { type: 'num', val: 1 }
    ],
    solution: [
      "1. שלב ראשון - הכנה: נוסיף מכנה 1 לכל המספרים השלמים (ל-2 ול-1).",
      "2x/5 + 2/1 = x/2 + 1/1",
      "2. מציאת מכנה משותף: בין 5 ל-2 המכנה המשותף הוא 10.",
      "3. חישוב המכפילים: נבדוק בכמה לכפול כל איבר:",
      "- את ה-2x נכפול ב-2 (כי 10 לחלק ל-5 זה 2). נקבל 4x",
      "- את ה-2 נכפול ב-10 (כי המכנה הוא 1). נקבל 20",
      "- את ה-x נכפול ב-5 (כי 10 לחלק ל-2 זה 5). נקבל 5x",
      "- את ה-1 נכפול ב-10. נקבל 10",
      "4. המשוואה החדשה: 4x + 20 = 5x + 10",
      "5. העברת אגפים: נעביר את 5x שמאלה (מינוס) ואת 20 ימינה (מינוס).",
      "4x - 5x = 10 - 20",
      "6. כינוס איברים: -x = -10",
      "7. סיום: נחלק ב מינוס 1 או נכפול במינוס 1 כדי להפוך את הסימן. x = 10"
    ]
  },
  {
    equationParts: [
        { type: 'frac', num: '3x-1', den: 4 },
        { type: 'op', char: '=' },
        { type: 'num', val: 2 }
    ],
    solution: [
      "1. שלב ראשון - הכנה: נהפוך את 2 לשבר 2/1 כדי שיהיה קל לראות את המכנים.",
      "(3x-1)/4 = 2/1",
      "2. מציאת מכנה משותף: בין 4 ל-1 המכנה הוא 4.",
      "3. כפל: את צד שמאל נכפול ב-1 (הוא נשאר אותו דבר). את צד ימין נכפול ב-4.",
      "4. כתיבת המשוואה: המונה בצד שמאל הוא 3x-1. בצד ימין 2 כפול 4 זה 8.",
      "3x - 1 = 8",
      "5. העברת אגפים: נעביר את המינוס 1 ימינה, הוא יהפוך לפלוס.",
      "3x = 8 + 1",
      "6. כינוס: 3x = 9",
      "7. פתרון: נחלק ב-3 ונקבל x = 3"
    ]
  }
];

// --- המנוע הראשי ---

export default function MathApp() {
  const [activeScreen, setActiveScreen] = useState('menu'); // menu, exercise, practice
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative" dir="rtl">
      <MathBackground />
      {activeScreen === 'menu' && <MainMenu onSelect={(ex) => { setSelectedExercise(ex); setActiveScreen('exercise'); }} onPractice={() => setActiveScreen('practice')} />}
      {activeScreen === 'exercise' && <ExerciseRunner exercise={selectedExercise} onBack={() => setActiveScreen('menu')} />}
      {activeScreen === 'practice' && <PracticeSection onBack={() => setActiveScreen('menu')} />}
      <div className="fixed bottom-0 w-full text-center p-2 bg-white/80 text-gray-500 text-sm">
        כל הזכויות שמורות לאלגברה © {new Date().getFullYear()}
      </div>
    </div>
  );
}

const MainMenu = ({ onSelect, onPractice }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50/80 to-white/80">
    <h1 className="text-6xl font-extrabold text-blue-900 mb-4 tracking-tight">שוברים שברים</h1>
    <p className="text-2xl text-gray-600 mb-12 font-light">לומדים משוואות בקצב שלך</p>

    <div className="grid grid-cols-1 gap-6 w-full max-w-2xl mb-12">
      {LEARNING_EXERCISES.map((ex) => (
        <button 
          key={ex.id}
          onClick={() => onSelect(ex)}
          className="bg-white/90 hover:bg-blue-50/90 border-4 border-blue-200 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform flex items-center justify-between group"
        >
          <div className="text-right">
            <h3 className="text-3xl font-bold text-blue-800 group-hover:text-blue-600">{ex.name}</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-lg px-4 py-1 rounded-full mt-3 font-semibold">
              {ex.difficulty}
            </span>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
            <Play fill="white" size={32} />
          </div>
        </button>
      ))}
    </div>

    <button onClick={onPractice} className="text-2xl font-bold text-green-700 hover:text-green-800 bg-green-100/90 px-8 py-4 rounded-2xl hover:bg-green-200/90 transition-colors flex items-center gap-3">
        <BookOpen />
        מעבר לתרגול עצמאי (5 תרגילים + פתרונות)
    </button>
  </div>
);

const PracticeSection = ({ onBack }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-screen bg-white/80 p-8 pb-16">
            <button onClick={onBack} className="flex items-center gap-2 text-xl text-gray-600 font-bold mb-8 hover:bg-gray-100 p-3 rounded-xl w-fit">
                <ArrowRight /> חזרה לתפריט
            </button>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-100 pb-4">תרגול עצמאי מסכם</h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {PRACTICE_EXERCISES.map((ex, idx) => (
                    <div key={idx} className="border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-slate-50/90">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                             <div className="flex items-center gap-4 w-full md:w-auto">
                                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-none">{idx+1}</span>

                                {/* הצגת המשוואה באמצעות הרכיבים הגרפיים */}
                                <div className="flex items-center flex-wrap gap-1 dir-ltr" dir="ltr">
                                    {ex.equationParts.map((part, i) => (
                                        <div key={i}>
                                            {part.type === 'frac' && (
                                                <Fraction num={part.num} den={part.den} size="small" />
                                            )}
                                            {part.type === 'num' && (
                                                <span className="text-3xl font-bold mx-2 text-gray-800">{part.val}</span>
                                            )}
                                            {part.type === 'op' && (
                                                <MathSymbol char={part.char} size="small" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                             </div>

                             <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-2 rounded-xl font-bold transition-colors w-full md:w-auto whitespace-nowrap"
                             >
                                {openIndex === idx ? 'הסתר פתרון' : 'הצג פתרון מלא'}
                             </button>
                        </div>

                        {openIndex === idx && (
                            <div className="mt-6 bg-white/90 p-6 rounded-xl border border-blue-100 animate-in fade-in slide-in-from-top-2">
                                <h4 className="font-bold text-xl mb-4 text-blue-800 underline">דרך הפתרון:</h4>
                                <div className="space-y-3">
                                    {ex.solution.map((line, i) => (
                                        <div key={i} className="text-xl text-gray-700 border-b border-gray-50 pb-2 last:border-0">
                                            {/* שימוש ברכיב החדש לרינדור טקסט עם שברים ויזואליים */}
                                            <SolutionTextRenderer text={line} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                 <p className="text-2xl text-gray-500 font-bold">סיימתם הכל? אתם אלופים! 🏆</p>
            </div>
        </div>
    )
}

const ExerciseRunner = ({ exercise, onBack }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [subStepIndex, setSubStepIndex] = useState(0);
  const [linearStepIndex, setLinearStepIndex] = useState(0);
  const [equationState, setEquationState] = useState(exercise.initialEquation);
  const [multipliers, setMultipliers] = useState({});
  const [showResultRow, setShowResultRow] = useState(false);
  const [denominatorStatus, setDenominatorStatus] = useState('visible'); // visible, struck, hidden
  const [commonDenom, setCommonDenom] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("neutral");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showWholeNumberConvert, setShowWholeNumberConvert] = useState(false);

  const currentStep = exercise.steps[stepIndex];

  // פונקציית חזרה אחורה
  const handlePrev = () => {
    if (isProcessing) return;
    setFeedback("");
    setFeedbackType("neutral");
    setShowWholeNumberConvert(false);

    // אם אנחנו בשלב פתרון לינארי
    if (currentStep.type === 'solve_linear') {
        if (linearStepIndex > 0) {
            setLinearStepIndex(prev => prev - 1);
        } else {
            // חזרה לשלב האלימינציה (סוף)
            setStepIndex(prev => prev - 1);
            // צריך לוודא שהתצוגה נכונה
        }
        return;
    }

    // אם אנחנו בשלב המכפילים
    if (currentStep.type === 'multipliers') {
        if (subStepIndex > 0) {
            // מחיקת התשובה האחרונה
            const prevSub = currentStep.subSteps[subStepIndex - 1];
            if (prevSub) {
                setMultipliers(prev => {
                    const newM = { ...prev };
                    delete newM[prevSub.targetIdx];
                    return newM;
                });
            }
            setSubStepIndex(prev => prev - 1);
        } else {
            setStepIndex(prev => prev - 1);
        }
        return;
    }

    // ברירת מחדל לכל השאר
    if (stepIndex > 0) {
        setStepIndex(prev => prev - 1);
        setSubStepIndex(0); // איפוס תתי שלבים
    }
  };

  const handleNext = () => {
    if (isProcessing) return;

    setFeedback("");
    setFeedbackType("neutral");
    setShowWholeNumberConvert(false);

    if (currentStep.type === 'multipliers') {
       if (subStepIndex < currentStep.subSteps.length - 1) {
         setSubStepIndex(prev => prev + 1);
       } else {
         setStepIndex(prev => prev + 1);
         setSubStepIndex(0);
       }
    } else if (currentStep.type === 'solve_linear') {
        if (linearStepIndex < exercise.linearSteps.length - 1) {
            setLinearStepIndex(prev => prev + 1);
        } else {
            // End of exercise
        }
    } else {
      if (stepIndex < exercise.steps.length - 1) {
        setStepIndex(prev => prev + 1);
      }
    }
  };

  const handleSafeNext = (delay = 0) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTimeout(() => {
        handleNext();
        setIsProcessing(false);
    }, delay);
  }

  useEffect(() => {
    // ניהול מצבי תצוגה במעבר בין שלבים (גם אחורה)
    if (currentStep.type === 'intro' || currentStep.type === 'magic_one') {
        setDenominatorStatus('visible');
        setShowResultRow(false);
        if (currentStep.type === 'intro') {
          setEquationState(exercise.initialEquation);
        }
    }

    if (currentStep.type === 'multipliers') {
        setDenominatorStatus('visible');
        setShowResultRow(false);
    }

    if (currentStep.type === 'eliminate') {
      // 1. Strike through
      setTimeout(() => {
          setDenominatorStatus('struck');
      }, 500);

      // 2. Hide denominators
      setTimeout(() => {
          setDenominatorStatus('hidden');
      }, 3500);

      // 3. Show the new linear equation view
      setTimeout(() => {
        setShowResultRow(true);
      }, 4500);
    }

    if (currentStep.type === 'magic_one') {
      // 1. הצגת המספרים השלמים כמודגשים
      setShowWholeNumberConvert(true);

      // 2. המרה איטית לשברים עם מכנה 1
      const timeout = setTimeout(() => {
        const newEq = equationState.map(item => {
          if (item.type === 'num') {
            return { type: 'frac', num: item.val, den: 1, isWholeConverted: true };
          }
          return item;
        });
        setEquationState(newEq);
      }, 2000); // השהיה ארוכה יותר ל-2 שניות
      return () => clearTimeout(timeout);
    }

  }, [stepIndex, exercise.initialEquation, currentStep.type]);

  const renderCurrentAction = () => {
    if (!currentStep) return null;

    if (currentStep.type === 'solve_linear') {
        const linearStep = exercise.linearSteps[linearStepIndex];
        return (
            <div className="mt-6 w-full max-w-3xl mx-auto">
                <div className="bg-white/90 border-2 border-blue-100 rounded-2xl p-8 text-center shadow-lg relative">
                    {/* כפתור חזרה פנימי */}
                    {linearStepIndex > 0 && (
                        <button 
                            onClick={handlePrev}
                            className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
                            title="חזור שלב אחד אחורה"
                        >
                            <RotateCcw size={20} />
                        </button>
                    )}

                    <div className="text-5xl font-mono font-bold text-blue-800 mb-6 dir-ltr transition-all duration-1000" dir="ltr">
                        {linearStep?.eq}
                    </div>
                    <p className="text-2xl text-gray-700 mb-8 border-t pt-4 transition-opacity duration-500 animate-in fade-in">{linearStep?.desc}</p>

                    {linearStepIndex < exercise.linearSteps.length - 1 ? (
                        <div className="flex justify-center gap-4">
                            <button onClick={() => handleSafeNext(0)} className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-3 px-8 rounded-full shadow-lg">
                                לשלב הבא
                            </button>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold text-green-600 mb-4">כל הכבוד! סיימנו.</h3>
                            <button onClick={onBack} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto">
                                <RefreshCw /> חזרה לתפריט
                            </button>
                            <div className="mt-8 bg-blue-50 p-6 rounded-xl text-right">
                                <h4 className="font-bold underline text-lg mb-2">סיכום מה עשינו:</h4>
                                <ol className="list-decimal list-inside text-lg space-y-2">
                                    <li>מצאנו מכנה משותף ({exercise.commonDenom})</li>
                                    <li>כפלנו כל מונה ב"מה שחסר למכנה"</li>
                                    <li>קיבלנו משוואה רגילה ופתרנו אותה</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    switch (currentStep.type) {
      case 'intro':
      case 'magic_one':
        return (
          <div className="text-center animate-in fade-in zoom-in flex flex-col items-center gap-4">
            <div className="flex gap-4 mt-8">
                {stepIndex > 0 && (
                    <button 
                        onClick={handlePrev}
                        className="bg-gray-200 text-gray-700 text-2xl py-4 px-8 rounded-full shadow-md hover:bg-gray-300 font-bold flex items-center"
                    >
                        <ArrowRight size={24} />
                    </button>
                )}
                <button 
                  onClick={() => handleSafeNext(0)}
                  className="bg-blue-600 text-white text-2xl py-4 px-16 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-transform font-bold"
                >
                  הבנתי, המשך
                </button>
            </div>
          </div>
        );

      case 'find_cd':
        return (
          <div>
            <div className="grid grid-cols-2 gap-6 mt-8 max-w-lg mx-auto">
                {currentStep.options.map((opt, i) => (
                <button 
                    key={i}
                    disabled={isProcessing}
                    onClick={() => {
                    if (isProcessing) return;
                    setFeedback(opt.feedback);
                    setFeedbackType(opt.correct ? "success" : "error");
                    if (opt.correct) {
                        setCommonDenom(opt.val);
                        handleSafeNext(1500);
                    }
                    }}
                    className={`p-6 text-3xl border-2 border-blue-200 rounded-2xl transition-all bg-white/90 font-bold text-gray-700 shadow-sm ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50/90 hover:border-blue-500'}`}
                >
                    {opt.val}
                </button>
                ))}
            </div>
            <div className="mt-8 text-center">
                <button onClick={handlePrev} className="text-gray-500 hover:text-blue-600 font-bold flex items-center justify-center gap-2 mx-auto">
                    <ArrowRight /> חזור לשלב הקודם
                </button>
            </div>
          </div>
        );

      case 'multipliers':
        const sub = currentStep.subSteps && currentStep.subSteps[subStepIndex];
        if (!sub) return null; 

        return (
          <div className="mt-8 text-center bg-blue-50/90 p-6 rounded-2xl border border-blue-200 relative">
             <button 
                onClick={handlePrev} 
                className="absolute top-4 left-4 text-gray-400 hover:text-blue-600"
                title="חזור שאלה אחת אחורה"
             >
                <RotateCcw />
             </button>

            <p className="text-2xl mb-6 text-blue-900 font-bold">{sub.text}</p>
            <div className="flex justify-center gap-6">
              {[sub.ans, sub.ans + 1, sub.ans > 2 ? sub.ans - 2 : sub.ans + 3].sort(()=>Math.random()-0.5).map((val, i) => (
                <button
                  key={i}
                  disabled={isProcessing}
                  onClick={() => {
                    if (isProcessing) return;
                    if (val === sub.ans) {
                      setMultipliers(prev => ({...prev, [sub.targetIdx]: val}));
                      setFeedback("נכון! " + commonDenom + " לחלק ל" + (equationState[sub.targetIdx].den || 1) + " שווה " + val);
                      setFeedbackType("success");
                      handleSafeNext(1500);
                    } else {
                      setFeedback("לא בדיוק. נסה שוב לחלק את " + commonDenom + " במכנה.");
                      setFeedbackType("error");
                    }
                  }}
                  className={`w-20 h-20 rounded-2xl bg-white border-2 border-blue-300 text-3xl font-bold flex items-center justify-center shadow-lg transition-all ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 hover:text-white hover:border-transparent'}`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        );

      case 'eliminate':
        return (
          <div className="text-center mt-10 flex flex-col items-center gap-4">
             <button 
              onClick={() => handleSafeNext(0)}
              className={`bg-green-600 text-white text-2xl py-4 px-16 rounded-full shadow-xl hover:bg-green-700 hover:scale-105 transition-all font-bold ${!showResultRow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              בואו נפתור את זה! <ArrowLeft className="inline mr-2" />
            </button>
            <button onClick={handlePrev} className={`text-gray-500 hover:text-blue-600 font-bold flex items-center justify-center gap-2 ${!showResultRow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <ArrowRight /> חזור לבדיקת המכפילים
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden pb-8">
      {/* --- Sticky Header (The Equation) --- */}
      <div className="bg-white/90 border-b-4 border-blue-100 shadow-sm z-20 flex-none p-4 sticky top-0 pt-16">
        <div className="max-w-6xl mx-auto flex items-end justify-between min-h-[200px] relative">

            {/* כפתור חזרה */}
            <button onClick={onBack} className="absolute top-0 right-0 p-2 hover:bg-gray-100 rounded-full text-gray-500">
                <ArrowRight />
            </button>

            {/* תגית מכנה משותף */}
            {commonDenom && (
                <div className="absolute top-0 left-0 bg-yellow-100 border-2 border-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold text-xl animate-in slide-in-from-top-4 shadow-sm">
                    מכנה משותף: {commonDenom}
                </div>
            )}

            {/* אזור המשוואה המרכזי */}
            <div className="flex-1 flex items-end justify-center flex-wrap pb-4" dir="ltr">
              {equationState.map((item, idx) => (
                <div key={idx} className={`transition-all duration-700 px-2 ${showResultRow ? 'transform scale-125' : 'scale-110'}`}>
                    {item.type === 'frac' && (
                        <Fraction 
                            num={item.num} 
                            den={item.den} 
                            multiplier={multipliers[idx]} 
                            isResultRow={showResultRow}
                            denominatorStatus={denominatorStatus}
                            isWholeConverted={item.isWholeConverted}
                        />
                    )}
                    {item.type === 'num' && (
                        <div className={`text-6xl font-bold mx-2 mb-4 transition-colors duration-1000 ${showWholeNumberConvert ? 'text-blue-600 animate-pulse' : ''}`}>{item.val}</div>
                    )}
                    {item.type === 'op' && (
                        <div className="mb-4"><MathSymbol char={item.char} /></div>
                    )}
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-1 overflow-y-auto bg-slate-50/80 p-6">
        <div className="max-w-4xl mx-auto mt-4 pb-20">

            {currentStep && currentStep.type !== 'solve_linear' && (
                <div className="bg-white/90 p-10 rounded-[2rem] shadow-sm border border-slate-200 text-center relative overflow-hidden transition-all">
                    <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 px-6 py-3 rounded-bl-2xl font-bold text-xl">
                        שלב {stepIndex + 1}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-snug mt-6">
                        {currentStep.text}
                    </h2>

                    {feedback && (
                        <div className={`text-2xl font-bold mb-6 p-4 rounded-xl animate-pulse shadow-inner ${feedbackType === 'error' ? 'bg-red-50/90 text-red-600 border border-red-100' : 'bg-green-50/90 text-green-700 border border-green-100'}`}>
                            {feedback}
                        </div>
                    )}

                    {renderCurrentAction()}
                </div>
            )}

            {/* אם אנחנו בשלב הפתרון הלינארי - מציגים ישירות את הרכיב */}
            {currentStep && currentStep.type === 'solve_linear' && renderCurrentAction()}

            {/* טיפ ויזואלי למצב "חסר מכנה" */}
            {currentStep && currentStep.type === 'magic_one' && (
                <div className="mt-10 flex justify-center opacity-90 animate-bounce">
                    <div className="bg-yellow-50/90 border-2 border-yellow-300 px-8 py-4 rounded-full flex items-center gap-4 shadow-lg">
                        <Star className="text-yellow-500 fill-yellow-500 w-8 h-8" />
                        <span className="text-2xl font-bold text-yellow-800">טיפ: אין מכנה? נוסיף לו מכנה 1!</span>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
};