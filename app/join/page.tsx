"use client";
import { useState } from "react";
import { PageHead } from "@/components/ui";

export default function Join() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHead title="Don't Rent Your Career. Own It." sub="Join the agent-owned brokerage" />
      <section className="s"><div className="wrap" style={{ maxWidth: 560 }}>
        {done ? <p><b>Thanks! (demo — nothing was sent)</b></p> : (
          <form className="f grid" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input required placeholder="Full name" />
            <input type="email" required placeholder="Email" />
            <input placeholder="Phone" />
            <select defaultValue=""><option value="" disabled>Licensed in…</option><option>NY</option><option>NJ</option><option>CT</option><option>PA</option><option>FL</option></select>
            <textarea rows={4} placeholder="Tell us about yourself" />
            <button className="btn">Join The Movement</button>
          </form>
        )}
      </div></section>
    </>
  );
}
