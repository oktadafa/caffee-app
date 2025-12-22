import * as React from "react";
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={32}
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={29}
      height={30}
      rx={9}
      fill="#F5EFE6"
      stroke="#665C50"
      strokeWidth={2}
    />
    <rect x={6} y={8} width={20} height={15} rx={2} fill="#665C50" />
    <path
      d="M18.8833 14.4418C19.6 14.8156 19.6 15.8413 18.8833 16.2151L14.8583 18.3143C14.1925 18.6615 13.3959 18.1785 13.3959 17.4276V13.2293C13.3959 12.4784 14.1925 11.9954 14.8583 12.3426L18.8833 14.4418Z"
      fill="#F5EFE6"
    />
  </svg>
);
export default YoutubeIcon;
