const Logo = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m18.185 13.312-3.5-3.5a2.338 2.338 0 0 1 0-3.301l3.5-3.5c.91-.91 2.39-.91 3.3 0l3.5 3.5c.91.91.91 2.391 0 3.301l-3.5 3.5c-.921.91-2.402.91-3.3 0ZM13.997 24.5H5.833A2.34 2.34 0 0 1 3.5 22.167V14h10.497v10.5Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.997 14H3.5V5.833A2.34 2.34 0 0 1 5.833 3.5h8.164V14ZM22.162 24.5h-8.165V14h10.497v8.167a2.34 2.34 0 0 1-2.332 2.333Z"
    />
  </svg>
);

export default Logo;
