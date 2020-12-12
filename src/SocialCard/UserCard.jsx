import React from "react";

const UserCard = (props) => {
  const { userName, userPhoto } = props;
  return (
    <div>
      <div>{userName}</div>
      <div>
        <img src={userPhoto} alt={userName} />
      </div>
    </div>
  );
};

export default UserCard;
