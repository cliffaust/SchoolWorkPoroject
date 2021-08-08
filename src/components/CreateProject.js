import React from "react";

export default function CreateProject() {
  return (
    <form class="form">
      <h2 className="form-heading">PROJECT FORM</h2>
      <p className="label" type="Title:">
        <input placeholder="Write the title"></input>
      </p>
      <p className="label" type="Cost:">
        <input type="number" placeholder="How much will it cost?"></input>
      </p>
      <p className="label" type="Location:">
        <input placeholder="What is the location"></input>
      </p>
      <p className="label" type="Project Manager:">
        <input placeholder="Who is managing the project?"></input>
      </p>
      <button className="forn-btn">Send Request</button>
    </form>
  );
}
