import React, { useState} from "react";

import "./Filter.styles.css";

const Filter = ({ activeFilter, setActiveFilter,monitorFilterActivity }) => {
  const handleActiveFilter = (newFilterState) => {
    setActiveFilter(newFilterState);
    // monitorFilterActivity(newFilterState)
  };
  return (
    <div className="filterContainer">
      <span
        className="filterChip"
        style={{
          backgroundColor: activeFilter === "all" ? "#146C94" : "#19A7CE",
        }}
        onClick={() => handleActiveFilter("all")}
      >
        All
      </span>
      <span
        className="filterChip"
        style={{
          backgroundColor: activeFilter === "byId" ? "#146C94" : "#19A7CE",
        }}
        onClick={() => handleActiveFilter("byId")}
      >
        By ID
      </span>
      <span
        className="filterChip"
        style={{
          backgroundColor: activeFilter === "add" ? "#146C94" : "#19A7CE",
        }}
        onClick={() => handleActiveFilter("add")}
      >
        Add
      </span>
      <span
        className="filterChip"
        style={{
          backgroundColor: activeFilter === "delete" ? "#146C94" : "#19A7CE",
        }}
        onClick={() => handleActiveFilter("delete")}
      >
        Delete
      </span>
      <span
        className="filterChip"
        style={{
          backgroundColor: activeFilter === "update" ? "#146C94" : "#19A7CE",
        }}
        onClick={() => handleActiveFilter("update")}
      >
        Update
      </span>
    </div>
  );
};

export default Filter