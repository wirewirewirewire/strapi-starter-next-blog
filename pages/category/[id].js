import Articles from "../../components/blog/Articles";
import { getCategory, getCategories } from "../../components/Blog/lib/api";
import Layout from "../../components/Blog/Layout";

const Category = ({ category, categories }) => {
  return (
    <Layout categories={categories}>
      <h1>{category.name}</h1>
      <Articles articles={category.articles} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = (await getCategories()) || [];
  return {
    paths: categories.map((category) => ({
      params: {
        id: category.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await getCategory(params.id)) || [];
  const categories = (await getCategories()) || [];
  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
