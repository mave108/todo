import React from 'react';

const Layout = (props) =>{

    return(
        <div className="container">
        <div className="row">
        <div class="col-3"></div>
        <div class="col-5">
        <div className="jumbotron">
            <h1 className="display-4">{props.header}</h1>            
            <hr className="my-4" />
            <p>{props.children}</p>
            
        </div>
        </div>
        </div>
        </div>
    );
}

export default Layout;