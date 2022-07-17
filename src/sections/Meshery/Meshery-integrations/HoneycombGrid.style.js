import styled from "styled-components";

const HoneycombGrid = styled.div`
  display: flex;
  --s: 9.375rem;
  --m: 0.25rem;
  --f: calc(var(--s) * 1.732 + 4 * var(--m) - 1px);

  .container {
    font-size: 0;
  }

  .container div {
    background: #00d3a9;
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * 1.1547);
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  }

  .container div div {
    background: white;
    display: flex;
    height: 10.125rem;
    width: 8.8125rem;
    margin: 0.3125rem;
    justify-content: center;
    align-items: center;
  }
  .container::before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );
  }
`;

export default HoneycombGrid;
