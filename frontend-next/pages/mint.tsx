import { SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import MainPageLayout from "components/layout/MainPageLayout";
import styles from "styles/Mint.module.css";
import Button from "components/common/Button";

const MintPage: NextPage = () => {
  const [mintAmount, setMintAmount] = useState<number>(1);

  const addMintAmount = (e: SyntheticEvent): void => {
    e.preventDefault();
    setMintAmount((prev) => prev + 1);
  };

  const subMintAmount = (e: SyntheticEvent): void => {
    e.preventDefault();
    setMintAmount((prev) => prev - 1);
  };

  return (
    <MainPageLayout>
      <section className={`container ${styles["mintpage"]}`}>
        <div className="content">
          <div className={`${styles["mintpage__card"]}`}>
            <h2 className={`${styles["card__heading"]}`}>MINT NFT</h2>
            <p className={`${styles["card__mint-count"]}`}>0 / 10000 Minted</p>
            <p className={`${styles["card__address"]}`}>0x12...451</p>
            <div className={`${styles["card__chip"]}`}>PUBLIC SALE</div>
            <form className={`${styles["card__form"]}`}>
              <div className={`${styles["form__input-group"]}`}>
                <Button
                  size="lg"
                  type="primary"
                  handleClick={subMintAmount}
                  otherClassNames={{ [styles["input-group__btn"]]: true }}
                >
                  -
                </Button>
                <input
                  type="number"
                  value={mintAmount}
                  onChange={(e) => setMintAmount(parseInt(e.target.value))}
                />
                <Button
                  size="lg"
                  type="primary"
                  handleClick={addMintAmount}
                  otherClassNames={{ [styles["input-group__btn"]]: true }}
                >
                  +
                </Button>
              </div>
              <div className={`${styles["form__price"]}`}>
                <span>
                  Total Cost <a>?</a>
                </span>{" "}
                <span>10 MATIC</span>
              </div>
              <div className={`${styles["form__action"]}`}>
                <Button size="lg" type="primary">
                  Mint
                </Button>
              </div>
            </form>
          </div>
          <aside className={`${styles["mintpage__gif"]}`}>
            <Image
              src={`/images/Mint_GIF.gif`}
              alt="NFT Preview Gif"
              width={200}
              height={200}
              layout="responsive"
            />
          </aside>
        </div>
      </section>
    </MainPageLayout>
  );
};

export default MintPage;
