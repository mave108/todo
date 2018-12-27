import React from 'react';

const Layout = (props) =>{

    return(
        <div className="container" style={{marginTop:"20px"}}>
        <div className="row justify-content-center">        
        <div className="col-xl-5 col-sm">
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