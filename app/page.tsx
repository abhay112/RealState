import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { Card, Ph, PostCard } from "@/components/ui";
import { posts, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <h1>Find What Moves You</h1>
        <p>Expert agents. Real guidance. A clear path to find what&apos;s next.</p>
        <Link className="btn" href="/search">Find Properties</Link>
      </div></section>

      <section className="s center"><div className="wrap">
        <h2>Why FIND</h2>
        <p className="lead">We help people move forward with clarity — and the right agent by their side.</p>
        <div className="video">▶</div>
      </div></section>

      <section className="s soft"><div className="wrap center">
        <h2>This isn&apos;t just about real estate.</h2>
        <div className="grid g4" style={{ margin: "28px 0" }}>{[1, 2, 3, 4].map((v) => <Ph key={v} v={v} />)}</div>
        <p className="lead">It&apos;s about identity, progress, and alignment — finding a place that reflects who you are and where you&apos;re going.</p>
      </div></section>

      <section className="s center"><div className="wrap">
        <h2>Real Estate, Rewired.</h2>
        <div className="grid g3" style={{ margin: "28px 0 32px", textAlign: "left" }}>
          {[["01", "Talk to a Real Human", "Get matched with an expert agent who listens."],
            ["02", "Get Clarity", "Understand your needs, options, and budget."],
            ["03", "Move Forward", "Go after the property that fits your life."]].map(([n, t, d]) => (
            <div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
        <Link className="btn" href="/search">Start Your Search</Link>
      </div></section>

      <section className="s dark"><div className="wrap grid g2" style={{ alignItems: "center" }}>
        <Ph v={4} />
        <div>
          <h2>Don&apos;t Rent Your Career. Own It.</h2>
          <p className="lead" style={{ marginLeft: 0 }}>At FIND, agents can earn equity in the brokerage they help build — with the support, tools, and leadership to grow.</p>
          <Link className="btn" href="/join">Join The Movement</Link>
        </div>
      </div></section>

      <section className="s soft"><div className="wrap">
        <h2 className="center">What Our Clients Say</h2>
        <div className="grid g3" style={{ marginTop: 28 }}>
          {testimonials.map((t) => (
            <div className="quote" key={t.name}><div className="stars">★★★★★</div><p>{t.text}</p><small>{t.name}</small></div>
          ))}
        </div>
      </div></section>

      <section className="s center"><div className="wrap">
        <h2>How FIND Can Help You</h2>
        <div className="grid g3" style={{ margin: "28px 0 32px", textAlign: "left" }}>
          <Card v={1} title="Buy" href="/search" cta="Get Started">Over 10,000 transactions of experience guiding buyers home.</Card>
          <Card v={2} title="Sell" href="/search" cta="Get Started">Smart pricing and marketing to get you the best result.</Card>
          <Card v={3} title="Rent" href="/search" cta="Get Started">Find the right rental with agents who know the market.</Card>
        </div>
        <Link className="btn" href="/search">Get Started with FIND</Link>
      </div></section>

      <section className="s soft center"><div className="wrap">
        <h2>Support Beyond Buying and Selling</h2>
        <p style={{ marginBottom: 28 }}><a className="btn" href="#">Discover Our Services</a></p>
        <div className="grid g3" style={{ textAlign: "left" }}>
          <Card v={4} title="Mortgage Services" cta="Learn More" ghost>Financing guidance from application to closing.</Card>
          <Card v={3} title="Property Management" cta="Learn More" ghost>Hands-off management for owners and investors.</Card>
          <Card v={2} title="Construction and Real Estate Development" cta="Learn More" ghost>From concept to completion.</Card>
        </div>
      </div></section>

      <section className="s center"><div className="wrap">
        <h2>Blog &amp; Resources</h2>
        <div className="grid g3" style={{ margin: "28px 0 32px", textAlign: "left" }}>
          {posts.map((p, i) => <PostCard key={p.date} p={p} i={i} />)}
        </div>
        <Link className="btn" href="/blog">Visit Our Blog</Link>
      </div></section>

      <section className="s cta"><div className="wrap">
        <h2>Find You. We&apos;ll Help You Get There.</h2>
        <Link className="btn" href="/join">Let&apos;s Get Started</Link>
        <p style={{ marginTop: 36 }}><b>Subscribe to our Newsletter!</b></p>
        <Newsletter />
      </div></section>
    </>
  );
}
