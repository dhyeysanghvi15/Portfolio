"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [["/", "Overview"], ["/experience", "Experience"], ["/projects", "Projects"], ["/skills", "Skills"], ["/education", "Education"], ["/contact", "Contact"]];
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">ds<span>.</span></span><span>Dhyey Sanghvi<small>Cybersecurity & cloud security</small></span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? "Close menu" : "Menu"}</button>
    <nav id="primary-navigation" aria-label="Primary navigation" className={open ? "navigation is-open" : "navigation"}>
      {links.map(([href,label]) => <Link key={href} href={href} aria-current={(href === "/" ? pathname === href : pathname.startsWith(href)) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/resume" className="nav-resume" onClick={() => setOpen(false)}>Resume ↗</Link>
    </nav>
  </div></header>;
}
