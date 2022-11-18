import React, { ReactElement } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ flex: "0 1 auto" }}>{children}</div>
      <Footer />
    </>
  );
};
