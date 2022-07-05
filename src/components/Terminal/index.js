import React, { Fragment } from "react";
import { TerminalWrapper } from "./Terminal.style";

/**
 * A Terminal is a simple component representing the presentation
 * of a terminal in a static state.
 *
 * Animated versions of the terminal are available in higher order components,
 * but they work by manipulating the passed props down to this terminal to
 * represent the active state in a given frame.
 *
 * Example Usage:
 *
 *  <Terminal
 *    lines={[
 *      {
 *        code: '» Building . . . . . . . . . . . . .',
 *      },
 *      {
 *        color: 'gray',
 *        code: 'Creating new buildpack-based image using builder:',
 *        indent: 1,
 *      },
 *      {
 *        color: 'gray',
 *        code: 'heroku/buildpacks:18',
 *        indent: 1,
 *      },
 *      {
 *        color: 'navy',
 *        code: '✓ Creating pack client',
 *        indent: 1,
 *      },
 *      {
 *        color: 'white',
 *        code: '⠴ Building image',
 *      },
 *    ]}
 *  />
 */
const Terminal = ({ lines, title, noScroll }) => {
  return (
    <TerminalWrapper>
      <div className="title-bar">
        <ul className="window-controls">
          <li/>
          <li/>
          <li/>
        </ul>
        {title && <div className="title">{title}</div>}
      </div>
      <div className="content">
        <div className={
          noScroll ? "no-scroll-overflow-wrapper overflow-wrapper" : "overflow-wrapper"
        }
        >
          <div className="code-wrapper">
            {lines && lines.map((line, index) => (
              <Fragment key={index}>
                <pre className={`${line.short ? "short": ""} ${line.color ? line.color: "blue"}`} >
                  {line.indent &&
                            new Array(line.indent * 2)
                              .fill({})
                              .map((_, index) => (
                                <Fragment key={index}>&nbsp;</Fragment>
                              ))}
                  {line.code}
                </pre>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </TerminalWrapper>
  );
};

export default Terminal;
