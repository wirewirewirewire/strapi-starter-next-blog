import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import { getArticles, getCategories } from "../lib/api";
import styles from "./index.module.scss";

const Home = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <h1 className={styles.title}>
          Welcome to Melanies Webseite lorem ipsum dolor et jomen bin sulamen et
          jamen.
        </h1>
        <Articles articles={articles} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = (await getArticles()) || [];
  const categories = (await getCategories()) || [];
  return {
    props: { articles, categories },
    unstable_revalidate: 1,
  };
}

export default Home;
