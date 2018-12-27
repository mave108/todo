import React from 'react';

const Layout = (props) =>{
        
    return(        
        <div className="container">
        <div className="row">            
                <form style={{padding: "0 15px"}} onSubmit={ (e)=>{props.submitHandler(e)}} name="add-task" className="form-inline">                                                      
                    <input type="text" 
                           name="addtask" 
                           className="form-control col-xl-9" 
                           onChange={props.updateHandler}
                           value={props.value}
                           />                         
                        <button className="btn btn-outline-primary col-xl-3"  type="submit">Add</button>                                            
                </form>           
        </div>
        </div>
        
    );
}

export default Layout;