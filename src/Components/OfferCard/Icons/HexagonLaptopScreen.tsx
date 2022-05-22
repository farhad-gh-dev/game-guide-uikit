import React from "react";

const HexagonLaptopScreen: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="48"
      viewBox="0 0 40 48"
      className="hexagon-laptop"
      {...props}
    >
      <path
        data-name="Hexagon laptop"
        d="M31.47,0a8,8,0,0,1,6.86,3.884l7.2,12a8,8,0,0,1,0,8.232l-7.2,12A8,8,0,0,1,31.47,40H16.53a8,8,0,0,1-6.86-3.884l-7.2-12a8,8,0,0,1,0-8.232l7.2-12A8,8,0,0,1,16.53,0Z"
        transform="translate(40) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
};

export default HexagonLaptopScreen;
