import React, { Component } from 'react';

export default function InputGroup(props){
    return (
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">{props.text}</span>
        </div>
        <input type={props.type} min={props.min} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>    
    )
}