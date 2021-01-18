import React from "react";
import Layout from "../components/Blog/Layout";
import { getCategories } from "../components/Blog/lib/api";
import styles from "./contact.module.scss";

const contact = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <h3 className={styles.head}>.....</h3>
      <table className={styles.Mail}>
        <tr>
          <td>
            {" "}
            <a href="melanie.gloeckler@gmail.com">E-Mail</a>{" "}
          </td>
        </tr>
      </table>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return {
    props: { categories },
    revalidate: 1,
  };
}

export default contact;
