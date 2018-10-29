import React from 'react'

const OptionSelect = function(props) {
    // console.log(props.moneda);
    
    return (
        <option value={props.moneda.id}>{props.moneda.name}</option>
    )
}

export default OptionSelect;