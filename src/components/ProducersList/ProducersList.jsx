import { ItemContainer } from "../../containers/ItemContainer/ItemContainer";
import styles from "./styles.module.css";
export const ProducersList = ({ ids }) => {
  return (
    <div className={styles.root}>
      {ids.map((id) => (
        <ItemContainer id={id} type="producers" />
      ))}
    </div>
  );
};
