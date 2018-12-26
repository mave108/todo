import React from 'react';

const Tasklisting = (props) =>{
   
    const doneCmoponent = (id)=>{
       return (
           
              <span class="badge badge-success"
                    style={{cursor:"pointer",marginLeft:"10px"}}
                    onClick={()=>props.doneHandler(id)}>
                Mark Completed</span>
            
       )
    }

    return (
        <ul className="list-group">
            {props.tasks.map( (task) =>{
                return (
                    <li style={task.done?{textDecoration:"line-through"}:null} 
                        key={task.id} 
                        className="list-group-item"                        
                        >
                        <span style={{wordBreak:"break-all"}}>{task.title}</span>                         
                        <span onClick={()=>props.deleteHandler(task.id)} 
                              className="float-right close">X</span>{' '}
                              {!task.done && doneCmoponent(task.id)}
                    </li>
                )
            })}
        </ul> 
    );
}

export default Tasklisting;