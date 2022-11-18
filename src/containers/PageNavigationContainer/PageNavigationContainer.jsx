import { PageNavigation } from "../../components/PageNavigation/PageNavigation";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectAnimeLastPage } from "../../store/entities/anime/selectors";
export const PageNavigationContainer = () => {
  const pageLastNumber = useSelector((state) => selectAnimeLastPage(state));
  const arrayPages = useCallback(
    (pageLastNumber) => Array.from({ length: pageLastNumber }, (v, x) => x + 1),
    [pageLastNumber]
  );

  return <PageNavigation arrayPages={arrayPages()} />;
};
