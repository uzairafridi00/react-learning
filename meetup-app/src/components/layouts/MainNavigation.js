import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>Meetups</div>
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
    </header>
  );
}

export default MainNavigation;
