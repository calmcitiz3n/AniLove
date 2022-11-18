import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// React.createElement("div", {
//   id: "div1",
//   children: [
//     React.createElement("h1", { children: "Caramba!" }),
//     React.createElement("div", {å
//       id: "div2",
//       children: ["Rest1", "Rest2", "Rest3"].map((restaurantName) =>
//         React.createElement("div", { children: restaurantName })
//       ),
//     }),
//   ],
// });
