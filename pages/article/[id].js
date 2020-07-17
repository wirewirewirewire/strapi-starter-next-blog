import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import Layout from "../../components/layout";
import styles from "./article.module.scss";

const Article = ({ article, categories }) => {
  const imageUrl = article.image.url.startsWith("/")
    ? process.env.API_URL + article.image.url
    : article.image.url;

  const thumbnail = imageUrl.replace(
    "image/upload",
    "image/upload/t_article_2x"
  );

  return (
    <Layout categories={categories}>
      <img
        id="banner"
        className={styles.hero}
        src={thumbnail}
        srcSet={thumbnail}
      />
      <h1>{article.title}</h1>
      <div className={styles.content}>
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} />
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = (await getArticles()) || [];
  return {
    paths: articles.map((article) => ({
      params: {
        id: article.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = (await getArticle(params.id)) || [];
  const categories = (await getCategories()) || [];
  return {
    props: { article, categories },
    unstable_revalidate: 1,
  };
}

export default Article;
