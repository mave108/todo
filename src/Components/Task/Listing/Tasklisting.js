import React from 'react';

const Tasklisting = (props) =>{
  
    return (
        <ul className="list-group">
            {props.tasks.map( task => <li className="list-group-item">{task.title}</li>  )}
        </ul> 
    );
}

export default Tasklisting;