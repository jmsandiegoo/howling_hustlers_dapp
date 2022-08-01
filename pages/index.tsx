import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Text from "../components/Text";
import Button from "../components/Button";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <main className={`${styles.landingPage}`}>
      <Head>
        <title>Howling Hustlers</title>
      </Head>
      <section className={`container ${styles.landingPage__container}`}>
        <div className={`content ${styles.landingPage__content}`}>
          <div className={styles.landingPage__banner}>
            <Image
              src="/images/HH_Landing.png"
              alt="Howling Hustlers Landing Banner"
              width={1920}
              height={1526}
              layout="responsive"
            />
          </div>

          <Text variant="p" className={styles.landingPage__text}>
            Howling hustlers NFTs awaits. <br />
            Come and join the pack!
          </Text>
          <Button size="lg" color="primary">
            ENTER
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
