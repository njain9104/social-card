import React from "react";
import CompanyLogo from "./CompanyLogo";
import Footer from "./Footer";
import UserCard from "./UserCard";

const SocialCard = (props) => {
  const { heading } = props;
  return (
    <div>
      <CompanyLogo />
      <h1>{heading}</h1>
      <UserCard />
      <Footer />
    </div>
  );
};

export default SocialCard;
