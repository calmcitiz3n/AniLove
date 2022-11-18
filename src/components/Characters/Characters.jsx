import { ItemContainer } from "../../containers/ItemContainer/ItemContainer";
import styles from "./styles.module.css";
export const Characters = ({ ids }) => {
  return (
    <div className={styles.root}>
      {ids.map((id) => (
        <ItemContainer id={id} type="characters" />
      ))}
    </div>
  );
};
