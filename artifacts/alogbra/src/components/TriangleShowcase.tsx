import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

type StepId = "intro" | "meet" | "overlap" | "sss_explain" | "sss_show" | "sss_overlap" | "asa_explain" | "asa_show" | "asa_overlap" | "sas_explain" | "sas_show" | "sas_overlap" | "outro";

interface Step {
  id: StepId;
  title: React.ReactNode;
  caption?: React.ReactNode;
  duration: number;
}

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-black text-foreground bg-accent/15 px-1.5 rounded-md">{children}</span>
);

const STEPS: Step[] = [
  { id: "intro", title: "דוגמא לדברים שתמצאו אצלנו:", duration: 2800 },
  { id: "meet", title: <><B>משולשים חופפים</B>. שמעתם על זה?</>, caption: "יופי — בואו נבין מה זה באמת אומר.", duration: 4200 },
  { id: "overlap", title: <> שני משולשים נקראים <B>חופפים</B> אם הם <B>מכסים אחד את השני בדיוק</B>.</>, caption: "אותן צלעות, אותן זוויות — בלי שום הבדל.", duration: 5200 },
  { id: "sss_explain", title: <> משפט ראשון: <B>צ.צ.צ</B> — שלוש צלעות שוות.</>, caption: <> אם הצלחנו להראות ש<B>שלוש הצלעות</B> של משולש אחד שוות לשלוש הצלעות של השני — <B>הם חופפים ישר</B>. בלי לבדוק זוויות בכלל.</>, duration: 6500 },
  { id: "sss_show", title: <> רואים? אותן <B>שלוש צלעות</B> בדיוק.</>, caption: "כל סימן כזה  | , || , |||  אומר: 'הצלעות האלה שוות'.", duration: 4600 },
  { id: "sss_overlap", title: <> ועכשיו — בואו נראה ש<B>הם באמת חופפים</B>.</>, caption: "המשולש האדום מחליק על הכחול. בדיוק אותו דבר.", duration: 4800 },
  { id: "asa_explain", title: <> משפט שני: <B>ז.צ.ז</B> — זווית, צלע, זווית.</>, caption: <><B>שתי זוויות</B> והצלע <B>שביניהן</B> שוות → המשולשים חופפים.</>, duration: 5200 },
  { id: "asa_show", title: <> הסתכלו: <B>שתי הזוויות</B> וה<B>צלע שביניהן</B>.</>, duration: 3800 },
  { id: "asa_overlap", title: <>חופפים. <B>אותו דבר בדיוק.</B></>, duration: 4200 },
  { id: "sas_explain", title: <> משפט שלישי: <B>צ.ז.צ</B> — צלע, זווית, צלע.</>, caption: <><B>שתי צלעות</B> והזווית <B>שביניהן</B> שוות → המשולשים חופפים.</>, duration: 5200 },
  { id: "sas_show", title: <><B>שתי הצלעות</B> וה<B>זווית</B> שביניהן.</>, duration: 3800 },
  { id: "sas_overlap", title: <>שוב — <B>חפיפה מושלמת.</B></>, duration: 4200 },
  { id: "outro", title: "נו? השתכנעתם?", caption: "ככה לומדים אצלנו. רואים — לא משננים.", duration: 4200 },
];

const P0 = { x: 110, y: 22 };
const P1 = { x: 190, y: 168 };
const P2 = { x: 22, y: 168 };

const AngleArc = ({ cx, cy, startAngle, endAngle, radius, color }: { cx: number; cy: number; startAngle: number; endAngle: number; radius: number; color: string }) => {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + radius * Math.cos(toRad(startAngle));
  const y1 = cy + radius * Math.sin(toRad(startAngle));
  const x2 = cx + radius * Math.cos(toRad(endAngle));
  const y2 = cy + radius * Math.sin(toRad(endAngle));
  const largeArc = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  return <path d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" />;
};

const TickMark = ({ p1, p2, count, color }: { p1: { x: number; y: number }; p2: { x: number; y: number }; count: number; color: string }) => {
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len;
  const ny = dx / len;
  const size = 7;
  const gap = 5;
  const start = -((count - 1) * gap) / 2;
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const off = start + i * gap;
        const cx = midX + (dx / len) * off * 0.5;
        const cy = midY + (dy / len) * off * 0.5;
        return <line key={i} x1={cx - nx * size} y1={cy - ny * size} x2={cx + nx * size} y2={cy + ny * size} stroke={color} strokeWidth={3} strokeLinecap="round" />;
      })}
    </g>
  );
};

