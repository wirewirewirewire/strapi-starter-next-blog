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
import styles from "./article.module.scss";
import components from "../../components/Blog/Mdx";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Cloudinary } from "cloudinary-core";
import urlGenerator from "../../components/Blog/lib/cloudinaryHelper";

const Article = ({ article, categories, mdxSource }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const content = hydrate(mdxSource, { components });

  const src = article.image.url.startsWith("/")
    ? process.env.API_URL + article.image.url
    : article.image.url;

  const { cloudName, name, isVideo } = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  const imageUrl = isVideo
    ? cl.video_url(name, {
        width: 620 * 3,
        crop: "pad",
        format: "jpg",
        protocol: "https:",
      })
    : cl.url(name, {
        width: 620 * 3,
        crop: "pad",
        format: "jpg",
        protocol: "https:",
      });

  return (
    <Layout categories={categories}>
      <NextSeo
        title={article.title}
        description={article.subtitle}
        //canonical="https://www.canonical.ie/"
        openGraph={{
          //url: "https://www.url.ie/a",
          title: article.title,
          description: article.subtitle,
          images: [
            {
              url: imageUrl,
              alt: article.image.alt,
            },
          ],
          site_name: process.env.APP_DOMAIN,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
        <a
          href={`/${
            process.env.APP_BLOG_FOLDER ? process.env.APP_BLOG_FOLDER : ""
          }`}
          className={styles.returnLink}
        >
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
