import * as React from 'react';

function SvgBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998v0zM15 19a3 3 0 01-6 0"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2a2 2 0 012 2v1h-4V4a2 2 0 012-2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBell;
