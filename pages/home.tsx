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
        <section></section>
      </section>
    </MainPageLayout>
  );
};

export default HomePage;
