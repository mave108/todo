import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Tasklisting from '../../Components/Task/Listing/Tasklisting';
import Addtask from '../../Components/Task/Add/Addtask';
import withLocalstorage from '../../Components/HOC/Localstorage/Localstorage';

class Todo extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {           
           newTask: ''
        }
        this.addTaskSubmitHandler = this.addTaskSubmitHandler.bind(this);
        this.newTaskChangeHandler = this.newTaskChangeHandler.bind(this);   
        this.deleteTaskHandler    = this.deleteTaskHandler.bind(this);     
        this.taskStatusUpdateHandler = this.taskStatusUpdateHandler.bind(this);
    }

    componentDidMount(){
        console.log("[did mount]",this.props);        
    }
    
    newTaskChangeHandler(e){
        this.setState({newTask: e.target.value});
    }
    deleteTaskHandler(id){
        this.props.deleteTask(id);
    }
    taskStatusUpdateHandler(id){
        let updatedTask = this.props.findTaskById(id);
        updatedTask.done = true;
        console.log("update handler",updatedTask);
        this.props.upadteTask(updatedTask);
    }

    addTaskSubmitHandler (e){        
        e.preventDefault();
        if(this.state.newTask.length < 3){
            return ;
        }                         
        this.props.addNewtask({title: this.state.newTask,done: false});

        
    }
    render(){
        return (
            <Layout header="Todo">
                <Addtask value={this.props.newTask} 
                         submitHandler={this.addTaskSubmitHandler}
                         updateHandler={this.newTaskChangeHandler}
                        />
                <br/>
                <Tasklisting tasks={this.props.tasks} 
                             deleteHandler={this.deleteTaskHandler}
                             doneHandler = {this.taskStatusUpdateHandler} />
            </Layout>
        );
    }
}

export default withLocalstorage(Todo);