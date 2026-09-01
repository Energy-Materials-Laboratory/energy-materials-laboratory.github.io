import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import EmailCopyButton from "./EmailCopyButton";
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
            <EmailCopyButton email={site.footer.email} />
            <Link href="/contact">{site.footer.joinLabel} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="site-width footer-bottom">
          <span>{site.footer.copyright}</span>
          <Image
            className="footer-university-logo"
            src="/skku-signature-gray.svg"
            alt="Sungkyunkwan University"
            width={671}
            height={83}
          />
        </div>
      </footer>
    </>
  );
}
