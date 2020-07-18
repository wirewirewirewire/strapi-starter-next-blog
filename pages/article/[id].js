import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import Layout from "../../components/layout";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import styles from "./article.module.scss";

function Video({ id, height }) {
  console.log("height", height);
  return (
    <div className={styles.videoWrapper}>
      <div
        className={styles.video}
        style={height && { paddingBottom: `${height}%` }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}?showinfo=0&rel=0&color=white`}
          width="560"
          height="315"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

const components = {
  Video,
  img: (props) => <img {...props} />,
};

const Article = ({ article, categories, mdxSource }) => {
  const image = article.detailimage ? article.detailimage : article.image;
  const imageUrl = image.url.startsWith("/")
    ? process.env.API_URL + image.url
    : image.url;

  const thumbnail = imageUrl.replace(
    "image/upload",

    "image/upload/ac_none,c_fill,h_1000,w_1800/du_3"
  );

  //"image/upload/t_article_2x"

  //res.cloudinary.com/dokwe6qe2/image/upload/ac_none,c_fill,h_192,w_520/du_3/sample.mp4

  const content = hydrate(mdxSource, components);

  return (
    <Layout categories={categories}>
      {/*<img
        id="banner"
        className={styles.hero}
        src={thumbnail}
        srcSet={thumbnail}
      />*/}
      <div className={styles.content}>
        <h1>{article.title}</h1>
        {article.subtitle && <h2>{article.subtitle}</h2>}
        <div className="wrapper">{content}</div>
        {/*Hello
        <ReactMarkdown source={article.content} />*/}
        <p>
          <Moment format="MMM Do YYYY">{article.published_at}</Moment>
        </p>
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

  // mdx text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await renderToString(article.content, components);

  return {
    props: { article, categories, mdxSource },
    unstable_revalidate: 1,
  };
}

export default Article;
