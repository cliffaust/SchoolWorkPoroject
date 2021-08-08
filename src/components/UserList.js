import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(6);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      );
      setState(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const indexOfLastPage = currentPage * userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;
  const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);

  const firstPage = () => {
    setCurrrentPage(1);
  };

  const lastPage = () => {
    const numPages = Math.ceil(users.length / userPerPage);
    setCurrrentPage(numPages);
  };

  const nextPage = () => {
    const numPages = Math.ceil(users.length / userPerPage);
    if (numPages > currentPage) {
      setCurrrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    const numPages = Math.ceil(users.length / userPerPage);
    if (numPages > currentPage && currentPage > 1) {
      setCurrrentPage(currentPage - 1);
    }
  };
  return (
    <div className="details-container">
      {!loading ? (
        <div className="details-mainbox">
          <div className="details-box">
            {currentUsers.map((user, index) => (
              <div key={index} className="detail-box">
                <div className="name text-bold text-large mb-1">
                  {user.first} {user.last}
                </div>
                <div className="name text">{user.email}</div>
                <div className="name text">{user.adress}</div>
                <div className="name text">{user.created}</div>
                <div className="name text">
                  Balance of <span className="text-bold">{user.balance}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <button onClick={firstPage} className="btn">
              First
            </button>
            <button onClick={prevPage} className="btn">
              Prev
            </button>
            <div className="page text text-bold">{currentPage}</div>
            <button onClick={nextPage} className="btn">
              Next
            </button>
            <button onClick={lastPage} className="btn">
              Last
            </button>
          </div>
        </div>
      ) : (
        <div className="text text-bold">Loding...</div>
      )}
    </div>
  );
}
