import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducersIds } from "../../store/entities/producers/selectors";
import { loadProducers } from "../../store/entities/producers/thunk/loadProducers";
import { ProducersList } from "../../components/ProducersList/ProducersList";
export const ProducersListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadProducers();
    dispatch(loadFunction);
  }, []);
  const ids = useSelector((state) => selectProducersIds(state));
  return <ProducersList ids={ids} />;
};
