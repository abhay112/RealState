import Link from "next/link";
import { hoods } from "@/lib/data";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
            <Logo light />
            <p><b>Head Office</b><br />5 West 37th Street, 12th Floor<br />New York, NY 10018
              <a href="mailto:hello@findrealestate.com">hello@findrealestate.com</a>
              <a href="tel:+12129949965">+1 212 994 9965</a></p>
            <p><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">LinkedIn</a></p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link href="/search">Search</Link><Link href="/agents">Agents</Link><Link href="/join">Join</Link>
            <Link href="/about">About Us</Link><a href="#">Agent Portal</a>
          </div>
          <div className="hoods">
            {Object.entries(hoods).map(([state, list]) => (
              <div key={state}><h4>{state}</h4>{list.map((h) => <Link key={h} href="/neighborhoods">{h}</Link>)}</div>
            ))}
          </div>
        </div>
        <div className="legal">
          <span>Housing Choice Vouchers Welcome · Se Aceptan Vales de Elección de Vivienda</span>
          <span><a href="#">Terms</a> · <a href="#">Privacy Policy</a> · <a href="#">Fair Housing Notice</a> · <a href="#">Reasonable Accommodation Notice</a> · <a href="#">Operating Procedure</a> · <a href="#">Press</a></span>
          <span>© 2026 FIND Real Estate</span>
        </div>
      </div>
    </footer>
  );
}
