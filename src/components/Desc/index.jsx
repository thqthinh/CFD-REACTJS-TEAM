import React from 'react'
import classnames from "classnames";

function Desc({ children , fontSize, color }) {
    return (
        <p className={classnames("desc" , fontSize , color)}>
            {children}
        </p>
    )
}

export default Desc
