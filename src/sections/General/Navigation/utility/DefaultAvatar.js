import React from "react";

export default function DefaultAvatar(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12C13.6575 12 15 10.6575 15 9C15 7.3425 13.6575 6 12 6C10.3425 6 9 7.3425 9 9C9 10.6575 10.3425 12 12 12ZM12 13.5C9.9975 13.5 6 14.505 6 16.5V18H18V16.5C18 14.505 14.0025 13.5 12 13.5Z"
        fill="white"
      />
    </svg>
  );
}
