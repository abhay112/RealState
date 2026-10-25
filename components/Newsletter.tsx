"use client";
import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  if (done) return <p><b>Thanks! (demo — nothing was sent)</b></p>;
  return (
    <form className="news" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input type="email" required placeholder="Email address" />
      <button className="btn">Subscribe</button>
    </form>
  );
}
