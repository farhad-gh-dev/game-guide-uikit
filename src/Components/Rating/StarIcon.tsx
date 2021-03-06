import React from "react";

const StarIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      {...props}
    >
      <path
        data-name="Star"
        d="M10.587,2.043a1,1,0,0,1,1.826,0l2.309,5.168a1,1,0,0,0,.782.583l5.469.723a1,1,0,0,1,.571,1.7L17.459,14.25a1,1,0,0,0-.282.891l1.043,5.73a1,1,0,0,1-1.485,1.045L12,19.176a1,1,0,0,0-1,0L6.265,21.916A1,1,0,0,1,4.78,20.872l1.043-5.73a1,1,0,0,0-.282-.891L1.456,10.221a1,1,0,0,1,.571-1.7L7.5,7.794a1,1,0,0,0,.782-.583Z"
        fill="#ffe500"
      />
    </svg>
  );
};

export default StarIcon;
