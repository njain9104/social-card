import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  const { user } = props;
  const { name, photo } = user;

  return (
    <div className="userCard">
      <p className="userName">{name}</p>
      <img className="imageBox" src={photo} alt="" />
    </div>
  );
};

export default UserCard;
