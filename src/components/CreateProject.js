import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateProject() {
  const histroy = useHistory();
  const [project, setProject] = useState({
    cost: 0,
    title: "",
    location: "",
    projectManager: "",
  });

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  function sendProject(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8090/projects/add/", {
        ...project,
        cost: parseFloat(project.cost),
      })
      .then((res) => {
        console.log(res.data);
        histroy.push("/");
      })
      .catch((err) => err.response);
  }
  return (
    <form className="form">
      <h2 className="form-heading">PROJECT FORM</h2>
      <p className="label" type="Title:">
        <input
          placeholder="Write the title"
          name="title"
          value={project.title}
          onChange={handleChange}
        ></input>
      </p>
      <p className="label" type="Cost:">
        <input
          type="number"
          placeholder="How much will it cost?"
          name="cost"
          value={project.cost}
          onChange={handleChange}
        ></input>
      </p>
      <p className="label" type="Location:">
        <input
          placeholder="What is the location"
          name="location"
          value={project.location}
          onChange={handleChange}
        ></input>
      </p>
      <p className="label" type="Project Manager:">
        <input
          placeholder="Who is managing the project?"
          name="projectManager"
          value={project.projectManager}
          onChange={handleChange}
        ></input>
      </p>
      <button className="forn-btn" onClick={sendProject}>
        Send Request
      </button>
    </form>
  );
}
