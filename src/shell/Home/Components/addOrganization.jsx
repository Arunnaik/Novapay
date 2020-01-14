import React, { useState } from "react";

export const AddOrganization = props => {
  const [organization, add] = useState("");

  const addOrganization = value => {
    if (organization && organization.length) {
      const filterOrganization = props.organization.filter(
        item => item === value
      );
      if (filterOrganization && filterOrganization.length === 0) {
        props.addOrganization(value);
      } else {
        alert("organization name already exist");
      }
    }
  };
  return (
    <div className="addOrganization">
      <input
        type="text"
        onChange={e => add(e.target.value)}
        placeholder="Enter github Organization"
      />
      <button onClick={addOrganization.bind(null, organization)}>
        Add Organization
      </button>
    </div>
  );
};
