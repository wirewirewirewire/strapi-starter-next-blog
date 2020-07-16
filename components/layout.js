import Head from "next/head";
import Nav from "./nav";
import styles from "./layout.module.scss";

const Layout = ({ children, categories }) => (
  <>
    <Head>
      <title>Strapi blog</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches"
      />
    </Head>
    <div className={styles.layout}>
      <Nav categories={categories} />
      {children}
    </div>
  </>
);

export default Layout;
