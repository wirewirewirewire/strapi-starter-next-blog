import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import Layout from "../../components/layout";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import styles from "./article.module.scss";
import Media from "../../components/media";
import Flex from "../../components/flex";

function Video({ id, height }) {
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
  Flex,
  img: Media,
};

const Article = ({ article, categories, mdxSource }) => {
  //"image/upload/t_article_2x"

  //res.cloudinary.com/dokwe6qe2/image/upload/ac_none,c_fill,h_192,w_520/du_3/sample.mp4

  const content = hydrate(mdxSource, components);
  console.log("Article", article);

  return (
    <Layout categories={categories}>
      {/*<img
        id="banner"
        className={styles.hero}
        src={thumbnail}
        srcSet={thumbnail}
      />*/}
      <div className={styles.content}>
        <div className={styles.meta}>
          {article.meta.map((e) => (
            <div className={styles.metaEntry}>
              <div className={styles.metaTitle}>{e.title}:</div>
              <div className={styles.metaContent}>{e.content}</div>
            </div>
          ))}
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        {article.subtitle && (
          <h2 className={styles.subTitle}>{article.subtitle}</h2>
        )}
        <div className="wrapper">{content}</div>
        {/*Hello
        <ReactMarkdown source={article.content} />*/}
        <p>
          <Moment format="MMM Do YYYY">{article.published_at}</Moment>
        </p>

        <div className={styles.partner}>
          {article.meta.map((e) => (
            <div className={styles.partnerEntry}>
              {e.image && (
                <img src={e.image.url} alt={e.image.alternativeText} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.articleFooter}>
          <a href="/" className={styles.returnLink}>
            return to projects
          </a>
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

  // mdx text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await renderToString(article.content, components);

  return {
    props: { article, categories, mdxSource },
    unstable_revalidate: 1,
  };
}

export default Article;
