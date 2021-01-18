import React from "react";
import Articles from "../components/Blog/articles";
import Layout from "../components/Blog/layout";
import { getArticles, getCategories } from "../components/Blog/lib/api";
import styles from "./index.module.scss";

const Home = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <h1 className={styles.title}>
          Welcome ...I am still under construction but the projects are ready to
          see :)
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
    revalidate: 1,
  };
}

export default Home;
