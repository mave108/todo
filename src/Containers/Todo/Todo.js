import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Tasklisting from '../../Components/Task/Listing/Tasklisting';
import Addtask from '../../Components/Task/Add/Addtask';

class Todo extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
           tasks:[
               {
                   title: "First Task"
               }
           ],
           newTask: ''
        }
        this.addTaskSubmitHandler = this.addTaskSubmitHandler.bind(this);
    }
    addTaskSubmitHandler (e){
        e.preventdefault();
        alert("hjkjkh");
    }
    render(){
        return (
            <Layout header="Todo">
                <Addtask value={this.state.newTask} submitHandler={this.addTaskSubmitHandler}/>
                <Tasklisting tasks={this.state.tasks} />
            </Layout>
        );
    }
}

export default Todo;