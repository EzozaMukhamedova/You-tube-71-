import React, { Suspense } from "react";
import { Routes, Route } from "react-router";

import MainPage from "../pages/MainPage/mainPage";
import Video from "../pages/Video";

const AboutHome = React.lazy(() => import("../pages/AboutHome/index"));
//videoni ham lazy qil

const Router = () => (
  <div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/aboutHome"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutHome />
          </Suspense>
        }
      />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
  </div>
);

export default Router;
