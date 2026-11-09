import React from "react";
const AcademyIcon = ({ width = "32px", height = "32px", primaryFill, secondaryFill }) => {
  return (
    <svg
      fill={primaryFill}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      {/*middle-part*/}
      <path
        fill={secondaryFill}
        d="M3.8,7.5v9h-1.7c-.3,0-.6.3-.6.6v.9h19.5v-.9c0-.3-.3-.6-.6-.6h-1.7V7.5h-3v9h-3V7.5h-3v9h-3V7.5h-3Z"
      />
      {/*bottom-part*/}
      <path
        fill={primaryFill}
        d="M21.4,18.8H1.1c-.6,0-1.1.5-1.1,1.1v.8c0,.2.2.4.4.4h21.8c.2,0,.4-.2.4-.4v-.8c0-.6-.5-1.1-1.1-1.1Z"
      />
      {/*head-part*/}
      <path
        fill={primaryFill}
        d="M22.5,4.5v.8c0,.2-.2.4-.4.4h-1.1v.6c0,.3-.3.6-.6.6H2.1c-.3,0-.6-.3-.6-.6v-.6H.4c-.2,0-.4-.2-.4-.4v-.8c0-.2,0-.3.2-.3L11.1,0c0,0,.2,0,.3,0l10.9,4.1c.1,0,.2.2.2.3Z"
      />
    </svg>
  );
};
export default AcademyIcon;
