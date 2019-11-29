import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axiosWithAuth from '../utils/axiosWithAuth';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ChoreModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);



    const [add, setAdd] = React.useState({
        id: props.id,
        name:'',
        due_date:'',
        completed: false,
        points:''
    })

    React.useEffect(()=>{
        setAdd(props.chore)
        console.log('modal use effect', props.chore)
  
    }, [props.open])
   
    const handleChange = e => {
        setAdd({
           [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = () =>{
      const updatedChore = {
          ...props.chore,
          id: props.id, 
          name: add.name,
          due_date: add.due_date,
          completed: add.completed,
          points: add.points
      }     
      props.setFetching(true)    
      axiosWithAuth()
          .put('/chores', updatedChore)
          .then (res =>{
              if (res.status === 201){
                  props.setFetching(false)                  
                  console.log(res)
              }
              props.handleClose()
          })
          .catch(err => console.log(err))          
         
    }

  return (
    <div>      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit your Chore</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' name='name'  value={add.name} onChange={handleChange} />
            <input type='date' name='due_date'  value={add.due_date} onChange={handleChange} />
            <input type='checkbox' name='completed'  value={add.completed} onChange={handleChange} />
            <input type='number' name='points'  value={add.points} onChange={handleChange} />
            
            

          </form>
           
          <button onClick={handleSubmit}> Submit </button>         
        </div>
      </Modal>
    </div>
  );
}