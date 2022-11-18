import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import styles from "./styles.module.css";
import { ItemContainer } from "../../containers/ItemContainer/ItemContainer";
import { PageNavigationContainer } from "../../containers/PageNavigationContainer/PageNavigationContainer";
export const AnimeList = ({ ids }) => {
  return (
    <div className={styles.root}>
      {ids.map((id) => (
        <ItemContainer id={id} />
      ))}
      <PageNavigationContainer />
    </div>
  );
};
// props = animes
export const AnimeListWithMemo = React.memo(AnimeList);
