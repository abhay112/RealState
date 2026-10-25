import type { Metadata } from "next";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Our Agents | FIND Real Estate" };

const why = [
  ["Certified Professionals", "Agents complete a rigorous certification process."],
  ["Locally Focused, Globally Minded", "Neighborhood knowledge with a broader market perspective."],
  ["Agent-Owned Brokerage", "Agents have a stake in their clients' success."],
  ["Flexible Support for All Needs", "Buying, selling, renting, or developing property."],
  ["Innovative Tools & Technology", "Tools for search, marketing, and transactions."],
];

function Filters() {
  return <div className="filters"><select><option>All Locations</option></select><select><option>All Specialties</option></select></div>;
}
function Agents({ n }: { n: number }) {
  return (
    <div className="grid g4">
      {Array.from({ length: n }, (_, i) => (
        <div className="card agent" key={i}><div className="av" /><h3>John Doe</h3><p><span className="stars">★★★★★</span> 80 reviews</p></div>
      ))}
    </div>
  );
}

export default function AgentsPage() {
  return (
    <>
      <PageHead title="Meet Our Agents" sub="Over 1,000 Agents Dedicated to Moving You Forward" />
      <section className="s"><div className="wrap center">
        <p className="lead">FIND has over 1,000 certified agents across many markets, offering local insight and personalized support.</p>
        <h2>Why Work with a FIND Agent?</h2>
        <div className="grid g3" style={{ textAlign: "left", marginTop: 24 }}>
          {why.map(([t, d]) => <div className="step" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div></section>
      <section className="s soft"><div className="wrap">
        <h2>Certified Agents</h2><Filters /><Agents n={7} />
        <h2 style={{ marginTop: 56 }}>More Agents</h2><Filters /><Agents n={18} />
      </div></section>
    </>
  );
}
