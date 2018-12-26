import React from 'react';
const withLocalstorage = (WrappedComponent, initialData) => {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);        
        this.state = {
          tasks: this.loadAllData(),          
        };        
      }
      addNewtask = (newtask) =>{
          let allTasks = [{...newtask,id:this.guid()},...this.state.tasks];
          localStorage.setItem('todo_items',JSON.stringify(allTasks));
          //update task state
          this.setState({tasks: allTasks});
      }
      findTaskById = (id) =>{
         return this.state.tasks.filter( task => task.id === id)[0]; 
      }
      deleteTask = (id) =>{
         const afterDeletion = this.state.tasks.filter( task => task.id !== id); 
         localStorage.setItem('todo_items',JSON.stringify(afterDeletion)); 
         this.setState({tasks: afterDeletion});
      }
      upadteTask = (tasktoUpdate) =>{          
          const rawTasks = [...this.state.tasks];
          Object.assign(rawTasks,tasktoUpdate); 
          console.log("update tasks",rawTasks);
          localStorage.setItem('todo_items',JSON.stringify(rawTasks));
          this.setState({tasks: rawTasks});

      }
      loadAllData (){
          return JSON.parse(localStorage.getItem('todo_items')) || [];
      }

        guid = () => {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4();
      }
        
      render() {                
        return <WrappedComponent 
                  tasks={this.state.tasks}
                  addNewtask={this.addNewtask}
                  deleteTask={this.deleteTask}
                  upadteTask={this.upadteTask}
                  findTaskById={this.findTaskById}
                  {...this.props} />;
      }
    };
  }

  export default withLocalstorage;