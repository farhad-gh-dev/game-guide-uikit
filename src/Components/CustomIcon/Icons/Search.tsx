import React from "react";

const Search: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      {...props}
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-170 -213)">
        <g
          id="Ellipse_1"
          data-name="Ellipse 1"
          transform="translate(170 213)"
          fill="none"
          stroke="#000"
          stroke-width="2"
        >
          <circle cx="13.5" cy="13.5" r="13.5" stroke="none" />
          <circle cx="13.5" cy="13.5" r="12.5" fill="none" />
        </g>
        <g
          id="Ellipse_2"
          data-name="Ellipse 2"
          transform="translate(194 236)"
          fill="none"
          stroke="#000"
          stroke-width="2"
        >
          <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
          <circle cx="3.5" cy="3.5" r="2.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default Search;
