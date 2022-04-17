import React from "react";

const Play: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
      {...props}
    >
      <path
        id="play"
        d="M5,3l14,9L5,21Z"
        transform="translate(-5 -3)"
        fill="#fff"
      />
    </svg>
  );
};

export default Play;
