import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { PageHead, Ph } from "@/components/ui";
import { team } from "@/lib/data";

export const metadata: Metadata = { title: "About | FIND Real Estate" };

const apart = [
  ["Agent-Owned and Client-Focused", ""],
  ["Certified Agents with Local Expertise", ""],
  ["Flexible Membership Plans", "An alternative to traditional commission models."],
  ["Innovative Tools and Technology", ""],
];
const values = ["Positive Culture", "Honesty and Integrity", "Respect and Empathy", "Embracing Change", "Exceptional Service"];

export default function About() {
  return (
    <>
      <PageHead title="Our Mission: Moving You Forward in Real Estate" sub="A brokerage that makes every step positive for clients and agents." />
      <section className="s"><div className="wrap grid g2" style={{ alignItems: "center" }}>
        <div className="grid g2"><Ph /><Ph v={2} /></div>
        <div><h2>Who We Are</h2><p>FIND is a client-centered, agent-owned brokerage built on innovative tools and genuine support for over 1,000 agents.</p></div>
      </div></section>
      <section className="s soft"><div className="wrap center">
        <h2>What Sets FIND Apart</h2>
        <div className="grid g4" style={{ textAlign: "left", marginTop: 24 }}>
          {apart.map(([t, d]) => <div className="step" key={t}><h3>{t}</h3>{d && <p>{d}</p>}</div>)}
        </div>
      </div></section>
      <section className="s"><div className="wrap center">
        <h2>Meet the FIND Team</h2>
        <div className="grid g3" style={{ margin: "24px 0" }}>
          {team.map(([n, r]) => <div className="card agent" key={n}><div className="av" /><h3>{n}</h3><p>{r}</p></div>)}
        </div>
        <Link className="btn" href="/agents">Learn More About Our Agents</Link>{" "}
        <Link className="btn ghost" href="/join">Join Our Team</Link>
      </div></section>
      <section className="s soft"><div className="wrap center">
        <h2>Our Core Values</h2>
        <div className="grid g3" style={{ marginTop: 24, textAlign: "left" }}>
          {values.map((v) => <div className="step" key={v}><h3>{v}</h3></div>)}
        </div>
        <p style={{ marginTop: 36 }}><b>Subscribe to our Newsletter!</b></p>
        <Newsletter />
      </div></section>
    </>
  );
}
