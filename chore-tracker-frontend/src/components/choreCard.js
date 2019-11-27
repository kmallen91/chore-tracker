import React from "react";
import * as moment from 'moment'

export default function ChoreCard(props) {
  return (
    <div className="card-container">
      <div className="card-contents">
        {props.id}
        Chore: {props.name} <br/>
        Complete by: {moment(props.due_date).format('MM/DD/YYYY')} <br/>
        Completed? {props.completed} <br/>
        
      </div>
    </div>
  );
}
