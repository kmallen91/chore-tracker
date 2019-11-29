import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ChoreCard from "./choreCard";
import {useHistory} from 'react-router-dom'

const ChoreList = (props) => {
  const [chores, setChores] = useState([]);
  const history = useHistory()
  const [isFetching, setFetching] = useState(false)

  useEffect(() => {
    axiosWithAuth()
      .get("/chores")
      .then(res => {
        console.log("response from chores get", res.data);
        setChores(res.data);
      })
      .catch(err => console.log("error from chores get", err));
  }, [isFetching]);

  const addChore = () => {
    history.push('/addchores')
  }

  return (
    <div className='card-list-container'>
      <button className='add-chore-button' onClick={addChore}>Add a Chore</button>
    <div className="cards">
      {chores.map(chore => (
        <ChoreCard
          key={chore.id}
          name={chore.name}
          due_date={chore.due_date}
          completed={chore.completed}
          points = {chore.points}
          isFetching = {isFetching}
          setFetching = {setFetching}
          chore = {chore}
          id = {chore.id}
        />
      ))}
    </div>
    </div>
  );
};

export default ChoreList;
