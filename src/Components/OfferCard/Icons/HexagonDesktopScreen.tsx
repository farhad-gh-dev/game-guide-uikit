import React from "react";

const HexagonDesktopScreen: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="60"
      viewBox="0 0 50 60"
      className="hexagon-desktop"
      {...props}
    >
      <path
        id="Hexagon_desktop"
        data-name="Hexagon_desktop"
        d="M40.47,0a8,8,0,0,1,6.86,3.884l10.2,17a8,8,0,0,1,0,8.232l-10.2,17A8,8,0,0,1,40.47,50H19.53a8,8,0,0,1-6.86-3.884l-10.2-17a8,8,0,0,1,0-8.232l10.2-17A8,8,0,0,1,19.53,0Z"
        transform="translate(50) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
};

export default HexagonDesktopScreen;
