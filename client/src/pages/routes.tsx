import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./HomePage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
    </Route>
  )
);
