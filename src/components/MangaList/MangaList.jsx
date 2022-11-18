import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import React from "react";
import { selectMangaIds } from "../../store/entities/manga/selectors";
import { ItemContainer } from "../../containers/ItemContainer/ItemContainer";

export const MangaList = ({ ids }) => {
  return (
    <div className={styles.root}>
      {ids.map((id) => (
        <ItemContainer id={id} type="manga" />
      ))}
    </div>
  );
};
export const MangaListWithMemo = React.memo(MangaList);
