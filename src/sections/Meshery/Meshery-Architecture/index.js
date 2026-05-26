import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MesheryArchitectureWrapper from "./meshery-architecture.style";
import MesheryArchitectureSVG from "./MesheryArchitectureSVG";

// Register GSAP plugin once (safe to call multiple times)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: double-rAF flush
// Ensures GSAP's DOM mutations from tl.seek() are fully painted before
// html2canvas reads the layout. One rAF is not enough on all browsers.
// ─────────────────────────────────────────────────────────────────────────────
function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Animation constants
// ─────────────────────────────────────────────────────────────────────────────
const EASE_OUT = "power3.out";
const EASE_IN = "power2.in";
const EASE_IO = "power2.inOut";
const GIF_FPS = 15;
const GIF_WIDTH = 880;

// ─────────────────────────────────────────────────────────────────────────────
// MesheryArchitecture
// ─────────────────────────────────────────────────────────────────────────────
const MesheryArchitecture = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const tlRef = useRef(null);
  const cardRef = useRef(null);

  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportPhase, setExportPhase] = useState("capturing"); // 'capturing' | 'encoding'
  const [exportFrame, setExportFrame] = useState({ cur: 0, total: 0 });

  // ── Build GSAP timeline ────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    const svg = svgRef.current;
    if (!svg) return;

    // 15-step intro sequence (6.5s), followed by an infinite idle pulse loop.
    // ScrollTrigger fires the timeline once when the section hits 65% viewport.
    const q = gsap.utils.selector(svg);

    // Initial state: everything hidden
    gsap.set(q(".arch-anim-group"), { opacity: 0, visibility: "hidden" });
    gsap.set(q(".arch-line"), {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      opacity: 0,
    });
    gsap.set(q(".arch-label"), { opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    // ── Step 0 · Left panel (0s) ──────────────────────────────────────────
    tl.to(
      q("#arch-left-panel"),
      {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
      },
      0,
    );

    // ── Step 1 · Right panel (0.3s) ──────────────────────────────────────
    tl.to(
      q("#arch-right-panel"),
      {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
      },
      0.3,
    );

    // ── Step 2 · Meshery Server box (scale in) ───────────────────────────
    tl.fromTo(
      q("#arch-server-box"),
      {
        opacity: 0,
        scale: 0.78,
        transformOrigin: "center center",
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        visibility: "visible",
        duration: 0.55,
        ease: EASE_OUT,
      },
      0.55,
    );

    // ── Step 3 · API + DB sub-blocks (stagger slide) ─────────────────────
    tl.fromTo(
      [q("#arch-api-block"), q("#arch-db-block")],
      { opacity: 0, x: -14, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
        stagger: 0.12,
      },
      0.9,
    );

    // ── Step 4 · UI + CLI blocks (slide up) ──────────────────────────────
    tl.fromTo(
      [q("#arch-ui-block"), q("#arch-cli-block")],
      { opacity: 0, y: 14, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.45,
        ease: EASE_OUT,
        stagger: 0.1,
      },
      1.15,
    );

    // ── Step 5 · UI → Server line ─────────────────────────────────────────
    tl.to(
      q("#arch-line-ui-server .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: EASE_IN },
      1.5,
    );
    tl.to(
      q("#arch-line-ui-server .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );

    // ── Step 6 · mesheryctl → Server line ────────────────────────────────
    tl.to(
      q("#arch-line-cli-server .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.4, ease: EASE_IN },
      1.8,
    );
    tl.to(
      q("#arch-line-cli-server .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );

    // ── Step 7 · Adapters cluster + icons (stagger) ───────────────────────
    tl.fromTo(
      q("#arch-adapters-cluster"),
      {
        opacity: 0,
        scale: 0.88,
        transformOrigin: "center center",
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        visibility: "visible",
        duration: 0.5,
        ease: EASE_OUT,
      },
      2.1,
    );
    tl.fromTo(
      q("#arch-adapters rect"),
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, ease: EASE_OUT, stagger: 0.06 },
      2.35,
    );
    tl.fromTo(
      q("#arch-adapters text"),
      { opacity: 0 },
      { opacity: 1, duration: 0.2, stagger: 0.06 },
      2.5,
    );

    // ── Step 8 · gRPC line: Server → Adapters ────────────────────────────
    tl.to(
      q("#arch-line-server-adapters .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.65, ease: EASE_IO },
      2.7,
    );
    tl.to(
      q("#arch-line-server-adapters .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );

    // ── Step 9 · Kube API line: Server → K8s ─────────────────────────────
    tl.to(
      q("#arch-line-server-k8s .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: EASE_IO },
      3.1,
    );
    tl.to(
      q("#arch-line-server-k8s .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );

    // ── Step 10 · Operator + MeshSync ────────────────────────────────────
    tl.fromTo(
      q("#arch-operator"),
      { opacity: 0, x: 12, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        visibility: "visible",
        duration: 0.45,
        ease: EASE_OUT,
      },
      3.45,
    );
    tl.fromTo(
      q("#arch-meshsync"),
      {
        opacity: 0,
        scale: 0.7,
        transformOrigin: "center center",
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        visibility: "visible",
        duration: 0.35,
        ease: "back.out(1.4)",
      },
      3.75,
    );

    // ── Step 11 · Broker + event-stream lines ────────────────────────────
    tl.fromTo(
      q("#arch-broker"),
      { opacity: 0, y: 10, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
      },
      4.0,
    );
    tl.to(
      q("#arch-line-meshsync-broker .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.6, ease: EASE_IO },
      4.2,
    );
    tl.to(
      q("#arch-line-meshsync-broker .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );
    tl.to(
      q("#arch-line-broker-server .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: EASE_IO },
      4.6,
    );

    // ── Step 12 · Grafana + Prometheus ───────────────────────────────────
    tl.fromTo(
      [q("#arch-grafana"), q("#arch-prometheus")],
      { opacity: 0, y: -10, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
        stagger: 0.12,
      },
      4.9,
    );
    tl.to(
      q("#arch-line-server-observability .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: EASE_IO },
      5.15,
    );
    tl.to(
      q("#arch-line-server-observability .arch-label"),
      { opacity: 1, duration: 0.3 },
      "+=0.05",
    );

    // ── Step 13 · Load Generator ──────────────────────────────────────────
    tl.fromTo(
      q("#arch-loadgen"),
      { opacity: 0, x: -10, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
      },
      5.5,
    );

    // ── Step 14 · Providers + adapter HTTP/TCP line ───────────────────────
    tl.fromTo(
      [q("#arch-local-provider"), q("#arch-remote-provider")],
      { opacity: 0, y: 12, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.4,
        ease: EASE_OUT,
        stagger: 0.12,
      },
      5.8,
    );
    tl.to(
      q("#arch-line-adapters-sut .arch-line"),
      { strokeDashoffset: 0, opacity: 1, duration: 0.45, ease: EASE_IO },
      6.0,
    );

    // ── Step 15 · Idle pulse loop on key connection lines ─────────────────
    tl.to(
      [
        q("#arch-line-server-adapters .arch-line"),
        q("#arch-line-meshsync-broker .arch-line"),
        q("#arch-line-broker-server .arch-line"),
      ],
      {
        opacity: 0.35,
        duration: 1.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      },
      6.5,
    );

    // ── ScrollTrigger ─────────────────────────────────────────────────────
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      once: true,
      onEnter: () => tl.play(),
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) st.kill();
      });
    };
  }, []);

  // ── Replay handler ─────────────────────────────────────────────────────────
  const handleReplay = useCallback(() => {
    const tl = tlRef.current;
    if (!tl || isExporting) return;
    tl.restart();
  }, [isExporting]);

  // ── GIF Export — force-seek method ────────────────────────────────────────
  const handleExportGIF = useCallback(async () => {
    if (isExporting || !svgRef.current || typeof window === "undefined") return;

    // Lazy-import heavy libs — only downloaded when user clicks export
    const [html2canvasModule, gifshotModule] = await Promise.all([
      import("html2canvas"),
      import("gifshot"),
    ]);
    const html2canvas = html2canvasModule.default;
    const gifshot = gifshotModule.default;

    const tl = tlRef.current;
    if (!tl) return;

    setIsExporting(true);
    setExportProgress(0);
    setExportPhase("capturing");

    // Pause live timeline (stops the infinite idle loop too)
    tl.pause();

    // Capture the intro sequence only (before idle loop at 6.5s)
    const captureEnd = 6.5;
    const totalFrames = Math.ceil(captureEnd * GIF_FPS);
    const frameStep = captureEnd / totalFrames;
    const dataURLs = [];
    setExportFrame({ cur: 0, total: totalFrames });

    try {
      for (let i = 0; i <= totalFrames; i++) {
        // 1. Seek to the mathematically exact frame position
        tl.seek(i * frameStep, false);

        // 2. Double-rAF — let GSAP DOM writes settle before html2canvas reads
        await waitForPaint();

        // 3. Capture frame
        const canvas = await html2canvas(svgRef.current, {
          backgroundColor: "#1e2117",
          scale: 1,
          logging: false,
          useCORS: true,
          allowTaint: true,
          width: svgRef.current.clientWidth || GIF_WIDTH,
          height: svgRef.current.clientHeight || 340,
        });
        dataURLs.push(canvas.toDataURL("image/png"));

        // 4. Update progress — show current frame count
        const pct = Math.round((i / totalFrames) * 100);
        setExportProgress(pct);
        setExportFrame({ cur: i + 1, total: totalFrames });
      }

      // 5. Switch to encoding phase — gifshot can take 5–15s with no
      //    sub-progress; show a distinct label so users know it's working.
      setExportPhase("encoding");
      setExportProgress(100);

      // 6. Encode → GIF
      gifshot.createGIF(
        {
          images: dataURLs,
          gifWidth: dataURLs[0]
            ? svgRef.current.clientWidth || GIF_WIDTH
            : GIF_WIDTH,
          gifHeight: svgRef.current.clientHeight || 340,
          // gifshot frameDuration = 10ths of a second; 15fps → 0.067s → round to 0.07
          frameDuration: Math.round((1 / GIF_FPS) * 10) / 10,
          numWorkers: 2,
          sampleInterval: 8,
        },
        (obj) => {
          if (!obj.error) {
            const link = document.createElement("a");
            link.href = obj.image;
            link.download = "meshery-architecture.gif";
            link.click();
          } else {
            console.error("[MesheryArchitecture] gifshot error:", obj.error);
          }

          // Restore: seek to after intro, resume idle loop
          tl.seek(6.5, false);
          tl.play();
          setIsExporting(false);
          setExportProgress(0);
          setExportPhase("capturing");
          setExportFrame({ cur: 0, total: 0 });
        },
      );
    } catch (err) {
      console.error("[MesheryArchitecture] GIF export failed:", err);
      tl.seek(6.5, false);
      tl.play();
      setIsExporting(false);
      setExportProgress(0);
      setExportPhase("capturing");
      setExportFrame({ cur: 0, total: 0 });
    }
  }, [isExporting]);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <MesheryArchitectureWrapper ref={sectionRef}>
      {/* Section header */}
      <div className="arch-header">
        <p className="arch-eyebrow">Under the Hood</p>
        <h2>Meshery Architecture</h2>
        <p>
          An extensible platform built on a microservices foundation — see how
          every component connects, communicates, and collaborates.
        </p>
      </div>

      {/* Diagram card */}
      <div className="arch-card" ref={cardRef}>
        {/* Export overlay */}
        <div
          className={`arch-export-overlay${isExporting ? "" : " hidden"}`}
          aria-live="polite"
          aria-label={
            exportPhase === "encoding" ? "Encoding GIF" : "Capturing frames"
          }
        >
          <div className="export-spinner" aria-hidden="true" />
          <div className="export-label">
            {exportPhase === "encoding" ? (
              <>Encoding GIF&hellip; almost done!</>
            ) : (
              <>
                Capturing frame&nbsp;{exportFrame.cur}&nbsp;/&nbsp;
                {exportFrame.total}
              </>
            )}
          </div>
          <div
            className="export-progress-bar"
            role="progressbar"
            aria-valuenow={exportProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="export-progress-fill"
              style={{ width: `${exportProgress}%` }}
            />
          </div>
        </div>

        {/* SVG diagram */}
        <div className="arch-svg-wrapper">
          <MesheryArchitectureSVG ref={svgRef} />
        </div>

        {/* Controls */}
        <div className="arch-controls">
          <button
            id="meshery-arch-replay"
            className="arch-btn arch-btn-ghost"
            onClick={handleReplay}
            disabled={isExporting}
            aria-label="Replay animation"
            title="Replay Animation"
          >
            <span className="replay-icon" aria-hidden="true">
              ↺
            </span>
            Replay
          </button>
          <button
            id="meshery-arch-export-gif"
            className="arch-btn arch-btn-primary"
            onClick={handleExportGIF}
            disabled={isExporting}
            aria-label="Export architecture diagram as animated GIF"
            title="Export as GIF"
          >
            {isExporting ? (
              exportPhase === "encoding" ? (
                <>Encoding&hellip;</>
              ) : (
                <>
                  Frame&nbsp;{exportFrame.cur}/{exportFrame.total}
                </>
              )
            ) : (
              <> &#8681;&nbsp;Export as GIF</>
            )}
          </button>
        </div>
      </div>
    </MesheryArchitectureWrapper>
  );
};

export default MesheryArchitecture;
