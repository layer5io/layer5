import styled from "styled-components";

// Per-type color palette aligned with Sistent design tokens
const BORDER_COLORS = {
  note: "#477DFF", // Sistent info blue
  tip: "#00D3A9", // keppelColor / Sistent teal
  warning: "#EBC017", // highlightColor / saffron
  caution: "#F97316", // Sistent orange
  important: "#B32700", // Sistent error red
};

// Title text colors — darker shades for light mode (contrast), full saturation for dark mode
const TITLE_COLORS_LIGHT = {
  note: "#2458CC",
  tip: "#007A6B",
  warning: "#7A5700",
  caution: "#C75800",
  important: "#8C1A00",
};

const TITLE_COLORS_DARK = {
  note: "#7EB3FF",
  tip: "#00D3A9",
  warning: "#EBC017",
  caution: "#F97316",
  important: "#FF6B4A",
};

const CalloutStyle = styled.aside`
  margin: 1.75rem 0;
  border-radius: 0.375rem;
  border-left: 4px solid
    ${({ type }) => BORDER_COLORS[type] || BORDER_COLORS.note};
  overflow: hidden;
  font-size: 0.95rem;

  .callout-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    background: ${({ type, theme }) => {
      const c = BORDER_COLORS[type] || BORDER_COLORS.note;
      return theme.DarkTheme ? `${c}33` : `${c}26`;
    }};

    .callout-icon {
      font-size: 1rem;
      line-height: 1;
      flex-shrink: 0;
    }

    .callout-title {
      font-weight: 700;
      font-size: 0.9rem;
      line-height: 1;
      letter-spacing: 0.01em;
      color: ${({ type, theme }) =>
        theme.DarkTheme
          ? TITLE_COLORS_DARK[type] || TITLE_COLORS_DARK.note
          : TITLE_COLORS_LIGHT[type] || TITLE_COLORS_LIGHT.note};
    }
  }

  .callout-body {
    padding: 0.75rem 1rem;
    background: ${({ type, theme }) => {
      const c = BORDER_COLORS[type] || BORDER_COLORS.note;
      return theme.DarkTheme ? `${c}1a` : `${c}0f`;
    }};

    p,
    li,
    code {
      color: ${(props) => props.theme.primaryColor};
    }

    p {
      margin: 0 0 0.5rem 0;
      line-height: 1.65;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      margin: 0 0 0.5rem 0;
      padding-left: 1.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    li {
      line-height: 1.65;
      margin-bottom: 0.25rem;
    }

    code {
      font-size: 0.875em;
      padding: 0.1em 0.3em;
      border-radius: 3px;
      background: ${({ type, theme }) => {
        const c = BORDER_COLORS[type] || BORDER_COLORS.note;
        return theme.DarkTheme ? `${c}26` : `${c}1a`;
      }};
    }

    strong {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default CalloutStyle;
