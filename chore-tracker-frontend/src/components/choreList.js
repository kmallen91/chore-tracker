import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ChoreCard from "./choreCard";

const ChoreList = () => {
  const [chores, setChores] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/chores")
      .then(res => {
        console.log("response from chores get", res.data);
        setChores(res.data);
      })
      .catch(err => console.log("error from chores get", err));
  }, []);

  return (
    <div className="cards">
      {chores.map(chore => (
        <ChoreCard
          key={chore.chore_id}
          name={chore.name}
          due_date={chore.due_date}
          completed={chore.completed}
        />
      ))}
    </div>
  );
};

export default ChoreList;
