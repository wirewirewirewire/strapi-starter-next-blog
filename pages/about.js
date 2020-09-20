import React from "react";
import Layout from "../components/layout";
import { getCategories } from "../lib/api";
import styles from "./about.module.scss";
import stylesArticle from "./article/article.module.scss";

const About = ({ categories }) => {
  return (
    <Layout categories={categories}>
      {/*<div className={stylesArticle.content}> */}
      <h3 className={styles.container}>Education</h3>
      <table className={styles.timelineTable}>
        <tr>
          <td>2019-2021</td>
          <td>Royal College of Art - MA Service Design | London</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>
            London Business School MBA programme elective, Business Model
            Experiments: Ideation to Prototyping | London
          </td>
        </tr>
        <tr>
          <td>2012-2017</td>
          <td>
            Burg Giebichenstein University of Art and Design - BA Industrial
            Design | Halle Saale
          </td>
        </tr>
        <tr>
          <td>2016</td>
          <td>
            D-School Hasso Plattner Institute - Design Thinking Basic Track |
            Potsdam
          </td>
        </tr>
      </table>

      <h3 className={styles.container}>Work - Experience</h3>
      <table className={styles.timelineTable}>
        <tr>
          <td>10/2018 - 09/2019 </td>
          <td>
            Burg Giebichenstein University of Art and Design Artistic associate
            Glass & Ceramic Department | Halle Saale
          </td>
        </tr>

        <tr>
          <td>04/2019 - 07/2019</td>
          <td>
            Magdeburg-Stendal University of Applied Sciences Visiting lecturer -
            Department of Engineering and Industrial Design - ID
          </td>
        </tr>

        <tr>
          <td>09/2016 - 02/2017</td>
          <td>BMW Automobile Colour & Trim Internship | FIZ München </td>
        </tr>
      </table>

      <h3 className={styles.container}>Exhibitions</h3>
      <table className={styles.timelineTable}>
        <tr>
          <td>2020</td>
        </tr>
        <tr>
          <td>Plant Fever - Grand Hornu Belgium "marine cotton"</td>
        </tr>

        <tr>
          <td>2019</td>
        </tr>
        <tr>
          <td>Reine Formsache - Porzellanikon "héritage"</td>
        </tr>

        <tr>
          <td>2018</td>
        </tr>
        <tr>
          <td>FuoriSalone "marine cotton"</td>
        </tr>
        <tr>
          <td>LODZ Design Festival "marine cotton"</td>
        </tr>

        <tr>
          <td>2016</td>
        </tr>
        <tr>
          <td>Staged/ room + style Dresden "héritage"</td>
        </tr>
        <tr>
          <td>Ambiente Frankfurt "héritage"</td>
        </tr>
        <tr>
          <td>68. internationale Handwerksmesse München "héritage"</td>
        </tr>
        <tr>
          <td>
            Grassi Museum for applied art Leipzig included "trial error &" in
            the permanent collection
          </td>
        </tr>
        <tr>
          <td>Bauhaus Dessau "peripher"</td>
        </tr>
        <tr>
          <td>Bienal de Diseño 2016 La Habana Cuba "trial error &"</td>
        </tr>

        <tr>
          <td>2015</td>
        </tr>
        <tr>
          <td>100 % Paper - Designhaus Halle "bunt geschöpftes"</td>
        </tr>
        <tr>
          <td>Hallesche Formen - Galerie Vermittlungsstelle b "héritage"</td>
        </tr>
        <tr>
          <td>Marta Herford "bunt geschöpftes"</td>
        </tr>
        <tr>
          <td>Designers Open "trial error &"</td>
        </tr>
        <tr>
          <td>Marta Herford "bunt geschöpftes"</td>
        </tr>
        <tr>
          <td>Kunststiftung des Landes Sachsen Anhalt "trial error &"</td>
        </tr>
        <tr>
          <td>Bauhaus Dessau "trial error &"</td>
        </tr>
      </table>

      <h3 className={styles.container}>Awards</h3>
      <table className={styles.timelineTable}>
        <tr>
          <td>2020</td>
        </tr>
        <tr>
          <td>Grand Challenge Logitech x Cern: Special Award </td>
        </tr>

        <tr>
          <td>2019</td>
        </tr>
        <tr>
          <td>Designblok - Ahoj future! Prague </td>
        </tr>

        <tr>
          <td>2017</td>
        </tr>
        <tr>
          <td>TISDC (Taiwan International Student Design Competition) 2017</td>
        </tr>

        <tr>
          <td>2016</td>
        </tr>
        <tr>
          <td>Staged Design Award</td>
        </tr>
        <tr>
          <td>Talente 2016 - Handwerkskammer München </td>
        </tr>
        <tr>
          <td>Glas Design Wettbewerb - Glasmanufaktur Harzkristall</td>
        </tr>

        <tr>
          <td>2015</td>
        </tr>
        <tr>
          <td>Recycling Designpreis</td>
        </tr>
        <tr>
          <td>Giebichenstein Designpreis</td>
        </tr>
        <tr>
          <td>
            {" "}
            <a href="https://www.burg-halle.de/design/industriedesign/produktdesign-keramik-und-glasdesign/aktuelles/a/franz-award-2015-international-porcelain-design-competition-in-peking/">
              Franz Award
            </a>{" "}
          </td>
        </tr>

        {/*</div>*/}
      </table>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return {
    props: { categories },
    unstable_revalidate: 1,
  };
}

export default About;
