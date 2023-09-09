import React from "react";
const UserIcon = (props) => {
  return (
    <svg
      width={props.width ? props.width : "16"}
      height={props.height ? props.height : "13"}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 0.81184C11.6545 1.30274 12.3334 2.32209 12.3334 3.5C12.3334 4.67791 11.6545 5.69726 10.6667 6.18816M12 9.67759C13.0077 10.1336 13.9151 10.8767 14.6667 11.8333M1.33337 11.8333C2.63103 10.1817 4.39283 9.16667 6.33337 9.16667C8.27392 9.16667 10.0357 10.1817 11.3334 11.8333M9.33337 3.5C9.33337 5.15685 7.99023 6.5 6.33337 6.5C4.67652 6.5 3.33337 5.15685 3.33337 3.5C3.33337 1.84315 4.67652 0.5 6.33337 0.5C7.99023 0.5 9.33337 1.84315 9.33337 3.5Z"
        stroke="#373B5C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default UserIcon;
