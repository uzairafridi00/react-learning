import React from "react";
import { Route, Link, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* A <Link> is use to define Navbar paths */}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>

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
