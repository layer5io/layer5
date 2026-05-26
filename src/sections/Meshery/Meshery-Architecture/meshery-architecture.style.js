import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const progressPulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.6; }
`;

const MesheryArchitectureWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 0 6rem;
  overflow: hidden;

  /* ── Section header ──────────────────────────────────── */
  .arch-header {
    text-align: center;
    margin-bottom: 2.5rem;

    .arch-eyebrow {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.secondaryColor ?? "#00B39F"};
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 700;
      margin: 0 auto 1rem;
      max-width: 680px;
      line-height: 1.2;
    }

    p {
      font-size: 1.05rem;
      max-width: 620px;
      margin: 0 auto;
      opacity: 0.75;
      line-height: 1.7;
    }
  }

  /* ── SVG card container ──────────────────────────────── */
  .arch-card {
    position: relative;
    max-width: 960px;
    margin: 0 auto;
    border-radius: 1.25rem;
    background: rgba(30, 33, 23, 0.88);
    border: 1px solid rgba(0, 179, 159, 0.22);
    box-shadow:
      0 4px 32px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(0, 211, 169, 0.06) inset;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    overflow: hidden;
    padding: 2rem 2rem 1.25rem;

    @media (max-width: 768px) {
      padding: 1.25rem 1rem 1rem;
      border-radius: 0.75rem;
    }

    /* Allow the SVG wrapper's horizontal scroll to reach the user.
     * overflow:hidden would swallow it on small screens. */
    @media (max-width: 640px) {
      overflow: visible;
    }
  }

  /* ── SVG wrapper ─────────────────────────────────────── */
  .arch-svg-wrapper {
    width: 100%;
    overflow: visible;

    svg {
      width: 100%;
      height: auto;
      display: block;
    }

    /* All animated groups start invisible; GSAP sets them visible */
    .arch-anim-group {
      opacity: 0;
    }

    /* Connection lines — start with dashoffset = full length */
    .arch-line {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      opacity: 0;
    }

    /* Idle pulse class added by GSAP after sequence finishes */
    .arch-pulse {
      animation: ${progressPulse} 2.8s ease-in-out infinite;
    }

    /*
     * Mobile: enforce a minimum SVG width so that node labels
     * (fontSize 8–12 SVG units) stay legible, and let the
     * wrapper scroll horizontally rather than squishing to ~40%.
     * 580px keeps the smallest text (fontSize=7) at ~9px rendered,
     * which is the legibility floor.
     */
    @media (max-width: 640px) {
      overflow-x: auto;
      overflow-y: visible;
      -webkit-overflow-scrolling: touch;
      /* Prevent the card's overflow:hidden from clipping the scrollbar */
      padding-bottom: 0.5rem;

      svg {
        min-width: 580px;
        width: 580px; /* fixes width:100% collapsing inside flex/scroll */
      }
    }
  }

  /* ── Protocol label badges on lines ─────────────────── */
  .arch-label {
    font-size: 0.58rem;
    font-family: "Consolas", "Courier New", monospace;
    fill: #00d3a9;
    letter-spacing: 0.04em;
    opacity: 0;
    transition: opacity 0.4s;

    /*
     * At <640px the SVG renders at ~40% scale, making fontSize=7 text
     * roughly 3px — invisible. Since the wrapper now scrolls at 580px
     * min-width the labels are legible, but hide them anyway on the
     * smallest viewports to reduce clutter on the constrained canvas.
     */
    @media (max-width: 480px) {
      display: none;
    }
  }

  .arch-channel-label {
    fill: #00d3a9 !important;
  }

  /* ── Button row ──────────────────────────────────────── */
  .arch-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.1rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(0, 179, 159, 0.12);

    @media (max-width: 480px) {
      justify-content: center;
    }
  }

  .arch-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.48rem 1.1rem;
    border-radius: 0.55rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    border: none;
    outline: none;
    white-space: nowrap;

    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    /* Primary — Export as GIF */
    &.arch-btn-primary {
      background: ${({ theme }) => theme.secondaryColor ?? "#00B39F"};
      color: #fff;

      &:hover:not(:disabled) {
        background: #00d3a9;
        box-shadow: 0 0 16px rgba(0, 179, 159, 0.45);
        transform: translateY(-1px);
      }
    }

    /* Ghost — Replay */
    &.arch-btn-ghost {
      background: transparent;
      color: ${({ theme }) => theme.secondaryColor ?? "#00B39F"};
      border: 1px solid rgba(0, 179, 159, 0.45);

      &:hover:not(:disabled) {
        background: rgba(0, 179, 159, 0.1);
        border-color: #00b39f;
        transform: translateY(-1px);
      }

      .replay-icon {
        display: inline-block;
        font-style: normal;
      }
    }
  }

  /* ── Export progress overlay ─────────────────────────── */
  .arch-export-overlay {
    position: absolute;
    inset: 0;
    border-radius: 1.25rem;
    background: rgba(16, 18, 13, 0.82);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 10;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    &.hidden {
      display: none;
    }

    .export-spinner {
      width: 2.5rem;
      height: 2.5rem;
      border: 3px solid rgba(0, 179, 159, 0.2);
      border-top-color: #00b39f;
      border-radius: 50%;
      animation: ${spin} 0.9s linear infinite;
    }

    .export-label {
      font-size: 0.92rem;
      font-weight: 600;
      color: #00b39f;
      animation: ${progressPulse} 1.6s ease-in-out infinite;
    }

    .export-progress-bar {
      width: 180px;
      height: 4px;
      border-radius: 2px;
      background: rgba(0, 179, 159, 0.18);
      overflow: hidden;

      .export-progress-fill {
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, #00b39f, #00d3a9);
        transition: width 0.15s linear;
      }
    }
  }
`;

export default MesheryArchitectureWrapper;
