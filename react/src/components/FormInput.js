import React from 'react'; 

export default function FormInput(props) {
    let fail = props.fail; 

    return(
            <input type={props.type}
            className={`input ${fail ? "input--fail" : null} `}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            onKeyDown={props.handleKeyDown}
            />
    )
}