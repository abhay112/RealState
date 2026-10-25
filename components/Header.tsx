"use client";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/data";

export function Logo({ light }: { light?: boolean }) {
  return <Link className="logo" href="/" style={light ? { color: "#fff" } : undefined}>FIN<span>D</span></Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site">
      <div className="wrap">
        <Logo />
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={"main" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <a className="btn sm" href="#">Sign In</a>
        </nav>
      </div>
    </header>
  );
}
