import type { Metadata } from "next";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Paperwork | FIND Real Estate" };

export default function Paperwork() {
  return (
    <>
      <PageHead title="Paperwork" sub="Forms and disclosures" />
      <section className="s"><div className="wrap grid g3">
        {["Fair Housing Notice", "Reasonable Accommodation Notice", "Operating Procedure"].map((t) => <div className="step" key={t}><h3>{t}</h3></div>)}
      </div></section>
    </>
  );
}
