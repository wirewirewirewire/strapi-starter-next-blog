import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import {
  getArticles,
  getArticle,
  getCategories,
} from "../../components/Blog/lib/api";
import Layout from "../../components/Blog/Layout";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { MDXProvider } from "@mdx-js/react";
import styles from "./article.module.scss";
import Media from "../../components/Blog/Mdx/Media";
import Flex from "../../components/Blog/Mdx/Flex";
import { useRouter } from "next/router";

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

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const content = hydrate(mdxSource, { components });

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
              <div className={styles.metaTitle}>{e.title}</div>
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
      </div>
      <div className={styles.articleFooter}>
        <a href="/" className={styles.returnLink}>
          return to projects
        </a>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = (await getArticles()) || [];
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = (await getArticle(params.slug)) || [];
  const categories = (await getCategories()) || [];
  const mdxSource = await renderToString(article.content, { components });

  return {
    props: { article, categories, mdxSource },
    revalidate: 1,
  };
}

export default Article;
