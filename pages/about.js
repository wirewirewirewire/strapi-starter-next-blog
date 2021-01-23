import { faPaperPlane, faFileUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../components/Blog/Layout";
import { getCategories } from "../components/Blog/lib/api";
import styles from "./about.module.scss";
import stylesArticle from "./article/article.module.scss";

const About = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <p>
            Melanie studied her BA in Industrial Design at the Burg
            Giebichenstein in Germany and Design Thinking at the HPI d.school
            before she joined the RCA Service Design program in 2019.
          </p>

          <p>
            Throughout her education, she always had a strong interest in
            materials & technologies. Fascinated how these advancements ever
            since shaped the human environment and humanity itself, her work
            sought to explore different intersections, pushed boundaries and
            tried to rethink current approaches or create multiple futures with
            and through means of technological use. Her latest project FIAAI
            takes a different perspective and designs in the realm of policy for
            technology.{" "}
            {/*On a professional level, she got the chance to intern in
            automobility for BMW and worked in design education before
            transitioning with a DAAD scholarship to the RCA in London. Her work
            got exhibited in Museums and Design Festivals in Germany, Poland,
            Belgium, Italy, China and Cuba.*/}
          </p>
          <div className={styles.buttons}>
            <a href="#">
              <FontAwesomeIcon icon={faPaperPlane} size="xs" />
              Get in touch
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFileUser} size="xs" />
              Download my CV
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src="./MelanieGloeckler.jpg" />
        </div>
      </div>
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

          <td>Plant Fever - Grand Hornu Belgium "marine cotton"</td>
        </tr>

        <tr>
          <td>2019</td>

          <td>Reine Formsache - Porzellanikon Germany "héritage"</td>
        </tr>

        <tr>
          <td>2018</td>

          <td>
            FuoriSalone Milan "marine cotton"
            <br />
            LODZ Design Festival Poland "marine cotton"
          </td>
        </tr>

        <tr>
          <td>2016</td>

          <td>
            Staged/ room + style Dresden "héritage"
            <br />
            Ambiente Frankfurt "héritage"
            <br />
            Talente - 68. internationale Handwerksmesse München "héritage"
            <br />
            Grassi Museum for applied art Leipzig included "trial error &" in
            the permanent collection
            <br />
            Bauhaus Dessau "peripher"
            <br />
            Bienal de Diseño 2016 La Habana Cuba "trial error &"
            <br />
          </td>
        </tr>

        <tr>
          <td>2015</td>

          <td>
            100 % Paper - Designhaus Halle "bunt geschöpftes"
            <br />
            Hallesche Formen - Galerie Vermittlungsstelle b "héritage"
            <br />
            Marta Herford "bunt geschöpftes"
            <br />
            Designers Open "trial error &"
            <br />
            Kunststiftung des Landes Sachsen Anhalt "trial error &"
            <br />
            Bauhaus Dessau "trial error &"
          </td>
        </tr>
      </table>

      <h3 className={styles.container}>Awards</h3>
      <table className={styles.timelineTable}>
        <tr>
          <td>2020</td>

          <td>Grand Challenge Logitech x Cern: Special Award </td>
        </tr>

        <tr>
          <td>2019-2021</td>

          <td>
            DAAD scholarship - Jahresstipendien für Studienaufenthalte im
            Ausland{" "}
          </td>
        </tr>

        <tr>
          <td>2019</td>

          <td>Designblok - Ahoj future! Prague </td>
        </tr>

        <tr>
          <td>2017</td>

          <td>TISDC (Taiwan International Student Design Competition) 2017</td>
        </tr>

        <tr>
          <td>2016</td>

          <td>
            Staged Design Award
            <br />
            Talente 2016 - Handwerkskammer München
            <br />
            Glas Design Wettbewerb - Glasmanufaktur Harzkristall
          </td>
        </tr>

        <tr>
          <td>2015</td>

          <td>
            Recycling Designpreis
            <br />
            Giebichenstein Designpreis
            <br />
            <a href="https://www.burg-halle.de/design/industriedesign/produktdesign-keramik-und-glasdesign/aktuelles/a/franz-award-2015-international-porcelain-design-competition-in-peking/">
              Franz Award 1st price
            </a>{" "}
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

export default About;
