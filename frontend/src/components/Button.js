// Button.js
import React from "react";
import { Link } from "react-router-dom";

export default function Button({ to, text }) {
  return (
    <Link to={to}>
      <button type="button" className="w-100 btn-lg">
        {text}
      </button>
    </Link>
  );
}
