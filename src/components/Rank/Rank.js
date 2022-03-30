import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 mb3">{`${name}, your current face count is...`}</div>
      <div className="white f1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;
