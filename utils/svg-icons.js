import * as React from "react";

function IconPersonCircle(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-7a7 7 0 00-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 008 1z"
      />
    </svg>
  );
}

function IconContacts(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M20 0H4v2h16V0M4 24h16v-2H4v2M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2m-8 2.75A2.25 2.25 0 0114.25 9 2.25 2.25 0 0112 11.25 2.25 2.25 0 019.75 9 2.25 2.25 0 0112 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
    </svg>
  );
}

function IconEducation(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
    </svg>
  );
}

function IconHealthBookLine(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3a1 1 0 011-1h14zm-1 2H7v16h12V4zm-5 4v3h3v2h-3.001L14 16h-2l-.001-3H9v-2h3V8h2z" />
    </svg>
  );
}

export { IconPersonCircle, IconContacts, IconEducation, IconHealthBookLine };
