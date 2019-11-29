import React from "react";
import * as moment from 'moment'
import ChoreModal from './choreModal'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function ChoreCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleDelete = () => {
    props.setFetching(true)
    axiosWithAuth()
      .delete(`/chores/${props.id}`)      
      .then(res=>{
        props.setFetching(false)
        
      })
      .catch(err=> console.log('this is from the catch,', err))
  }
  return (
    <div className="card-container">
      <div className="card-contents">
        
        Chore: {props.name} <br/>
        Complete by: {moment(props.due_date).format('MM/DD/YYYY')} <br/>
        Completed? {props.completed} <br/>
        Points: {props.points} <br />

        <button onClick={handleOpen}>Edit</button>
        {open && <ChoreModal id={props.id} handleClose={handleClose} open={open} chore={props.chore} isFetching={props.isFetching} setFetching={props.setFetching} />}
        <button onClick={handleDelete}>Delete</button>
        
      </div>
    </div>
  );
}
