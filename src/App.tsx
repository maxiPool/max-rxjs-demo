import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes, { MyRoute } from "./navigation/Routes";
import Navbar from "./navigation/Navbar";

export const TWO_ROW_GRID = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  maxWidth: 600,
  gap: "1rem",
};

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <Navbar />
      <main style={{ paddingTop: "8px" }}>
        <Routes>
          {/* Here we define the routes available to the app, for the Navbar, go to Navbar component! */}
          {routes.map((r: MyRoute) => (
            <Route key={r.path} path={r.path} element={r.component} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
