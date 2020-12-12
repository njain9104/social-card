import React from "react";
import "./CompanyBox.css";

const CompanyBox = (props) => {
  const { companyName } = props;
  return <div className="companyBox">{companyName}</div>;
};

export default CompanyBox;
