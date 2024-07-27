import React from "react";
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Aayush" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Personal finance management made easy"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
