import styled from "styled-components";

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

  /* ── Embed container ──────────────────────────────── */
  .arch-card {
    position: relative;
    max-width: 960px;
    margin: 0 auto;
    height: 35rem; /* Sufficient height for embedded design */
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      margin: 0 1rem;
      height: 25rem;
    }
  }
`;

export default MesheryArchitectureWrapper;
