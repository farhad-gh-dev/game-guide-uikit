import React from "react";

const DarkLogo: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="65"
      viewBox="0 0 39 65"
    >
      <path
        id="logo-light"
        d="M129.333,16,112,50.667l9.858,7.177,7.448-5.024-6.473-4.32Zm4.333,0,6.5,32.5-19.5,13L112,68l19.5,13L151,68l-8.667-6.5-1.11-.731-7.651,5.579L135.833,68,131.5,72.333,127.167,68,151,50.667Z"
        transform="translate(-112 -16)"
      />
    </svg>
  );
};

export default DarkLogo;
