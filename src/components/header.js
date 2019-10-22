import React from 'react'

const Header = () => {
    const headerStyle = {
        width: "500px",
        height: "100px",
        textAlign: "center",
        fontSize: "2pc",
        color: "grey",
        marginTop: "8px"
    }

    return(
        <div style={headerStyle}>
            Employee Training Management
        </div>
    )

}

export default Header