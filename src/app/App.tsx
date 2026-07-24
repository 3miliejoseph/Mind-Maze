import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ParticleBrain from "../components/ParticleBrain";
import "../shaders/ParticleMaterial";

const NAV_ITEMS = [
  { id: "idea", label: "IDEA", number: "01" },
  { id: "matrix", label: "EXPERIENCE", number: "02" },
  { id: "spectrum", label: "LOOK & FEEL", number: "03" },
  { id: "craft", label: "APPROACH", number: "04" },
  { id: "timeline", label: "TIMELINE", number: "05" },
  { id: "result", label: "RESULT", number: "06" },
];

const EMOTIONS = [
  {
    name: "JOY",
    metric: "Sun-drenched golden yellows, warm festive reds, and vibrant street-art primary tones.",
    visual: "A high-energy, open-air gathering space featuring spinning disco ball reflections, sidewalk chalk smiley faces, textured street-mural walls, and confetti drifting through warm party light.",
    audio: "Vibrant, upbeat street music featuring live conga rhythms, brass overtones, and ambient open-air crowd warmth in a bright C major key.",
    glow: "#E8C414",
    accent: "#FFE040",
  },
  {
    name: "ENVY",
    metric: "Saturated magazine-print color pop, high-contrast greens, and sterile, clinical whites.",
    visual: "A claustrophobic gallery of pop-art tears, plastic-wrapped meat trays, magazine cutouts, cosmetic surgical markings, and glowing social media feed mirrors.",
    audio: "Glitchy, stuttering notification chimes layered over synthetic, over-compressed pop synth loops that warp out of pitch.",
    glow: "#0F6642",
    accent: "#1A9960",
  },
  {
    name: "GREED",
    metric: "Oxidized gold, blood-splattered currency greens, and corroded brass.",
    visual: "A surreal banquet room filled with animal-masked figures around an overindulgent feast, dripping cracked crowns, melting green faces on dollar bills, and towering stacks of money strings.",
    audio: "Low, suffocating metallic drone beneath the muffled echo of a cheering crowd and the rhythmic, aggressive clinking of heavy coins.",
    glow: "#7A6000",
    accent: "#A88200",
  },
  {
    name: "ANGER",
    metric: "Visceral, oversaturated crimson, fiery raw oranges, and heavy black ink-drawn outlines.",
    visual: "An intense, cavernous space enclosed by tangled webs of red thread, screaming visceral face motifs, and raw painted textures that turn mouth thresholds into physical pathways.",
    audio: "Aggressive, distorted bass heavy hums punctuated by harsh percussive hits, visceral breathing, and raw industrial feedback.",
    glow: "#E63946",
    accent: "#FF5566",
  },
  {
    name: "FEAR",
    metric: "High-contrast monochrome, ink-washed blacks, and stark glowing neon whites.",
    visual: "A shadowy, industrial hall defined by hypnotizing optical line-vortices, glowing 'THE UNKNOWN' signage, silhouetted figures with piercing white eyes, and looming gallery walls.",
    audio: "Deep subliminal infrasound pulses, tense room static, and unpredictable, high-pitched mechanical white noise with no melody.",
    glow: "#8B2FC9",
    accent: "#C084FC",
  },
  {
    name: "SADNESS",
    metric: "Deep oceanic blues, solitary indigo, chalk-gray, and translucent, shadowy neutrals.",
    visual: "A vast underwater abyss and chalk-outlined isolation cell, featuring silhouetted figures trapped behind sheer hanging drapes and solitary figures sinking into deep light rays.",
    audio: "Muffled underwater sub-bass drones paired with slow, isolated cello notes decaying into vast, empty room reverb.",
    glow: "#2D6BE4",
    accent: "#5B9FFF",
  },
  {
    name: "NOSTALGIA",
    metric: "Faded retro pastels, rainbow prism light, and warm glowing CRT phosphor blues and purples.",
    visual: "An overgrown indoor garden filled with stacked vintage CRT televisions, scattered birthday candles, sidewalk chalk drawings, old media logos, and face stickers bathed in rainbow light.",
    audio: "Soft vinyl needle crackle, distant film projector whirrs, and warm, warbling lo-fi music box melodies echoing through time.",
    glow: "#00BCD4",
    accent: "#00E8FF",
  },
  {
    name: "LOVE",
    metric: "Radiating amber glass, glowing aura teals, warm crimson, and soft cloud whites.",
    visual: "A luminous, sanctuary-like hall filled with glowing glass chihuly-style organic forms, interactive heart-shaped collage walls covered in handwritten notes, and central radiating light figures.",
    audio: "Lush, sweeping orchestral string swells layered with a soft, steady breathing rhythm LFO that pulses warmly through the room.",
    glow: "#E8608A",
    accent: "#FF8FAB",
  },
  {
    name: "HOPE",
    metric: "Warm canopy greens, golden hour sunlight, and deep oceanic blues contrasted with classical gallery warm tones.",
    visual: "An expansive space bridging a golden sunlit forest, classic art gallery walls lined with sunflowers, joined hands, and a giant curved horizon showing a unified global community.",
    audio: "Light, airy solo piano arpeggios floating over subtle, sustained warmth. Pure sine harmonics with an extended, delicate decay.",
    glow: "#D9BF88",
    accent: "#F2E4BC",
  },
];

