import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className={styles.navbar} data-uk-navbar>
        <div>
          <a className={styles.logo} href="/">
            Melanie Glöckler
          </a>
        </div>

        <div>
          <ul className={styles.navbarLinks}>
            <li>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
