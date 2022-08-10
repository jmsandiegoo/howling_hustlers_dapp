import type { NextPage } from "next";
import Image from "next/image";
import MainPageLayout from "../components/layout/MainPageLayout";
import Button from "../components/common/Button";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  console.log(styles);
  return (
    <MainPageLayout>
      <section className="homepage">
        <section className={`container ${styles["homepage__landing"]}`}>
          <div className="content">
            <h1 className={`${styles["landing__main-header"]}`}>
              HOWLING
              <br />
              HUSTLERS
            </h1>
            <div className={`${styles["landing__message"]}`}>
              <p>Awooooh! Come and join the hustlers pack.</p>
              <Button size="lg" type="primary">
                MINT NOW
              </Button>
            </div>
            <div className={`${styles["landing__images"]}`}>
              {[
                "Landing_NFT1.jpg",
                "Landing_NFT2.jpg",
                "Landing_NFT3.jpg",
                "Landing_NFT4.jpg",
              ].map((image, index) => (
                <Image
                  className={`${styles["landing__image"]}`}
                  key={index}
                  src={`/images/${image}`}
                  alt="Howling Hustlers Landing Banner"
                  width={500}
                  height={500}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={`container ${styles["homepage__overview"]}`}>
          <div className="content">
            <h2 className={`${styles["overview__heading"]}`}>
              PROJECT OVERVIEW
            </h2>
            <p>
              Howling Hustlers is a wolf/hustler inspired NFT collection that
              consists of different traits. Our goal is to simply release cool
              looking art to our holders for them to collect and showcase.
            </p>
            <p>
              The collection consists of 2000 NFTs. Each NFT art is a wolf that
              is unique and programmatically generated with varying traits and
              rarity (expressions, headwear, clothing and more). These wolves
              are in a form of ERC-721 tokens and hosted through IPFS. Pre-sale
              and Public mint prices are 100 and 200 MATIC respectively
            </p>
          </div>
        </section>
        <section className={`container ${styles["homepage__team"]}`}>
          <div className="content">
            <h2 className={`${styles["team__heading"]}`}>
              <span>MEET</span>
              <br />
              <span>THE WOLF TEAM</span>
            </h2>
            <figure className={`${styles["team__member"]}`}>
              <Image
                className={`${styles["member__image"]}`}
                src={`/images/Landing_NFT1.jpg`}
                alt="Howling Hustlers Landing Banner"
                width={200}
                height={200}
              />
              <figcaption>
                <h3 className={`${styles["member__name"]}`}>JM SAN DIEGO</h3>
                <p className={`${styles["member__role"]}`}>Developer</p>
              </figcaption>
            </figure>
            <figure className={`${styles["team__member"]}`}>
              <Image
                className={`${styles["member__image"]}`}
                src={`/images/Landing_NFT2.jpg`}
                alt="Howling Hustlers Landing Banner"
                width={200}
                height={200}
              />
              <figcaption>
                <h3 className={`${styles["member__name"]}`}>BRENDAN ANG</h3>
                <p className={`${styles["member__role"]}`}>WEB3.0 Expert</p>
              </figcaption>
            </figure>
            <figure className={`${styles["team__member"]}`}>
              <Image
                className={`${styles["member__image"]}`}
                src={`/images/Landing_NFT4.jpg`}
                alt="Howling Hustlers Landing Banner"
                width={200}
                height={200}
              />
              <figcaption>
                <h3 className={`${styles["member__name"]}`}>YILIN</h3>
                <p className={`${styles["member__role"]}`}>Artist</p>
              </figcaption>
            </figure>
            <figure className={`${styles["team__member"]}`}>
              <Image
                className={`${styles["member__image"]}`}
                src={`/images/Landing_NFT3.jpg`}
                alt="Howling Hustlers Landing Banner"
                width={200}
                height={200}
              />
              <figcaption>
                <h3 className={`${styles["member__name"]}`}>SANDY KEE</h3>
                <p className={`${styles["member__role"]}`}>UI/UX Designer</p>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className={`container ${styles["homepage__faq"]}`}>
          <div className="content"></div>
        </section>
      </section>
    </MainPageLayout>
  );
};

export default HomePage;
