import React from 'react';

const Layout = (props) =>{

    return(
        <div className="container">
        <div className="row">
        <div className="col-3"></div>
        <div className="col-5">
        <div className="jumbotron" style={{padding:"10px 0 0 0"}}>
            <h1 className="display-4" style={{textAlign: "center"}}>{props.header}</h1>            
            <hr className="my-4" />
            <div>{props.children}</div>
            
        </div>
        </div>
        </div>
        </div>
    );
}

export default Layout;