import React from 'react';

const Layout = (props) =>{

    return(        
        <div className="row">
            <div className="col-12">
                <form onSubmit={props.submitHandler}>
                <div className="input-group">                    
                    <div className="input-group-append">
                    <input type="text" name="addtask" className="form-control col-11" />  
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </div>
                </form>
           </div>
        </div>
        
    );
}

export default Layout;