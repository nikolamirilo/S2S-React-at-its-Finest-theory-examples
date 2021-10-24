import React from "react";
import User from "../Components/User";

const Home = () => {
  return (
    <div className="home">
      <User
        image="https://avatars.githubusercontent.com/u/53167193?v=4"
        name="Vladimir"
        bio="Student sam druge godine FON-a"
      />
      <User
        image="https://avatars.githubusercontent.com/u/59510666?v=4"
        name="Nikola"
        bio="Student sam trece godine FON-a"
      />
      <User name="Pera Peric" bio="Ja sam Pera Peric i ne idem na fakultet" />
    </div>
  );
};

export default Home;