function BrainCanvas() {
  return (
    <div
      className="relative w-full h-full"
      style={{
        background: "linear-gradient(160deg, #0d0d0d 0%, #0a0a0a 60%, #0c0a0d 100%)",
        borderLeft: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 247.5], fov: 45 }} style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={null}>
          <ParticleBrain />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

interface Emotion {
  name: string;
  metric: string;
  visual: string;
  audio: string;
  glow: string;
  accent: string;
}

function MoodboardModal({ emotion, onClose }: { emotion: Emotion; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/92 backdrop-blur-md"
    >
      {/* Modal container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1200px] h-[85vh] md:h-[68vh] grid grid-cols-1 md:grid-cols-[1fr_280px] overflow-hidden bg-[#0d0d0d] border"
        style={{
          borderColor: `${emotion.glow}25`,
        }}
      >
        {/* Image panel */}
        <div
          className="relative bg-[#0d0d0d] flex items-center justify-center overflow-hidden h-[45vh] md:h-full border-b md:border-b-0 md:border-r"
          style={{
            borderBottomColor: `${emotion.glow}20`,
            borderRightColor: `${emotion.glow}20`,
          }}
        >
          <img
            src={`/Moodboards/${emotion.name.charAt(0) + emotion.name.slice(1).toLowerCase()}.png`}
            alt={`${emotion.name} moodboard`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right sidebar */}
        <div
          className="flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0a] overflow-y-auto h-[40vh] md:h-full"
        >
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              Look &amp; Feel
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "42px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: emotion.accent,
              marginBottom: "28px",
            }}>
              {emotion.name}
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.39)", textTransform: "uppercase", marginBottom: "6px" }}>
                Color &amp; Texture
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.8, color: "rgba(240,238,232,0.54)" }}>
                {emotion.metric}
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", marginBottom: "20px" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.39)", textTransform: "uppercase", marginBottom: "6px" }}>
                Environment
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.8, color: "rgba(240,238,232,0.54)" }}>
                {emotion.visual}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.51)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.25em",
              padding: "12px",
              cursor: "pointer",
              textTransform: "uppercase",
              width: "100%",
              marginTop: "auto",
            }}
          >
            ESC / Close
          </button>
        </div>
      </div>
    </div>
  );
}

