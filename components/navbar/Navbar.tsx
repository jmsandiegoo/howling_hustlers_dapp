import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["main-navbar"]}>
      {/* TODO HH Logo */}
      <a></a>
      <div>
        <ul className={styles["main-navbar__links"]}>
          {[
            { label: "Home", pathName: "/home" },
            { label: "Mint", pathName: "/mint" },
            { label: "Collection", pathName: "/collection" },
          ].map((e, i) => {
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
          <li>Icon 1</li>
          <li>Icon 2</li>
          <li>Icon 3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
