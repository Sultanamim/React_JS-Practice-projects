import React from "react";

export default function Button({ link, text }) {
  return (
    <a href={link} target="blank" rel="noreferrer">
      {text}
    </a>
  );
}