const Triangle = ({ fill, stroke, highlightSides = [], highlightAngles = [], showTicks = false }: { fill: string; stroke: string; highlightSides?: number[]; highlightAngles?: number[]; showTicks?: boolean }) => {
  const sideColor = "hsl(var(--accent))";
  const angleColor = "#f59e0b";
  return (
    <svg width="210" height="190" viewBox="0 0 210 190">
      <path d={`M${P0.x},${P0.y} L${P1.x},${P1.y} L${P2.x},${P2.y} Z`} fill={fill} stroke={stroke} strokeWidth={3} strokeLinejoin="round" />
      {highlightSides.includes(0) && <line x1={P0.x} y1={P0.y} x2={P1.x} y2={P1.y} stroke={sideColor} strokeWidth={6} strokeLinecap="round" />}
      {highlightSides.includes(1) && <line x1={P1.x} y1={P1.y} x2={P2.x} y2={P2.y} stroke={sideColor} strokeWidth={6} strokeLinecap="round" />}
      {highlightSides.includes(2) && <line x1={P2.x} y1={P2.y} x2={P0.x} y2={P0.y} stroke={sideColor} strokeWidth={6} strokeLinecap="round" />}
      {highlightAngles.includes(0) && <AngleArc cx={P0.x} cy={P0.y} startAngle={62} endAngle={118} radius={26} color={angleColor} />}
      {highlightAngles.includes(1) && <AngleArc cx={P1.x} cy={P1.y} startAngle={182} endAngle={242} radius={26} color={angleColor} />}
      {highlightAngles.includes(2) && <AngleArc cx={P2.x} cy={P2.y} startAngle={302} endAngle={358} radius={26} color={angleColor} />}
      {showTicks && (
        <>
          <TickMark p1={P0} p2={P1} count={1} color="hsl(var(--foreground))" />
          <TickMark p1={P1} p2={P2} count={2} color="hsl(var(--foreground))" />
          <TickMark p1={P2} p2={P0} count={3} color="hsl(var(--foreground))" />
        </>
      )}
    </svg>
  );
};

const stepConfig = (id: StepId) => {
  let position: "hidden" | "split" | "overlap" = "split";
  if (id === "intro") position = "hidden";
  else if (id === "overlap" || id === "sss_overlap" || id === "asa_overlap" || id === "sas_overlap" || id === "outro") position = "overlap";
  let props: { highlightSides?: number[]; highlightAngles?: number[]; showTicks?: boolean } = {};
  if (id === "sss_show" || id === "sss_overlap") props = { showTicks: true, highlightSides: [0, 1, 2] };
  else if (id === "asa_show" || id === "asa_overlap") props = { highlightSides: [1], highlightAngles: [1, 2] };
  else if (id === "sas_show" || id === "sas_overlap") props = { highlightSides: [0, 2], highlightAngles: [0] };
  return { position, props };
};

const currentTheorem = (id: StepId): "sss" | "asa" | "sas" | null => {
  if (id.startsWith("sss")) return "sss";
  if (id.startsWith("asa")) return "asa";
  if (id.startsWith("sas")) return "sas";
  return null;
};

const TriangleShowcase = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx];
  useEffect(() => {
    const t = setTimeout(() => setStepIdx((i) => (i + 1) % STEPS.length), step.duration);
    return () => clearTimeout(t);
  }, [stepIdx, step.duration]);
  const { position, props } = stepConfig(step.id);
  const theorem = currentTheorem(step.id);
  return (
    <div className="relative max-w-5xl mx-auto" dir="rtl">
      <div className="relative rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />
        <div className="relative px-6 md:px-10 pt-10 pb-4 text-center min-h-[180px] flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            דוגמא חיה
          </div>
          <h3 key={`title-${stepIdx}`} className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight max-w-3xl transition-all">{step.title}</h3>
          {step.caption && <p key={`cap-${stepIdx}`} className="text-lg md:text-2xl text-muted-foreground mt-4 max-w-3xl leading-relaxed">{step.caption}</p>}
        </div>
        <div className="relative h-[320px] md:h-[360px] flex items-center justify-center">
          {position !== "hidden" && (
            <>
              <div className="absolute transition-all duration-[1100ms] ease-out" style={{ transform: position === "split" ? "translateX(-150px)" : "translateX(0)", filter: "drop-shadow(0 12px 30px hsl(234 75% 35% / 0.25))" }}>
                <Triangle fill="hsl(234 75% 35% / 0.10)" stroke="hsl(234 75% 35%)" {...props} />
              </div>
              <div className="absolute transition-all duration-[1100ms] ease-out" style={{ transform: position === "split" ? "translateX(150px)" : "translateX(0)", filter: "drop-shadow(0 12px 30px hsl(0 84% 60% / 0.28))", opacity: position === "overlap" ? 0.75 : 1 }}>
                <Triangle fill="hsl(0 84% 60% / 0.12)" stroke="hsl(0 84% 60%)" {...props} />
              </div>
              {position === "overlap" && (
                <div className="absolute bottom-3 px-5 py-2 rounded-full bg-foreground text-background text-base font-bold shadow-lg">✓ בדיוק אותו דבר — חופפים</div>
              )}
            </>
          )}
          {step.id === "intro" && (
            <div key="intro-vis" className="text-center flex flex-col items-center gap-4">
              <div className="flex gap-3 items-end">
                {[0, 1, 2].map((i) => <span key={i} className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}
              </div>
              <p className="text-muted-foreground text-base">בעוד רגע מתחילים…</p>
            </div>
          )}
        </div>
        <div className="relative px-8 pb-7 pt-2 flex items-center justify-center gap-2 flex-wrap">
          {(["sss", "asa", "sas"] as const).map((s) => (
            <span key={s} className={`px-5 py-2 rounded-full text-base font-bold transition-all duration-500 ${theorem === s ? "bg-foreground text-background scale-110 shadow-lg" : "bg-secondary text-muted-foreground"}`}>
              {s === "sss" && "צ.צ.צ"}{s === "asa" && "ז.צ.ז"}{s === "sas" && "צ.ז.צ"}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
          <div key={stepIdx} className="h-full bg-gradient-to-r from-primary to-accent" style={{ animation: `showcaseProgress ${step.duration}ms linear forwards` }} />
        </div>
      </div>
      <style>{`@keyframes showcaseProgress { from { width: 0%; } to { width: 100%; } }`}</style>
    </div>
  );
};

export default TriangleShowcase;
