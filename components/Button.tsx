import cn from "classnames";
import styles from "./Button.module.css";

type Size = "sm" | "md" | "lg";
type Color = "primary" | "secondary" | string;

interface ButtonProps {
  size: Size;
  color: Color;
  children: React.ReactNode;
}

const Button = ({ size, color, children }: ButtonProps) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles["button--sm"]]: size === "sm",
        [styles["button--md"]]: size === "md",
        [styles["button--lg"]]: size === "lg",
        [styles["button--primary"]]: color === "primary",
        [styles["button--secondary"]]: color === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
