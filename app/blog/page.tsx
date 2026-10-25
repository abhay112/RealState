import type { Metadata } from "next";
import { PageHead, PostCard } from "@/components/ui";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog & Resources | FIND Real Estate" };

export default function Blog() {
  return (
    <>
      <PageHead title="Blog & Resources" />
      <section className="s"><div className="wrap grid g3">{posts.map((p, i) => <PostCard key={p.date} p={p} i={i} />)}</div></section>
    </>
  );
}
