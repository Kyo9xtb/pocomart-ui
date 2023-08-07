import React from "react";

function DefaultLayout({children}) {
    return ( 
        <React.Fragment>
            <h1>DefaultLayout</h1>
            <h2>sss</h2>
            {children}
        </React.Fragment>
     );
}

export default DefaultLayout;