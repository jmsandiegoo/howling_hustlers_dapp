import {
  useState,
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import styles from "./Collapsible.module.css";

interface CollapsibleProps {
  headerContent: ReactNode;
  content: ReactNode;
}

interface CollapsibleContextType {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const CollapsibleContext = createContext<CollapsibleContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useCollapsibleContext = () => useContext(CollapsibleContext);

const Collapsible = (props: CollapsibleProps) => {
  const { headerContent, content } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <CollapsibleContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`collapsible ${styles["collapsible"]}`}>
        <h3 className={`${styles["collapsible__heading"]}`}>
          <dt onClick={() => setIsOpen((prev) => !prev)}>
            {headerContent}
            {isOpen ? (
              <Image
                src={`/images/Minus.png`}
                alt="Collapsible Icon"
                width={15}
                height={5}
              />
            ) : (
              <Image
                src={`/images/Add.png`}
                alt="Collapsible Icon"
                width={15}
                height={15}
              />
            )}
          </dt>
        </h3>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={{
            enter: styles["collapsible__content--enter"],
            enterActive: styles["collapsible__content--enter-active"],
            exitActive: styles["collapsible__content--exit-active"],
            exit: styles["collapsible__content--exit"],
          }}
          unmountOnExit
        >
          <dd className={`${styles["collapsible__content"]}`}>{content}</dd>
        </CSSTransition>
      </div>
    </CollapsibleContext.Provider>
  );
};

export default Collapsible;
