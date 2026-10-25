import type { Metadata } from "next";
import { PageHead, Ph } from "@/components/ui";

export const metadata: Metadata = { title: "Search | FIND Real Estate" };
const areas = ["Williamsburg", "Astoria", "Chelsea", "Upper West Side", "Hoboken", "Jersey City"];

export default function Search() {
  return (
    <>
      <PageHead title="Find Properties" sub="Search homes and rentals across NY, NJ, CT, Philadelphia and Miami" />
      <section className="s"><div className="wrap">
        <form className="sbar">
          <input placeholder="City, neighborhood or address" />
          <select><option>Buy</option><option>Rent</option><option>Sell</option></select>
          <select><option>Any price</option><option>Under $500k</option><option>$500k–$1M</option><option>$1M+</option></select>
          <button className="btn" type="button">Search</button>
        </form>
        <div className="grid g3">
          {areas.map((n, i) => (
            <div className="card listing" key={n}><Ph v={(i % 3) + 2} /><div className="body">
              <span className="price">${(450 + i * 130) * 1000}</span><b>{n}</b>
              <p>{i + 1} bd · {1 + (i % 2)} ba · {700 + i * 140} sqft</p></div></div>
          ))}
        </div>
        <p className="center" style={{ color: "#5b6678", marginTop: 24 }}>Sample listings for demonstration only.</p>
      </div></section>
    </>
  );
}
