"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import site from "../../content/site.json";
import { assetPath } from "../../lib/paths";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const isActive = (pathname: string, root: string) =>
  root === "/" ? pathname === "/" : pathname.startsWith(root);

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="institution-bar">
        <div className="site-width institution-inner">
          <span>{site.institution.university}</span>
          <span className="institution-divider" aria-hidden="true" />
          <span>{site.institution.department}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header-inner">
          <Link href="/" className="brand" aria-label={site.brand.homeAriaLabel}>
            <img
             className="brand-mark"
             src={assetPath("/images/eml-mark.svg")}
             alt=""
             aria-hidden="true"
            />
            <span className="brand-copy">
             <span className="brand-name">{site.brand.name}</span>
             <span className="brand-sub">{site.brand.subtitle}</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {(site.navigation as NavItem[]).map((item) =>
              item.children ? (
                <div className={`nav-group ${isActive(pathname, item.href) ? "active" : ""}`} key={item.href}>
                  <button type="button" aria-haspopup="true">{item.label} <span>⌄</span></button>
                  <div className="nav-menu">
                    {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
                  </div>
                </div>
              ) : (
                <Link className={isActive(pathname, item.href) ? "active" : ""} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <details className="mobile-nav">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <div className="mobile-menu">
              {(site.navigation as NavItem[]).map((item) =>
                item.children ? (
                  <Fragment key={item.href}>
                    <p>{item.label}</p>
                    {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
                  </Fragment>
                ) : (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                )
              )}
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
