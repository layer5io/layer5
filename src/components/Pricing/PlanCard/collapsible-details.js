import React from "react";
import styled from "styled-components";
import { MdExpandMore } from "@react-icons/all-files/md/MdExpandMore";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

const FeatureDetailsWrapper = styled.div`
  display: inline;
  cursor: pointer;

  .details > * {
    max-height: 0;
    opacity: 0;
    margin: 0;
    visibility: hidden;
    overflow: hidden;
    transition: opacity 0.2s ease-in-out, 
                max-height 0.3s ease-in-out 0.1s,
                margin 0.3s ease-in-out 0.1s,
                visibility 0s linear 0.4s;
  }

  .details > .open {
    max-height: 200px;
    opacity: 1;
    margin-bottom: 1rem;
    visibility: visible;
    transition: visibility 0s linear,
                opacity 0.2s ease-in-out 0.1s, 
                max-height 0.3s ease-in-out 0.2s,
                margin 0.3s ease-in-out 0.2s;
  }

  .toggle-icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${(props) => props.theme.primaryColor};
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .toggle-icon.expanded {
    transform: rotate(90deg);
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem;
    color: ${(props) => props.theme.greyC1C1C1ToGreyB3B3B3};
  }

  .toggle-btn {
    display: inline-block;
    float: left;
    vertical-align: middle;
  }

  h5 {
    display: inline-block;
    vertical-align: middle;
  }

  .beta-tag {
    display: inline-block;
    background-color: #ffd700;
    color: #000000;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 8px;
    font-weight: bold;
    vertical-align: middle;
  }
`;

const FeatureDetails = ({ category, description, tier, children, onToggle }) => {
  const [expand, setExpand] = React.useState(false);

  // Call onToggle when expand changes
  React.useEffect(() => {
    onToggle?.(expand);
  }, [expand, onToggle]);

  const BetaTag = () => <span className="beta-tag">Coming Soon</span>;

  return (
    <FeatureDetailsWrapper>
      <div onClick={() => setExpand(!expand)}>
        {(description || children) && (
          <div className="toggle-btn">
            {expand ? (
              <MdExpandMore className="toggle-icon" />
            ) : (
              <RiArrowRightSLine className="toggle-icon" />
            )}
          </div>
        )}
        <h5>
          {category}
          {tier === "Team-Beta" && <BetaTag />}
        </h5>
        <div className="details">
          {description && (
            <p className={expand ? "open" : ""} dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {children && (
            <div className={expand ? "open" : ""}>
              {children}
            </div>
          )}
        </div>
      </div>
    </FeatureDetailsWrapper>
  );
};

export default FeatureDetails;