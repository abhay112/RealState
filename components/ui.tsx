import Link from "next/link";
import type { ReactNode } from "react";

export const Ph = ({ v = 1 }: { v?: number }) => <div className={"ph" + (v > 1 ? ` v${v}` : "")} />;
export const PageHead = ({ title, sub }: { title: string; sub?: string }) => (
  <section className="pagehead"><div className="wrap"><h1>{title}</h1>{sub && <p>{sub}</p>}</div></section>
);
export const Card = ({ v, title, children, href, cta, ghost }: { v: number; title: string; children?: ReactNode; href?: string; cta?: string; ghost?: boolean }) => (
  <div className="card"><Ph v={v} /><div className="body"><h3>{title}</h3>{children && <p>{children}</p>}
    {cta && <Link className={"btn sm" + (ghost ? " ghost" : "")} href={href ?? "#"}>{cta}</Link>}</div></div>
);
export const PostCard = ({ p, i }: { p: { title: string; date: string }; i: number }) => (
  <Link className="card" href="/blog"><Ph v={(i % 3) + 2} /><div className="body"><small style={{ color: "#5b6678" }}>{p.date}</small><h3>{p.title}</h3></div></Link>
);
