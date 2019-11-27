import React from "react";

export default function ChoreCard(props) {
  return (
    <div className="card-container">
      <div className="card-contents">
        {props.id}
        Chore: {props.name} <br/>
        Complete by: {props.due_date} <br/>
        Completed? {props.completed} <br/>
        
      </div>
    </div>
  );
}
