import React from "react";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";
import { AnimesPage } from "./pages/AnimesPage/AnimesPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { AnimePage } from "./pages/AnimePage/AnimePage";
import { MangasPage } from "./pages/MangasPage/MangasPage";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import { MangaPage } from "./pages/MangaPage/MangaPage";
import { ProducersPage } from "./pages/ProducersPage/ProducersPage";
import { ProducerPage } from "./pages/ProducerPage/ProducerPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="animes/page/:pageNumber"
            element={<AnimesPage />}
          ></Route>
          <Route path="anime/:id" element={<AnimePage />}></Route>
          {/* <Route path="manga" element={<MangasPage />} />
          <Route path="manga/:id/" element={<MangaPage />}></Route>
          <Route path="producers" element={<ProducersPage />} />
          <Route path="producers/:id/" element={<ProducerPage />} />
          <Route path="characters" element={<CharactersPage />}></Route>
          <Route path="characters/:id/" element={<CharacterPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
