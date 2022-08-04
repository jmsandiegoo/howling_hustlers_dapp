import cn from "classnames";
import styles from "./Button.module.css";
import type { otherClassNames } from "../../types";

type Size = "sm" | "md" | "lg";
type Type = "primary" | "secondary" | string;

interface ButtonProps {
  size: Size;
  type: Type;
  otherClassNames?: otherClassNames;
  children: React.ReactNode;
}

const Button = ({ size, type, otherClassNames, children }: ButtonProps) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles["button--sm"]]: size === "sm",
        [styles["button--md"]]: size === "md",
        [styles["button--lg"]]: size === "lg",
        [styles["button--primary"]]: type === "primary",
        [styles["button--secondary"]]: type === "secondary",
        [styles["button--menu"]]: type === "menu",
        ...otherClassNames,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
