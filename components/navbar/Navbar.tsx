import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import styles from "./Navbar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { screenBreakpoints } from "../../constants";

const Navbar = () => {
  const windowSize: Size = useWindowSize();
  const menuOptions = [
    { label: "Home", pathName: "/home" },
    { label: "Mint", pathName: "/mint" },
    { label: "Collection", pathName: "/collection" },
  ];

  return (
    <nav className={styles["main-navbar"]}>
      {/* TODO HH Logo */}
      <Link href="/home">
        <a className={styles["main-navbar__logo"]}>
          <Image
            src="/images/HH_Logo.png"
            alt="Howling Hustlers Logo"
            width={54}
            height={48}
          />
        </a>
      </Link>
      {/* Nav menu for tablets and up */}
      {!windowSize.width ||
        (windowSize.width >= screenBreakpoints.md && (
          <div className={styles["main-navbar__menu"]}>
            <ul className={styles["main-navbar__links"]}>
              {menuOptions.map((e, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {}}
                    // className={
                    //   location.pathname === e.pathName ? "active" : undefined
                    // }
                  >
                    <Link href={e.pathName}>
                      <a>
                        <Button size="sm" type="menu">
                          {e.label}
                        </Button>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={styles["main-navbar__socials"]}>
              <li>
                <a href="https://discord.com/" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/DiscordLogo.png"
                    alt="Howling Hustlers Discord Button Image"
                    // width={25}
                    // height={20}
                    width={20}
                    height={15}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/InstagramLogo.png"
                    alt="Howling Hustlers Instagram Button Image"
                    width={20}
                    height={18}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/TwitterLogo.png"
                    alt="Howling Hustlers Twitter Button Image"
                    width={20}
                    height={15}
                  />
                </a>
              </li>
            </ul>
            <Button size="lg" type="primary">
              CONNECT
            </Button>
          </div>
        ))}
      {/* Nav menu for Mobile */}
      {windowSize.width && windowSize.width <= screenBreakpoints.md && (
        <>
          <div className={styles["main-navbar__hamburger"]}>
            <span className={styles["hamburger__bar1"]}></span>
            <span className={styles["hamburger__bar2"]}></span>
            <span className={styles["hamburger__bar3"]}></span>
          </div>
          <div className={styles["main-navbar__overlay"]}>
            <ul>
              {menuOptions.map((e, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {}}
                    // className={
                    //   location.pathname === e.pathName ? "active" : undefined
                    // }
                  >
                    <Link href={e.pathName}>
                      <a>{e.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