function EmotionCard({ emotion, onOpen, isActive }: { emotion: Emotion; onOpen: () => void; isActive?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const showActive = hovered || isActive;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{
        border: `1px solid ${showActive ? emotion.glow + "50" : "rgba(255,255,255,0.06)"}`,
        padding: "28px",
        cursor: "pointer",
        transform: showActive ? "scale(1.015)" : "scale(1)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: showActive
          ? `0 0 48px ${emotion.glow}18, inset 0 0 60px ${emotion.glow}05`
          : "none",
        background: showActive
          ? `linear-gradient(140deg, ${emotion.glow}07 0%, transparent 70%)`
          : "transparent",
        height: "100%",
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "48px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            color: showActive ? emotion.accent : "rgba(240,238,232,0.74)",
            transition: "color 0.35s",
          }}
        >
          {emotion.name}
        </p>
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: emotion.glow,
            opacity: showActive ? 1 : 0.18,
            transition: "opacity 0.35s",
            marginTop: 10,
            flexShrink: 0,
          }}
        />
      </div>

      <div className="space-y-5">
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.39)",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Color & Texture
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(240,238,232,0.49)",
            }}
          >
            {emotion.metric}
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.39)",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Environment
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(240,238,232,0.49)",
            }}
          >
            {emotion.visual}
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.39)",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Audio
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(240,238,232,0.42)",
              fontStyle: "italic",
            }}
          >
            {emotion.audio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openEmotion, setOpenEmotion] = useState<Emotion | null>(null);
  const [activeEmotionIndex, setActiveEmotionIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const width = container.offsetWidth;
    if (width === 0) return;
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDiff = Infinity;
    const containerCenter = container.scrollLeft + width / 2;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    });
    setActiveEmotionIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const targetScroll =
        children[index].offsetLeft -
        (container.offsetWidth - children[index].offsetWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        background: "transparent",
        behavior: "smooth",
      } as any);
      setActiveEmotionIndex(index);
    }
  };

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "hero") {
              setActiveSection(null);
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    
    // Observe nav sections
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    
    // Observe hero section to clear active state
    const heroEl = document.querySelector("section");
    if (heroEl) {
      heroEl.id = "hero";
      observer.observe(heroEl);
    }
    
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {/* ── Fixed Left Navigation ── */}
      <nav
        className="fixed left-0 bottom-0 w-full h-[56px] z-50 flex flex-row items-center justify-around border-t border-white/5 bg-[rgba(10,10,10,0.92)] backdrop-blur-md lg:bottom-auto lg:top-0 lg:h-full lg:w-[68px] lg:flex-col lg:justify-center lg:border-r lg:border-t-0"
      >
        <div className="flex flex-row lg:flex-col items-center justify-around lg:justify-center w-full lg:w-auto gap-4 lg:gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex flex-col items-center gap-1.5 group"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: isActive ? "rgba(255,255,255,0.51)" : "rgba(255,255,255,0.36)",
                    transition: "color 0.3s",
                  }}
                >
                  {item.number}
                </span>
                <span
                  className="hidden lg:inline"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.39)",
                    transition: "color 0.3s",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {item.label}
                </span>
                <div
                  className="hidden lg:block"
                  style={{
                    width: 1,
                    height: isActive ? 18 : 0,
                    background: "rgba(255,255,255,0.25)",
                    transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    marginTop: 2,
                  }}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="ml-0 pb-[56px] lg:ml-[68px] lg:pb-0">

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section
          className="grid grid-cols-1 lg:grid-cols-[1fr_3.5fr]"
          style={{
            minHeight: "100vh",
          }}
        >
          {/* Left: Title block */}
          <div
            className="flex flex-col pl-6 pr-6 pt-12 pb-12 lg:pl-16 lg:pr-12 lg:pt-8 lg:pb-12 border-b lg:border-b-0 lg:border-r order-2 lg:order-1"
            style={{ 
              borderColor: "rgba(255,255,255,0.05)",
            }}
          >
            {/* Top metadata */}
            <div className="flex items-center gap-3 mb-4 lg:mb-2">
              <div
                style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.4em",
                  color: "rgba(255,255,255,1)",
                  textTransform: "uppercase",
                }}
              >
                Flow Sessions — Pitch Deck 2026
              </span>
            </div>

            {/* Main title group */}
            <div className="flex-1 flex flex-col justify-center">
              <h1
                style={{
                  fontFamily: "'Rammetto One', cursive",
                  fontSize: "clamp(80px, 11vw, 152px)",
                  fontWeight: 400,
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: "#F0EEE8",
                  textTransform: "uppercase",
                  marginBottom: "2.5rem",
                }}
              >
                MIND
                <br />
                MAZE
              </h1>

              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "rgba(240,238,232,0.54)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  maxWidth: "440px",
                  lineHeight: 1.5,
                }}
              >
                Human Emotion in an Artistic Digital Space
              </p>

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: "rgba(240,238,232,0.46)",
                  marginBottom: "3rem",
                }}
              >
                By: Emilie Joseph
              </p>

              <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.12)", marginBottom: "2rem" }} />

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "15px",
                  lineHeight: 1.95,
                  color: "rgba(240,238,232,0.54)",
                  maxWidth: "500px",
                }}
              >
                A browser-based art installation that lets anyone walk door-by-door
                through nine cinematic rooms, each built around a different emotion.
                An interactive art experience, direct from your device — no ticket, no
                travel, no barrier to entry.
              </p>

            </div>

          </div>

          {/* Right: BrainCanvas placeholder */}
          <div className="flex flex-col h-auto lg:h-auto lg:min-h-screen order-1 lg:order-2">
            <div className="h-[58vh] lg:h-full lg:flex-1">
              <BrainCanvas />
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SECTION 01 — IDEA ═══════════════════════ */}
        <section
          id="idea"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t"
          style={{ borderTopColor: "rgba(255,255,255,0.05)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Section header */}
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 01
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  The Idea &amp; Mission
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Two-column editorial body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.35em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  The Idea
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "15px",
                    lineHeight: 2,
                    color: "rgba(240,238,232,0.69)",
                  }}
                >
                  Mind Maze is a browser-based installation where anyone in the world
                  can walk door-by-door through nine emotional environments synthesized
                  directly from how real people describe those feelings, requiring no
                  ticket, no travel, just a device and a willingness to look inward.
                </p>

                {/* Placeholder images */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "48px" }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      overflow: "hidden",
                      display: "inline-block",
                      maxWidth: "280px",
                      width: "100%",
                    }}
                  >
                    <img 
                       src="/vertical.avif" 
                      alt="Vertical moodboard image" 
                      style={{ display: "block", maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="ml-0 md:ml-10"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      overflow: "hidden",
                      display: "inline-block",
                      maxWidth: "440px",
                      width: "100%",
                    }}
                  >
                    <img 
                       src="/horizontal.png" 
                      alt="Horizontal moodboard image" 
                      style={{ display: "block", maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.35em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  The Mission
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "15px",
                    lineHeight: 2,
                    color: "rgba(240,238,232,0.69)",
                    marginBottom: "1.5rem",
                  }}
                >
                  This project was inspired by the Hospital of Emotions exhibition in Los
                  Angeles, an installation I followed closely through social media but was
                  never able to experience firsthand. Not living in LA, every time I watched
                  someone else's video of walking through those rooms, I felt the exact gap
                  this project is built to close. Being surrounded by a feeling instead of
                  just reading about it is what makes that kind of art powerful — and right
                  now, that experience is only available to people who live nearby or can
                  afford to travel.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "15px",
                    lineHeight: 2,
                    color: "rgba(240,238,232,0.69)",
                    marginBottom: "1.5rem",
                  }}
                >
                  The original physical exhibition assembled a different artist for each
                  room, bringing individual perspectives together in one venue. Mind Maze
                  takes that same structure and opens it up to the community instead.
                  Rather than one artist's interpretation of an emotion, each room is built
                  from collective, anonymous human voices — real people describing what an
                  emotion actually feels like to them, sourced from psychology research and
                  unfiltered community language. All source material is used in aggregate
                  and anonymized; no individual post, comment, or person is ever quoted or
                  identifiable in the final work.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "15px",
                    lineHeight: 2,
                    color: "rgba(240,238,232,0.69)",
                  }}
                >
                  Google Flow takes that research and turns it into the actual environments —
                  the lighting, the atmosphere, the motion of each room. The community
                  shares how they experience a feeling, Flow helps build that into something
                  you can walk through, and the finished piece goes back online for free,
                  open to anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SECTION 02 — MATRIX ═══════════════════════ */}
        <section
          id="matrix"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t bg-[#0c0c0c]"
          style={{
            borderTopColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 02
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  The Visitor Experience
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Scientific essay — sidebar label + body */}
            <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-6 md:gap-12">
              <div className="pb-4 md:pb-0 border-b border-white/5 md:border-b-0">
                <span
                  className="block md:vertical-text"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.36)",
                    textTransform: "uppercase",
                  }}
                >
                  The Journey
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
                {[
                  {
                    num: "§ 1",
                    title: "A First-Person Walkthrough",
                    body: "Mind Maze is a first-person walkthrough visitors experience directly in their browser. The landing page opens on the central brain hub — a 3D pink brain rendered as the site's entry point, with a single door marked 'Enter' at its threshold. Visitors begin by clicking that door, which plays the first video: a first-person shot walking through the threshold into Joy.",
                  },
                  {
                    num: "§ 2",
                    title: "Nine Rooms. One Emotional Journey.",
                    body: (
                      <>
                        The journey moves through the following sequence: <span style={{ color: "#fcd8f7" }}>[Brain Hub Launch Pad]</span> → 
                        <span style={{ color: "#FFE040" }}> Joy </span> → 
                        <span style={{ color: "#1A9960" }}> Envy </span> → 
                        <span style={{ color: "#A88200" }}> Greed </span> → 
                        <span style={{ color: "#FF5566" }}> Anger </span> → 
                        <span style={{ color: "#C084FC" }}> Fear </span> → 
                        <span style={{ color: "#5B9FFF" }}> Sadness </span> → 
                        <span style={{ color: "#00E8FF" }}> Nostalgia </span> → 
                        <span style={{ color: "#FF8FAB" }}> Love </span> → 
                        <span style={{ color: "#F2E4BC" }}> Hope </span>. Each room combines intentional click interactions with scroll-driven spatial movement. Visitors begin by clicking an emotion's door to step across the threshold. Once inside, they physically drive their camera movement through the room using their trackpad or scroll wheel—scrolling forward advances through the space, while scrolling upward reverses the path. Upon reaching the end of the room, the camera comes to rest at the next emotion's door, where a single click opens the threshold and begins the next room.
                      </>
                    ),
                  },
                  {
                    num: "§ 3",
                    title: "A Navigable Emotional Arc",
                    body: "The progression tracks the escalation, collapse, and eventual healing of the human psyche. Joy establishes the light baseline. Envy, Greed, and Anger escalate wanting into frustration. Fear tips that tension into raw vulnerability. Sadness forms the quiet, rock-bottom floor of the experience, which immediately triggers Nostalgia — the mind's natural retreat into past warmth as a coping mechanism. This memory of safety acts as the bridge that allows the visitor to risk opening up to Love, before finally exiting into the expansive warmth of Hope. A visual node map remains accessible at the brain hub, laying out this order clearly so the entire journey reads as navigable and intentional from the first moment.",
                  },
                  {
                    num: "§ 4",
                    title: "The Closing Wall",
                    body: "Every room in Mind Maze is built from the community's language — real words from research and public discourse. The Closing Wall is where that goes both ways. After Hope, visitors reach a shared wall where they can leave one word, a short phrase, or a quick drawing describing how they're feeling, or which room resonated most. It joins everyone else's response on the same wall, so what visitors take in from the community on the way through, they add back to on the way out.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "48px 1fr",
                      gap: "32px",
                      paddingBottom: "56px",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.18)",
                        paddingTop: "4px",
                      }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "19px",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "rgba(240,238,232,0.6)",
                          marginBottom: "16px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "15px",
                          lineHeight: 2,
                          color: "rgba(240,238,232,0.38)",
                        }}
                      >
                        {item.body as React.ReactNode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SECTION 03 — SPECTRUM ═══════════════════════ */}
        <section
          id="spectrum"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t"
          style={{ borderTopColor: "rgba(255,255,255,0.05)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 03
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  Look &amp; Feel
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Visual strategy note */}
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "15px",
              lineHeight: 2,
              color: "rgba(240,238,232,0.54)",
              maxWidth: "1200px",
              marginBottom: "48px",
            }}>
              Each room is its own cinematic space, built from real sensory language people use to describe that emotion.
              The visual style across the walkthrough comes from a dedicated moodboard for each room, locking in the lighting, tone, and composition before generation starts.
            </p>

            {/* Moodboard masonry grid / Carousel */}
            <div className="relative">
              {/* Left Navigation Arrow */}
              {activeEmotionIndex > 0 && (
                <button
                  onClick={() => scrollToIndex(activeEmotionIndex - 1)}
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white/40 active:text-white md:hidden"
                  aria-label="Previous room"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}
              
              {/* Right Navigation Arrow */}
              {activeEmotionIndex < EMOTIONS.length - 1 && (
                <button
                  onClick={() => scrollToIndex(activeEmotionIndex + 1)}
                  className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-white/40 active:text-white md:hidden"
                  aria-label="Next room"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}

              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 snap-x snap-mandatory pt-4 pb-6 md:py-0"
              >
                {EMOTIONS.map((emotion, index) => (
                  <div
                    key={emotion.name}
                    className="w-full px-4 flex-shrink-0 snap-center h-[480px] md:h-auto md:px-0 md:w-auto md:max-w-none md:flex-shrink"
                  >
                    <EmotionCard 
                      emotion={emotion} 
                      onOpen={() => setOpenEmotion(emotion)} 
                      isActive={index === activeEmotionIndex}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex md:hidden justify-center items-center gap-2.5 mt-6">
                {EMOTIONS.map((emotion, idx) => (
                  <button
                    key={emotion.name}
                    onClick={() => scrollToIndex(idx)}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: idx === activeEmotionIndex ? emotion.glow : "rgba(255,255,255,0.18)",
                      transform: idx === activeEmotionIndex ? "scale(1.2)" : "scale(1)",
                    }}
                    aria-label={`Go to room ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SECTION 04 — CRAFT ═══════════════════════ */}
        <section
          id="craft"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t bg-[#0c0c0c]"
          style={{
            borderTopColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 04
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  Craft Approach
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Craft sections */}
            <div style={{ display: "flex", flexDirection: "column" }}>

              {/* 01 */}
              {[
                {
                  index: "01",
                  title: "Why AI is the Right Medium",
                  body: "Nine rooms means nine distinct emotional environments, each built from how real people describe that feeling rather than my own interpretation alone. Building that by hand in traditional 3D software isn't realistic in six weeks — each room would take weeks on its own, and I'd be working from a single point of view rather than the range of descriptions I'm pulling from research and community language. Flow solves two specific problems: it can generate a full environment — lighting, atmosphere, motion — directly from that source material, and its batch tools let me apply the same adjustment across all nine rooms at once instead of redoing each one by hand. That's what makes nine consistent, cohesive rooms feasible within six weeks — especially with the cohort's tool workshops and 1:1 mentor office hours to work through the harder technical problems as they come up.",
                  bullets: null,
                },
                {
                  index: "02",
                  title: "The Toolkit & Pipeline",
                  body: null,
                  bullets: [
                    { label: "Data Synthesis", text: "I map and organize hundreds of raw community descriptions and psychological research data points using custom workspaces to establish the foundational prompt architecture." },
                    { label: "Visual Curation", text: "Before touching generative software, I translate this research into dedicated, curated moodboards for each room to lock down the exact lighting, environmental tone, and structural props." },
                    { label: "Google Flow & Veo Production", text: "The finalized moodboards and community scripts are fed into Flow to batch-produce the cinematic spatial segments." },
                  ],
                },
                {
                  index: "03",
                  title: "WebGL Frontend Engine",
                  body: null,
                  bullets: [
                    { label: "Sequential Cinematic Playback", text: "Each room's Flow-generated video plays as a standard HTML5 <video> element within the browser interface — a directed shot the visitor watches, not a space they freely look around in. The camera movement is entirely pre-baked into the video itself." },
                    { label: "Cursor Parallax", text: "As the visitor moves their mouse or trackpad, the video subtly shifts and crops in that direction — a lightweight 2.5D effect layered on top of playback. It doesn't allow a full look-around, but it gives the room a real sense of physical presence, so the space feels responsive to the visitor rather than purely passive." },
                    { label: "Scroll-Scrubbed Video Engine", text: "Inside each room, the Google Flow video is mapped directly to the browser's scroll timeline using optimized HTML5 canvas scrubbing. As the visitor scrolls, the engine updates the video frame-by-frame, giving the user complete, tactile control over their movement and pacing through the space." },
                    { label: "Interactive Door Triggers & Threshold Transitions", text: "Each room ends on a rest frame focusing on the exit door. An interactive click-target overlaid on the door unlocks the threshold; clicking it triggers the door opening sequence and smoothly queues the next emotional environment. Because each Flow clip is generated to start precisely where the last frame ended, entering a new room reads as an uninterrupted, intentional walkthrough." },
                    { label: "The Closing Wall", text: "After Hope, visitors reach a shared canvas where they can type a word or phrase, or draw freely, using a lightweight HTML5 canvas input. Submissions are stored and displayed publicly on the same wall, so each new visitor sees the accumulated responses of everyone who came before them — a simple, persistent shared space rather than a private journal entry. Basic safeguards — a character limit and simple profanity filtering — keep the wall safe without requiring active moderation." },
                  ],
                },
                {
                  index: "04",
                  title: "Anticipated Technical Risks & Mitigations",
                  body: null,
                  bullets: [
                    { label: "Precise door placement on the final frame", text: "Since the exit door's click-target is tied to a fixed position in the video frame, each clip is generated and reviewed to confirm the door lands in a consistent, clearly clickable spot before that position is hard-coded into the frontend." },
                    { label: "Seamless clip-to-clip continuity", text: "Each room's video is generated to end on the exact framing the next room's video begins with — same door, same angle — treated as a deliberate matching pass between clips, not left to chance." },
                    { label: "Preloading for seamlessness", text: "The next room's video is preloaded while the visitor is still watching the current one, so clicking the door never stalls on load." },
                    { label: "Full-tier generation", text: "Final assets are generated on the AI Ultra tier (via the program's included promo code) specifically to avoid visible watermarking on the finished art piece." },
                    { label: "Early testing on higher-risk prompts", text: "Rooms with more sensitive imagery are prototyped early to confirm they generate cleanly before the rest of the pipeline depends on that visual direction." },
                  ],
                },
              ].map((item, i) => (
                <div
                  key={item.index}
                  className="grid grid-cols-[48px_1fr] gap-6 md:gap-10 py-8 md:py-12"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    alignItems: "start",
                  }}
                >
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.25em", color: "rgba(255,255,255,0.39)", paddingTop: "6px" }}>
                    {item.index}
                  </span>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "24px", fontWeight: 800, textTransform: "uppercase", color: "#F0EEE8", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "20px" }}>
                      {item.title}
                    </p>
                    {item.body && (
                      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "15px", lineHeight: 2, color: "rgba(240,238,232,0.54)" }}>
                        {item.body}
                      </p>
                    )}
                    {item.bullets && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {item.bullets.map((b) => (
                          <div key={b.label} className={b.sub ? "grid grid-cols-1 md:grid-cols-[16px_160px_1fr] gap-2 md:gap-4" : "grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-4"}>
                            {b.sub && <div className="hidden md:block" />}
                            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "rgba(240,238,232,0.66)", fontWeight: 500, paddingTop: "1px", lineHeight: 1.8 }}>
                              {b.label}
                            </p>
                            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.85, color: "rgba(240,238,232,0.49)" }}>
                              {b.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════ SECTION 05 — TIMELINE ═══════════════════════ */}
        <section
          id="timeline"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t"
          style={{ borderTopColor: "rgba(255,255,255,0.05)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 05
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  Operational Timeline
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Vertical timeline */}
            <div
              className="relative pl-6 md:pl-12 mb-12 md:mb-20"
            >
              <div
                className="absolute left-2 md:left-6 top-0 bottom-0 w-[2px] bg-white/[0.08]"
              />
              {[
                {
                  week: "WK 01",
                  phase: "Research Synthesis",
                  tasks: [
                    "Map sourced emotional language",
                    "Define cinematic prompt parameters in Flow",
                    "Establish per-room visual direction",
                    "Finalize nine-room sequence",
                  ],
                },
                {
                  week: "WK 02–03",
                  phase: "Generation & Iteration in Flow",
                  tasks: [
                    "Generate each room's video clip",
                    "Batch-direct environmental adjustments",
                    "Refine lighting, contrast & camera motion",
                    "Match each clip's ending frame to the next room's opening frame",
                    "Iterate rooms in parallel",
                  ],
                },
                {
                  week: "WK 04",
                  phase: "Frontend Build",
                  tasks: [
                    "Build the sequential video playback engine",
                    "Interactive door click-triggers & scroll-scrubbed video engine",
                    "Cursor parallax effect",
                    "Preloading for seamless transitions",
                  ],
                },
                {
                  week: "WK 05",
                  phase: "Sound & UI Compositing",
                  tasks: [
                    "Spatial sound design per room",
                    "Static UI asset compositing",
                    "Brain hub node map interface",
                    "Closing wall build (canvas input + shared display)",
                    "Final asset integration",
                  ],
                },
                {
                  week: "WK 06",
                  phase: "Testing, Optimization & Deployment",
                  tasks: [
                    "Full nine-room walkthrough test, start to finish",
                    "Performance optimization",
                    "Mobile responsiveness profiling",
                    "Live deployment",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={item.week}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-7 py-6 md:py-9 border-b border-white/5 relative"
                  style={{
                    borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div className="relative pl-0">
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "15px",
                        letterSpacing: "0.3em",
                        color: "rgba(255,255,255,0.39)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {item.week}
                    </span>
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "rgba(240,238,232,0.7)",
                        lineHeight: 1.25,
                        marginBottom: "20px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.phase}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {item.tasks.map((task) => (
                        <li
                          key={task}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.54)",
                            lineHeight: 1.7,
                            display: "flex",
                            gap: "6px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span style={{ color: "rgba(255,255,255,0.34)", flexShrink: 0 }}>—</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SECTION 06 — RESULT ═══════════════════════ */}
        <section
          id="result"
          className="py-16 px-6 md:py-24 md:px-16 lg:py-32 lg:px-20 border-t"
          style={{ borderTopColor: "rgba(255,255,255,0.05)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-end mb-12 md:mb-20"
            >
              <div>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Section 06
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "#F0EEE8",
                  }}
                >
                  Result
                </h2>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Result content */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.39)",
                    textTransform: "uppercase",
                    lineHeight: 1.8,
                  }}
                >
                  Open to the World
                </p>
              </div>
              <div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Nine rooms, nine feelings",
                    "Free, borderless access",
                    "No ticket, no travel required",
                    "Anyone with an internet connection",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "15px",
                        color: "rgba(240,238,232,0.69)",
                        lineHeight: 2,
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.55)", flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feasibility note */}
            <div
              className="border border-white/7 p-6 md:p-12 md:p-14 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 mt-12 md:mt-16"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.35em",
                    color: "rgba(255,255,255,0.39)",
                    textTransform: "uppercase",
                    lineHeight: 1.8,
                  }}
                >
                  Feasibility
                  <br />
                  Note
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "15px",
                    lineHeight: 2,
                    color: "rgba(240,238,232,0.54)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Mind Maze is not trying to replace what a physical exhibition can do. I'm
                  trying to reach the people who can't get to one. Mind Maze takes real,
                  collective human language and turns it into something you can walk through,
                  built with Google Flow. Art that anyone can feel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          className="border-t py-8 px-6 md:py-12 md:px-16 lg:px-20"
          style={{
            borderTopColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "28px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.01em",
                  lineHeight: 1,
                }}
              >
                Mind Maze
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "uppercase",
                  marginTop: "6px",
                }}
              >
                Flow Sessions © 2026
              </p>
            </div>
          </div>
        </footer>
      </main>

      {openEmotion && (
        <MoodboardModal emotion={openEmotion} onClose={() => setOpenEmotion(null)} />
      )}

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 0; height: 0; }
        * { scrollbar-width: none; }
        @media (min-width: 768px) {
          .vertical-text {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}
