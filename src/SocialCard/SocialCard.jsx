import React from "react";
import CompanyBox from "./CompanyBox";
import Footer from "./Footer";
import UserCard from "./UserCard";
import "./SocialCard.css";

const SocialCard = (props) => {
  const { heading } = props;
  const link = {
    name: "React Practice Projects",
    value: "https://daveceddia.com/react-practice-projects/",
  };

  const user = {
    name: "Ajay Jain",
    photo: "35.jpg",
  };

  return (
    <div className="socialCard">
      <CompanyBox companyName="Ajay Jain" />
      <h1>{heading}</h1>
      <UserCard user={user} />
      <Footer
        heading="Learning React? Start Small."
        subHeading="Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps"
        link={link}
      />
    </div>
  );
};

export default SocialCard;
