import Link from "next/link";
import Header from "./Header";
import site from "../../content/site.json";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-width footer-grid">
          <div>
            <p className="footer-brand">{site.footer.labName}</p>
            <p>{site.footer.groupName}</p>
          </div>
          <div>
            <p className="footer-label">{site.footer.visitLabel}</p>
            <p>{site.footer.room}</p>
            <p>{site.footer.location}</p>
          </div>
          <div>
            <p className="footer-label">{site.footer.connectLabel}</p>
            <a href={`mailto:${site.footer.email}`}>{site.footer.email}</a>
            <Link href="/contact">{site.footer.joinLabel} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="site-width footer-bottom">
          <span>{site.footer.copyright}</span>
          <span>{site.footer.affiliation}</span>
        </div>
      </footer>
    </>
  );
}
