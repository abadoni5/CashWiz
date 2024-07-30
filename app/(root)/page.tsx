import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  const loggedIn = { firstName: "Aayush" , lastName: "Singh", email: "aayush@gmail.com" };
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

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={14543}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 150.15}, {currentBalance: 200.15}]}
      />
    </section>
  );
};

export default Home;
