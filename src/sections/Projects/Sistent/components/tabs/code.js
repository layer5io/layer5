import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabHeader = styled.div`
  display: flex;
  flex-wrap: ${props => props.$scrollable ? "nowrap" : "wrap"};
  overflow-x: ${props => props.$scrollable ? "auto" : "visible"};
  border-bottom: 1px solid ${props => props.theme.tabBorderColor || "#e0e0e0"};
`;

const TabButton = styled.button`
  padding: 10px 16px;
  background: transparent;
  border: none;
  cursor: ${props => props.$disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  color: ${props => props.$active ? props.theme.tabActiveColor || "#0097A7" : props.theme.tabColor || "#757575"};
  font-weight: ${props => props.$active ? "600" : "400"};
  border-bottom: 2px solid ${props => props.$active ? (props.theme.tabActiveColor || "#0097A7") : "transparent"};
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${props => !props.$disabled && (props.theme.tabHoverColor || "#00838F")};
    background-color: ${props => !props.$disabled && (props.theme.tabHoverBg || "#f5f5f5")};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.tabFocusColor || "rgba(0, 151, 167, 0.4)"};
  }
`;

const TabContent = styled.div`
  padding: 16px;
  display: ${props => props.$active ? "block" : "none"};
`;

export const Tabs = ({ 
  children, 
  defaultIndex = 0, 
  onChange,
  scrollable = false
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  const handleTabClick = (index) => {
    if (children[index].props.disabled) return;
    
    setActiveIndex(index);
    if (onChange) onChange(index);
  };

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  return (
    <TabContainer>
      <TabHeader $scrollable={scrollable}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          const { label, disabled } = child.props;
          
          return (
            <TabButton
              type="button"
              onClick={() => handleTabClick(index)}
              $active={index === activeIndex}
              $disabled={disabled}
              disabled={disabled}
              aria-selected={index === activeIndex}
              role="tab"
              tabIndex={index === activeIndex ? 0 : -1}
            >
              {label}
            </TabButton>
          );
        })}
      </TabHeader>
      
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        
        return (
          <TabContent $active={index === activeIndex} role="tabpanel">
            {child.props.children}
          </TabContent>
        );
      })}
    </TabContainer>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  scrollable: PropTypes.bool
};

export const Tab = ({ label, children, disabled }) => {
  return null; 
};

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

export default { Tabs, Tab };