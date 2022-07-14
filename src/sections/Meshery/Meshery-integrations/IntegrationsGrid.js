import React from "react";
import styled from "styled-components";

const HoneycombGrid = styled.div`
  display: flex;
  --s: 150px; /* size  */
  --m: 4px; /* margin */
  --f: calc(var(--s) * 1.732 + 4 * var(--m) - 1px);

  .container {
    font-size: 0; /* disable white space between inline block element */
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
    height: 162px;
    width: 141px;
    margin: 5px;
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
function IntegrationsGrid({ obj }) {
  return (
    <HoneycombGrid>
      <div className="container">
        {obj.map((item) => {
          return (
            <div>
              <div>
                <img src={item.img} alt={item.name} width={60} height={60} />
              </div>
            </div>
          );
        })}
      </div>
    </HoneycombGrid>
  );
}

export default IntegrationsGrid;
