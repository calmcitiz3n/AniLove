import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { selectAnimeById } from "../../store/entities/anime/selectors";
import { AnimeInfoContainer } from "../../containers/AnimeInfoContainer/AnimeInfoContainer";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const AnimePage = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Suspense
      fallback={
        <ClipLoader
          color="#00D8C4"
          loading={loading}
          size={450}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }
    >
      <Layout>
        <AnimeInfoContainer />
      </Layout>
    </Suspense>
  );
};
