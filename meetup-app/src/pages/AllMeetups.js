import React from "react";
import MeetupList from "../components/layouts/meetups/MeetupList";

function AllMeetups() {
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "m2",
      title: "This is a second meetup",
      image:
        "https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_960_720.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ];
  return (
    <div>
      <h1>AllMeetups</h1>
      {/* Arrays are rendered Correctly by React using Tags */}
      {/* {[<li>Item1</li>, <li>Item2</li>]} */}
      {/* {DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>;
      })} */}
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default AllMeetups;
