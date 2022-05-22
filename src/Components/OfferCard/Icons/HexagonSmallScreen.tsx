import React from "react";

const HexagonSmallScreen: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="36"
      viewBox="0 0 30 36"
      className="hexagon"
      {...props}
    >
      <path
        data-name="Hexagon"
        d="M24.735,0a4,4,0,0,1,3.43,1.942l6.6,11a4,4,0,0,1,0,4.116l-6.6,11A4,4,0,0,1,24.735,30H11.265a4,4,0,0,1-3.43-1.942l-6.6-11a4,4,0,0,1,0-4.116l6.6-11A4,4,0,0,1,11.265,0Z"
        transform="translate(30) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
};

export default HexagonSmallScreen;
