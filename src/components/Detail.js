import React from "react";

export default function Detail({ detail }) {
  return (
    <div className="detail-box">
      <h1 className="text-bold text-large mb-1 title">{detail.title}</h1>
      <p className="text text-bold mb-0-5">
        <span>$</span>
        {detail.cost}
      </p>
      <p className="text">
        <span className="text text-bold">Project ID:</span> <span>#</span>
        {detail.projectId}
      </p>
      <p className="text">
        Located in<span className="text text-bold"> {detail.location}</span>
      </p>
      <p className="text">
        Managed By,<span className="text text-bold"> {detail.manager}</span>
      </p>
    </div>
  );
}

// Title
// ii Cost
// iii Location
// iv ProjectNumber
// v ProjectManager
