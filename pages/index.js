import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import { getArticles, getCategories } from "../lib/api";

const Home = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        {/*<h1>Melanies Webseite</h1>*/}
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
