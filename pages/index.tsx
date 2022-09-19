import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import styles from "./index.module.css";
import Link from "next/link";

const LandingPage: NextPage = () => {
  return (
    <main className={`${styles["landing-page"]}`}>
      <Head>
        <title>Howling Hustlers</title>
      </Head>
      <section className={`container ${styles["landing-page__container"]}`}>
        <div className={`content ${styles["landing-page__content"]}`}>
          <div className={styles["landing-page__banner"]}>
            <Image
              src="/images/HH_Landing.png"
              alt="Howling Hustlers Landing Banner"
              width={1920}
              height={1526}
              layout="responsive"
            />
          </div>

          <Text variant="p" className={styles["landing-page__text"]}>
            Howling hustlers NFTs awaits. <br />
            Press enter to learn more!
          </Text>
          <Link href="/home" passHref>
            <a>
              <Button size="lg" type="primary">
                ENTER
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
