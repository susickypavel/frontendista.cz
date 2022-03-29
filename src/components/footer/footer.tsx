import * as React from "react";

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
            <li>GitHub</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section>
          <h1>Build with</h1>
          <ul>
            <li>Vercel</li>
            <li>Sanity</li>
          </ul>
        </section>
        <section>
          <h1>Sitemap</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
      <span className={styles.copyrightNotice}>
        &copy; 2022, Pavel Sušický. All rights reserved.
      </span>
    </footer>
  );
};
