import React from "react";

const SVG = ({ resolvedTheme }) => {
  return (
    <div>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="414"
        height="185"
        viewBox="0 0 414 185"
        fill="none"
        class="background"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 0C4.47715 0 0 4.47716 0 10C0 16.1969 5.59568 21.4343 9.25211 26.4375C11.387 29.3588 12.6883 33.2403 12.6883 37.5C12.6883 43.0991 10.44 48.0448 7.00554 51.0152C3.73036 53.8479 0 57.3364 0 61.6667V175C0 180.523 4.47716 185 10 185H404C409.523 185 414 180.523 414 175V10C414 4.47715 409.523 0 404 0H10Z"
          fill={`  ${resolvedTheme === "dark" ? " #252527 " : " #00C8B9  "}   `}
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        class="nur"
      >
        <g filter="url(#filter0_dddddd_614_155)">
          <circle cx="52" cy="52" r="6" fill="#27E1C1"></circle>
        </g>
        <defs>
          <filter
            id="filter0_dddddd_614_155"
            x="0.639999"
            y="0.639999"
            width="102.72"
            height="102.72"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="0.54"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_614_155"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="1.08"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_614_155"
              result="effect2_dropShadow_614_155"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="3.78"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_614_155"
              result="effect3_dropShadow_614_155"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="7.56"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_614_155"
              result="effect4_dropShadow_614_155"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="12.96"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect4_dropShadow_614_155"
              result="effect5_dropShadow_614_155"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="22.68"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0.415686 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect5_dropShadow_614_155"
              result="effect6_dropShadow_614_155"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_614_155"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SVG;
