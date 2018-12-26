import React from 'react';

const Layout = (props) =>{
        
    return(        
        <div className="row">
            <div className="col-12">
                <form style={{padding: "0 10px"}} onSubmit={ (e)=>{props.submitHandler(e)}} name="add-task" className="form-inline">                                                      
                    <input type="text" 
                           name="addtask" 
                           className="form-control col-8" 
                           onChange={props.updateHandler}
                           value={props.value}
                           />                         
                        <button className="btn btn-outline-primary col-3" style={{marginLeft:"30px"}} type="submit">Add</button>                                            
                </form>
           </div>
        </div>
        
    );
}

export default Layout;