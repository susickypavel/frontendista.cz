import * as React from "react";
import { AnchorLink } from "@components/common/link";

import styles from "./footer.module.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section>
          <h1>Pavel Susicky</h1>
          <p>
            Aspiring software engineer <br /> from Czech Republic.
          </p>
        </section>
        <section>
          <h1>Follow me</h1>
          <ul>
            <li>
              <AnchorLink href="https://github.com/thesoreon">GitHub</AnchorLink>
            </li>
            <li>
              <AnchorLink href="https://twitter.com/thesoreon">Twitter</AnchorLink>
            </li>
          </ul>
        </section>
        <section>
          <h1>Built with</h1>
          <ul>
            <li>
              <AnchorLink href="https://vercel.com">Vercel</AnchorLink>
            </li>
            <li>
              <AnchorLink href="https://sanity.io">Sanity</AnchorLink>
            </li>
            <li>
              <AnchorLink href="https://www.cloudflare.com/">Cloudflare</AnchorLink>
            </li>
            <li>
              <AnchorLink href="https://www.wedos.cz/">Wedos</AnchorLink>
            </li>
          </ul>
        </section>
        <section>
          <h1>Sitemap</h1>
          <ul>
            <li>
              <AnchorLink href="/">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="/about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="/blog">Blog</AnchorLink>
            </li>
            <li>
              <AnchorLink href="/contact">Contact</AnchorLink>
            </li>
          </ul>
        </section>
      </div>
      <span className={styles.copyrightNotice}>
        &copy; 2022, Pavel Sušický. All rights reserved.
      </span>
    </footer>
  );
};
