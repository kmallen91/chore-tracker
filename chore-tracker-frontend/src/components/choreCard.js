import React from "react";

export default function ChoreCard(props) {
  return (
    <div className="card-container">
      <div className="card-contents">
        {props.id}
        {props.name}
        {props.due_date}
        {props.completed}
        {props.created_at}
      </div>
    </div>
  );
}
