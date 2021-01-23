import React from "react";
import Layout from "../components/Blog/Layout";
import { getCategories } from "../components/Blog/lib/api";
import Wrapper from "../components/Blog/Mdx/Wrapper";
import styles from "./about.module.scss";

const About = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <Wrapper>
        {/*<div className={stylesArticle.content}> */}
        <h1>Impressum</h1>
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          Melanie Glöckler
          <br />
          Sonnenhalde 12
          <br />
          88630 Pfullendorf
          <br />
          Berufsbezeichnung: Service Designer
        </p>
        <h3>Kontakt:</h3>
        E-Mail: melanie.gloeckler@gmail.com
        <br />
        Verantwortlich für den Inhalt nach § 55 Abs. 2<br />
        RStV: Melanie Glöckler Sonnenhalde 12 88630 Pfullendorf
        <h2>Haftungsausschluss:</h2>
        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h3>Datenschutz</h3>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
        </p>
        <p>Last updated: January 01, 2020</p>
        <p>
          The information contained on www.melaniegloeckler.com website (the
          "Service") is for general information purposes only.
        </p>
        <p>
          Melanie Glöckler assumes no responsibility for errors or omissions in
          the contents on the Service.
        </p>
        <p>
          In no event shall Melanie Glöckler be liable for any special, direct,
          indirect, consequential, or incidental damages or any damages
          whatsoever, whether in an action of contract, negligence or other
          tort, arising out of or in connection with the use of the Service or
          the contents of the Service. Melanie Glöckler reserves the right to
          make additions, deletions, or modification to the contents on the
          Service at any time without prior notice.
        </p>
        <p>
          Melanie Glöckler does not warrant that the website is free of viruses
          or other harmful components.
        </p>
        <h3>External links disclaimer:</h3>
        <p>
          www.melaniegloeckler.com website may contain links to external
          websites that are not provided or maintained by or in any way
          affiliated with Melanie Glöckler.
        </p>
        <p>
          Please note that Melanie Glöckler does not guarantee the accuracy,
          relevance, timeliness, or completeness of any information on these
          external websites.
        </p>
      </Wrapper>
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
