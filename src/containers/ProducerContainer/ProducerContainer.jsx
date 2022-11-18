import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCharacterById } from "../../store/entities/characters/thunk/loadCharactersById";
import { selectProducersById } from "../../store/entities/producers/selectors";
import { Info } from "../../components/Info/Info";
export const ProducerContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadCharacterById(id);
    dispatch(loadFunction);
  }, []);
  const producerInfo = useSelector((state) =>
    selectProducersById(state, { id: id })
  );
  console.log(producerInfo);
  return (
    <Info
      img={producerInfo?.images?.jpg?.large_image_url}
      source={producerInfo?.source}
      title={producerInfo?.titles?.find((n) => n.type == "default")}
      titles={producerInfo?.titles} //more
      about={producerInfo?.about}
      established={Date.parse(producerInfo?.established)}
      videoPlayer="false"
    />
  );
};
