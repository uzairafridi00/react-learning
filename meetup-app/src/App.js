import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import NotFound from "./pages/NotFound";

// Components
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element={<AllMeetups />} />
        <Route exact path="/new-meetup" element={<NewMeetup />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
