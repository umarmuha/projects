import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import AmChart from "./AmChart";
import AmChartAxes from "./AmChartAxis";
import ThemeContext from "./ThemeContext";
// import DetailsFunc from "./DetailsFunc";

const App = () => {
  const themeHook = useState("darkblue");
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Adpot Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel"
  //     }),
  //     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  //   );

  // ::JSX format:: now converting app.js
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            <AmChart path="/amchart" />
            <AmChartAxes path="/amchartaxis" />
          </Router>
          {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
