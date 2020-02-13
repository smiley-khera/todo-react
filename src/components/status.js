import React from "react";
import '../assets/stylesheets/todos.css'

const Status = ({children}) => {
    return(
        <div className="statusLabel">{children}</div>
    )
};

export default Status