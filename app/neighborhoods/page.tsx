import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, Ph } from "@/components/ui";
import { hoods } from "@/lib/data";

export const metadata: Metadata = { title: "Neighborhoods | FIND Real Estate" };

export default function Neighborhoods() {
  return (
    <>
      <PageHead title="Neighborhoods" sub="Explore the areas our agents know best" />
      <section className="s"><div className="wrap">
        {Object.entries(hoods).map(([state, list]) => (
          <div key={state}>
            <h2>{state}</h2>
            <div className="grid g4" style={{ marginBottom: 40 }}>
              {list.map((h, i) => (
                <Link className="card" href="/search" key={h}><Ph v={(i % 3) + 2} /><div className="body"><h3>{h}</h3></div></Link>
              ))}
            </div>
          </div>
        ))}
      </div></section>
    </>
  );
}
