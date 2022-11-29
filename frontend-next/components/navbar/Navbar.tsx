import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import styles from "./Navbar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { screenBreakpoints } from "../../constants";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectKitButton } from "connectkit";
// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const Navbar = () => {
  const { address, isConnected } = useAccount();
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const windowSize: Size = useWindowSize();
  const menuOptions = [
    { label: "Home", pathName: "/home" },
    { label: "Mint", pathName: "/mint" },
    { label: "Collection", pathName: "/collection" },
  ];

  const toggleOverlayMenu = (): void => {
    setIsOverlayOpen((prevIsOverlayOpen) => !prevIsOverlayOpen);
  };

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
            {/* <Button size="lg" type="primary" handleClick={toggleWalletModal}>
              {isConnected ? address : "Connect"}
            </Button> */}
            <ConnectKitButton.Custom>
              {({ isConnected, show, ensName, truncatedAddress }) => {
                return (
                  <Button size="lg" type="primary" handleClick={show}>
                    {isConnected ? ensName ?? truncatedAddress : "CONNECT"}
                  </Button>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        ))}
      {/* Nav menu for Mobile */}
      {windowSize.width && windowSize.width <= screenBreakpoints.md && (
        <>
          <div>
            <ConnectKitButton.Custom>
              {({ isConnected, show, ensName, truncatedAddress }) => {
                return (
                  <Button size="sm" type="primary" handleClick={show}>
                    {isConnected ? ensName ?? truncatedAddress : "CONNECT"}
                  </Button>
                );
              }}
            </ConnectKitButton.Custom>
            <div
              className={styles["main-navbar__hamburger"]}
              onClick={toggleOverlayMenu}
            >
              <span
                className={cn({
                  [styles["hamburger__bar1"]]: true,
                  [styles["hamburger__bar1--active"]]: isOverlayOpen,
                })}
              ></span>
              <span
                className={cn({
                  [styles["hamburger__bar2"]]: true,
                  [styles["hamburger__bar2--active"]]: isOverlayOpen,
                })}
              ></span>
              <span
                className={cn({
                  [styles["hamburger__bar3"]]: true,
                  [styles["hamburger__bar3--active"]]: isOverlayOpen,
                })}
              ></span>
            </div>
          </div>

          <CSSTransition
            in={isOverlayOpen}
            timeout={500}
            classNames={{
              enter: styles["main-navbar__overlay--enter"],
              enterActive: styles["main-navbar__overlay--enter-active"],
              exitActive: styles["main-navbar__overlay--exit-active"],
              exit: styles["main-navbar__overlay--exit"],
            }}
            unmountOnExit
          >
            <div className={`${styles["main-navbar__overlay"]}`}>
              <ul className={styles["overlay__links"]}>
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
              <ul className={styles["overlay__socials"]}>
                <li>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/TwitterLogo.png"
                      alt="Howling Hustlers Twitter Button Image"
                      width={20}
                      height={15}
                    />
                  </a>
                </li>
              </ul>
              <small className={styles["overlay__copyright"]}>
                Copyright 2022 Howling Hustlers
              </small>
            </div>
          </CSSTransition>
        </>
      )}
    </nav>
  );
};

export default Navbar;
