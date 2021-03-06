import React from "react";

const ShoppingCard: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.5"
      height="27"
      viewBox="0 0 24.5 27"
      {...props}
    >
      <g data-name="shopping-bag" transform="translate(-2 -1)">
        <path
          data-name="Path 3"
          d="M6.75,2,3,7V24.5A2.5,2.5,0,0,0,5.5,27H23a2.5,2.5,0,0,0,2.5-2.5V7L21.75,2Z"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <line
          data-name="Line 1"
          x2="22.5"
          transform="translate(3 6)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          data-name="Path 4"
          d="M16,10a4,4,0,0,1-8,0"
          transform="translate(2.25 2.5)"
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

export default ShoppingCard;
