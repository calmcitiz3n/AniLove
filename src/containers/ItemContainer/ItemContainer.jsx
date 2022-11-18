import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Item } from "../../components/Item/Item";
import { selectAnimeById } from "../../store/entities/anime/selectors";
import { selectCharactersById } from "../../store/entities/characters/selectors";
import { selectMangaById } from "../../store/entities/manga/selectors";
import { Link } from "react-router-dom";
import { selectProducersById } from "../../store/entities/producers/selectors";

export const ItemContainer = ({ id, type }) => {
  const tagId = nanoid();
  // const dataManga = useSelector((state) => selectMangaById(state, { id: id }));
  const dataAnime = useSelector((state) => selectAnimeById(state, { id: id }));
  // const dataCharacters = useSelector((state) =>
  //   selectCharactersById(state, { id })
  // );
  // const dataProducers = useSelector((state) =>
  //   selectProducersById(state, { id: id })
  // );

  //

  return (
    <Link to={`${id}`} style={{ textDecoration: "none" }}>
      <Item
        img={dataAnime?.images?.jpg?.image_url}
        title={dataAnime?.title}
        year={dataAnime?.year}
        episodes={dataAnime?.episodes}
        rating={dataAnime?.rating}
        id={id}
        key={tagId}
        type="anime"
      />
    </Link>
  );
};

// if (type === "manga") {
//   return (
//     <Link to={`/manga/${id}`} style={{ textDecoration: "none" }}>
//       <Item
//         img={dataManga?.images?.jpg?.image_url}
//         title={dataManga?.title}
//         year={dataManga?.year}
//         episodes={dataManga?.chapters}
//         rating={dataManga?.rating}
//         id={id}
//         key={tagId}
//         type="manga"
//       />
//     </Link>
//   );
// }
// if (type === "producers") {
//   return (
//     <Link to={`/producers/${id}`} style={{ textDecoration: "none" }}>
//       <Item
//         img={dataProducers?.images?.jpg?.image_url}
//         title={dataProducers?.titles[0]?.title}
//         year={dataProducers?.year}
//         episodes={dataProducers?.chapters}
//         rating={dataProducers?.rating}
//         id={id}
//         key={tagId}
//         type="manga"
//       />
//     </Link>
//   );
// }
// if (type === "characters") {
//   return (
//     <Link to={`/characters/${id}`} style={{ textDecoration: "none" }}>
//       <Item
//         img={dataCharacters?.images?.jpg?.image_url}
//         title={dataCharacters?.name}
//         id={id}
//         key={tagId}
//         // about={dataCharacters?.about}
//         type="characters"
//       />
//     </Link>
//   );
// }
