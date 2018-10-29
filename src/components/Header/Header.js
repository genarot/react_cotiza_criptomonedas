import React from 'react'

const Header =  function(props){
    return (
        <header>
            <h1 className="text-center">{props.titulo}</h1>
        </header>
    )
}

export default Header;
