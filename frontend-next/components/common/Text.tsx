type variant = "h1" | "h2" | "h3" | "p";

interface TextProps {
  variant: string;
  className: string;
  children: React.ReactNode;
}

const Text = ({ variant = "p", className, children }: TextProps) => {
  if (variant === "h1") return <h1 className={className}>{children}</h1>;
  else if (variant === "h2") return <h2 className={className}>{children}</h2>;
  else return <p className={className}>{children}</p>;
};

export default Text;
