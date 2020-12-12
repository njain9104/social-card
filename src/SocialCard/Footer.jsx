import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const { heading, subHeading, link } = props;
  const { name, value } = link;

  return (
    <div className="footer">
      <p className="heading">{heading}</p>
      <p className="subHeading">{subHeading}</p>
      <a className="link" href={value} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default Footer;
