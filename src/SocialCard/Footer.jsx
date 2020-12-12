import React from "react";

const Footer = (props) => {
  const { heading, subHeading, link } = props;
  return (
    <div>
      <p>{heading}</p>
      <p>{subHeading}</p>
      <p>{link}</p>
    </div>
  );
};

export default Footer;
