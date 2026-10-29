import Link from "next/link";
import { profile } from "@/data/profile";
export function Footer(){return <footer className="site-footer"><div className="page-shell footer-inner"><div><Link href="/" className="footer-name">Dhyey Sanghvi<span>.</span></Link><p>Cloud security. Thoughtful engineering.</p></div><div className="footer-links"><Link href="/resume">Resume</Link><a href={profile.contact.linkedin}>LinkedIn ↗</a><a href={profile.contact.github}>GitHub ↗</a><Link href="/contact">Contact</Link></div><p className="copyright">© {new Date().getFullYear()} Dhyey Sanghvi</p></div></footer>;}
