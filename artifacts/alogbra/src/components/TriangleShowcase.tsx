import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

type StepId =
  | "intro" | "meet" | "overlap"
  | "sss_explain" | "sss_show" | "sss_overlap"
  | "asa_explain" | "asa_show" | "asa_overlap"
  | "sas_explain" | "sas_show" | "sas_overlap"
  | "outro";

interface Step {
  id: StepId;
  title: React.ReactNode;
  caption?: React.ReactNode;
  duration: number;
}

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-black text-foreground bg-accent/15 px-1.5 rounded-md">{children}</span>
);

// Matching-pair colors
const RED    = "#ef4444";
const GREEN  = "#22c55e";
const BLUE   = "#3b82f6";
const ORANGE = "#f97316";
const PURPLE = "#a855f7";

const STEPS: Step[] = [
  { id: "intro",       title: "דוגמא לדברים שתמצאו אצלנו:",                                                                                                                    duration: 1800 },
  { id: "meet",        title: <><B>משולשים חופפים</B>. שמעתם על זה?</>,                                         caption: "יופי — בואו נבין מה זה באמת אומר.",                 duration: 2600 },
  { id: "overlap",     title: <> שני משולשים נקראים <B>חופפים</B> אם הם <B>מכסים אחד את השני בדיוק</B>.</>,   caption: "אותן צלעות, אותן זוויות — בלי שום הבדל.",           duration: 3800 },
  { id: "sss_explain", title: <> משפט <B>צ.צ.צ</B> — שלוש צלעות שוות.</>,                                      caption: <> אם <B>שלוש הצלעות</B> של △ABC שוות לשלוש הצלעות של △DEF — <B>הם חופפים</B>.</>, duration: 4200 },
  { id: "sss_show",    title: <> כל זוג צלעות מסומן ב<B>צבע אחר</B>.</>,                                        caption: "שלושה זוגות — שלושה צבעים. הסימנים מראים שוויון.",    duration: 3800 },
  { id: "sss_overlap", title: <> △ABC ≅ △DEF — <B>חפיפה מושלמת</B>!</>,                                        caption: "לפי משפט צ.צ.צ — ללא בדיקת זוויות.",                  duration: 3200 },
  { id: "asa_explain", title: <> משפט <B>ז.צ.ז</B> — זווית, צלע, זווית.</>,                                    caption: <><B>שתי זוויות</B> והצלע <B>שביניהן</B> שוות → חפיפה.</>, duration: 4200 },
  { id: "asa_show",    title: <> הצבעים מראים: <B>שתי זוויות</B> + ה<B>צלע שביניהן</B>.</>,                                                                                    duration: 3400 },
  { id: "asa_overlap", title: <> △ABC ≅ △DEF לפי <B>ז.צ.ז</B>.</>,                                                                                                            duration: 3000 },
  { id: "sas_explain", title: <> משפט <B>צ.ז.צ</B> — צלע, זווית, צלע.</>,                                     caption: <><B>שתי צלעות</B> והזווית <B>שביניהן</B> שוות → חפיפה.</>, duration: 4200 },
  { id: "sas_show",    title: <> <B>שתי הצלעות</B> בצבע, <B>הזווית שביניהן</B> בכתום.</>,                                                                                     duration: 3400 },
  { id: "sas_overlap", title: <> △ABC ≅ △DEF לפי <B>צ.ז.צ</B>.</>,                                                                                                            duration: 3000 },
  { id: "outro",       title: "נו? השתכנעתם?",                                                                  caption: "ככה לומדים אצלנו. רואים — לא משננים.",                duration: 3000 },
];

// Triangle vertex positions (in SVG coordinate space)
const P0 = { x: 110, y: 28 };  // top (A / D)
const P1 = { x: 194, y: 172 }; // bottom-right (B / E)
const P2 = { x: 26,  y: 172 }; // bottom-left  (C / F)

const SIDES = [
  [P0, P1], // side 0: AB / DE
  [P1, P2], // side 1: BC / EF
  [P2, P0], // side 2: CA / FD
] as const;

const ANGLE_CFGS = [
  { cx: P0.x, cy: P0.y, sa: 60,  ea: 120, r: 26 }, // angle at A/D
  { cx: P1.x, cy: P1.y, sa: 184, ea: 240, r: 26 }, // angle at B/E
  { cx: P2.x, cy: P2.y, sa: 300, ea: 356, r: 26 }, // angle at C/F
];

