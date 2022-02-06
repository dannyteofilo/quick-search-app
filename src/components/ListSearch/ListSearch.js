import React from "react";

export const ListSearch = ({ options }) => {
  return (
    <div className="list-search">
      {options.length !== 0 && <h2>Results</h2>}
      <ul>
        {options.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};
