import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
const Home = React.lazy(() => import("./routes/home"));
const Game = React.lazy(() => import("./routes/game"));
const LeaderBoard = React.lazy(() => import("./routes/leaderBoard"));
//const Topic = React.lazy(() => import("./routes/home"));
function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/game"
          element={
            <Suspense fallback={<Loading />}>
              <Game />
            </Suspense>
          }
        />
        <Route
          path="/leaderBoard"
          element={
            <Suspense fallback={<Loading />}>
              <LeaderBoard />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
