import React from 'react';

const Layout = (props) =>{
    
    

    return(        
        <div className="row">
            <div className="col-12">
                <form onSubmit={ (e)=>{props.submitHandler(e)}} name="add-task" className="form-inline">                                                      
                    <input type="text" 
                           name="addtask" 
                           className="form-control mr-sm-2" 
                           onChange={props.updateHandler}
                           value={props.value}
                           />                         
                        <button className="btn btn-outline-primary my-2 my-sm-0 col-3" type="submit">Add</button>                                            
                </form>
           </div>
        </div>
        
    );
}

export default Layout;