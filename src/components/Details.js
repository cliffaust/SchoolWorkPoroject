import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import axios from "axios";

export default function Details() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8090/projects/");
        setState(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);
  // useEffect(() => {
  //   setState([
  //     {
  //       title: "Migrating to Django",
  //       cost: 2192,
  //       projectId: 23455,
  //       location: "Madina",
  //       manager: "Kwesi Mattew",
  //     },
  //     {
  //       title: "Changing Cloud Server",
  //       cost: 192,
  //       projectId: 3401,
  //       location: "Accra",
  //       manager: "Anthony Frank",
  //     },
  //     {
  //       title: "AWS bucket to Store Images",
  //       cost: 1102,
  //       projectId: 455,
  //       location: "Madina",
  //       manager: "Kwesi Mattew",
  //     },
  //     {
  //       title: "Change Image Rendering Algorithm",
  //       cost: 5400,
  //       projectId: 39051,
  //       location: "Tema",
  //       manager: "John Aboaji",
  //     },
  //     {
  //       title: "Improving UI/UX Design",
  //       cost: 3100,
  //       projectId: 247736,
  //       ocation: "Airpod City",
  //       manager: "Peggy Jean",
  //     },
  //     {
  //       title: "Backend Design",
  //       cost: 4670,
  //       projectId: 657736,
  //       ocation: "Tema",
  //       manager: "Sylvia Dan",
  //     },
  //   ]);
  // }, []);
  return (
    <>
      {!loading ? (
        <div className="details-box">
          {state.map((detail, index) => (
            <Detail detail={detail} key={index}></Detail>
          ))}
        </div>
      ) : (
        <div className="text text-bold">Loding...</div>
      )}
    </>
  );
}
