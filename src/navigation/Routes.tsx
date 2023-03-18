import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import Positions from "../components/positionsview/Positions";
import PokemonsView from "../components/pokemonsview/PokemonsView";
import ErrorPage from "./ErrorPage";

export interface MyRoute {
  path: string;
  name: string;
  component: ReactElement;
  hide: boolean;
}

const routes: MyRoute[] = [
  {
    path: "/",
    name: "index",
    component: <Navigate to="/public-apis" />,
    hide: true,
  },
  {
    path: "/public-apis",
    name: "PublicApis",
    component: <PokemonsView />,
    hide: false,
  },
  {
    path: "/positions",
    name: "Positions",
    component: <Positions />,
    hide: false,
  },
  {
    path: "/*",
    name: "ErrorPage",
    component: <ErrorPage />,
    hide: true,
  },
];

export default routes;
