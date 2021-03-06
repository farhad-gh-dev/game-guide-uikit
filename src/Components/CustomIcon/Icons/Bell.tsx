import React from "react";

const Bell: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.504"
      height="27"
      viewBox="0 0 24.504 27"
      {...props}
    >
      <g data-name="bell" transform="translate(-2 -1)">
        <path
          data-name="Path 1"
          d="M21.753,10a7.763,7.763,0,0,0-7.5-8,7.763,7.763,0,0,0-7.5,8C6.751,19.336,3,22,3,22H25.5s-3.751-2.667-3.751-12"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          data-name="Path 2"
          d="M13.73,21a2,2,0,0,1-3.46,0"
          transform="translate(2.252 5.004)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default Bell;