const AngleArc = ({ cx, cy, startAngle, endAngle, radius, color }: {
  cx: number; cy: number; startAngle: number; endAngle: number; radius: number; color: string;
}) => {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + radius * Math.cos(toRad(startAngle));
  const y1 = cy + radius * Math.sin(toRad(startAngle));
  const x2 = cx + radius * Math.cos(toRad(endAngle));
  const y2 = cy + radius * Math.sin(toRad(endAngle));
  return (
    <path
      d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
      fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round"
    />
  );
};

const TickMark = ({ p1, p2, count, color }: {
  p1: { x: number; y: number }; p2: { x: number; y: number }; count: number; color: string;
}) => {
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x; const dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len; const ny = dx / len;
  const size = 7; const gap = 5;
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

interface TriProps {
  fill: string; stroke: string;
  sideColors?: Record<number, string>;
  angleColors?: Record<number, string>;
  showTicks?: boolean;
  labels: [string, string, string];
}

const Triangle = ({ fill, stroke, sideColors = {}, angleColors = {}, showTicks = false, labels }: TriProps) => (
  <svg width="220" height="200" viewBox="-14 -20 248 212">
    {/* Base shape */}
    <path d={`M${P0.x},${P0.y} L${P1.x},${P1.y} L${P2.x},${P2.y} Z`} fill={fill} stroke={stroke} strokeWidth={2.5} strokeLinejoin="round" />
    {/* Highlighted sides */}
    {SIDES.map(([pa, pb], i) =>
      sideColors[i] ? <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={sideColors[i]} strokeWidth={6.5} strokeLinecap="round" /> : null
    )}
    {/* Angle arcs */}
    {ANGLE_CFGS.map((cfg, i) =>
      angleColors[i] ? <AngleArc key={i} cx={cfg.cx} cy={cfg.cy} startAngle={cfg.sa} endAngle={cfg.ea} radius={cfg.r} color={angleColors[i]} /> : null
    )}
    {/* Tick marks on sides */}
    {showTicks && <>
      <TickMark p1={P0} p2={P1} count={1} color={sideColors[0] ?? RED} />
      <TickMark p1={P1} p2={P2} count={2} color={sideColors[1] ?? GREEN} />
      <TickMark p1={P2} p2={P0} count={3} color={sideColors[2] ?? BLUE} />
    </>}
    {/* Vertex labels */}
    <text x={P0.x}      y={P0.y - 16} textAnchor="middle" fontSize="16" fontWeight="900" fill={stroke} fontFamily="system-ui, sans-serif">{labels[0]}</text>
    <text x={P1.x + 18} y={P1.y + 6}  textAnchor="middle" fontSize="16" fontWeight="900" fill={stroke} fontFamily="system-ui, sans-serif">{labels[1]}</text>
    <text x={P2.x - 18} y={P2.y + 6}  textAnchor="middle" fontSize="16" fontWeight="900" fill={stroke} fontFamily="system-ui, sans-serif">{labels[2]}</text>
  </svg>
);

type Legend = { color: string; label: string }[];

interface StepCfg {
  position: "hidden" | "split" | "overlap";
  leftProps:  Partial<TriProps>;
  rightProps: Partial<TriProps>;
  legend:     Legend;
  congruence: string | null;
}

const getStepCfg = (id: StepId): StepCfg => {
  const OVERLAP_IDS: StepId[] = ["overlap", "sss_overlap", "asa_overlap", "sas_overlap", "outro"];
  const position =
    id === "intro"                    ? "hidden"
    : OVERLAP_IDS.includes(id)        ? "overlap"
    : "split";

  let leftProps:  Partial<TriProps> = {};
  let rightProps: Partial<TriProps> = {};
  let legend:     Legend            = [];
  let congruence: string | null     = null;

  if (id === "sss_show" || id === "sss_overlap") {
    const sc = { 0: RED, 1: GREEN, 2: BLUE };
    leftProps  = { sideColors: sc, showTicks: true };
    rightProps = { sideColors: sc, showTicks: true };
    legend = [{ color: RED, label: "AB = DE" }, { color: GREEN, label: "BC = EF" }, { color: BLUE, label: "CA = FD" }];
    congruence = "△ABC ≅ △DEF  |  צ.צ.צ";
  } else if (id === "asa_show" || id === "asa_overlap") {
    const sc = { 1: GREEN }; const ac = { 1: ORANGE, 2: PURPLE };
    leftProps  = { sideColors: sc, angleColors: ac };
    rightProps = { sideColors: sc, angleColors: ac };
    legend = [{ color: ORANGE, label: "∠B = ∠E" }, { color: GREEN, label: "BC = EF" }, { color: PURPLE, label: "∠C = ∠F" }];
    congruence = "△ABC ≅ △DEF  |  ז.צ.ז";
  } else if (id === "sas_show" || id === "sas_overlap") {
    const sc = { 0: RED, 2: BLUE }; const ac = { 0: ORANGE };
    leftProps  = { sideColors: sc, angleColors: ac };
    rightProps = { sideColors: sc, angleColors: ac };
    legend = [{ color: RED, label: "AB = DE" }, { color: ORANGE, label: "∠A = ∠D" }, { color: BLUE, label: "CA = FD" }];
    congruence = "△ABC ≅ △DEF  |  צ.ז.צ";
  }

  return { position, leftProps, rightProps, legend, congruence };
};

const TriangleShowcase = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx];

  useEffect(() => {
    const t = setTimeout(() => setStepIdx((i) => (i + 1) % STEPS.length), step.duration);
    return () => clearTimeout(t);
  }, [stepIdx, step.duration]);

  const { position, leftProps, rightProps, legend, congruence } = getStepCfg(step.id);
  const theorem = step.id.startsWith("sss") ? "sss" : step.id.startsWith("asa") ? "asa" : step.id.startsWith("sas") ? "sas" : null;

  const leftFill   = "hsl(234 75% 35% / 0.10)"; const leftStroke  = "hsl(234 75% 35%)";
  const rightFill  = "hsl(0 84% 60% / 0.12)";   const rightStroke = "hsl(0 84% 60%)";

  return (
    <div className="relative max-w-5xl mx-auto" dir="rtl">
      <div className="relative rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        {/* Text */}
        <div className="relative px-6 md:px-10 pt-8 pb-3 text-center min-h-[140px] flex flex-col items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> דוגמא חיה
          </div>
          <h3 key={`t-${stepIdx}`} className="text-2xl md:text-4xl font-extrabold text-foreground leading-[1.2] tracking-tight max-w-3xl">
            {step.title}
          </h3>
          {step.caption && (
            <p key={`c-${stepIdx}`} className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {step.caption}
            </p>
          )}
          {congruence && (
            <div className="mt-1 px-5 py-2 rounded-full bg-foreground/8 border border-border text-base md:text-lg font-black tracking-wide" dir="ltr">
              {congruence}
            </div>
          )}
        </div>

        {/* Triangle stage */}
        <div className="relative h-[260px] md:h-[300px] flex items-center justify-center">
          {position !== "hidden" && (
            <>
              <div className="absolute transition-all duration-[850ms] ease-out"
                style={{ transform: position === "split" ? "translateX(-110px)" : "translateX(0)", filter: "drop-shadow(0 10px 24px hsl(234 75% 35% / 0.28))" }}>
                <Triangle fill={leftFill} stroke={leftStroke} labels={["A", "B", "C"]} {...leftProps} />
              </div>
              <div className="absolute transition-all duration-[850ms] ease-out"
                style={{ transform: position === "split" ? "translateX(110px)" : "translateX(0)", filter: "drop-shadow(0 10px 24px hsl(0 84% 60% / 0.28))", opacity: position === "overlap" ? 0.72 : 1 }}>
                <Triangle fill={rightFill} stroke={rightStroke} labels={["D", "E", "F"]} {...rightProps} />
              </div>
              {position === "overlap" && (
                <div className="absolute bottom-3 px-5 py-2 rounded-full bg-foreground text-background text-sm font-bold shadow-lg">
                  ✓ בדיוק אותו דבר — חופפים
                </div>
              )}
            </>
          )}
          {step.id === "intro" && (
            <div className="text-center flex flex-col items-center gap-4">
              <div className="flex gap-3 items-center">
                {[0, 1, 2].map((i) => <span key={i} className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}
              </div>
              <p className="text-muted-foreground text-sm">בעוד רגע מתחילים…</p>
            </div>
          )}
        </div>

        {/* Color legend */}
        {legend.length > 0 && (
          <div className="relative px-6 pb-3 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {legend.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm md:text-base font-bold">
                <div className="w-6 h-3 rounded-full" style={{ background: item.color }} />
                <span style={{ color: item.color }} dir="ltr">{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Theorem pills */}
        <div className="relative px-8 pb-6 pt-2 flex items-center justify-center gap-2 flex-wrap">
          {(["sss", "asa", "sas"] as const).map((s) => (
            <span key={s} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-400 ${theorem === s ? "bg-foreground text-background scale-110 shadow-lg" : "bg-secondary text-muted-foreground"}`}>
              {s === "sss" ? "צ.צ.צ" : s === "asa" ? "ז.צ.ז" : "צ.ז.צ"}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
          <div key={stepIdx} className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ animation: `showcaseProgress ${step.duration}ms linear forwards` }} />
        </div>
      </div>
      <style>{`@keyframes showcaseProgress { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
};

export default TriangleShowcase;
