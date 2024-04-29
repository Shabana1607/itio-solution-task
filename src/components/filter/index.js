import React from "react";

const FilterButton = ({ options, selectedFilter, setSelectedFilter, label }) => {
  return (
    <div>
      {/* <label>{label}:</label> */}
      <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="">All {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterButton;
