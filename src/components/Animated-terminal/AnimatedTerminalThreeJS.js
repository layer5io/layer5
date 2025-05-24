
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TerminalEffect from "./TerminalEffect"; // Changed from TerminalEffects to TerminalEffect to match the file name

const TerminalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const TerminalHeader = styled.div`
  background: #2d3236;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 8px;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    &:nth-child(1) {
      background: #ff5f56;
    }
    &:nth-child(2) {
      background: #ffbd2e;
    }
    &:nth-child(3) {
      background: #27c93f;
    }
  }
`;

const TerminalContent = styled.div`
  background: #1e2126;
  color: #ffffff;
  font-family: monospace;
  height: calc(100% - 36px);
  padding: 15px;
  overflow: auto;
  position: relative;
`;

const TerminalCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const TypedText = styled.pre`
  margin: 0;
  position: relative;
  z-index: 1;
  color: #fff;
  line-height: 1.5;
`;

/**
 * Enhanced AnimatedTerminal with Three.js effects
 * This version uses a different approach than the original AnimatedTerminal
 * by rendering a terminal with typing animation and Three.js visual effects
 * 
 * @param {Array} commands - Array of command strings to display sequentially
 * @param {number} typingSpeed - Speed of typing animation in milliseconds
 * @param {Object} effectsOptions - Options for the visual effects
 */
const AnimatedTerminalThreeJS = ({ 
  commands = [
    "$ mesheryctl system start",
    "Meshery is starting...",
    "✓ Meshery namespace created",
    "✓ Meshery resources deployed",
    "✓ Meshery is now running at http://localhost:9081"
  ],
  typingSpeed = 50,
  effectsOptions = {}
}) => {
  const canvasRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [progress, setProgress] = useState(0);
  
  // Animation for typing effect
  useEffect(() => {
    if (!isTyping) return;
    
    let timer;
    
    if (currentLine < commands.length) {
      const currentCommand = commands[currentLine];
      
      if (currentChar < currentCommand.length) {
        timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, typingSpeed * 4);
      }
    } else {
      setIsTyping(false);
    }
    
    return () => clearTimeout(timer);
  }, [currentLine, currentChar, commands, typingSpeed, isTyping]);
  
  // Update progress for effects
  useEffect(() => {
    if (commands.length > 0) {
      const totalChars = commands.reduce((sum, cmd) => sum + cmd.length, 0);
      const currentProgress = (currentLine > 0 ? 
        commands.slice(0, currentLine).reduce((sum, cmd) => sum + cmd.length, 0) : 0) + 
        currentChar;
      
      setProgress(currentProgress / totalChars);
    }
  }, [commands, currentLine, currentChar]);
  
  return (
    <TerminalContainer>
      <TerminalHeader>
        <TerminalButtons>
          <span></span>
          <span></span>
          <span></span>
        </TerminalButtons>
      </TerminalHeader>
      <TerminalContent>
        <TypedText>
          {commands.slice(0, currentLine).map((cmd, i) => (
            <div key={i}>{cmd}</div>
          ))}
          {currentLine < commands.length && (
            <div>{commands[currentLine].substring(0, currentChar)}</div>
          )}
        </TypedText>
        <TerminalCanvas ref={canvasRef}>
          <TerminalEffect 
            containerRef={canvasRef} 
            progress={progress} 
            options={effectsOptions} 
          />
        </TerminalCanvas>
      </TerminalContent>
    </TerminalContainer>
  );
};

export default AnimatedTerminalThreeJS;
